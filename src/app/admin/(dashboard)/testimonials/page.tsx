import Link from "next/link";
import { getTestimonials } from "@/lib/store";
import { PencilIcon } from "@/components/icons";
import AdminListHeader from "@/components/admin/AdminListHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteTestimonialAction } from "./actions";

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div>
      <AdminListHeader
        title="Testimonials"
        description="Real client feedback shown on the homepage. Only add genuine testimonials."
        newHref="/admin/testimonials/new"
        newLabel="Add testimonial"
      />

      <div className="flex flex-col gap-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex items-start gap-4 rounded-2xl border border-navy-2/10 bg-white p-5"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm italic text-navy-2">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-2 text-xs font-semibold text-muted">— {t.attribution}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href={`/admin/testimonials/${t.id}/edit`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-2/12 text-navy-2/70 transition-colors hover:border-blue/30 hover:text-blue"
                aria-label="Edit testimonial"
              >
                <PencilIcon className="h-4 w-4" />
              </Link>
              <DeleteButton
                action={deleteTestimonialAction.bind(null, t.id)}
                confirmLabel="this testimonial"
              />
            </div>
          </div>
        ))}
        {testimonials.length === 0 && (
          <p className="text-sm text-muted">
            No testimonials yet — the site will show &ldquo;coming soon&rdquo; until you add one.
          </p>
        )}
      </div>
    </div>
  );
}
