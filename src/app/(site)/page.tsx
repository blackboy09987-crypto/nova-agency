import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsPlaceholder from "@/components/TestimonialsPlaceholder";
import Button from "@/components/Button";
import { getPortfolioItems } from "@/lib/store";

export const metadata: Metadata = {
  title: "Nova Agency | Digital Design, Web Development & Digital Solutions",
  description:
    "Nova Agency helps businesses build and grow their digital presence through UI/UX, graphic design, web development, mobile apps, content, video, SEO and social media.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <Hero />

      <TrustSection />

      <section className="bg-blue-light/60 py-24 sm:py-32" id="services">
        <div className="container-nova">
          <SectionHeading
            eyebrow="Services"
            title="Everything your brand needs."
            description="From design and development to content and digital growth, Nova brings your essential digital services under one roof."
          />
          <div className="mt-16">
            <ServicesGrid />
          </div>
          <div className="mt-16">
            <CTASection
              title="Need a custom solution?"
              ctaLabel="Let's talk about your project"
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <ProcessSection />

      <section className="bg-blue-light/60 py-24 sm:py-32">
        <div className="container-nova">
          <SectionHeading
            eyebrow="Selected Work"
            title="A glimpse into what we can create."
          />
          <div className="mt-16">
            <PortfolioGrid items={portfolioItems} limit={3} />
          </div>
          <div className="reveal mt-12 flex justify-center">
            <Button href="/portfolio" variant="outline-dark" arrow>
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsPlaceholder />

      <section className="pb-24 sm:pb-32">
        <div className="container-nova">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden="true"
              className="glow-orb pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue/30 blur-[100px]"
            />
            <h2 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something amazing.
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-white/60">
              Have an idea, project or business goal in mind? Tell us about it
              and let&apos;s explore how Nova can help.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button href="/contact" arrow>
                Start Your Project
              </Button>
              <Button href="/contact" variant="outline">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
