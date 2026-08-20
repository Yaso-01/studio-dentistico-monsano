import { Syringe, ShieldCheck, Smile } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

const altriServizi = [
  {
    title: "Endodonzia",
    desc: "Rimozione della polpa (nervi e vasi all'interno del dente) infetta e successiva sigillatura dei canali.",
    icon: Syringe,
  },
  {
    title: "Conservativa",
    desc: "Rimozione del tessuto dentale danneggiato da carie, ricostruendo forma e funzione.",
    icon: ShieldCheck,
  },
  {
    title: "Pedodonzia",
    desc: "Prevenzione (igiene e sigillatura) e cura dei denti da latte.",
    icon: Smile,
  },
];

export default function AltriServizi() {
  return (
    <section className="w-full py-section bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">

        <FadeUp>
          <div className="mb-10">
            <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">
              {/* TODO: testo in bozza, da far approvare al cliente */}
              Ulteriori Trattamenti
            </p>
            <h2 className="text-2xl font-bold font-manrope text-text-main tracking-tight">
              {/* TODO: testo in bozza, da far approvare al cliente */}
              Altri Servizi
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {altriServizi.map((servizio, index) => (
            <FadeUp key={index} delay={index * 0.08}>
              <div className="group flex gap-4 p-5 rounded-xl bg-white border border-secondary-container hover:shadow-md hover:shadow-text-main/5 transition-all duration-300 h-full">
                <div className="w-20 h-20 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <servizio.icon size={32} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-main text-sm mb-1.5">{servizio.title}</h3>
                  <p className="text-xs text-text-main/55 leading-relaxed">{servizio.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
