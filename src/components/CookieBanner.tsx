"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) setVisible(true);

    const handler = () => setVisible(true);
    window.addEventListener("show-cookie-banner", handler);
    return () => window.removeEventListener("show-cookie-banner", handler);
  }, []);

  useEffect(() => {
    if (visible) bannerRef.current?.focus();
  }, [visible]);

  function accept() {
    localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
    window.dispatchEvent(new Event("consent-changed"));
    setVisible(false);
  }

  function acceptNecessary() {
    localStorage.setItem(CONSENT_STORAGE_KEY, "necessary-only");
    window.dispatchEvent(new Event("consent-changed"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-modal="false"
      aria-label="Preferenze cookie"
      tabIndex={-1}
      className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-5 outline-none"
    >
      <div className="max-w-[1200px] mx-auto bg-text-main text-white rounded-xl px-5 py-4 md:px-7 md:py-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-2xl">

        <div className="flex-1 space-y-1 min-w-0">
          <p className="font-semibold text-sm">Questo sito utilizza cookie</p>
          <p className="text-xs text-white/60 leading-relaxed">
            Usiamo cookie tecnici necessari al funzionamento del sito.{" "}
            <Link
              href="/cookie-policy"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Leggi la Cookie Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={acceptNecessary}
            className="text-xs font-semibold text-white/70 hover:text-white border border-white/25 hover:border-white/50 px-4 py-2.5 rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            Solo necessari
          </button>
          <button
            onClick={accept}
            className="text-xs font-semibold bg-primary text-white px-4 py-2.5 rounded-md hover:bg-primary-dark transition-colors duration-200 whitespace-nowrap"
          >
            Accetta
          </button>
        </div>

      </div>
    </div>
  );
}
