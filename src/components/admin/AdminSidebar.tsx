"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { logoutAction } from "@/app/admin/actions";
import {
  GridIcon,
  LayoutIcon,
  ExternalLinkIcon,
  LogOutIcon,
  MessageSquareIcon,
  ChevronDownIcon,
} from "@/components/icons";

const links = [
  { href: "/admin", label: "Dashboard", icon: GridIcon, exact: true },
  { href: "/admin/services", label: "Services", icon: LayoutIcon },
  { href: "/admin/portfolio", label: "Portfolio", icon: ExternalLinkIcon },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareIcon },
  { href: "/admin/faqs", label: "FAQs", icon: ChevronDownIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-white/10 bg-navy-deep px-4 py-5 lg:h-screen lg:w-64 lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      <Link href="/admin" className="mb-8 hidden lg:block">
        <Logo variant="light" />
      </Link>

      <nav className="flex flex-1 flex-row gap-1.5 overflow-x-auto lg:flex-col lg:overflow-visible">
        {links.map((link) => {
          const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                active ? "bg-blue text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 hidden flex-col gap-1.5 border-t border-white/10 pt-5 lg:flex">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white/60 transition-colors hover:bg-white/5 hover:text-white"
        >
          <ExternalLinkIcon className="h-5 w-5" />
          View site
        </a>
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <LogOutIcon className="h-5 w-5" />
            Log out
          </button>
        </form>
      </div>
    </aside>
  );
}
