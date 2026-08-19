"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/dal";
import { createFaq, updateFaq, deleteFaq } from "@/lib/store";

function readFields(formData: FormData) {
  return {
    question: (formData.get("question") as string)?.trim(),
    answer: (formData.get("answer") as string)?.trim(),
  };
}

export async function createFaqAction(formData: FormData) {
  await requireAdminSession();
  await createFaq(readFields(formData));
  revalidatePath("/", "layout");
  redirect("/admin/faqs");
}

export async function updateFaqAction(id: string, formData: FormData) {
  await requireAdminSession();
  await updateFaq(id, readFields(formData));
  revalidatePath("/", "layout");
  redirect("/admin/faqs");
}

export async function deleteFaqAction(id: string) {
  await requireAdminSession();
  await deleteFaq(id);
  revalidatePath("/", "layout");
}
