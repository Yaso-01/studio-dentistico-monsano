"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceSectionProps {
  title: string;
  description: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  heroImage: string;
  resultImages: string[];
  reverse?: boolean;
}

export default function ServiceSection({ 
  title, 
  description, 
  benefits, 
  process, 
  heroImage, 
  resultImages, 
  reverse = false 
}: ServiceSectionProps) {
  return (
    <section className="w-full py-section border-b border-secondary-container bg-white">
      <div className="max-w-container">
        
        {/* Riga Principale: Testo & Immagine Hero */}
        <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-manrope text-text-main leading-tight">
              {title}
            </h2>
            <p className="text-lg text-text-main/70 font-inter leading-relaxed">
              {description}
            </p>

            <div className="pt-4">
              <h4 className="font-bold text-text-main mb-4 text-lg">I Benefici:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#3b6663] mt-1 flex-shrink-0" size={20} />
                    <span className="text-text-main/80 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link href="/contatti" className="inline-flex bg-[#3b6663] text-white px-8 py-4 rounded-lg font-bold items-center gap-2 hover-scale shadow-lg shadow-[#3b6663]/20">
                Prenota una consulenza <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={heroImage} 
                alt={`Servizio ${title}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

        {/* Riga Secondaria: Cosa Aspettarsi & Slider Risultati */}
        <div className={`flex flex-col md:flex-row gap-12 lg:gap-20 ${reverse ? '' : 'md:flex-row-reverse'}`}>
          
          {/* Risultati Reali */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl font-bold font-manrope text-text-main mb-6">Risultati Reali</h3>
            <div className="grid grid-cols-2 gap-4">
              {resultImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                  <Image 
                    src={img} 
                    alt={`Risultato ${title} ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge Prima/Dopo simulato - in un'app reale servirebbe uno slider compare */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-text-main shadow-sm uppercase tracking-wider">
                    {idx % 2 === 0 ? "Prima" : "Dopo"}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-main/40 mt-4 italic">
              Le immagini rappresentano casi clinici reali. I risultati possono variare da paziente a paziente.
            </p>
          </motion.div>

          {/* Cosa Aspettarsi */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-manrope text-text-main mb-2">Cosa aspettarsi</h3>
              <p className="text-text-main/60">Il tuo percorso terapeutico, passo dopo passo.</p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary-container before:to-transparent">
              {process.map((p, idx) => (
                <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#3b6663] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                    {idx + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-secondary-container bg-surface-bright shadow-sm group-hover:shadow-md transition-all">
                    <h4 className="font-bold text-text-main mb-1">{p.step}</h4>
                    <p className="text-sm text-text-main/70 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
