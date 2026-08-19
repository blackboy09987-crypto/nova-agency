import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import {
  hasDatabase,
  recordPageViewRow,
  readPageViewRows,
  type PageViewRow,
} from "./db";

const DATA_DIR = path.join(process.cwd(), "data");
const ANALYTICS_FILE = path.join(DATA_DIR, "analytics.json");

function today(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

async function readLocalRows(): Promise<PageViewRow[]> {
  try {
    const raw = await readFile(ANALYTICS_FILE, "utf-8");
    return JSON.parse(raw) as PageViewRow[];
  } catch {
    return [];
  }
}

async function writeLocalRows(rows: PageViewRow[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(ANALYTICS_FILE, JSON.stringify(rows, null, 2), "utf-8");
}

/** Fire-and-forget-safe: records one view for `path` on today's date. */
export async function recordPageView(rawPath: string): Promise<void> {
  // Keep the tracked value bounded and same-origin-shaped — visitors control
  // this input, so never let it grow unbounded or store anything odd.
  const cleanPath = rawPath.slice(0, 200) || "/";
  const day = today();

  if (hasDatabase()) {
    await recordPageViewRow(cleanPath, day);
    return;
  }

  const rows = await readLocalRows();
  const existing = rows.find((r) => r.path === cleanPath && r.day === day);
  if (existing) {
    existing.count += 1;
  } else {
    rows.push({ path: cleanPath, day, count: 1 });
  }
  await writeLocalRows(rows);
}

export type AnalyticsSummary = {
  totalViews: number;
  todayViews: number;
  weekViews: number;
  topPages: { path: string; views: number }[];
  dailyTrend: { day: string; views: number }[];
};

function summarize(rows: PageViewRow[]): AnalyticsSummary {
  const todayStr = today();
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.toISOString().slice(0, 10);
  });
  const last7Set = new Set(last7);

  const totalViews = rows.reduce((sum, r) => sum + r.count, 0);
  const todayViews = rows
    .filter((r) => r.day === todayStr)
    .reduce((sum, r) => sum + r.count, 0);
  const weekViews = rows
    .filter((r) => last7Set.has(r.day))
    .reduce((sum, r) => sum + r.count, 0);

  const byPath = new Map<string, number>();
  for (const r of rows) {
    byPath.set(r.path, (byPath.get(r.path) ?? 0) + r.count);
  }
  const topPages = Array.from(byPath.entries())
    .map(([path, views]) => ({ path, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 8);

  const byDay = new Map<string, number>();
  for (const r of rows) {
    if (!last7Set.has(r.day)) continue;
    byDay.set(r.day, (byDay.get(r.day) ?? 0) + r.count);
  }
  const dailyTrend = last7
    .slice()
    .reverse()
    .map((day) => ({ day, views: byDay.get(day) ?? 0 }));

  return { totalViews, todayViews, weekViews, topPages, dailyTrend };
}

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  const rows = hasDatabase() ? await readPageViewRows() : await readLocalRows();
  return summarize(rows);
}
