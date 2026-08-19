import SectionHeading from "./SectionHeading";
import { getTestimonials } from "@/lib/store";

export default async function TestimonialsPlaceholder() {
  const testimonials = await getTestimonials();

  return (
    <section className="py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading eyebrow="Testimonials" title="What clients say about working with us." />

        {testimonials.length === 0 ? (
          <p className="reveal mx-auto mt-10 max-w-md text-center text-sm text-muted">
            Client stories will be added here as new projects launch.
          </p>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="reveal flex flex-col gap-4 rounded-2xl border border-navy-2/8 bg-surface p-7"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-blue/50"
                  aria-hidden="true"
                >
                  <path d="M7.17 6C4.87 6 3 7.87 3 10.17c0 2.02 1.44 3.7 3.35 4.09-.1.9-.5 1.66-1.35 2.34a.5.5 0 0 0 .35.87c2.8-.3 5.15-2.31 5.15-5.8V10.5A4.5 4.5 0 0 0 7.17 6Zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 2.02 1.44 3.7 3.35 4.09-.1.9-.5 1.66-1.35 2.34a.5.5 0 0 0 .35.87c2.8-.3 5.15-2.31 5.15-5.8V10.5A4.5 4.5 0 0 0 17.17 6Z" />
                </svg>
                <p className="flex-1 text-[15px] leading-relaxed text-navy-2">{t.quote}</p>
                <p className="text-sm font-semibold text-muted">— {t.attribution}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
