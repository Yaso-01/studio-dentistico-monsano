import Medici from "@/components/Medici";
import Valori from "@/components/Valori";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";

export default function ChiSiamoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="w-full py-16 md:py-20 bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Lo Studio</p>
            <h1 className="text-4xl md:text-5xl font-bold font-manrope text-text-main tracking-tight mb-3">Chi Siamo</h1>
            <p className="text-text-main/55 max-w-xl leading-relaxed">
              Due sedi, un&apos;unica filosofia di cura. Conoscete il team che ogni giorno si prende cura dei pazienti di Monsano e Agugliano.
            </p>
          </FadeUp>
        </div>
      </div>

      <Valori />
      <Medici />
      <Footer />
    </div>
  );
}
