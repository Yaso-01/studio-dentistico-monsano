import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

const sedi = [
  {
    nome: "Sede di Monsano",
    indirizzo: "Via Roma 123",
    cap: "60030 Monsano (AN)",
    telefono: "+39 0731 123456",
    email: "monsano@fazibernacchia.it",
    orari: [
      { giorni: "Lun – Ven", ore: "09:00 – 19:30" },
      { giorni: "Sabato", ore: "09:00 – 13:00" },
      { giorni: "Domenica", ore: "Chiuso" },
    ],
  },
  {
    nome: "Sede di Agugliano",
    indirizzo: "Via Verdi 45",
    cap: "60020 Agugliano (AN)",
    telefono: "+39 071 987654",
    email: "agugliano@fazibernacchia.it",
    orari: [
      { giorni: "Lun – Ven", ore: "08:30 – 18:30" },
      { giorni: "Sabato", ore: "09:00 – 12:30" },
      { giorni: "Domenica", ore: "Chiuso" },
    ],
  },
];

export default function Contatti() {
  return (
    <section id="contatti" className="w-full py-section bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Due sedi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {sedi.map((sede, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl border border-secondary-container overflow-hidden h-full">
                {/* Header sede */}
                <div className="px-6 py-4 border-b border-secondary-container bg-primary/[0.04]">
                  <h3 className="font-bold font-manrope text-text-main">{sede.nome}</h3>
                </div>

                {/* Dettagli */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                    <div className="text-sm text-text-main/70">
                      <p>{sede.indirizzo}</p>
                      <p>{sede.cap}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={15} className="text-primary shrink-0" />
                    <a
                      href={`tel:${sede.telefono.replace(/\s/g, "")}`}
                      className="text-sm text-text-main/70 hover:text-primary transition-colors"
                    >
                      {sede.telefono}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={15} className="text-primary shrink-0" />
                    <a
                      href={`mailto:${sede.email}`}
                      className="text-sm text-text-main/70 hover:text-primary transition-colors"
                    >
                      {sede.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={15} className="text-primary mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      {sede.orari.map((o, j) => (
                        <div key={j} className="flex gap-5 text-sm">
                          <span className="text-text-main/45 w-24 shrink-0">{o.giorni}</span>
                          <span className="text-text-main/70 font-medium">{o.ore}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Placeholder mappa */}
                  <div className="mt-2 w-full h-28 rounded-lg bg-secondary-container/50 flex items-center justify-center border border-secondary-container">
                    <span className="text-xs text-text-main/35 flex items-center gap-1.5">
                      <MapPin size={13} />
                      Visualizza su Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Form contatto */}
        <FadeUp delay={0.2}>
          <div className="bg-white p-8 md:p-10 rounded-xl border border-secondary-container">
            <div className="mb-7">
              <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">Scrivici</p>
              <h3 className="text-2xl font-bold font-manrope text-text-main tracking-tight">Inviaci un messaggio</h3>
              <p className="text-sm text-text-main/55 mt-1">Rispondiamo entro un giorno lavorativo.</p>
            </div>

            <form className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Mario Rossi"
                    className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Telefono</label>
                  <input
                    type="tel"
                    placeholder="+39 333 000 0000"
                    className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="mario.rossi@email.it"
                    className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Sede di preferenza</label>
                  <select className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm bg-white appearance-none">
                    <option value="">Seleziona una sede...</option>
                    <option value="monsano">Monsano</option>
                    <option value="agugliano">Agugliano</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-main/50 uppercase tracking-wide">Messaggio</label>
                <textarea
                  rows={4}
                  placeholder="Come possiamo aiutarvi?"
                  className="w-full px-4 py-2.5 rounded-md border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all resize-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
              >
                Invia Richiesta
                <Send size={15} />
              </button>
            </form>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
