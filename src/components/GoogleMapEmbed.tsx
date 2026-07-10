"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { hasConsent } from "@/lib/consent";

interface GoogleMapEmbedProps {
  address: string;
  label: string;
}

export default function GoogleMapEmbed({ address, label }: GoogleMapEmbedProps) {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasConsent());
    const handler = () => setConsented(hasConsent());
    window.addEventListener("consent-changed", handler);
    return () => window.removeEventListener("consent-changed", handler);
  }, []);

  if (consented) {
    return (
      <div className="mt-2 w-full h-40 rounded-lg overflow-hidden border border-secondary-container">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          title={`Mappa ${label}`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="mt-2 w-full h-28 rounded-lg bg-secondary-container/50 flex flex-col items-center justify-center gap-2 border border-secondary-container px-4 text-center">
      <span className="text-xs text-text-main/45 flex items-center gap-1.5">
        <MapPin size={13} />
        Attiva i cookie per visualizzare la mappa
      </span>
      <button
        onClick={() => window.dispatchEvent(new Event("show-cookie-banner"))}
        className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
      >
        Gestisci preferenze cookie
      </button>
    </div>
  );
}
