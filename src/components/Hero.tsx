import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden border-b border-secondary-container">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Colonna testo */}
        <div className="flex-1 space-y-7 max-w-lg">

          <div
            className="animate-reveal inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-5 h-px bg-primary/60" />
            Studio Dentistico · Monsano &amp; Agugliano
          </div>

          <h1
            className="animate-reveal font-manrope text-[2.25rem] md:text-[3rem] font-bold text-text-main leading-[1.12] tracking-tight"
            style={{ animationDelay: "80ms" }}
          >
            La salute del vostro sorriso,{" "}
            <span className="text-primary">con cura</span>{" "}
            e professionalità.
          </h1>

          <p
            className="animate-reveal text-base text-text-main/60 leading-relaxed max-w-md"
            style={{ animationDelay: "160ms" }}
          >
            Due sedi al servizio delle comunità locali. Un approccio fondato
            sull&apos;ascolto, la prevenzione e la qualità clinica — da oltre
            vent&apos;anni.
          </p>

          <div
            className="animate-reveal flex flex-col sm:flex-row gap-3 pt-1"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contatti"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Prenota una Visita
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/servizi"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-sm font-medium border border-secondary-container text-text-main/70 hover:border-primary/40 hover:text-primary transition-colors duration-200"
            >
              I Nostri Servizi
            </Link>
          </div>

          {/* Trust band */}
          <div
            className="animate-reveal flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-text-main/40 font-medium"
            style={{ animationDelay: "320ms" }}
          >
            <span>Due sedi operative</span>
            <span className="text-secondary-container">·</span>
            <span>Convenzioni territoriali</span>
            <span className="text-secondary-container">·</span>
            <span>Tecnologia digitale</span>
          </div>
        </div>

        {/* Colonna immagini — dual sede layout */}
        <div
          className="animate-reveal w-full lg:w-[48%] flex-shrink-0 grid grid-cols-2 gap-3 items-end"
          style={{ animationDelay: "200ms" }}
        >
          {/* Immagine Monsano — più alta */}
          <div className="flex flex-col gap-2">
            <div className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-secondary-container shadow-lg shadow-text-main/8">
              <Image
                src="/images/foto-studio-dentistico.png"
                alt="Sede di Monsano — Studio Dentistico Fazi e Bernacchia"
                fill
                priority
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/30 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs font-semibold uppercase tracking-widest">Monsano</p>
              </div>
            </div>
          </div>

          {/* Immagine Agugliano — più bassa, offset visivo */}
          <div className="flex flex-col gap-2 mt-8">
            <div className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-secondary-container shadow-lg shadow-text-main/8">
              <Image
                src="/images/filler_waiting_room_1777946017951.png"
                alt="Sede di Agugliano — Studio Dentistico Fazi e Bernacchia"
                fill
                priority
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main/30 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs font-semibold uppercase tracking-widest">Agugliano</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
