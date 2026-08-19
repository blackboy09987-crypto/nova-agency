import { createHmac, timingSafeEqual } from "crypto";

export const SESSION_COOKIE_NAME = "nova_admin_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "SESSION_SECRET is not set. Add it to .env.local before using the admin panel."
    );
  }
  return secret;
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function verifyPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error(
      "ADMIN_PASSWORD is not set. Add it to .env.local before using the admin panel."
    );
  }
  return safeEqual(input, expected);
}

/** Signed `expiry.signature` token — no server-side session storage needed. */
export function createSessionToken(): string {
  const expiry = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const signature = createHmac("sha256", getSecret())
    .update(String(expiry))
    .digest("hex");
  return `${expiry}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [expiryStr, signature] = token.split(".");
  if (!expiryStr || !signature) return false;

  const expiry = Number(expiryStr);
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false;

  const expectedSignature = createHmac("sha256", getSecret())
    .update(expiryStr)
    .digest("hex");

  return safeEqual(signature, expectedSignature);
}
