import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white border-b border-secondary-container">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Colonna Testo */}
        <div className="flex-1 space-y-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">
            Studio Dentistico — Monsano & Agugliano
          </p>

          <h1 className="text-3xl md:text-5xl font-bold font-manrope text-text-main leading-[1.15]">
            La salute del vostro sorriso,<br className="hidden md:block" /> con cura e professionalità.
          </h1>

          <p className="text-base text-text-main/65 font-inter max-w-md leading-relaxed">
            Due sedi al servizio delle comunità di Monsano e Agugliano. Un approccio fondato sull&apos;ascolto, la prevenzione e la qualità clinica.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/contatti"
              className="bg-primary text-white px-6 py-3 rounded text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Prenota una Visita <ArrowRight size={16} />
            </Link>
            <Link
              href="/servizi"
              className="border border-secondary-container text-text-main/70 px-6 py-3 rounded text-sm font-medium hover:border-primary hover:text-primary transition-colors text-center"
            >
              I Nostri Servizi
            </Link>
          </div>
        </div>

        {/* Immagine discreta */}
        <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-secondary-container">
            <Image
              src="/images/foto-studio-dentistico.png"
              alt="Studio Dentistico Fazi e Bernacchia"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="text-xs text-text-main/40 mt-2 text-center">Studio Dentistico Fazi e Bernacchia</p>
        </div>

      </div>
    </section>
  );
}
