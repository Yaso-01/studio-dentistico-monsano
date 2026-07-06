import Medici from "@/components/Medici";
import Valori from "@/components/Valori";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";

export default function ChiSiamoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="w-full bg-primary overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <FadeUp>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-manrope text-white tracking-tight">Chi Siamo</h1>
              <p className="text-white/65 max-w-xl leading-relaxed">
                Due sedi, un&apos;unica filosofia di cura. Conoscete il team che ogni giorno si prende cura dei pazienti di Monsano e Agugliano.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Intro */}
      <div className="w-full bg-white py-section border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="max-w-xl space-y-4">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em]">
                Il Tuo Partner per la Salute Orale
              </p>
              <p className="text-text-main/65 leading-relaxed">
                Lo studio Fazi-Bernacchia vanta un&apos;esperienza ventennale nel settore odontoiatrico.
              </p>
              <p className="text-text-main/65 leading-relaxed">
                Nel corso degli anni abbiamo sviluppato rapporti di familiarità con i pazienti, per questo da noi non sarete semplici clienti o casi clinici ma persone a cui dedichiamo ascolto, attenzione e massima cura.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      <Valori />
      <Medici />
      <Footer />
    </div>
  );
}
