"use client";
import { motion } from "framer-motion";
import { Stethoscope, ShieldCheck, Drill, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const trattamenti = [
  { icon: <Stethoscope />, title: "Igiene dentale", desc: "Trattamenti professionali per mantenere gengive sane." },
  { icon: <Drill />, title: "Implantologia", desc: "Soluzioni fisse e definitive per denti mancanti." },
  { icon: <ShieldCheck />, title: "Ortodonzia", desc: "Allineamento dentale per adulti e bambini." },
  { icon: <Sparkles />, title: "Sbiancamento", desc: "Ritrova il bianco naturale del tuo sorriso." }
];

export default function Servizi({ preview = false }: { preview?: boolean }) {
  const displayTrattamenti = preview ? trattamenti.slice(0, 4) : trattamenti;

  return (
    <section id="servizi" className={`w-full py-section ${preview ? 'bg-surface' : 'bg-white'}`}>
      <div className="max-w-container">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">— Fazi & Bernacchia</p>
          <h2 className="text-4xl font-bold font-manrope text-text-main">Eccellenza e Cura per il tuo Sorriso</h2>
          <p className="mt-4 text-text-main/60">Scopri la nostra gamma completa di trattamenti odontoiatrici.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTrattamenti.map((t, i) => (
            <div key={i} className="p-8 rounded-xl border border-secondary-container bg-surface-bright hover-scale shadow-sm">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm mb-6">
                {t.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{t.title}</h3>
              <p className="text-sm text-text-main/70 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {preview ? (
          <div className="mt-12 text-center">
            <Link href="/servizi" className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all">
              Vedi tutti i servizi <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            {/* Banner finale compresso (come da screen) */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Il tuo percorso inizia qui.</h3>
              <p className="text-white/80">Prenota oggi stesso una consulenza completa con i nostri esperti.</p>
            </div>
            <Link href="/contatti" className="relative z-10 bg-white text-primary px-8 py-4 rounded-lg font-bold hover-scale shadow-xl block text-center">
              Contattaci ora
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}