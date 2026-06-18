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
              <p className="text-white/50 font-semibold text-[11px] uppercase tracking-[0.15em] flex items-center gap-2"><span className="w-5 h-px bg-white/40" />Lo Studio</p>
              <h1 className="text-4xl md:text-5xl font-bold font-manrope text-white tracking-tight">Chi Siamo</h1>
              <p className="text-white/65 max-w-xl leading-relaxed">
                Due sedi, un&apos;unica filosofia di cura. Conoscete il team che ogni giorno si prende cura dei pazienti di Monsano e Agugliano.
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
