"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const medici = [
  {
    nome: "Dr. Riccardo Fazi",
    specializzazione: "CHIRURGIA E IMPLANTOLOGIA",
    bio: "Specializzato in chirurgia orale rigenerativa e implantologia avanzata, il Dr. Fazi coordina l'area clinica dello studio con un approccio volto alla precisione chirurgica e alla riabilitazione estetica complessa.",
    competenze: [
      "Laurea con lode in Odontoiatria e Protesi Dentaria",
      "Master in Implantologia Osteointegrata",
      "Esperto in Tecniche Digitali 3D"
    ],
    immagine: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80", // Placeholder per Dr. Fazi
    reverse: false
  },
  {
    nome: "Dr.ssa Laura Bernacchia",
    specializzazione: "ORTODONZIA E ODONTOIATRIA PEDIATRICA",
    bio: "La Dr.ssa Bernacchia si dedica con passione all'ortodonzia invisibile e alla cura dei piccoli pazienti. Il suo approccio delicato e comunicativo trasforma la visita dal dentista in un momento di educazione e serenità.",
    competenze: [
      "Specializzazione in Ortodonzia",
      "Certificazione Invisalign Platinum Provider",
      "Esperta in Odontoiatria Materno-Infantile"
    ],
    immagine: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80", // Placeholder per Dr.ssa Bernacchia
    reverse: true
  }
];

export default function Medici({ preview = false }: { preview?: boolean }) {
  const displayMedici = preview ? medici.slice(0, 1) : medici;

  return (
    <section id="chi-siamo" className={`w-full py-section ${preview ? 'bg-white' : 'bg-surface'}`}>
      <div className="max-w-[1200px] mx-auto px-6 space-y-24">
        
        {preview && (
           <div className="text-center mb-12">
             <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">— Il Nostro Team</p>
             <h2 className="text-4xl font-bold font-manrope text-text-main">I professionisti del tuo sorriso</h2>
           </div>
        )}

        {displayMedici.map((medico, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${medico.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Immagine Medico */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl hover-scale">
                <Image 
                  src={medico.immagine} 
                  alt={medico.nome}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-2 border-white/20 rounded-xl z-10 pointer-events-none" />
              </div>
            </div>

            {/* Info Medico */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-manrope text-text-main">
                  {medico.nome}
                </h3>
                <p className="text-primary font-bold text-sm tracking-wider mt-1 uppercase">
                  {medico.specializzazione}
                </p>
              </div>
              
              <p className="text-text-main/70 font-inter leading-relaxed text-lg">
                {medico.bio}
              </p>

              <ul className="space-y-3 pt-4">
                {medico.competenze.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-main/80 font-medium">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {preview && (
                 <div className="pt-6">
                   <Link href="/chi-siamo" className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all">
                     Scopri di più sul team <ArrowRight size={18} />
                   </Link>
                 </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Citazione Finale Sezione Medici */}
        {!preview && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-12 text-center max-w-3xl mx-auto"
          >
            <div className="text-primary/20 text-6xl font-serif mb-4">“</div>
            <p className="text-2xl italic font-manrope text-text-main/90 leading-relaxed">
              Non curiamo solo denti, ci prendiamo cura di persone che desiderano tornare a sorridere con fiducia e senza paura.
            </p>
            <p className="mt-4 font-bold text-primary">— Fazi & Bernacchia</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}