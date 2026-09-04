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
            <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-deep to-blue">
              <div
                aria-hidden="true"
                className="hero-grid-bg absolute inset-0 opacity-40"
              />
              <span className="relative font-display text-2xl font-bold tracking-tight text-white/90">
                {item.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <span className="absolute left-3 top-3 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
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
