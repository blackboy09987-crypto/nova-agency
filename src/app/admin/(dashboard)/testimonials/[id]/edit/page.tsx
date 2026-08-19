import { notFound } from "next/navigation";
import AdminFormPage from "@/components/admin/AdminFormPage";
import TestimonialForm from "@/components/admin/TestimonialForm";
import { getTestimonialById } from "@/lib/store";
import { updateTestimonialAction } from "../../actions";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await getTestimonialById(id);
  if (!testimonial) notFound();

  return (
    <AdminFormPage title="Edit Testimonial" backHref="/admin/testimonials" backLabel="Back to testimonials">
      <TestimonialForm action={updateTestimonialAction.bind(null, id)} defaultValues={testimonial} />
    </AdminFormPage>
  );
}
