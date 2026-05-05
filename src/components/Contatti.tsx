"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contatti() {
  return (
    <section id="contatti" className="w-full py-section bg-white">
      <div className="max-w-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Colonna Info (Sinistra) */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">— Siamo qui per te</p>
              <h2 className="text-4xl font-bold font-manrope text-text-main">Mettiti in contatto con noi a Monsano</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-surface border border-secondary-container shadow-sm">
                <MapPin className="text-primary mb-4" size={24} />
                <h4 className="font-bold text-text-main mb-2">Indirizzo</h4>
                <p className="text-sm text-text-main/70">Via Roma 123,<br />60030 Monsano (AN)</p>
              </div>
              
              <div className="p-6 rounded-xl bg-surface border border-secondary-container shadow-sm">
                <Clock className="text-primary mb-4" size={24} />
                <h4 className="font-bold text-text-main mb-2">Orari di Apertura</h4>
                <p className="text-sm text-text-main/70">Lun - Ven: 09:00 - 19:30<br />Sabato: 09:00 - 13:00</p>
              </div>

              <div className="p-6 rounded-xl bg-surface border border-secondary-container shadow-sm">
                <Phone className="text-primary mb-4" size={24} />
                <h4 className="font-bold text-text-main mb-2">Telefono</h4>
                <p className="text-sm text-text-main/70">+39 0731 123456</p>
              </div>

              <div className="p-6 rounded-xl bg-surface border border-secondary-container shadow-sm">
                <Mail className="text-primary mb-4" size={24} />
                <h4 className="font-bold text-text-main mb-2">Email</h4>
                <p className="text-sm text-text-main/70">info@fazibernacchia.it</p>
              </div>
            </div>
          </div>

          {/* Colonna Form (Destra) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-secondary-container shadow-xl shadow-secondary-container/20">
            <h3 className="text-2xl font-bold font-manrope text-text-main mb-6">Inviaci un messaggio</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main/70 ml-1">Nome Completo</label>
                  <input type="text" placeholder="Mario Rossi" className="w-full px-4 py-3 rounded-lg border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main/70 ml-1">Telefono</label>
                  <input type="tel" placeholder="+39 333 000 0000" className="w-full px-4 py-3 rounded-lg border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main/70 ml-1">Email</label>
                <input type="email" placeholder="mario.rossi@email.it" className="w-full px-4 py-3 rounded-lg border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main/70 ml-1">Messaggio</label>
                <textarea rows={4} placeholder="Come possiamo aiutarti?" className="w-full px-4 py-3 rounded-lg border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover-scale shadow-lg shadow-primary/20 mt-4">
                Invia Richiesta <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}