import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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

        {/* Intestazione */}
        <div className="mb-12">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Dove Siamo</p>
          <h2 className="text-3xl font-bold font-manrope text-text-main">Le Nostre Sedi</h2>
          <p className="text-sm text-text-main/60 mt-2">Due strutture al servizio del territorio locale.</p>
        </div>

        {/* Due sedi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sedi.map((sede, i) => (
            <div key={i} className="bg-white rounded-lg border border-secondary-container overflow-hidden">
              {/* Header sede */}
              <div className="px-6 py-4 border-b border-secondary-container bg-primary/5">
                <h3 className="font-bold font-manrope text-text-main">{sede.nome}</h3>
              </div>

              {/* Dettagli */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-text-main/80">{sede.indirizzo}</p>
                    <p className="text-sm text-text-main/80">{sede.cap}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <a href={`tel:${sede.telefono.replace(/\s/g, "")}`} className="text-sm text-text-main/80 hover:text-primary transition-colors">
                    {sede.telefono}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <a href={`mailto:${sede.email}`} className="text-sm text-text-main/80 hover:text-primary transition-colors">
                    {sede.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    {sede.orari.map((o, j) => (
                      <div key={j} className="flex gap-4 text-sm">
                        <span className="text-text-main/50 w-28">{o.giorni}</span>
                        <span className="text-text-main/80 font-medium">{o.ore}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placeholder mappa */}
                <div className="mt-4 w-full h-32 rounded bg-secondary-container/60 flex items-center justify-center border border-secondary-container">
                  <span className="text-xs text-text-main/40 flex items-center gap-1.5">
                    <MapPin size={14} />
                    Visualizza su Google Maps
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form contatto */}
        <div className="bg-white p-8 rounded-lg border border-secondary-container">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-manrope text-text-main">Inviaci un messaggio</h3>
            <p className="text-sm text-text-main/60 mt-1">Rispondiamo entro un giorno lavorativo.</p>
          </div>

          <form className="space-y-4 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-main/60 uppercase tracking-wide">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Mario Rossi"
                  className="w-full px-4 py-2.5 rounded border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-main/60 uppercase tracking-wide">Telefono</label>
                <input
                  type="tel"
                  placeholder="+39 333 000 0000"
                  className="w-full px-4 py-2.5 rounded border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-main/60 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  placeholder="mario.rossi@email.it"
                  className="w-full px-4 py-2.5 rounded border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-main/60 uppercase tracking-wide">Sede di preferenza</label>
                <select className="w-full px-4 py-2.5 rounded border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all text-sm bg-white appearance-none">
                  <option value="">Seleziona una sede...</option>
                  <option value="monsano">Monsano</option>
                  <option value="agugliano">Agugliano</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-main/60 uppercase tracking-wide">Messaggio</label>
              <textarea
                rows={4}
                placeholder="Come possiamo aiutarvi?"
                className="w-full px-4 py-2.5 rounded border border-secondary-container focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none transition-all resize-none text-sm"
              ></textarea>
            </div>

            <button className="bg-primary text-white px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors">
              Invia Richiesta <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
