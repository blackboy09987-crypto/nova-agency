import { TextField, TextAreaField, SelectField } from "./fields";
import SubmitButton from "./SubmitButton";
import type { PortfolioItem } from "@/lib/store";
import { portfolioFilters } from "@/lib/data";

const categories = portfolioFilters.filter((f) => f !== "All");

export default function PortfolioForm({
  action,
  defaultValues,
}: {
  action: (formData: FormData) => void;
  defaultValues?: Partial<PortfolioItem>;
}) {
  return (
    <form action={action} className="flex flex-col gap-5">
      <TextField label="Project Name" name="name" defaultValue={defaultValues?.name} />
      <SelectField label="Category" name="category" defaultValue={defaultValues?.category ?? categories[0]}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </SelectField>
      <TextAreaField
        label="Description"
        name="description"
        defaultValue={defaultValues?.description}
        rows={3}
        hint={`Keep this honest — e.g. "A concept ..." if it isn't real client work.`}
      />
      <TextField
        label="Live URL (optional)"
        name="url"
        required={false}
        defaultValue={defaultValues?.url}
        hint='Paste the live website link — e.g. https://client.vercel.app/ — card will link directly to it.'
      />
      <TextField
        label="Thumbnail Image URL (optional)"
        name="image"
        required={false}
        defaultValue={defaultValues?.image}
        hint='Upload your screenshot to imgbb.com (free) and paste the direct image link here. This overrides the auto-generated screenshot.'
      />

      <div className="mt-2 flex gap-3">
        <SubmitButton />
      </div>
    </form>
  );
}
