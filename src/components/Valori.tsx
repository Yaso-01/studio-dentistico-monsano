import { Award, Cpu, HeartPulse } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

const valori = [
  {
    Icon: Award,
    title: "Esperienza",
    description:
      "Oltre vent'anni di pratica clinica, aggiornamento continuo e migliaia di sorrisi curati nelle comunità di Monsano e Agugliano.",
  },
  {
    Icon: Cpu,
    title: "Tecnologia",
    description:
      "Strumentazioni diagnostiche di ultima generazione per trattamenti precisi, minimamente invasivi e confortevoli.",
  },
  {
    Icon: HeartPulse,
    title: "Ascolto",
    description:
      "Ogni paziente è accolto con attenzione. Costruiamo insieme un percorso terapeutico chiaro, condiviso e personalizzato.",
  },
];

export default function Valori() {
  return (
    <section className="w-full bg-surface py-section border-b border-secondary-container">
      <div className="max-w-[1200px] mx-auto px-6">

        <FadeUp>
          <div className="mb-12">
            <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Il Nostro Approccio</p>
            <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">I Nostri Valori</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {valori.map(({ Icon, title, description }, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="group p-7 rounded-xl bg-white border border-secondary-container hover:bg-surface hover:shadow-lg hover:shadow-text-main/5 hover:border-primary/20 transition-all duration-300">
                <div className="w-11 h-11 bg-surface rounded-lg border border-secondary-container flex items-center justify-center mb-5 transition-all duration-200 group-hover:bg-primary/5 group-hover:border-primary/20">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-base font-bold font-manrope text-text-main mb-2">{title}</h3>
                <p className="text-sm text-text-main/60 leading-relaxed">{description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
