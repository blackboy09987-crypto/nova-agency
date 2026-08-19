import Link from "next/link";
import { getFaqs } from "@/lib/store";
import { PencilIcon } from "@/components/icons";
import AdminListHeader from "@/components/admin/AdminListHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteFaqAction } from "./actions";

export default async function AdminFaqsPage() {
  const faqs = await getFaqs();

  return (
    <div>
      <AdminListHeader
        title="FAQs"
        description="Questions and answers shown on the homepage and FAQs page."
        newHref="/admin/faqs/new"
        newLabel="Add FAQ"
      />

      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="flex items-start gap-4 rounded-2xl border border-navy-2/10 bg-white p-5"
          >
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base font-bold text-navy-2">{faq.question}</h3>
              <p className="mt-1.5 text-sm text-muted">{faq.answer}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href={`/admin/faqs/${faq.id}/edit`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-2/12 text-navy-2/70 transition-colors hover:border-blue/30 hover:text-blue"
                aria-label={`Edit ${faq.question}`}
              >
                <PencilIcon className="h-4 w-4" />
              </Link>
              <DeleteButton
                action={deleteFaqAction.bind(null, faq.id)}
                confirmLabel={faq.question}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
