import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTASection from "@/components/CTASection";
import { getPortfolioItems } from "@/lib/store";

export const metadata: Metadata = {
  title: "Portfolio | Nova Agency",
  description:
    "Concept work across websites, UI/UX, branding, social media, video and mobile apps — a glimpse into what Nova Agency can create.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Portfolio"
        description="A glimpse into what we can create."
      />

      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <PortfolioGrid items={portfolioItems} showFilters />
          <div className="mt-16">
            <CTASection title="Like what you see?" ctaLabel="Start your project" />
          </div>
        </div>
      </section>
    </>
  );
}
