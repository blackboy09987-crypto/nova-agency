"use client";

import { useTransition } from "react";
import { TrashIcon } from "@/components/icons";

export default function DeleteButton({
  action,
  confirmLabel = "this item",
}: {
  action: () => Promise<void>;
  confirmLabel?: string;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (window.confirm(`Delete ${confirmLabel}? This can't be undone.`)) {
          startTransition(() => {
            action();
          });
        }
      }}
      aria-label={`Delete ${confirmLabel}`}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-2/12 text-muted transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <TrashIcon className="h-4 w-4" />
    </button>
  );
}
