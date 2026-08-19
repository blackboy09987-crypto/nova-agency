"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/dal";
import {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "@/lib/store";

function readFields(formData: FormData) {
  return {
    quote: (formData.get("quote") as string)?.trim(),
    attribution: (formData.get("attribution") as string)?.trim(),
  };
}

export async function createTestimonialAction(formData: FormData) {
  await requireAdminSession();
  await createTestimonial(readFields(formData));
  revalidatePath("/", "layout");
  redirect("/admin/testimonials");
}

export async function updateTestimonialAction(id: string, formData: FormData) {
  await requireAdminSession();
  await updateTestimonial(id, readFields(formData));
  revalidatePath("/", "layout");
  redirect("/admin/testimonials");
}

export async function deleteTestimonialAction(id: string) {
  await requireAdminSession();
  await deleteTestimonial(id);
  revalidatePath("/", "layout");
}
