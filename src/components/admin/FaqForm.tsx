import { TextField, TextAreaField } from "./fields";
import SubmitButton from "./SubmitButton";
import type { FAQItem } from "@/lib/store";

export default function FaqForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => void;
  defaultValues?: Partial<FAQItem>;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      <TextField label="Question" name="question" defaultValue={defaultValues?.question} />
      <TextAreaField label="Answer" name="answer" defaultValue={defaultValues?.answer} rows={4} />

      <div className="mt-2 flex gap-3">
        <SubmitButton />
      </div>
    </form>
  );
}
