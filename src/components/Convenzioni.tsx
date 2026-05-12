import { ArrowRight } from "lucide-react";
import Link from "next/link";

const partner = [
  {
    categoria: "Piscine",
    nome: "Piscina Comunale Convenzionata",
    desc: "Convenzione attiva per gli iscritti della piscina partner. Tariffa dedicata su visite e igiene professionale.",
  },
  {
    categoria: "Palestre",
    nome: "Centro Sportivo Partner",
    desc: "Sconto dedicato agli iscritti della palestra convenzionata. Accesso prioritario all'agenda per visite di controllo.",
  },
  {
    categoria: "Hotel",
    nome: "Struttura Ricettiva Locale",
    desc: "Servizio dedicato agli ospiti delle strutture alberghiere partner per emergenze e visite programmate.",
  },
  {
    categoria: "Attività Locali",
    nome: "Attività Commerciali del Territorio",
    desc: "Collaborazione con realtà locali per offerte riservate ai dipendenti e clienti abituali.",
  },
];

const pacchetti = [
  {
    nome: "Igiene + Sbiancamento",
    desc: "Seduta di igiene professionale e trattamento sbiancante in un unico appuntamento. Ideale per chi vuole un sorriso luminoso in tempi brevi.",
  },
  {
    nome: "Smile Refresh",
    desc: "Controllo completo, igiene professionale e valutazione estetica. Il punto di partenza per prendersi cura del proprio sorriso.",
  },
  {
    nome: "Controllo + Pulizia",
    desc: "Visita di controllo e seduta di igiene per mantenere la salute orale nel tempo. Consigliato ogni sei mesi.",
  },
];

export default function Convenzioni() {
  return (
    <section id="convenzioni" className="w-full py-section bg-white border-t border-secondary-container">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Intestazione */}
        <div className="mb-12">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Territorio & Collaborazioni</p>
          <h2 className="text-3xl font-bold font-manrope text-text-main mb-3">Convenzioni e Partnership</h2>
          <p className="text-text-main/60 text-sm max-w-xl leading-relaxed">
            Lo studio è convenzionato con diverse realtà del territorio di Monsano e Agugliano. Chiedi in sede o contattaci per conoscere i vantaggi riservati.
          </p>
        </div>

        {/* Grid partner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {partner.map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-secondary-container bg-surface flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-main/50 font-medium uppercase tracking-wide">{p.categoria}</span>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Convenzionato
                </span>
              </div>
              <h3 className="font-bold text-text-main text-sm">{p.nome}</h3>
              <p className="text-xs text-text-main/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Pacchetti Benessere */}
        <div className="border-t border-secondary-container pt-12">
          <div className="mb-8">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Offerte Dedicate</p>
            <h3 className="text-2xl font-bold font-manrope text-text-main">Pacchetti Benessere Sorriso</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pacchetti.map((pkg, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-secondary-container bg-surface flex flex-col gap-4"
              >
                <div>
                  <h4 className="font-bold text-text-main mb-2">{pkg.nome}</h4>
                  <p className="text-sm text-text-main/60 leading-relaxed">{pkg.desc}</p>
                </div>
                <Link
                  href="/contatti"
                  className="mt-auto inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                >
                  Richiedi info <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-primary/5 rounded-lg border border-primary/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-text-main/70 max-w-md">
              Per informazioni sulle convenzioni attive o per aderire come partner del territorio, contattate direttamente lo studio.
            </p>
            <Link
              href="/contatti"
              className="flex-shrink-0 bg-primary text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Contattaci
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
