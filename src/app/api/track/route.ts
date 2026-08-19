import { NextResponse, type NextRequest } from "next/server";
import { recordPageView } from "@/lib/analytics";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const path = typeof body?.path === "string" ? body.path : "/";
    await recordPageView(path);
  } catch {
    // Tracking must never break the visitor's page — swallow any error.
  }
  return NextResponse.json({ ok: true });
}
