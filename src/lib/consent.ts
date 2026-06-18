export const CONSENT_STORAGE_KEY = "cookie-consent";

export type ConsentChoice = "accepted" | "necessary-only";

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored === "accepted" || stored === "necessary-only") return stored as ConsentChoice;
  return null;
}

export function hasConsent(): boolean {
  return getConsent() === "accepted";
}
