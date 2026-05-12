import Medici from "@/components/Medici";
import Valori from "@/components/Valori";
import Footer from "@/components/Footer";

export default function ChiSiamoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="w-full py-16 bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Lo Studio</p>
          <h1 className="text-4xl font-bold font-manrope text-text-main mb-3">Chi Siamo</h1>
          <p className="text-text-main/60 max-w-xl leading-relaxed">
            Due sedi, un&apos;unica filosofia di cura. Conoscete il team di professionisti che ogni giorno si prende cura dei pazienti di Monsano e Agugliano.
          </p>
        </div>
      </div>

      <Valori />
      <Medici />
      <Footer />
    </div>
  );
}
