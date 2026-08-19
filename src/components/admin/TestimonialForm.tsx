import { TextField, TextAreaField } from "./fields";
import SubmitButton from "./SubmitButton";
import type { Testimonial } from "@/lib/store";

export default function TestimonialForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => void;
  defaultValues?: Partial<Testimonial>;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      <TextAreaField
        label="Quote"
        name="quote"
        defaultValue={defaultValues?.quote}
        rows={4}
        hint="Only add real feedback from a real person — don't write these as if they're from a client unless they actually are."
      />
      <TextField
        label="Attribution"
        name="attribution"
        defaultValue={defaultValues?.attribution}
        placeholder="Full Name, Business Name"
      />

      <div className="mt-2 flex gap-3">
        <SubmitButton />
      </div>
    </form>
  );
}
