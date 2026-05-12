import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceSectionProps {
  title: string;
  description: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  heroImage: string;
  resultImages: string[];
  reverse?: boolean;
}

export default function ServiceSection({
  title,
  description,
  benefits,
  process,
  heroImage,
  resultImages,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="w-full py-section border-b border-secondary-container bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Riga principale */}
        <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-16 mb-16 ${reverse ? "md:flex-row-reverse" : ""}`}>

          <div className="flex-1 space-y-5">
            <h2 className="text-3xl lg:text-4xl font-bold font-manrope text-text-main leading-snug">
              {title}
            </h2>
            <p className="text-text-main/65 leading-relaxed">{description}</p>

            <div>
              <h4 className="font-bold text-text-main mb-3 text-sm uppercase tracking-wide">Benefici</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm text-text-main/75 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contatti"
              className="inline-flex bg-primary text-white px-6 py-3 rounded text-sm font-semibold items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Prenota una consulenza <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-secondary-container">
              <Image
                src={heroImage}
                alt={`Servizio ${title}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Riga secondaria */}
        <div className={`flex flex-col md:flex-row gap-12 lg:gap-16 ${reverse ? "" : "md:flex-row-reverse"}`}>

          {/* Risultati */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-bold font-manrope text-text-main mb-4">Risultati</h3>
            <div className="grid grid-cols-2 gap-3">
              {resultImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-secondary-container">
                  <Image
                    src={img}
                    alt={`Risultato ${title} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold text-text-main uppercase tracking-wider">
                    {idx % 2 === 0 ? "Prima" : "Dopo"}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-text-main/40 mt-3 italic">
              I risultati possono variare da paziente a paziente.
            </p>
          </div>

          {/* Cosa aspettarsi */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-lg font-bold font-manrope text-text-main mb-1">Il percorso terapeutico</h3>
              <p className="text-sm text-text-main/55">Passo dopo passo, senza sorprese.</p>
            </div>

            <div className="space-y-4">
              {process.map((p, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="p-4 rounded-lg border border-secondary-container bg-surface flex-1">
                    <h4 className="font-bold text-text-main text-sm mb-1">{p.step}</h4>
                    <p className="text-xs text-text-main/65 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
