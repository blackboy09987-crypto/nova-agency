import SectionHeading from "./SectionHeading";
import { values } from "@/lib/data";

export default function TrustSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          title="Your Vision. Our Expertise."
          description="Nova Agency is a full-service digital agency combining creativity, technology, and strategy to help businesses create a stronger digital presence."
        />

        <p className="reveal mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted">
          From your first idea to your final launch, we help turn concepts
          into digital experiences that make an impact.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="reveal rounded-2xl border border-navy-2/8 bg-surface p-8 shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_20px_40px_-16px_rgba(20,115,255,0.22)]"
            >
              <span className="mb-4 block font-display text-sm font-bold text-blue">
                0{i + 1}
              </span>
              <h3 className="mb-2 font-display text-xl font-bold text-navy-2">
                {value.title.toUpperCase()}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
