import Link from "next/link";
import { getServices } from "@/lib/store";
import { serviceIcons } from "@/components/icons";
import { PencilIcon } from "@/components/icons";
import AdminListHeader from "@/components/admin/AdminListHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteServiceAction } from "./actions";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div>
      <AdminListHeader
        title="Services"
        description="The 8 service cards shown on the homepage and services page."
        newHref="/admin/services/new"
        newLabel="Add service"
      />

      <div className="flex flex-col gap-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon] ?? serviceIcons.layout;
          return (
            <div
              key={service.id}
              className="flex items-start gap-4 rounded-2xl border border-navy-2/10 bg-white p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-light text-blue">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue">{service.number}</span>
                  <h3 className="font-display text-base font-bold text-navy-2">{service.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted">{service.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href={`/admin/services/${service.id}/edit`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-2/12 text-navy-2/70 transition-colors hover:border-blue/30 hover:text-blue"
                  aria-label={`Edit ${service.title}`}
                >
                  <PencilIcon className="h-4 w-4" />
                </Link>
                <DeleteButton
                  action={deleteServiceAction.bind(null, service.id)}
                  confirmLabel={service.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
