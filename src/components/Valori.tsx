"use client";
import { motion } from "framer-motion";
import { Award, Cpu, HeartPulse } from "lucide-react";

const valori = [
  {
    icon: <Award className="text-primary" size={32} />,
    title: "Esperienza",
    description: "Oltre vent'anni di pratica clinica costante, aggiornamento continuo e migliaia di sorrisi ripristinati.",
    delay: 0.1
  },
  {
    icon: <Cpu className="text-primary" size={32} />,
    title: "Tecnologia",
    description: "Utilizziamo le più moderne strumentazioni diagnostiche per trattamenti minimamente invasivi e precisi.",
    delay: 0.2
  },
  {
    icon: <HeartPulse className="text-primary" size={32} />,
    title: "Empatia",
    description: "Ascoltiamo ogni paziente con attenzione, costruendo un percorso terapeutico personalizzato e sereno.",
    delay: 0.3
  }
];

export default function Valori() {
  return (
    <section className="w-full bg-white py-section">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-manrope text-text-main">
            I Nostri Valori
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valori.map((valore, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: valore.delay }}
              className="group p-8 rounded-xl bg-surface border border-secondary-container hover-scale shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/10 transition-colors">
                {valore.icon}
              </div>
              <h3 className="text-xl font-bold font-manrope text-text-main mb-4">
                {valore.title}
              </h3>
              <p className="text-text-main/70 font-inter leading-relaxed">
                {valore.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}