"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Fires a lightweight, non-blocking pageview ping on every route change. */
export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).catch(() => {
      // Analytics failures should never be visible to the visitor.
    });
  }, [pathname]);

  return null;
}
