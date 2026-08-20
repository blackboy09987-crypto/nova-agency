import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Digital Agency Services in Pakistan | Nova Agency",
  description:
    "UI/UX design, graphic design, content writing, web development, mobile apps, video, SEO and social media management — all under one roof at Nova Agency, Pakistan.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything Your Brand Needs."
        description="From design and development to content and digital growth, Nova brings your essential digital services under one roof."
      />

      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <ServicesGrid withAnchors />
          <div className="mt-16">
            <CTASection
              title="Need a custom solution?"
              ctaLabel="Let's talk about your project"
            />
          </div>
        </div>
      </section>

      <div className="bg-blue-light/60">
        <ProcessSection />
      </div>
    </>
  );
}
