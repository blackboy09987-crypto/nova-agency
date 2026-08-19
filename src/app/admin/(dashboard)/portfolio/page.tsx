import Link from "next/link";
import { getPortfolioItems } from "@/lib/store";
import { PencilIcon } from "@/components/icons";
import AdminListHeader from "@/components/admin/AdminListHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { deletePortfolioItemAction } from "./actions";

export default async function AdminPortfolioPage() {
  const items = await getPortfolioItems();

  return (
    <div>
      <AdminListHeader
        title="Portfolio"
        description="Concept projects shown on the homepage preview and the full portfolio page."
        newHref="/admin/portfolio/new"
        newLabel="Add project"
      />

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 rounded-2xl border border-navy-2/10 bg-white p-5"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-light px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-blue">
                  {item.category}
                </span>
                <h3 className="font-display text-base font-bold text-navy-2">{item.name}</h3>
              </div>
              <p className="mt-1.5 text-sm text-muted">{item.description}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href={`/admin/portfolio/${item.id}/edit`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-2/12 text-navy-2/70 transition-colors hover:border-blue/30 hover:text-blue"
                aria-label={`Edit ${item.name}`}
              >
                <PencilIcon className="h-4 w-4" />
              </Link>
              <DeleteButton
                action={deletePortfolioItemAction.bind(null, item.id)}
                confirmLabel={item.name}
              />
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-muted">No portfolio items yet.</p>
        )}
      </div>
    </div>
  );
}
