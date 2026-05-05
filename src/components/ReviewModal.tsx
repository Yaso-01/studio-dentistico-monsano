"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [nome, setNome] = useState("");
  const [trattamento, setTrattamento] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [testo, setTesto] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nome.trim()) return setError("Il nome è obbligatorio.");
    if (!trattamento) return setError("Seleziona il trattamento effettuato.");
    if (rating === 0) return setError("Seleziona una valutazione.");
    if (testo.trim().length < 20) return setError("La recensione deve avere almeno 20 caratteri.");
    if (!recaptchaToken) return setError("Per favore, completa il controllo di sicurezza reCAPTCHA.");

    setIsSubmitting(true);

    // Simulazione chiamata API (MVP Frontend-Only)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset dei campi e chiusura automatica
      setTimeout(() => {
        setNome("");
        setTrattamento("");
        setRating(0);
        setHoverRating(0);
        setTesto("");
        setRecaptchaToken(null);
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-main/50 hover:text-text-main transition-colors"
              aria-label="Chiudi modale"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#3b6663]/10 text-[#3b6663] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star fill="currentColor" size={32} />
                </div>
                <h3 className="text-2xl font-bold font-manrope text-text-main">Grazie!</h3>
                <p className="text-text-main/70">
                  La tua recensione è stata inviata e sarà visibile dopo l'approvazione dello studio.
                </p>
              </div>
            ) : (
              <>
                <h2 id="modal-title" className="text-2xl font-bold font-manrope text-text-main mb-6">
                  Scrivi una recensione
                </h2>

                {error && (
                  <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main/70 ml-1">Nome Completo <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Il tuo nome" 
                      className="w-full px-4 py-3 rounded-lg border border-secondary-container focus:border-[#3b6663] focus:ring-2 focus:ring-[#3b6663]/20 outline-none transition-all"
                      autoFocus
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main/70 ml-1">Trattamento effettuato <span className="text-red-500">*</span></label>
                    <select 
                      value={trattamento}
                      onChange={(e) => setTrattamento(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-container focus:border-[#3b6663] focus:ring-2 focus:ring-[#3b6663]/20 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>Seleziona un trattamento...</option>
                      <option value="Igiene">Igiene dentale</option>
                      <option value="Implantologia">Implantologia</option>
                      <option value="Ortodonzia">Ortodonzia</option>
                      <option value="Sbiancamento">Sbiancamento</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main/70 ml-1">Valutazione <span className="text-red-500">*</span></label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.2 }}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className={`text-2xl transition-colors ${
                            (hoverRating || rating) >= star ? "text-[#3b6663]" : "text-gray-300"
                          }`}
                        >
                          <Star fill={(hoverRating || rating) >= star ? "currentColor" : "none"} />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-main/70 ml-1">La tua recensione <span className="text-red-500">*</span></label>
                    <textarea 
                      rows={4} 
                      value={testo}
                      onChange={(e) => setTesto(e.target.value)}
                      placeholder="Condividi la tua esperienza (min 20 caratteri)" 
                      className="w-full px-4 py-3 rounded-lg border border-secondary-container focus:border-[#3b6663] focus:ring-2 focus:ring-[#3b6663]/20 outline-none transition-all resize-none"
                    ></textarea>
                    <div className="text-xs text-text-main/50 text-right">
                      {testo.length}/20 min
                    </div>
                  </div>

                  <div className="flex justify-center py-2">
                    {/* Chiave di test standard Google reCAPTCHA (sempre pass-through) */}
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={(token) => setRecaptchaToken(token)}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#3b6663] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover-scale shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia recensione"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
