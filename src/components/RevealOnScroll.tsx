"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HIDDEN_TRANSFORM = "translateY(20px)";
const TRANSITION =
  "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Site-wide scroll-reveal engine. Drives the hide/show state entirely via
 * JS-set inline styles (with `important` priority) rather than a CSS class,
 * so it can't be silently outranked by whatever layer/order the build's
 * stylesheet ends up with — inline !important is the single highest-priority
 * cascade origin there is. Re-runs on route change since it lives in the
 * persistent root layout.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => {
        el.style.removeProperty("opacity");
        el.style.removeProperty("transform");
      });
      return;
    }

    // Group by nearest section-like ancestor (not immediate parent) so an
    // entire hero or section cascades in one sequential flow — heading,
    // then each line, then body copy, then buttons — instead of only
    // staggering within whatever div happens to wrap a given element.
    const groupRoot = (el: HTMLElement) =>
      el.closest("section, header, footer, form") ?? el.parentElement;

    const groups = new Map<Element | null, HTMLElement[]>();
    els.forEach((el) => {
      const root = groupRoot(el);
      const list = groups.get(root) ?? [];
      list.push(el);
      groups.set(root, list);
    });

    els.forEach((el) => {
      el.style.setProperty("opacity", "0", "important");
      el.style.setProperty("transform", HIDDEN_TRANSFORM, "important");
      el.style.setProperty("transition", TRANSITION, "important");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const root = groupRoot(target);
          const siblings = groups.get(root) ?? [target];
          const index = siblings.indexOf(target);
          const delay = Math.max(0, index) * 70;
          target.style.transitionDelay = `${Math.min(delay, 560)}ms`;
          target.style.setProperty("opacity", "1", "important");
          target.style.setProperty("transform", "translateY(0)", "important");
          io.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
