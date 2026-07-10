import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import ManageCookiesButton from "@/components/ManageCookiesButton";
import { STUDIO_PHONE, STUDIO_EMAIL } from "@/lib/contact";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/convenzioni", label: "Convenzioni" },
  { href: "/contatti", label: "Contatti" },
];

const sedi = [
  {
    nome: "Sede di Monsano",
    indirizzo: "Largo Due Querce 85/B, 60030 Monsano (AN)",
    orari: "Lun 9:00–12:00 · 15:00–19:00 — Mar 15:00–19:00 (2 al mese) — Gio 15:00–19:00",
  },
  {
    nome: "Sede di Agugliano",
    indirizzo: "Via Sebastiano Petrelli 2/A, 60020 Agugliano (AN)",
    orari: "Mar 15:00–19:00 (2 al mese) — Mer 15:00–19:00 — Ven 9:00–12:00 · 15:00–19:00",
  },
];

export default function Footer() {
  return (
    <footer className="bg-text-main text-white pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* CTA band */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 mb-10 border-b border-white/10">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Prenota una visita</p>
            <p className="text-xl font-bold font-manrope">Siamo a vostra disposizione in entrambe le sedi.</p>
          </div>
          <Link
            href="/contatti"
            className="group shrink-0 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Contattaci
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <p className="text-base font-bold font-manrope text-white">Fazi &amp; Bernacchia</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Studio Dentistico</p>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Odontoiatria professionale nelle comunità di Monsano e Agugliano. Prevenzione, cura e qualità clinica.
            </p>
          </div>

          {/* Navigazione */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Navigazione</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sede Monsano */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Monsano</p>
            <div className="space-y-2.5 text-sm text-white/55">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-primary/70 mt-0.5 shrink-0" />
                <span>{sedi[0].indirizzo}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-primary/70 shrink-0" />
                <a href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {STUDIO_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-primary/70 shrink-0" />
                <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-white transition-colors">
                  {STUDIO_EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={13} className="text-primary/70 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{sedi[0].orari}</span>
              </div>
            </div>
          </div>

          {/* Sede Agugliano */}
          <div className="space-y-3">
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Agugliano</p>
            <div className="space-y-2.5 text-sm text-white/55">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-primary/70 mt-0.5 shrink-0" />
                <span>{sedi[1].indirizzo}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-primary/70 shrink-0" />
                <a href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {STUDIO_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-primary/70 shrink-0" />
                <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-white transition-colors">
                  {STUDIO_EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={13} className="text-primary/70 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{sedi[1].orari}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            © 2026 Studio Dentistico Fazi &amp; Bernacchia — Monsano &amp; Agugliano (AN). Tutti i diritti riservati.
          </p>
          <div className="flex gap-5 text-[11px] text-white/30">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-white/60 transition-colors">Cookie Policy</Link>
            <ManageCookiesButton />
          </div>
        </div>

      </div>
    </footer>
  );
}
