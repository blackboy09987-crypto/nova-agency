"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label = "Save" }: { label?: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(20,115,255,0.6)] transition-all hover:bg-[#0f5fdb] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Saving…" : label}
    </button>
  );
}
