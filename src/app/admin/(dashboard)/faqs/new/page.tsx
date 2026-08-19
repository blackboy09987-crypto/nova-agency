import AdminFormPage from "@/components/admin/AdminFormPage";
import FaqForm from "@/components/admin/FaqForm";
import { createFaqAction } from "../actions";

export default function NewFaqPage() {
  return (
    <AdminFormPage title="Add FAQ" backHref="/admin/faqs" backLabel="Back to FAQs">
      <FaqForm action={createFaqAction} />
    </AdminFormPage>
  );
}
