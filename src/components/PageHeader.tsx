type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div
        aria-hidden="true"
        className="glow-orb pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue/20 blur-[110px]"
      />
      <div aria-hidden="true" className="hero-grid-bg pointer-events-none absolute inset-0" />
      <div className="container-nova relative flex flex-col items-center gap-4 text-center">
        <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
          {eyebrow}
        </span>
        <h1 className="reveal max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="reveal max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
