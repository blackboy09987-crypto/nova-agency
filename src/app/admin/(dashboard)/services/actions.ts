"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/dal";
import { createService, updateService, deleteService } from "@/lib/store";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readFields(formData: FormData) {
  return {
    number: (formData.get("number") as string)?.trim() || "01",
    title: (formData.get("title") as string)?.trim(),
    description: (formData.get("description") as string)?.trim(),
    icon: (formData.get("icon") as string) || "layout",
  };
}

export async function createServiceAction(formData: FormData) {
  await requireAdminSession();
  const fields = readFields(formData);
  const slug = slugify(fields.title);

  await createService({ ...fields, slug });
  revalidatePath("/", "layout");
  redirect("/admin/services");
}

export async function updateServiceAction(id: string, formData: FormData) {
  await requireAdminSession();
  const fields = readFields(formData);
  const slug = slugify(fields.title);

  await updateService(id, { ...fields, slug });
  revalidatePath("/", "layout");
  redirect("/admin/services");
}

export async function deleteServiceAction(id: string) {
  await requireAdminSession();
  await deleteService(id);
  revalidatePath("/", "layout");
}
