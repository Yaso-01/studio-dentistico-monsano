import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

interface ServiceSectionProps {
  title: string;
  description: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  heroImage: string;
  reverse?: boolean;
  imageAnchor?: "center" | "bottom";
}

export default function ServiceSection({
  title,
  description,
  benefits,
  process,
  heroImage,
  reverse = false,
  imageAnchor = "center",
}: ServiceSectionProps) {
  return (
    <section className="w-full py-section border-b border-secondary-container bg-white last:border-0">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Riga principale: immagine + testo */}
        <div
          className={`flex flex-col md:flex-row items-center gap-12 lg:gap-16 mb-16 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Immagine */}
          <FadeUp className="flex-1 w-full">
            <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-secondary-container shadow-sm">
              <Image
                src={heroImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover ${
                  imageAnchor === "bottom" ? "object-bottom" : "object-center"
                } transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
              />
            </div>
          </FadeUp>

          {/* Testo */}
          <div className="flex-1 space-y-5">
            <FadeUp delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold font-manrope text-text-main tracking-tight leading-snug">
                {title}
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-text-main/60 leading-relaxed">{description}</p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div>
                <p className="text-[11px] font-semibold text-text-main/40 uppercase tracking-widest mb-3">Benefici</p>
                <ul className="space-y-2">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-text-main/65">
                      <span className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
              >
                Prenota una consulenza
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </FadeUp>
          </div>
        </div>

        {/* Timeline percorso terapeutico */}
        <FadeUp delay={0.1}>
          <div>
            <p className="text-[11px] font-semibold text-text-main/40 uppercase tracking-widest mb-8 text-center">
              Il percorso terapeutico
            </p>

            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block relative">
              {/* Linea connettore */}
              <div
                className="absolute top-5 h-px bg-secondary-container"
                style={{ left: `calc(100% / ${process.length} / 2)`, right: `calc(100% / ${process.length} / 2)` }}
              />

              <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${process.length}, 1fr)` }}>
                {process.map((p, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-4">
                    {/* Dot numerato */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-md shadow-primary/20">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="px-2">
                      <h4 className="font-bold text-text-main text-sm mb-1">{p.step}</h4>
                      <p className="text-xs text-text-main/55 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden space-y-4">
              {process.map((p, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    {idx < process.length - 1 && <div className="w-px flex-1 bg-secondary-container mt-2" />}
                  </div>
                  <div className="pb-4 pt-1">
                    <h4 className="font-bold text-text-main text-sm mb-1">{p.step}</h4>
                    <p className="text-xs text-text-main/55 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
