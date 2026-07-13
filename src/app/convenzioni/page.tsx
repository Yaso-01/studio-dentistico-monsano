import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Image as ImageIcon, Building2 } from "lucide-react";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";
import { promo } from "@/lib/promo";

const partner = [
  {
    nome: "MTA — Centro Sportivo, Jesi",
    foto: "/images/mta-centro-sportivo.jpg",
    logo: "/images/mta-logo.png",
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
];

const vantaggi = [
  "Tariffe agevolate per partner e loro associati",
  "Percorsi e pacchetti di trattamento personalizzati, pensati sulle esigenze di partner e associati.",
];

export default function ConvenzioniPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <div className="w-full bg-primary overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-5 h-px bg-white/40" />
              Territorio &amp; Collaborazioni
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-manrope text-white leading-[1.1] tracking-tight">
              Convenzioni e Partnership Locali
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-lg">
              Lo studio Fazi &amp; Bernacchia è attivamente convenzionato con realtà del territorio di Monsano e Agugliano. Vantaggi concreti per chi fa parte della nostra comunità locale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
              >
                Contattaci per info
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Mini sedi badge */}
          <div className="hidden md:flex flex-col gap-3">
            {[
              { nome: "Sede Monsano", indirizzo: "Largo Due Querce 85/B, 60030" },
              { nome: "Sede Agugliano", indirizzo: "Via Sebastiano Petrelli 2/A, 60020" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 flex items-center gap-3">
                <MapPin size={18} className="text-white/60 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{s.nome}</p>
                  <p className="text-white/50 text-xs">{s.indirizzo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership */}
      <section className="w-full py-section bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">

          <FadeUp>
            <div className="mb-12">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Partner Attivi</p>
              <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">Le Nostre Partnership</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partner.map((p, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-secondary-container bg-white overflow-hidden flex flex-col">
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
        </div>
      </section>

      {/* Pacchetto Promozionale */}
      {promo.active && (
        <section className="w-full py-section bg-white border-b border-secondary-container">
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeUp>
              <div className="bg-primary rounded-2xl p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-10">
                <div className="flex-1 min-w-0 space-y-3">
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.15em]">{promo.eyebrow}</p>
                  <h2 className="text-3xl font-bold font-manrope text-white tracking-tight leading-snug">{promo.title}</h2>
                  <p className="text-white/75 text-base">{promo.offer}</p>
                  <p className="text-white/55 text-sm leading-relaxed max-w-lg">{promo.note}</p>
                </div>
                <div className="flex flex-col items-start gap-4 shrink-0 md:border-l md:border-white/15 md:pl-10">
                  <p className="text-4xl md:text-5xl font-bold font-manrope text-white tracking-tight whitespace-nowrap">
                    {promo.price}
                  </p>
                  <Link
                    href="/contatti"
                    className="group inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md text-sm font-semibold hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
                  >
                    {promo.ctaLabel}
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* Vantaggi */}
      <section className="w-full py-section bg-surface border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">

          <FadeUp>
            <div className="mb-12">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Perché sceglierci</p>
              <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">Vantaggi per i Partner</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {vantaggi.map((v, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-secondary-container p-6 h-full flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-text-main/65 leading-relaxed">{v}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="w-full py-section bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="bg-primary rounded-2xl p-10 md:p-14 text-center">
              <p className="text-white/50 text-[11px] uppercase tracking-widest mb-3">Inizia ora</p>
              <h2 className="text-3xl font-bold font-manrope text-white mb-4 tracking-tight">
                Vuoi attivare una convenzione?
              </h2>
              <p className="text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
                Contattate lo studio per conoscere le modalità di adesione. Sarà nostra cura rispondervi entro un giorno lavorativo.
              </p>
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-bold hover:bg-white/90 transition-colors duration-200"
              >
                Contattaci
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
