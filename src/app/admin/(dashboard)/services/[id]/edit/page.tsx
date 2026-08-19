import { notFound } from "next/navigation";
import AdminFormPage from "@/components/admin/AdminFormPage";
import ServiceForm from "@/components/admin/ServiceForm";
import { getServiceById } from "@/lib/store";
import { updateServiceAction } from "../../actions";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getServiceById(id);
  if (!service) notFound();

  return (
    <AdminFormPage title="Edit Service" backHref="/admin/services" backLabel="Back to services">
      <ServiceForm action={updateServiceAction.bind(null, id)} defaultValues={service} />
    </AdminFormPage>
  );
}
