"use client";

import { CONSENT_STORAGE_KEY } from "@/lib/consent";

export default function ManageCookiesButton() {
  function handleClick() {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    window.dispatchEvent(new Event("show-cookie-banner"));
  }

  return (
    <button
      onClick={handleClick}
      className="hover:text-white/60 transition-colors duration-200"
    >
      Gestisci cookie
    </button>
  );
}
