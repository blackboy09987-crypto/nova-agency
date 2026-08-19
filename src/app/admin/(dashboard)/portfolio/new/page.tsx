import AdminFormPage from "@/components/admin/AdminFormPage";
import PortfolioForm from "@/components/admin/PortfolioForm";
import { createPortfolioItemAction } from "../actions";

export default function NewPortfolioItemPage() {
  return (
    <AdminFormPage title="Add Portfolio Project" backHref="/admin/portfolio" backLabel="Back to portfolio">
      <PortfolioForm action={createPortfolioItemAction} />
    </AdminFormPage>
  );
}
