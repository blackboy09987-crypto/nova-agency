import Button from "./Button";
import Logo from "./Logo";
import { CheckIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-28 pt-16 sm:pb-36 sm:pt-20">
      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="glow-orb pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-cyan/10 blur-[100px]"
      />
      {/* Grid overlay */}
      <div aria-hidden="true" className="hero-grid-bg pointer-events-none absolute inset-0" />

      <div className="container-nova relative">
        <div className="flex flex-col items-center text-center">
          <Logo variant="light" className="reveal mb-8 scale-110" />

          <span className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur">
            Design &middot; Development &middot; Growth
          </span>

          <h1 className="max-w-4xl font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="reveal block">Building Brands</span>
            <span className="reveal block bg-gradient-to-r from-blue via-cyan to-blue bg-clip-text text-transparent">
              For The Digital World.
            </span>
          </h1>

          <p className="reveal mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            We design, develop, and grow digital experiences that help
            businesses stand out, connect with their audience, and move
            forward.
          </p>

          <div className="reveal mt-10 flex flex-col gap-3.5 sm:flex-row">
            <Button href="/contact" arrow>
              Start Your Project
            </Button>
            <Button href="/services" variant="outline">
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Floating abstract UI cards */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="float-slow absolute left-[2%] top-[8%] w-52 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-md">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-4/5 rounded-full bg-white/15" />
              <div className="h-2 w-3/5 rounded-full bg-white/10" />
              <div className="mt-3 h-16 rounded-lg bg-gradient-to-br from-blue/30 to-cyan/20" />
            </div>
          </div>

          <div className="float-slower absolute right-[3%] top-[14%] w-40 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-end gap-1.5">
              <span className="h-8 w-3 rounded-sm bg-blue/40" />
              <span className="h-12 w-3 rounded-sm bg-blue/60" />
              <span className="h-6 w-3 rounded-sm bg-blue/30" />
              <span className="h-16 w-3 rounded-sm bg-cyan/60" />
              <span className="h-10 w-3 rounded-sm bg-blue/50" />
            </div>
            <div className="mt-3 h-2 w-2/3 rounded-full bg-white/15" />
          </div>

          <div className="float-slow absolute bottom-[6%] left-[8%] w-36 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 shadow-2xl backdrop-blur-md">
            <div className="mb-2 h-16 rounded-lg bg-gradient-to-br from-cyan/25 to-blue/25" />
            <div className="h-2 w-full rounded-full bg-white/15" />
            <div className="mt-1.5 h-2 w-2/3 rounded-full bg-white/10" />
          </div>

          <div className="float-slower absolute bottom-[10%] right-[6%] w-44 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue/30 text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div className="space-y-1.5">
                <div className="h-2 w-20 rounded-full bg-white/20" />
                <div className="h-2 w-14 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
