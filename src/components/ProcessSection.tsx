import SectionHeading from "./SectionHeading";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading eyebrow="How We Work" title="A clear path from idea to launch." />

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-navy-2/12 to-transparent lg:block"
          />
          {processSteps.map((step) => (
            <div key={step.number} className="reveal relative flex flex-col gap-4">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-navy-2/10 bg-surface font-display text-sm font-bold text-blue shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-bold text-navy-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
