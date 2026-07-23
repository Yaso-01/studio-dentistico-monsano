import { ArrowRight, CheckCircle2, Image as ImageIcon, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

const partner = [
  {
    nome: "MTA — Centro Sportivo, Jesi",
    foto: "/images/mta-centro-sportivo.jpg",
    logo: "/images/mta-logo.jpeg",
  },
  {
    nome: "Team Marche — Piscina di Chiaravalle",
    foto: "/images/piscina-chiaravalle.jpg",
    logo: "/images/team-marche-logo.svg",
  },
  {
    nome: "Team Marche — Piscina di Jesi",
    foto: "/images/piscina-jesi.jpg",
    logo: "/images/team-marche-logo.svg",
  },
  {
    nome: "Team Marche — Piscina di Moie",
    foto: "/images/piscina-moie.jpg",
    logo: "/images/team-marche-logo.svg",
  },
  {
    nome: "Bodyline — Palestra, Jesi",
    foto: "/images/bodyline-palestra.jpg",
    logo: "/images/bodyline-logo.jpeg",
  },
];

const vantaggi = [
  "Tariffe agevolate per partner e loro associati",
  "Percorsi e pacchetti di trattamento personalizzati, pensati sulle esigenze di partner e associati.",
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
                Lo studio è convenzionato con diverse realtà del territorio. Vantaggi concreti per chi fa parte della comunità locale.
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
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {partner.map((p, i) => (
            <FadeUp
              key={i}
              delay={i * 0.08}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)]"
            >
              <div className="rounded-xl border border-secondary-container bg-white overflow-hidden flex flex-col h-full">
                {/* Foto */}
                <div className="relative w-full aspect-[4/3] bg-secondary-container/50 flex items-center justify-center border-b border-secondary-container">
                  {p.foto ? (
                    <Image
                      src={p.foto}
                      alt={p.nome}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <ImageIcon size={22} className="text-text-main/25" />
                  )}
                </div>
                <div className="p-5 flex items-center gap-3">
                  {/* Logo */}
                  <div className="relative w-11 h-11 rounded-lg border border-secondary-container bg-surface flex items-center justify-center shrink-0 overflow-hidden">
                    {p.logo ? (
                      <Image src={p.logo} alt={`Logo ${p.nome}`} fill sizes="44px" className="object-contain p-1.5" />
                    ) : (
                      <Building2 size={16} className="text-text-main/25" />
                    )}
                  </div>
                  <h3 className="font-bold text-text-main text-sm leading-snug">{p.nome}</h3>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Vantaggi per i Partner — full width */}
        <FadeUp>
          <div className="bg-white rounded-xl border border-secondary-container p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              <div className="md:w-1/3 shrink-0">
                <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Cosa ottieni</p>
                <h3 className="text-xl font-bold font-manrope text-text-main">Vantaggi per i Partner</h3>
              </div>
              <ul className="flex-1 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {vantaggi.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-main/65">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/convenzioni"
              className="group inline-flex items-center gap-2 mt-7 text-primary text-sm font-semibold"
            >
              Diventa partner
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
