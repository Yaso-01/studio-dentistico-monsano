import { Stethoscope, ShieldCheck, Drill, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const trattamenti = [
  { icon: <Stethoscope size={20} />, title: "Igiene Dentale", desc: "Protocolli professionali per la salute di gengive e smalto." },
  { icon: <Drill size={20} />, title: "Implantologia", desc: "Soluzioni fisse e definitive per denti mancanti." },
  { icon: <ShieldCheck size={20} />, title: "Ortodonzia", desc: "Allineamento dentale per adulti e bambini." },
  { icon: <Sparkles size={20} />, title: "Sbiancamento", desc: "Trattamento professionale per un sorriso più luminoso." },
];

export default function Servizi({ preview = false }: { preview?: boolean }) {
  const displayTrattamenti = preview ? trattamenti.slice(0, 4) : trattamenti;

  return (
    <section id="servizi" className={`w-full py-section border-t border-secondary-container ${preview ? "bg-surface" : "bg-white"}`}>
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-10">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Trattamenti</p>
          <h2 className="text-3xl font-bold font-manrope text-text-main">I Nostri Servizi</h2>
          <p className="mt-2 text-sm text-text-main/60">Soluzioni odontoiatriche per ogni esigenza, in entrambe le sedi.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayTrattamenti.map((t, i) => (
            <div key={i} className="p-5 rounded-lg border border-secondary-container bg-white">
              <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center text-primary mb-4">
                {t.icon}
              </div>
              <h3 className="text-sm font-bold text-text-main mb-1.5">{t.title}</h3>
              <p className="text-xs text-text-main/60 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {preview ? (
          <div className="mt-8">
            <Link href="/servizi" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
              Vedi tutti i servizi <ArrowRight size={15} />
            </Link>
          </div>
        ) : (
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-text-main mb-1">Hai bisogno di una consulenza?</h3>
              <p className="text-sm text-text-main/60">Contattaci per fissare un appuntamento nelle sedi di Monsano o Agugliano.</p>
            </div>
            <Link href="/contatti" className="flex-shrink-0 bg-primary text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors">
              Contattaci
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
