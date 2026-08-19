type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-2";
  const subColor = variant === "light" ? "text-white/50" : "text-muted";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-blue">
        <span className="text-sm font-bold tracking-tighter text-white font-display">
          N
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-bold tracking-tight ${textColor}`}>
          NOVA
        </span>
        <span className={`text-[9px] font-semibold tracking-[0.22em] ${subColor}`}>
          AGENCY
        </span>
      </span>
    </span>
  );
}
