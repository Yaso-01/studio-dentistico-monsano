import { Award, Cpu, HeartPulse } from "lucide-react";

const valori = [
  {
    icon: <Award className="text-primary" size={24} />,
    title: "Esperienza",
    description: "Oltre vent'anni di pratica clinica, aggiornamento continuo e migliaia di sorrisi curati nelle comunità di Monsano e Agugliano.",
  },
  {
    icon: <Cpu className="text-primary" size={24} />,
    title: "Tecnologia",
    description: "Strumentazioni diagnostiche di ultima generazione per trattamenti precisi, minimamente invasivi e confortevoli.",
  },
  {
    icon: <HeartPulse className="text-primary" size={24} />,
    title: "Ascolto",
    description: "Ogni paziente è accolto con attenzione. Costruiamo insieme un percorso terapeutico chiaro, condiviso e personalizzato.",
  },
];

export default function Valori() {
  return (
    <section className="w-full bg-white py-section border-b border-secondary-container">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-10">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Il Nostro Approccio</p>
          <h2 className="text-3xl font-bold font-manrope text-text-main">I Nostri Valori</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valori.map((valore, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-surface border border-secondary-container"
            >
              <div className="w-10 h-10 bg-white rounded border border-secondary-container flex items-center justify-center mb-4">
                {valore.icon}
              </div>
              <h3 className="text-base font-bold font-manrope text-text-main mb-2">
                {valore.title}
              </h3>
              <p className="text-sm text-text-main/65 font-inter leading-relaxed">
                {valore.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
