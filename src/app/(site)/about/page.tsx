import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Nova Agency | Digital Agency in Pakistan",
  description:
    "Nova Agency is a modern digital agency based in Pakistan, combining design, technology, content and strategy to help businesses worldwide build a stronger digital presence.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Nova"
        title="Who Are We?"
        description="A modern digital agency built to help businesses navigate an increasingly digital world."
      />

      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-navy-2/80">
              Nova Agency is a modern digital agency built to help businesses
              navigate an increasingly digital world. We combine design,
              technology, content and strategy to create digital solutions
              that are not only visually impressive, but also purposeful and
              effective.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="reveal rounded-2xl border border-navy-2/8 bg-surface p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              >
                <span className="mb-3 block font-display text-sm font-bold text-blue">
                  0{i + 1}
                </span>
                <h3 className="mb-2 font-display text-lg font-bold text-navy-2">
                  {value.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-light/60 py-24 sm:py-32">
        <div className="container-nova grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-navy-2/8 bg-surface p-10">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-blue">
              Our Mission
            </span>
            <p className="font-display text-2xl font-bold leading-snug text-navy-2">
              To help businesses build a stronger digital presence through
              creative thinking, modern technology and meaningful digital
              experiences.
            </p>
          </div>
          <div className="reveal rounded-2xl border border-navy-2/8 bg-surface p-10">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-blue">
              Our Vision
            </span>
            <p className="font-display text-2xl font-bold leading-snug text-navy-2">
              To become a trusted digital partner for ambitious businesses
              around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <SectionHeading
            eyebrow="Our Approach"
            title="Creative thinking, backed by strategy."
            description="Every engagement starts with understanding your business — then we design, build and grow around it."
          />
          <div className="mt-14">
            <CTASection
              title="Want to know more about how we work?"
              ctaLabel="Get in touch"
            />
          </div>
        </div>
      </section>
    </>
  );
}
