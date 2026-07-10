"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { whatsappUrl, STUDIO_MOBILE, STUDIO_EMAIL } from "@/lib/contact";

export default function ContactForm() {
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const nome = data.get("nome") as string;
    const telefono = data.get("telefono") as string;
    const email = data.get("email") as string;
    const sede = data.get("sede") as string;
    const messaggio = data.get("messaggio") as string;

    const subject = `Richiesta contatto dal sito — ${nome}`;
    const body = [
      `Nome: ${nome}`,
      `Telefono: ${telefono || "-"}`,
      `Email: ${email}`,
      `Sede di preferenza: ${sede || "-"}`,
      "",
      "Messaggio:",
      messaggio,
    ].join("\n");

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl rounded-xl border border-secondary-container bg-secondary-container/30 p-7 space-y-4">
        <div>
          <p className="font-semibold text-text-main mb-1">Si è aperto il tuo programma di posta.</p>
          <p className="text-sm text-text-main/65 leading-relaxed">
            Controlla il messaggio precompilato e invialo. Se non si apre automaticamente, scrivici direttamente a{" "}
            <a href={`mailto:${STUDIO_EMAIL}`} className="text-primary underline underline-offset-2">
              {STUDIO_EMAIL}
            </a>{" "}
            oppure contattaci su WhatsApp o al telefono.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#22c35e] transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Scrivici su WhatsApp
          </a>
          <a
            href={`tel:${STUDIO_MOBILE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 border border-secondary-container text-text-main/70 px-5 py-2.5 rounded-md text-sm font-semibold hover:text-primary hover:border-primary/40 transition-colors duration-200"
          >
            {STUDIO_MOBILE}
          </a>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-text-main/40 hover:text-text-main/70 transition-colors"
        >
          ← Torna al modulo
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4 max-w-2xl" onSubmit={handleSubmit} noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Nome Completo</label>
          <input
            type="text"
            name="nome"
            placeholder="Mario Rossi"
            required
            className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Telefono</label>
          <input
            type="tel"
            name="telefono"
            placeholder="+39 333 000 0000"
            className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Email</label>
          <input
            type="email"
            name="email"
            placeholder="mario.rossi@email.it"
            required
            className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Sede di preferenza</label>
          <select
            name="sede"
            className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm bg-white appearance-none"
          >
            <option value="">Seleziona una sede...</option>
            <option value="monsano">Monsano</option>
            <option value="agugliano">Agugliano</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Messaggio</label>
        <textarea
          name="messaggio"
          rows={4}
          placeholder="Come possiamo aiutarvi?"
          required
          className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all resize-none text-sm"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy-consent"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 accent-primary cursor-pointer shrink-0"
        />
        <label htmlFor="privacy-consent" className="text-sm text-text-main/65 leading-relaxed cursor-pointer">
          Ho letto e accetto la{" "}
          <Link href="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={!privacy}
        className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Invia Richiesta
        <Send size={15} />
      </button>
    </form>
  );
}
