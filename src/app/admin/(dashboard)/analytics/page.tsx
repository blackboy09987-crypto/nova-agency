import { getAnalyticsSummary } from "@/lib/analytics";
import { EyeIcon, BarChartIcon, GridIcon } from "@/components/icons";

function formatDayLabel(day: string): string {
  const d = new Date(`${day}T00:00:00`);
  return d.toLocaleDateString("en-US", { weekday: "short" });
}

export default async function AdminAnalyticsPage() {
  const { totalViews, todayViews, weekViews, topPages, dailyTrend } =
    await getAnalyticsSummary();

  const maxTrend = Math.max(1, ...dailyTrend.map((d) => d.views));
  const noDataYet = totalViews === 0;

  const cards = [
    { label: "Total Views", value: totalViews, icon: EyeIcon },
    { label: "Views Today", value: todayViews, icon: BarChartIcon },
    { label: "Last 7 Days", value: weekViews, icon: GridIcon },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-navy-2">Analytics</h1>
        <p className="mt-1 text-sm text-muted">
          Real visits to your site, tracked automatically — no fake numbers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-navy-2/10 bg-white p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-light text-blue">
              <card.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 font-display text-3xl font-bold text-navy-2">
              {card.value.toLocaleString()}
            </p>
            <p className="mt-1 text-sm font-semibold text-muted">{card.label}</p>
          </div>
        ))}
      </div>

      {noDataYet ? (
        <div className="mt-8 rounded-2xl border border-dashed border-navy-2/15 bg-white p-10 text-center">
          <p className="font-display text-base font-bold text-navy-2">
            No visits recorded yet
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            Numbers will start appearing here as soon as people visit your live
            site — refresh after your first few visitors.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-2/10 bg-white p-6">
            <h2 className="mb-6 font-display text-base font-bold text-navy-2">
              Last 7 days
            </h2>
            <div className="flex h-40 items-end gap-3">
              {dailyTrend.map((d) => (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-xs font-semibold text-navy-2">{d.views}</span>
                  <div
                    className="w-full rounded-md bg-blue-light"
                    style={{
                      height: `${Math.max(6, (d.views / maxTrend) * 100)}px`,
                      backgroundColor: d.views > 0 ? "var(--color-blue)" : undefined,
                    }}
                  />
                  <span className="text-[11px] font-semibold text-muted">
                    {formatDayLabel(d.day)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy-2/10 bg-white p-6">
            <h2 className="mb-5 font-display text-base font-bold text-navy-2">
              Top Pages
            </h2>
            {topPages.length === 0 ? (
              <p className="text-sm text-muted">No page views yet.</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {topPages.map((p) => (
                  <li key={p.path} className="flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-medium text-navy-2">
                      {p.path === "/" ? "Home" : p.path}
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-muted">
                      {p.views.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
