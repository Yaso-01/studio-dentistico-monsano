import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";

export default function ContattiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page header */}
      <div className="w-full py-16 md:py-20 bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Dove Siamo</p>
            <h1 className="text-4xl md:text-5xl font-bold font-manrope text-text-main tracking-tight mb-3">Contatti</h1>
            <p className="text-text-main/55 max-w-xl leading-relaxed">
              Siamo presenti a Monsano e Agugliano. Contattateci per prenotare una visita o richiedere informazioni.
            </p>
          </FadeUp>
        </div>
      </div>
      <Contatti />
      <Footer />
    </div>
  );
}
