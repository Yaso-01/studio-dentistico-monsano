import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

const medici = [
  {
    nome: "Dr. Riccardo Fazi",
    specializzazione: "Chirurgia Orale & Implantologia",
    bio: "Specializzato in chirurgia orale e implantologia avanzata, coordina l'area clinica con un approccio orientato alla precisione e alla riabilitazione estetica complessa.",
    titoli: [
      "Laurea con lode in Odontoiatria e Protesi Dentaria",
      "Master in Implantologia Osteointegrata",
      "Aggiornamento continuo in tecniche digitali 3D",
    ],
    immagine: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    nome: "Dr.ssa Laura Bernacchia",
    specializzazione: "Ortodonzia & Odontoiatria Pediatrica",
    bio: "Si dedica all'ortodonzia invisibile e alla cura dei pazienti più giovani. Il suo approccio attento e comunicativo crea un ambiente sereno per ogni visita.",
    titoli: [
      "Specializzazione in Ortodonzia",
      "Certificazione Invisalign Platinum Provider",
      "Esperta in odontoiatria materno-infantile",
    ],
    immagine: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
];

const staff = [
  {
    nome: "Giulia M.",
    ruolo: "Igienista Dentale",
    desc: "Responsabile dei protocolli di igiene professionale e prevenzione.",
  },
  {
    nome: "Sara T.",
    ruolo: "Assistente alla Poltrona",
    desc: "Supporto clinico durante le procedure, con attenzione al comfort del paziente.",
  },
  {
    nome: "Marco B.",
    ruolo: "Assistente alla Poltrona",
    desc: "Gestione dello strumentario e assistenza nelle procedure implantologiche.",
  },
  {
    nome: "Elena R.",
    ruolo: "Segreteria e Accoglienza",
    desc: "Coordinamento delle prenotazioni e prima accoglienza in entrambe le sedi.",
  },
];

export default function Medici({ preview = false }: { preview?: boolean }) {
  return (
    <section id="chi-siamo" className={`w-full py-section ${preview ? "bg-surface-warm" : "bg-white"}`}>
      <div className="max-w-[1200px] mx-auto px-6">

        <FadeUp>
          <div className={`mb-14 ${preview ? "" : ""}`}>
            <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Il Nostro Team</p>
            <h2 className="text-3xl font-bold font-manrope text-text-main tracking-tight">
              I Professionisti dello Studio
            </h2>
          </div>
        </FadeUp>

        {/* Cards medici */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {medici.map((medico, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="group bg-surface rounded-2xl border border-secondary-container p-7 flex flex-col gap-5 hover:shadow-lg hover:shadow-text-main/5 transition-all duration-300">

                {/* Foto + info header */}
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                    <Image
                      src={medico.immagine}
                      alt={medico.nome}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold font-manrope text-text-main text-lg leading-snug">{medico.nome}</h3>
                    <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.12em] mt-0.5">
                      {medico.specializzazione}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-text-main/60 leading-relaxed">{medico.bio}</p>

                {/* Titoli */}
                <ul className="space-y-1.5 pt-1 border-t border-secondary-container">
                  {medico.titoli.map((titolo, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-main/50">
                      <span className="text-primary/60 mt-px shrink-0">—</span>
                      {titolo}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA preview */}
        {preview && (
          <FadeUp delay={0.2}>
            <div className="text-center">
              <Link
                href="/chi-siamo"
                className="group inline-flex items-center gap-2 text-primary text-sm font-semibold"
              >
                Scopri il team completo
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeUp>
        )}

        {/* Staff section — solo pagina completa */}
        {!preview && (
          <div className="mt-16 pt-12 border-t border-secondary-container">
            <FadeUp>
              <div className="mb-8">
                <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Collaboratori</p>
                <h3 className="text-2xl font-bold font-manrope text-text-main tracking-tight">Il Nostro Staff</h3>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {staff.map((persona, index) => (
                <FadeUp key={index} delay={index * 0.07}>
                  <div className="flex gap-4 p-5 bg-surface rounded-xl border border-secondary-container hover:shadow-md hover:shadow-text-main/5 transition-all duration-300">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {persona.nome[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">{persona.nome}</h4>
                      <p className="text-primary text-[10px] font-semibold uppercase tracking-wider mb-1">{persona.ruolo}</p>
                      <p className="text-xs text-text-main/55 leading-relaxed">{persona.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
