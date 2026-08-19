import type { ReactNode } from "react";

const inputClass =
  "w-full rounded-xl border border-navy-2/12 bg-white px-4 py-3 text-[15px] text-navy-2 placeholder:text-muted/60 transition-colors focus:border-blue focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-semibold text-navy-2";

type FieldProps = {
  label: string;
  name: string;
  hint?: string;
};

export function TextField({
  label,
  name,
  hint,
  defaultValue,
  placeholder,
  required = true,
}: FieldProps & { defaultValue?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={inputClass}
      />
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  hint,
  defaultValue,
  placeholder,
  rows = 4,
  required = true,
}: FieldProps & {
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        className={`${inputClass} resize-none`}
      />
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}

export function SelectField({
  label,
  name,
  hint,
  defaultValue,
  children,
}: FieldProps & { defaultValue?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <select id={name} name={name} required defaultValue={defaultValue} className={inputClass}>
        {children}
      </select>
      {hint && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}
