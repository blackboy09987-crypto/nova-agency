import Link from "next/link";
import { PlusIcon } from "@/components/icons";

export default function AdminListHeader({
  title,
  description,
  newHref,
  newLabel,
}: {
  title: string;
  description: string;
  newHref: string;
  newLabel: string;
}) {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-2">{title}</h1>
        <p className="mt-1 text-sm text-muted">{description}</p>
      </div>
      <Link
        href={newHref}
        className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(20,115,255,0.6)] transition-all hover:bg-[#0f5fdb]"
      >
        <PlusIcon className="h-4 w-4" />
        {newLabel}
      </Link>
    </div>
  );
}
