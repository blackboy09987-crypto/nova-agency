import Link from "next/link";
import { ArrowRightIcon } from "./icons";

type CTASectionProps = {
  title: string;
  ctaLabel: string;
  ctaHref?: string;
};

export default function CTASection({
  title,
  ctaLabel,
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <div className="reveal flex flex-col items-center gap-4 text-center">
      <p className="text-lg font-medium text-navy-2/70">{title}</p>
      <Link
        href={ctaHref}
        className="group inline-flex items-center gap-2 text-lg font-bold text-blue transition-colors hover:text-cyan"
      >
        {ctaLabel}
        <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
