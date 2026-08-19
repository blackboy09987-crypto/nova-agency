import SectionHeading from "./SectionHeading";
import CTASection from "./CTASection";
import { whyChooseUs } from "@/lib/data";
import { CheckIcon } from "./icons";

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-light/60 py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow="Why Choose Nova?"
          title="We deliver more than services — we build solutions around your goals."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="reveal flex gap-4 rounded-2xl border border-navy-2/8 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_20px_40px_-18px_rgba(20,115,255,0.2)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="mb-1.5 font-display text-base font-bold text-navy-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <CTASection
            title="Ready to build something better?"
            ctaLabel="Start Your Project"
          />
        </div>
      </div>
    </section>
  );
}
