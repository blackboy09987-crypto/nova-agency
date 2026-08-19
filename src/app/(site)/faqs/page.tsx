import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { getFaqs } from "@/lib/store";

export const metadata: Metadata = {
  title: "FAQs | Nova Agency",
  description:
    "Answers to common questions about Nova Agency's services, pricing, timelines and how to start a project.",
  alternates: { canonical: "/faqs" },
};

export default async function FAQsPage() {
  const faqs = await getFaqs();

  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Everything you need to know before starting a project with Nova."
      />

      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <FAQAccordion faqs={faqs} />
          <div className="mt-16">
            <CTASection
              title="Still have questions?"
              ctaLabel="Talk to us directly"
            />
          </div>
        </div>
      </section>
    </>
  );
}
