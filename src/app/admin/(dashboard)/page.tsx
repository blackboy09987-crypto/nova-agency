import Link from "next/link";
import {
  getServices,
  getPortfolioItems,
  getTestimonials,
  getFaqs,
} from "@/lib/store";
import { getAnalyticsSummary } from "@/lib/analytics";
import {
  LayoutIcon,
  ExternalLinkIcon,
  MessageSquareIcon,
  ChevronDownIcon,
  EyeIcon,
} from "@/components/icons";

export default async function AdminDashboardPage() {
  const [services, portfolioItems, testimonials, faqs, analytics] =
    await Promise.all([
      getServices(),
      getPortfolioItems(),
      getTestimonials(),
      getFaqs(),
      getAnalyticsSummary(),
    ]);

  const cards = [
    {
      href: "/admin/analytics",
      label: "Total Views",
      count: analytics.totalViews,
      icon: EyeIcon,
    },
    {
      href: "/admin/services",
      label: "Services",
      count: services.length,
      icon: LayoutIcon,
    },
    {
      href: "/admin/portfolio",
      label: "Portfolio Items",
      count: portfolioItems.length,
      icon: ExternalLinkIcon,
    },
    {
      href: "/admin/testimonials",
      label: "Testimonials",
      count: testimonials.length,
      icon: MessageSquareIcon,
    },
    {
      href: "/admin/faqs",
      label: "FAQs",
      count: faqs.length,
      icon: ChevronDownIcon,
    },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-2">Dashboard</h1>
      <p className="mt-1 text-sm text-muted">
        Manage the content shown across the Nova Agency website.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-2xl border border-navy-2/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-[0_16px_32px_-16px_rgba(20,115,255,0.25)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-light text-blue transition-colors group-hover:bg-blue group-hover:text-white">
              <card.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 font-display text-3xl font-bold text-navy-2">{card.count}</p>
            <p className="mt-1 text-sm font-semibold text-muted">{card.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-navy-2/10 bg-white p-6">
        <h2 className="font-display text-base font-bold text-navy-2">Quick tips</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
          <li>Changes save immediately and go live on the public site right away.</li>
          <li>Deleting an item can&apos;t be undone.</li>
          <li>Use the &ldquo;View site&rdquo; link in the sidebar to check your edits.</li>
        </ul>
      </div>
    </div>
  );
}
