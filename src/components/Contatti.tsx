import { MapPin, Phone, Smartphone, Mail, Clock } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";
import { whatsappUrl, STUDIO_PHONE, STUDIO_MOBILE, STUDIO_EMAIL } from "@/lib/contact";
import ContactForm from "@/components/ContactForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

const sedi = [
  {
    nome: "Sede di Monsano",
    indirizzo: "Largo Due Querce 85/B",
    cap: "60030 Monsano (AN)",
    orari: [
      { giorni: "Lunedì", ore: "9:00–12:00 · 15:00–19:00" },
      { giorni: "Martedì", ore: "15:00–19:00 (2 al mese)" },
      { giorni: "Giovedì", ore: "15:00–19:00" },
    ],
  },
  {
    nome: "Sede di Agugliano",
    indirizzo: "Via Sebastiano Petrelli 2/A",
    cap: "60020 Agugliano (AN)",
    orari: [
      { giorni: "Martedì", ore: "15:00–19:00 (2 al mese)" },
      { giorni: "Mercoledì", ore: "15:00–19:00" },
      { giorni: "Venerdì", ore: "9:00–12:00 · 15:00–19:00" },
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
                      href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`}
                      className="text-sm text-text-main/70 hover:text-primary transition-colors"
                    >
                      Tel. {STUDIO_PHONE}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Smartphone size={15} className="text-primary shrink-0" />
                    <a
                      href={`tel:${STUDIO_MOBILE.replace(/\s/g, "")}`}
                      className="text-sm text-text-main/70 hover:text-primary transition-colors"
                    >
                      Cell. {STUDIO_MOBILE}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} className="text-primary shrink-0" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-main/70 hover:text-primary transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={15} className="text-primary shrink-0" />
                    <a
                      href={`mailto:${STUDIO_EMAIL}`}
                      className="text-sm text-text-main/70 hover:text-primary transition-colors"
                    >
                      {STUDIO_EMAIL}
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

                  <GoogleMapEmbed address={`${sede.indirizzo}, ${sede.cap}`} label={sede.nome} />
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

            <ContactForm />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
