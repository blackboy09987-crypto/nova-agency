import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type Variant = "primary" | "outline" | "outline-dark" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white shadow-[0_8px_24px_-8px_rgba(20,115,255,0.6)] hover:bg-[#0f5fdb] hover:shadow-[0_12px_32px_-8px_rgba(20,115,255,0.7)]",
  outline:
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40",
  "outline-dark":
    "border border-navy-2/15 text-navy-2 hover:bg-blue-light hover:border-blue/40",
  ghost: "text-blue hover:text-[#0f5fdb]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97] ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
