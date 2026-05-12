import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const medici = [
  {
    nome: "Dr. Riccardo Fazi",
    specializzazione: "Chirurgia Orale & Implantologia",
    bio: "Specializzato in chirurgia orale e implantologia avanzata. Coordina l'area clinica con un approccio orientato alla precisione e alla riabilitazione estetica.",
    titoli: [
      "Laurea con lode in Odontoiatria e Protesi Dentaria",
      "Master in Implantologia Osteointegrata",
      "Aggiornamento continuo in tecniche digitali",
    ],
    immagine: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
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
    immagine: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
  },
];

const staff = [
  {
    nome: "Giulia M.",
    ruolo: "Igienista Dentale",
    desc: "Responsabile delle sedute di igiene professionale e dei protocolli di prevenzione.",
  },
  {
    nome: "Sara T.",
    ruolo: "Assistente alla Poltrona",
    desc: "Supporto clinico durante le procedure, con particolare attenzione al comfort del paziente.",
  },
  {
    nome: "Marco B.",
    ruolo: "Assistente alla Poltrona",
    desc: "Gestione dello strumentario e assistenza nelle procedure implantologiche.",
  },
  {
    nome: "Elena R.",
    ruolo: "Segreteria e Accoglienza",
    desc: "Coordinamento delle prenotazioni, gestione amministrativa e prima accoglienza.",
  },
];

export default function Medici({ preview = false }: { preview?: boolean }) {
  return (
    <section id="chi-siamo" className={`w-full py-section ${preview ? "bg-white" : "bg-surface"}`}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Intestazione */}
        <div className={`mb-12 ${preview ? "text-center" : ""}`}>
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Il Nostro Team</p>
          <h2 className="text-3xl font-bold font-manrope text-text-main">I Professionisti dello Studio</h2>
        </div>

        {/* Medici principali */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {medici.map((medico, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-white rounded-lg border border-secondary-container"
            >
              {/* Foto */}
              <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 relative rounded overflow-hidden border border-secondary-container">
                <Image
                  src={medico.immagine}
                  alt={medico.nome}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold font-manrope text-text-main">{medico.nome}</h3>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{medico.specializzazione}</p>
                <p className="text-sm text-text-main/65 leading-relaxed mb-3">{medico.bio}</p>
                <ul className="space-y-1">
                  {medico.titoli.map((titolo, i) => (
                    <li key={i} className="text-xs text-text-main/50 flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">—</span>
                      {titolo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Link a chi siamo completo (solo in preview) */}
        {preview && (
          <div className="mb-16 text-center">
            <Link href="/chi-siamo" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
              Scopri il team completo <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* Staff */}
        {!preview && (
          <div>
            <div className="mb-8 pb-6 border-b border-secondary-container">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">Collaboratori</p>
              <h3 className="text-2xl font-bold font-manrope text-text-main">Il Nostro Staff</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {staff.map((persona, index) => (
                <div key={index} className="flex gap-4 p-5 bg-white rounded-lg border border-secondary-container">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {persona.nome[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-sm">{persona.nome}</h4>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-1">{persona.ruolo}</p>
                    <p className="text-xs text-text-main/60 leading-relaxed">{persona.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
