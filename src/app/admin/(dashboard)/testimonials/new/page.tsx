import AdminFormPage from "@/components/admin/AdminFormPage";
import TestimonialForm from "@/components/admin/TestimonialForm";
import { createTestimonialAction } from "../actions";

export default function NewTestimonialPage() {
  return (
    <AdminFormPage title="Add Testimonial" backHref="/admin/testimonials" backLabel="Back to testimonials">
      <TestimonialForm action={createTestimonialAction} />
    </AdminFormPage>
  );
}
