"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { MenuIcon, CloseIcon } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-navy-deep/85 backdrop-blur-xl">
      <div className="container-nova flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Nova Agency — home" className="shrink-0">
          <Logo variant="light" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-2 text-sm font-semibold transition-colors ${
                      active ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-blue transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(20,115,255,0.7)] transition-all hover:bg-[#0f5fdb] active:scale-[0.97]"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/8 bg-navy-deep transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-nova flex flex-col gap-1 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex min-h-[48px] items-center rounded-xl px-3 text-[15px] font-semibold ${
                pathname === link.href ? "bg-white/10 text-blue" : "text-white/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue px-6 text-sm font-semibold text-white"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
