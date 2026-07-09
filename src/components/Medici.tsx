import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

const medici = [
  {
    nome: "Dott. Francesco Fazi",
    // TODO: testo in bozza, da far approvare al cliente
    specializzazione: "Chirurgia Implantare & Parodontologia",
    // TODO: testo in bozza, da far approvare al cliente
    bio: "Laureato nel 1999 con il massimo dei voti, si è specializzato in parodontologia e chirurgia implantare. Socio ordinario SIDP, svolge attività di chirurgia implantare e protesi anche come consulente presso altri studi.",
    titoli: [
      "Laurea con lode (1999) — Università Politecnica delle Marche",
      "Corso di perfezionamento in endodonzia (2000)",
      "Socio ordinario SIDP",
    ],
    immagine: "/images/team/fazi-francesco.jpg",
  },
  {
    nome: "Dott.ssa Ilaria Bernacchia Ricciotti",
    // TODO: testo in bozza, da far approvare al cliente
    specializzazione: "Endodonzia & Protesi Fissa",
    // TODO: testo in bozza, da far approvare al cliente
    bio: "Laureata nel 2002 con il massimo dei voti, ha approfondito endodonzia, conservativa e protesi fissa, perfezionandosi con i master dei Dottori Fradeani e Loi. Dal 2003 al 2010 è stata medico volontario in Odontostomatologia all'Ospedale Regionale di Torrette.",
    titoli: [
      "Laurea con lode (2002) — Università Politecnica delle Marche",
      "Volontariato in Odontostomatologia, Ospedale di Torrette (2003–2010)",
      "Master di protesi fissa (Dott. Fradeani, 2011) e tecnica BOPT (Prof. Loi, 2018)",
    ],
    immagine: "/images/team/bernacchia-ilaria.jpg",
  },
  {
    nome: "Dott. Alessio Calamante",
    // TODO: testo in bozza, da far approvare al cliente
    specializzazione: "Ortodonzia & Invisalign",
    // TODO: testo in bozza, da far approvare al cliente
    bio: "Laureato nel 2007, si dedica all'ortodonzia con un percorso di perfezionamento tra Firenze e Bologna. È socio ordinario SIDO e provider certificato Platinum per Invisalign.",
    titoli: [
      "Laureato nel 2007 — Università Politecnica delle Marche",
      "Corsi di perfezionamento in ortodonzia (Dott. Fortini, Firenze; Dott. Ratti, Bologna)",
      "Socio ordinario SIDO — Provider certificato Platinum Invisalign",
    ],
    // TODO: aggiungere foto reale quando disponibile
    immagine: null,
  },
  {
    nome: "Dott.ssa Stefania Incani",
    // TODO: testo in bozza, da far approvare al cliente
    specializzazione: "Ortodonzia Funzionale & Invisibile",
    // TODO: testo in bozza, da far approvare al cliente
    bio: "Laureata con lode nel 2000, esercita da oltre 25 anni come ortodontista esclusivista. Si dedica a tutte le principali discipline ortodontiche, dall'ortodonzia funzionale e fissa agli allineatori trasparenti.",
    titoli: [
      "Laureata con lode (19 luglio 2000) — Università Politecnica delle Marche",
      "Oltre 25 anni come ortodontista esclusivista",
      "Ortodonzia funzionale, fissa, allineatori trasparenti, prechirurgica e preprotesica",
    ],
    immagine: "/images/team/incani-stefania.jpg",
  },
];

const staff = [
  {
    nome: "Alessia Papili",
    ruolo: "ASO",
    // TODO: testo in bozza, da far approvare al cliente
    desc: "Supporto clinico e organizzativo durante le procedure odontoiatriche.",
    // TODO: aggiungere foto reale quando disponibile
    foto: null,
  },
  {
    nome: "Elisa Pacetti",
    ruolo: "Igienista Dentale",
    desc: "Mi sono laureata con lode presso l'Università Politecnica delle Marche nel 2015. Ho conseguito vari corsi di approfondimento sullo sbiancamento dentale e resine infiltranti. Inoltre, ho ottenuto la certificazione per il protocollo GBT (Guided Biofilm Therapy), offrendo ai miei pazienti un metodo innovativo e delicato per la loro salute orale.",
    foto: "/images/team/pacetti-elisa.jpg",
  },
  {
    nome: "Agnese Bordoni",
    ruolo: "Igienista Dentale",
    desc: "Sono Agnese Bordoni, igienista dentale laureata nel 2015 presso l'Università Politecnica delle Marche. Credo che un sorriso sano nasca dalla prevenzione, dall'ascolto e da un rapporto di fiducia con ogni paziente.",
    // TODO: aggiungere foto reale quando disponibile
    foto: null,
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

        {/* Cards medici — in preview mostra solo i due fondatori */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {(preview ? medici.slice(0, 2) : medici).map((medico, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="group bg-surface rounded-2xl border border-secondary-container p-7 flex flex-col gap-5 hover:shadow-lg hover:shadow-text-main/5 transition-all duration-300">

                {/* Foto + info header */}
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                    {medico.immagine ? (
                      <Image
                        src={medico.immagine}
                        alt={medico.nome}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <User className="text-primary/50" size={32} />
                      </div>
                    )}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {staff.map((persona, index) => (
                <FadeUp key={index} delay={index * 0.07}>
                  <div className="flex flex-col gap-4 p-5 bg-surface rounded-xl border border-secondary-container hover:shadow-md hover:shadow-text-main/5 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                        {persona.foto ? (
                          <Image
                            src={persona.foto}
                            alt={persona.nome}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                            <User className="text-primary/50" size={32} />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-text-main text-sm">{persona.nome}</h4>
                        <p className="text-primary text-[10px] font-semibold uppercase tracking-wider">{persona.ruolo}</p>
                      </div>
                    </div>
                    <p className="text-xs text-text-main/55 leading-relaxed">{persona.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Nota corsi BLS-D */}
            <FadeUp delay={0.15}>
              <div className="mt-8 p-4 rounded-lg border border-secondary-container bg-surface">
                <p className="text-xs text-text-main/55 leading-relaxed italic">
                  Con frequenza biennale tutti i membri dello staff svolgono, inoltre, il corso BLS-D per la gestione delle emergenze e l&apos;uso del defibrillatore.
                </p>
              </div>
            </FadeUp>
          </div>
        )}

      </div>
    </section>
  );
}
