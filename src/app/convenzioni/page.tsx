import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";

const partner = [
  {
    categoria: "Piscine",
    nome: "Piscina Comunale Convenzionata",
    desc: "Tariffa dedicata su visite e igiene professionale per tutti gli iscritti della piscina partner. Accesso prioritario all'agenda.",
    image: "/images/filler_clinic_detail_1777946032605.png",
  },
  {
    categoria: "Palestre",
    nome: "Centro Sportivo Partner",
    desc: "Sconto dedicato agli iscritti della palestra convenzionata su tutti i trattamenti. Pacchetti prevenzione riservati.",
    image: "/images/hero_igiene_1777945951088.png",
  },
  {
    categoria: "Hotel",
    nome: "Struttura Ricettiva Locale",
    desc: "Servizio urgenze e visite programmate per gli ospiti delle strutture alberghiere partner. Disponibile in entrambe le sedi.",
    image: "/images/filler_waiting_room_1777946017951.png",
  },
  {
    categoria: "Attività Locali",
    nome: "Attività Commerciali del Territorio",
    desc: "Collaborazioni attive con realtà commerciali locali. Offerte dedicate a dipendenti e clienti abituali dei nostri partner.",
    image: "/images/hero_ortodonzia_1777945982119.png",
  },
];

const pacchetti = [
  {
    nome: "Igiene + Sbiancamento",
    desc: "Seduta di igiene professionale e trattamento sbiancante in un unico appuntamento. Ideale per chi vuole un sorriso luminoso in tempi brevi.",
    punti: ["Igiene GBT professionale", "Sbiancamento LED professionale", "Kit mantenimento domiciliare"],
    image: "/images/hero_sbiancamento_1777945997300.png",
  },
  {
    nome: "Smile Refresh",
    desc: "Controllo completo, igiene professionale e valutazione estetica. Il punto di partenza per prendersi cura del proprio sorriso.",
    punti: ["Visita di controllo completa", "Igiene professionale", "Valutazione estetica e percorso"],
    image: "/images/hero_igiene_1777945951088.png",
  },
  {
    nome: "Controllo + Pulizia",
    desc: "Visita di controllo e seduta di igiene per mantenere la salute orale nel tempo. Consigliato ogni sei mesi.",
    punti: ["Rx bite panoramica se necessaria", "Igiene professionale completa", "Piano di mantenimento personalizzato"],
    image: "/images/hero_implantologia_1777945968659.png",
  },
];

const vantaggi = [
  {
    titolo: "Tariffe agevolate",
    desc: "Condizioni economiche riservate agli iscritti e ai clienti dei partner convenzionati.",
  },
  {
    titolo: "Accesso prioritario",
    desc: "Agenda dedicata per prenotazioni più rapide in entrambe le sedi di Monsano e Agugliano.",
  },
  {
    titolo: "Prevenzione attiva",
    desc: "Percorsi di igiene e prevenzione studiati per specifiche categorie di pazienti (sportivi, anziani, bambini).",
  },
  {
    titolo: "Comunicazione diretta",
    desc: "Contatto diretto con il team clinico per urgenze e consulenze rapide.",
  },
];

const faq = [
  {
    q: "Come faccio a sapere se sono convenzionato?",
    a: "Basta contattarci indicando il nome della vostra struttura o associazione. Vi confermeremo la convenzione attiva e le condizioni riservate.",
  },
  {
    q: "Le convenzioni sono valide in entrambe le sedi?",
    a: "Sì, tutte le convenzioni sono valide sia nella sede di Monsano che in quella di Agugliano. Potete scegliere la sede più comoda.",
  },
  {
    q: "Come può la mia attività diventare partner?",
    a: "Contattateci tramite il modulo online o direttamente per telefono. Valuteremo insieme le modalità di collaborazione più adatte.",
  },
  {
    q: "I pacchetti benessere sono disponibili per tutti?",
    a: "I pacchetti sono disponibili per tutti i pazienti, con condizioni ulteriormente agevolate per i partner convenzionati.",
  },
];

export default function ConvenzioniPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <div className="w-full bg-primary overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-5 h-px bg-white/40" />
              Territorio &amp; Collaborazioni
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-manrope text-white leading-[1.1] tracking-tight">
              Convenzioni e Partnership Locali
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-lg">
              Lo studio Fazi &amp; Bernacchia è attivamente convenzionato con realtà del territorio di Monsano e Agugliano. Vantaggi concreti per chi fa parte della nostra comunità locale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
              >
                Contattaci per info
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#pacchetti"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-white/10 transition-colors duration-200"
              >
                Pacchetti Benessere
              </Link>
            </div>
          </div>

          {/* Mini sedi badge */}
          <div className="hidden md:flex flex-col gap-3">
            {[
              { nome: "Sede Monsano", indirizzo: "Via Roma 123, 60030" },
              { nome: "Sede Agugliano", indirizzo: "Via Verdi 45, 60020" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 flex items-center gap-3">
                <MapPin size={18} className="text-white/60 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{s.nome}</p>
                  <p className="text-white/50 text-xs">{s.indirizzo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership */}
      <section className="w-full py-section bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">

          <FadeUp>
            <div className="mb-12">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Partner Attivi</p>
              <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">Le Nostre Partnership</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partner.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="group flex flex-col sm:flex-row gap-5 rounded-xl border border-secondary-container overflow-hidden hover:shadow-lg hover:shadow-text-main/5 transition-all duration-300">
                  {/* Immagine */}
                  <div className="relative w-full sm:w-40 aspect-video sm:aspect-auto sm:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.nome}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  {/* Testo */}
                  <div className="p-5 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] text-text-main/40 font-medium uppercase tracking-wider">{p.categoria}</span>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Convenzionato
                        </span>
                      </div>
                      <h3 className="font-bold text-text-main mb-2">{p.nome}</h3>
                      <p className="text-sm text-text-main/60 leading-relaxed">{p.desc}</p>
                    </div>
                    <Link href="/contatti" className="group/link inline-flex items-center gap-1.5 text-primary text-xs font-semibold">
                      Chiedi informazioni
                      <ArrowRight size={12} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="w-full py-section bg-surface border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">

          <FadeUp>
            <div className="mb-12">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Perché sceglierci</p>
              <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">Vantaggi per i Partner</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vantaggi.map((v, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-secondary-container p-6 h-full">
                  <CheckCircle2 size={20} className="text-primary mb-4" />
                  <h3 className="font-bold text-text-main mb-2">{v.titolo}</h3>
                  <p className="text-sm text-text-main/60 leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pacchetti Benessere */}
      <section id="pacchetti" className="w-full py-section bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">

          <FadeUp>
            <div className="mb-12">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Offerte Dedicate</p>
              <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">Pacchetti Benessere Sorriso</h2>
              <p className="mt-2 text-sm text-text-main/55 max-w-lg">
                Pacchetti clinici combinati per semplificare la cura del tuo sorriso. Condizioni vantaggiose per i partner convenzionati.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pacchetti.map((pkg, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="group flex flex-col rounded-xl border border-secondary-container overflow-hidden hover:shadow-lg hover:shadow-text-main/5 transition-all duration-300">
                  {/* Immagine */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.nome}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-main/20 to-transparent" />
                  </div>
                  {/* Contenuto */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div>
                      <h3 className="font-bold font-manrope text-text-main text-lg mb-2">{pkg.nome}</h3>
                      <p className="text-sm text-text-main/60 leading-relaxed">{pkg.desc}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {pkg.punti.map((punto, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-text-main/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {punto}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contatti"
                      className="mt-auto group/link inline-flex items-center gap-2 text-primary text-sm font-semibold"
                    >
                      Richiedi informazioni
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-section bg-surface border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto">

            <FadeUp>
              <div className="mb-10 text-center">
                <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Domande Frequenti</p>
                <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">FAQ Convenzioni</h2>
              </div>
            </FadeUp>

            <div className="space-y-4">
              {faq.map((item, i) => (
                <FadeUp key={i} delay={i * 0.07}>
                  <div className="bg-white rounded-xl border border-secondary-container p-6">
                    <h3 className="font-bold text-text-main mb-2">{item.q}</h3>
                    <p className="text-sm text-text-main/60 leading-relaxed">{item.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="w-full py-section bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeUp>
            <div className="bg-primary rounded-2xl p-10 md:p-14 text-center">
              <p className="text-white/50 text-[11px] uppercase tracking-widest mb-3">Inizia ora</p>
              <h2 className="text-3xl font-bold font-manrope text-white mb-4 tracking-tight">
                Vuoi attivare una convenzione?
              </h2>
              <p className="text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
                Contattate lo studio per conoscere le modalità di adesione. Sarà nostra cura rispondervi entro un giorno lavorativo.
              </p>
              <Link
                href="/contatti"
                className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-bold hover:bg-white/90 transition-colors duration-200"
              >
                Contattaci
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
