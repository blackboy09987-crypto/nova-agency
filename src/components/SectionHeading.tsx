type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const titleColor = tone === "light" ? "text-white" : "text-navy-2";
  const descColor = tone === "light" ? "text-white/65" : "text-muted";

  return (
    <div className={`reveal flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
