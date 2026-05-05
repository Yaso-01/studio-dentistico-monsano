"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-surface overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-section flex flex-col md:flex-row items-center gap-12">
        
        {/* Colonna Testo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full">
            Eccellenza Clinica a Monsano
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-manrope text-text-main leading-[1.1]">
            La salute del tuo sorriso è la nostra missione quotidiana.
          </h1>
          
          <p className="text-lg text-text-main/70 font-inter max-w-lg">
            Uno studio fondato sull'empatia, l'innovazione tecnologica e la cura meticolosa di ogni dettaglio per garantire il massimo benessere ai nostri pazienti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contatti" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover-scale shadow-lg shadow-primary/20">
              Prenota una Visita <ArrowRight size={18} />
            </Link>
            <Link href="/servizi" className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-container transition-colors text-center flex items-center justify-center">
              I Nostri Servizi
            </Link>
          </div>
        </motion.div>

        {/* Colonna Immagine */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative w-full aspect-video md:aspect-square max-h-[500px]"
        >
          <div className="w-full h-full bg-secondary-container rounded-xl overflow-hidden relative shadow-2xl">
            {/* Placeholder per l'immagine reale dello studio */}
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 to-transparent" />
            <Image 
              src="https://images.unsplash.com/photo-1629909606655-d263320314a5?auto=format&fit=crop&q=80"
              alt="Reception Studio Dentistico" 
              fill
              priority
              className="object-cover"
            />
            
            {/* Badge Certificazione Floating */}
            <div className="absolute z-20 bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-secondary-container">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                ISO
              </div>
              <div>
                <p className="text-xs font-bold text-text-main uppercase">Certificato Qualità</p>
                <p className="text-[10px] text-text-main/60">Standard d'eccellenza</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}