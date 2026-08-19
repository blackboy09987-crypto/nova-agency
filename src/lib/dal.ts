import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, verifySessionToken } from "./auth";

/** True/false check only — does not redirect. Safe to use for optimistic UI. */
export async function hasAdminSession(): Promise<boolean> {
  const token = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

/**
 * Call at the top of every admin page and every admin Server Action.
 * Proxy only does an optimistic redirect; this is the real authorization
 * check, per Next.js's own auth guidance (checks must live close to the
 * data/mutation, not just in layouts or proxy).
 */
export async function requireAdminSession(): Promise<void> {
  const ok = await hasAdminSession();
  if (!ok) {
    redirect("/admin/login");
  }
}
