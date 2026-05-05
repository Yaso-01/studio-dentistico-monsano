"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import ReviewModal from "./ReviewModal";

const feedback = [
  {
    autore: "Alessandra Ricci",
    ruolo: "Paziente da 3 anni",
    testo: "Professionalità ai massimi livelli. Ho eseguito un intervento di implantologia e non ho avvertito il minimo dolore. Lo studio è pulitissimo e il personale mette subito a proprio agio. Grazie Dott. Fazi!",
    rating: 5
  },
  {
    autore: "Marco Valeri",
    ruolo: "Prima visita",
    testo: "Ero molto ansioso, ma la Dott.ssa Bernacchia è stata incredibile nel spiegarmi tutto con calma. Tecnologia all'avanguardia e massima cortesia.",
    rating: 5
  },
  {
    autore: "Giulia Tosi",
    ruolo: "Paziente",
    testo: "Ambiente moderno e accogliente. Consiglio vivamente lo studio per la pulizia e la precisione nel rispettare gli orari degli appuntamenti.",
    rating: 5
  }
];

export default function Recensioni({ preview = false }: { preview?: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayFeedback = preview ? feedback.slice(0, 3) : feedback;

  return (
    <section id="recensioni" className="w-full py-section bg-surface">
      <div className="max-w-container">
        
        {/* Header Sezione Recensioni */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
            Eccellenza Certificata
          </div>
          <h2 className="text-4xl font-bold font-manrope text-text-main mb-4">La voce dei nostri pazienti</h2>
          <p className="text-text-main/60 max-w-2xl mx-auto">
            Il sorriso dei nostri pazienti è il miglior biglietto da visita. Ci impegniamo quotidianamente per offrire un'esperienza odontoiatrica serena.
          </p>
        </div>

        {/* Riepilogo Rating */}
        {!preview && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-container text-center">
              <div className="text-5xl font-bold text-text-main mb-2">4.9 / 5.0</div>
              <div className="flex justify-center gap-1 text-primary mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <p className="text-sm text-text-main/60">Basato su oltre 500 recensioni verificate</p>
            </div>
            
            <div className="lg:col-span-2 bg-primary/5 p-8 rounded-xl border border-primary/10 flex items-center justify-between flex-col sm:flex-row gap-4 text-center sm:text-left">
              <p className="text-lg font-medium text-text-main max-w-md">
                La tua opinione ci aiuta a migliorare costantemente i nostri servizi.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover-scale shadow-lg"
              >
                Scrivi una recensione
              </button>
            </div>
          </div>
        )}

        {/* Griglia Recensioni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayFeedback.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl border border-secondary-container shadow-sm transition-all duration-200 ease-out cursor-default"
            >
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(f.rating)].map((_, starI) => <Star key={starI} fill="currentColor" size={14} />)}
              </div>
              <p className="text-text-main/80 italic mb-6 leading-relaxed">"{f.testo}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center font-bold text-primary">
                  {f.autore[0]}
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-sm">{f.autore}</h4>
                  <p className="text-xs text-text-main/50">{f.ruolo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="mt-12 text-center">
            <Link href="/recensioni" className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all">
              Leggi tutte le recensioni <ArrowRight size={18} />
            </Link>
          </div>
        )}

      </div>

      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}