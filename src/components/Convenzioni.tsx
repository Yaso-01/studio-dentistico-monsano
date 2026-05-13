import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

const partner = [
  {
    categoria: "Piscine",
    nome: "Piscina Comunale Convenzionata",
    desc: "Tariffa dedicata su visite e igiene per gli iscritti della piscina partner.",
    colore: "bg-sky-50 border-sky-100",
    badge: "text-sky-700 bg-sky-100",
  },
  {
    categoria: "Palestre",
    nome: "Centro Sportivo Partner",
    desc: "Accesso prioritario all'agenda e sconto su trattamenti per gli iscritti.",
    colore: "bg-amber-50 border-amber-100",
    badge: "text-amber-700 bg-amber-100",
  },
  {
    categoria: "Hotel",
    nome: "Struttura Ricettiva Locale",
    desc: "Servizio urgenze e visite programmate per gli ospiti delle strutture convenzionate.",
    colore: "bg-violet-50 border-violet-100",
    badge: "text-violet-700 bg-violet-100",
  },
  {
    categoria: "Attività Locali",
    nome: "Attività Commerciali",
    desc: "Collaborazioni con realtà locali per offerte dedicate a dipendenti e clienti.",
    colore: "bg-emerald-50 border-emerald-100",
    badge: "text-emerald-700 bg-emerald-100",
  },
];

const pacchetti = [
  {
    nome: "Igiene + Sbiancamento",
    desc: "Igiene professionale e trattamento sbiancante in un unico appuntamento.",
  },
  {
    nome: "Smile Refresh",
    desc: "Controllo completo, igiene e valutazione estetica. Il punto di partenza.",
  },
  {
    nome: "Controllo + Pulizia",
    desc: "Visita di controllo e seduta di igiene. Consigliato ogni sei mesi.",
  },
];

const vantaggi = [
  "Tariffe agevolate per partner e loro associati",
  "Accesso prioritario all'agenda in entrambe le sedi",
  "Percorsi di prevenzione personalizzati",
  "Comunicazione diretta con il team clinico",
];

export default function Convenzioni() {
  return (
    <section id="convenzioni" className="w-full py-section bg-surface border-t border-secondary-container">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">
                Territorio &amp; Collaborazioni
              </p>
              <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">
                Convenzioni e Partnership
              </h2>
              <p className="mt-2 text-sm text-text-main/55 max-w-lg leading-relaxed">
                Lo studio è convenzionato con diverse realtà di Monsano e Agugliano. Vantaggi concreti per chi fa parte della comunità locale.
              </p>
            </div>
            <Link
              href="/convenzioni"
              className="group inline-flex items-center gap-2 text-primary text-sm font-semibold shrink-0"
            >
              Scopri tutte le convenzioni
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeUp>

        {/* Partner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {partner.map((p, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className={`rounded-xl border p-5 flex flex-col gap-3 ${p.colore}`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-text-main/50 font-medium uppercase tracking-wider">{p.categoria}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${p.badge}`}>
                    Convenzionato
                  </span>
                </div>
                <h3 className="font-bold text-text-main text-sm leading-snug">{p.nome}</h3>
                <p className="text-xs text-text-main/60 leading-relaxed">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Vantaggi + Pacchetti */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Vantaggi */}
          <FadeUp>
            <div className="bg-white rounded-xl border border-secondary-container p-7">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Cosa ottieni</p>
              <h3 className="text-xl font-bold font-manrope text-text-main mb-5">Vantaggi per i Partner</h3>
              <ul className="space-y-3">
                {vantaggi.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-main/65">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
              <Link
                href="/convenzioni"
                className="group inline-flex items-center gap-2 mt-6 text-primary text-sm font-semibold"
              >
                Diventa partner
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>

          {/* Pacchetti Benessere */}
          <FadeUp delay={0.1}>
            <div className="bg-white rounded-xl border border-secondary-container p-7">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Offerte Dedicate</p>
              <h3 className="text-xl font-bold font-manrope text-text-main mb-5">Pacchetti Benessere Sorriso</h3>
              <div className="space-y-3">
                {pacchetti.map((pkg, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-secondary-container">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm mb-0.5">{pkg.nome}</h4>
                      <p className="text-xs text-text-main/55 leading-relaxed">{pkg.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-2 mt-5 text-primary text-sm font-semibold"
              >
                Richiedi informazioni
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>

        </div>

      </div>
    </section>
  );
}
