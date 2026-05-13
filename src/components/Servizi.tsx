import { Stethoscope, ShieldCheck, Drill, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

const trattamenti = [
  {
    icon: Stethoscope,
    title: "Igiene Dentale",
    desc: "Protocolli professionali GBT per la salute di gengive e smalto. Prevenzione come investimento.",
    href: "/servizi",
  },
  {
    icon: Drill,
    title: "Implantologia",
    desc: "Soluzioni fisse e definitive pianificate in 3D. Chirurgia guidata minimamente invasiva.",
    href: "/servizi",
  },
  {
    icon: ShieldCheck,
    title: "Ortodonzia",
    desc: "Allineatori invisibili certificati per adulti e bambini. Comfort e discrezione.",
    href: "/servizi",
  },
  {
    icon: Sparkles,
    title: "Sbiancamento",
    desc: "Trattamento professionale LED per un sorriso luminoso. Risultati in una sola seduta.",
    href: "/servizi",
  },
];

export default function Servizi({ preview = false }: { preview?: boolean }) {
  return (
    <section
      id="servizi"
      className={`w-full py-section border-t border-secondary-container ${preview ? "bg-white" : "bg-white"}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">

        <FadeUp>
          <div className="mb-12">
            <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Trattamenti</p>
            <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">I Nostri Servizi</h2>
            <p className="mt-2 text-sm text-text-main/55 max-w-md">
              Soluzioni odontoiatriche professionali disponibili in entrambe le sedi.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trattamenti.map((t, i) => {
            const Icon = t.icon;
            return (
              <FadeUp key={i} delay={i * 0.08}>
                <Link
                  href={t.href}
                  className="group block p-6 rounded-xl border border-secondary-container bg-surface hover:bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5 transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <Icon size={19} />
                  </div>
                  <h3 className="text-sm font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-200">
                    {t.title}
                  </h3>
                  <p className="text-xs text-text-main/55 leading-relaxed">{t.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Scopri <ArrowRight size={12} />
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        {preview ? (
          <FadeUp delay={0.3}>
            <div className="mt-10">
              <Link
                href="/servizi"
                className="group inline-flex items-center gap-2 text-primary text-sm font-semibold"
              >
                Vedi tutti i servizi
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>
        ) : (
          <FadeUp delay={0.2}>
            <div className="mt-12 p-7 bg-primary rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white mb-1">Prenota una consulenza</h3>
                <p className="text-sm text-white/70">Disponibili nelle sedi di Monsano e Agugliano.</p>
              </div>
              <Link
                href="/contatti"
                className="flex-shrink-0 bg-white text-primary px-5 py-2.5 rounded-md text-sm font-bold hover:bg-white/90 transition-colors duration-200"
              >
                Contattaci
              </Link>
            </div>
          </FadeUp>
        )}

      </div>
    </section>
  );
}
