import { getServices } from "@/lib/store";
import { serviceIcons } from "./icons";

export default async function ServicesGrid({ withAnchors = false }: { withAnchors?: boolean }) {
  const services = await getServices();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const Icon = serviceIcons[service.icon];
        return (
          <div
            key={service.id}
            id={withAnchors ? service.slug : undefined}
            className="reveal group relative overflow-hidden rounded-2xl border border-navy-2/8 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_24px_48px_-20px_rgba(20,115,255,0.22)] scroll-mt-28"
          >
            <span className="pointer-events-none absolute -right-3 -top-3 font-display text-6xl font-bold text-navy-2/[0.04] transition-colors duration-300 group-hover:text-blue/[0.08]">
              {service.number}
            </span>
            <div className="relative flex flex-col gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-light text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <span className="mb-1 block text-xs font-bold tracking-widest text-blue">
                  {service.number}
                </span>
                <h3 className="font-display text-lg font-bold text-navy-2">{service.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
