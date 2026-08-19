import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import LoginForm from "@/components/admin/LoginForm";
import { hasAdminSession } from "@/lib/dal";

export const metadata: Metadata = {
  title: "Admin Login | Nova Agency",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await hasAdminSession()) {
    redirect("/admin");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep px-4 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue/20 blur-[120px]"
      />
      <div aria-hidden="true" className="hero-grid-bg pointer-events-none absolute inset-0" />

      <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md sm:p-9">
        <div className="mb-8 flex justify-center">
          <Logo variant="light" />
        </div>
        <h1 className="mb-1 text-center font-display text-xl font-bold text-white">
          Admin Panel
        </h1>
        <p className="mb-7 text-center text-sm text-white/50">
          Enter the admin password to manage site content.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
