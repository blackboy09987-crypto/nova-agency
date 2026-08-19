import { TextField, TextAreaField, SelectField } from "./fields";
import SubmitButton from "./SubmitButton";
import type { Service } from "@/lib/store";

const iconOptions = [
  { value: "layout", label: "Layout (UI/UX)" },
  { value: "palette", label: "Palette (Design)" },
  { value: "pen", label: "Pen (Writing)" },
  { value: "code", label: "Code (Development)" },
  { value: "device", label: "Device (Mobile)" },
  { value: "play", label: "Play (Video)" },
  { value: "search", label: "Search (SEO)" },
  { value: "share", label: "Share (Social)" },
];

export default function ServiceForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => void;
  defaultValues?: Partial<Service>;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      <TextField
        label="Number"
        name="number"
        defaultValue={defaultValues?.number}
        placeholder="01"
        hint="Shown as the small index badge on the card (e.g. 01, 02...)."
      />
      <TextField label="Title" name="title" defaultValue={defaultValues?.title} />
      <TextAreaField
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
        rows={3}
      />
      <SelectField label="Icon" name="icon" defaultValue={defaultValues?.icon ?? "layout"}>
        {iconOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </SelectField>

      <div className="mt-2 flex gap-3">
        <SubmitButton />
      </div>
    </form>
  );
}
