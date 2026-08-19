import type { ReactNode } from "react";
import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { requireAdminSession } from "@/lib/dal";

export const metadata: Metadata = {
  title: "Admin | Nova Agency",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  await requireAdminSession();

  return (
    <div className="admin-scope flex min-h-screen flex-col bg-bg lg:flex-row">
      <AdminSidebar />
      <div className="flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">{children}</div>
    </div>
  );
}
