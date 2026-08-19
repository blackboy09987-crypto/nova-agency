"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/dal";
import {
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
} from "@/lib/store";
import type { PortfolioCategory } from "@/lib/data";

function readFields(formData: FormData) {
  return {
    name: (formData.get("name") as string)?.trim(),
    category: formData.get("category") as PortfolioCategory,
    description: (formData.get("description") as string)?.trim(),
  };
}

export async function createPortfolioItemAction(formData: FormData) {
  await requireAdminSession();
  await createPortfolioItem(readFields(formData));
  revalidatePath("/", "layout");
  redirect("/admin/portfolio");
}

export async function updatePortfolioItemAction(id: string, formData: FormData) {
  await requireAdminSession();
  await updatePortfolioItem(id, readFields(formData));
  revalidatePath("/", "layout");
  redirect("/admin/portfolio");
}

export async function deletePortfolioItemAction(id: string) {
  await requireAdminSession();
  await deletePortfolioItem(id);
  revalidatePath("/", "layout");
}
