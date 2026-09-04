"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioFilters, type PortfolioCategory } from "@/lib/data";
import type { PortfolioItem } from "@/lib/store";
import { ArrowRightIcon } from "./icons";

type PortfolioGridProps = {
  items: PortfolioItem[];
  showFilters?: boolean;
  limit?: number;
};

const categoryGradients: Record<PortfolioCategory, string> = {
  Websites:     "from-[#0d1f3c] via-[#1a3a6b] to-[#1473ff]",
  "UI/UX":      "from-[#1a0533] via-[#3b0f6e] to-[#7c3aed]",
  Branding:     "from-[#1a0a00] via-[#7c2d00] to-[#f97316]",
  "Social Media":"from-[#002a1a] via-[#006044] to-[#10b981]",
  Video:        "from-[#1a0000] via-[#6b0000] to-[#ef4444]",
  "Mobile Apps":"from-[#00101a] via-[#004a6b] to-[#0ea5e9]",
};

function screenshotUrl(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

export default function PortfolioGrid({ items: allItems, showFilters = false, limit }: PortfolioGridProps) {
  const [active, setActive] = useState<"All" | PortfolioCategory>("All");

  const filtered = allItems.filter(
    (item) => active === "All" || item.category === active
  );
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {showFilters && (
        <div className="reveal mb-10 flex flex-wrap justify-center gap-2.5">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === filter
                  ? "border-blue bg-blue text-white"
                  : "border-navy-2/12 text-navy-2/70 hover:border-blue/40 hover:text-navy-2"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="reveal group flex flex-col overflow-hidden rounded-2xl border border-navy-2/8 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_24px_48px_-20px_rgba(20,115,255,0.22)]"
          >
            <div className="relative h-44 overflow-hidden">
              {item.image || item.url ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image ?? screenshotUrl(item.url!)}
                    alt={item.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </>
              ) : (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[item.category] ?? "from-navy via-navy-deep to-blue"}`} />
                  <div aria-hidden="true" className="hero-grid-bg absolute inset-0 opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold tracking-tight text-white/80">
                      {item.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                </>
              )}
              <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                {item.url ? "Live Project" : "Concept Project"}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue">
                {item.category}
              </span>
              <h3 className="font-display text-lg font-bold text-navy-2">{item.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
                >
                  View Project
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
                >
                  View Project
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
