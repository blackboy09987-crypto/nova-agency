import { notFound } from "next/navigation";
import AdminFormPage from "@/components/admin/AdminFormPage";
import PortfolioForm from "@/components/admin/PortfolioForm";
import { getPortfolioItemById } from "@/lib/store";
import { updatePortfolioItemAction } from "../../actions";

export default async function EditPortfolioItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getPortfolioItemById(id);
  if (!item) notFound();

  return (
    <AdminFormPage title="Edit Portfolio Project" backHref="/admin/portfolio" backLabel="Back to portfolio">
      <PortfolioForm action={updatePortfolioItemAction.bind(null, id)} defaultValues={item} />
    </AdminFormPage>
  );
}
