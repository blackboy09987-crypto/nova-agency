import AdminFormPage from "@/components/admin/AdminFormPage";
import ServiceForm from "@/components/admin/ServiceForm";
import { createServiceAction } from "../actions";

export default function NewServicePage() {
  return (
    <AdminFormPage title="Add Service" backHref="/admin/services" backLabel="Back to services">
      <ServiceForm action={createServiceAction} />
    </AdminFormPage>
  );
}
