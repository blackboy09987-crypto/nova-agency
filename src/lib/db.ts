import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Storage backend selection: if a Postgres connection string is present
 * (Vercel's native Neon integration sets DATABASE_URL), content lives in a
 * single JSONB row in Postgres — this is what makes admin edits survive on
 * Vercel's ephemeral filesystem. Locally, with no DATABASE_URL set, the app
 * falls back to the on-disk JSON file (see store.ts) so development needs
 * no database at all.
 */
export function getConnectionString(): string | undefined {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL;
}

export function hasDatabase(): boolean {
  return Boolean(getConnectionString());
}

let sql: NeonQueryFunction<false, false> | null = null;

function client(): NeonQueryFunction<false, false> {
  if (!sql) {
    const url = getConnectionString();
    if (!url) throw new Error("No database connection string configured.");
    sql = neon(url);
  }
  return sql;
}

let ensured = false;

/** Creates the single-row content table on first use. Safe to call repeatedly. */
export async function ensureContentTable() {
  if (ensured) return;
  const db = client();
  await db`
    CREATE TABLE IF NOT EXISTS site_content (
      id INTEGER PRIMARY KEY DEFAULT 1,
      data JSONB NOT NULL,
      CONSTRAINT single_row CHECK (id = 1)
    )
  `;
  ensured = true;
}

export async function readContentRow(): Promise<unknown | null> {
  await ensureContentTable();
  const db = client();
  const rows = await db`SELECT data FROM site_content WHERE id = 1`;
  if (rows.length === 0) return null;
  return (rows[0] as { data: unknown }).data;
}

export async function writeContentRow(data: unknown): Promise<void> {
  await ensureContentTable();
  const db = client();
  await db`
    INSERT INTO site_content (id, data) VALUES (1, ${JSON.stringify(data)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data
  `;
}
