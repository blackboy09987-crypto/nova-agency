import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

export default function AdminFormPage({
  title,
  backHref,
  backLabel,
  children,
}: {
  title: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-xl">
      <Link
        href={backHref}
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-navy-2"
      >
        <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" />
        {backLabel}
      </Link>
      <h1 className="mb-6 font-display text-2xl font-bold text-navy-2">{title}</h1>
      <div className="rounded-2xl border border-navy-2/10 bg-white p-6 sm:p-7">{children}</div>
    </div>
  );
}
