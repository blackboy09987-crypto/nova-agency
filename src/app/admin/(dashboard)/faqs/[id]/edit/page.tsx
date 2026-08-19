import { notFound } from "next/navigation";
import AdminFormPage from "@/components/admin/AdminFormPage";
import FaqForm from "@/components/admin/FaqForm";
import { getFaqById } from "@/lib/store";
import { updateFaqAction } from "../../actions";

export default async function EditFaqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const faq = await getFaqById(id);
  if (!faq) notFound();

  return (
    <AdminFormPage title="Edit FAQ" backHref="/admin/faqs" backLabel="Back to FAQs">
      <FaqForm action={updateFaqAction.bind(null, id)} defaultValues={faq} />
    </AdminFormPage>
  );
}
