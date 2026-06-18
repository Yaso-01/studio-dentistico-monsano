import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Studio Dentistico Fazi e Bernacchia",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Page header */}
      <div className="w-full py-16 md:py-20 bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Informativa legale</p>
          <h1 className="text-4xl md:text-5xl font-bold font-manrope text-text-main tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-text-main/55 max-w-xl leading-relaxed text-sm">
            Informativa sul trattamento dei dati personali ai sensi dell&apos;art.&nbsp;13 del Regolamento (UE) 2016/679 (GDPR).
          </p>
        </div>
      </div>

      <section className="w-full py-section bg-surface">
        <div className="max-w-3xl mx-auto px-6">

          {/* Draft notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-12">
            <p className="text-sm text-amber-800 leading-relaxed">
              ⚠️ Bozza da completare con i dati dello studio e da far verificare prima della pubblicazione definitiva.
            </p>
          </div>

          <div className="space-y-10 text-sm text-text-main/80 leading-relaxed">

            {/* 1 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">1. Titolare del Trattamento</h2>
              <p>
                <strong className="text-text-main">{"{{TITOLARE}}"}</strong><br />
                {"{{INDIRIZZO}}"}<br />
                {"C.F./P.IVA: {{PIVA_O_CF}}"}<br />
                {"Email/PEC: {{EMAIL_O_PEC}}"}<br />
                {"Telefono: {{TELEFONO}}"}
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">2. Dati personali trattati</h2>
              <p>
                Tramite il modulo di contatto presente su questo sito raccogliamo i seguenti dati personali:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Messaggio libero (che potrebbe contenere informazioni relative alla salute)</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">3. Finalità e base giuridica del trattamento</h2>
              <p>I dati vengono trattati per le seguenti finalità:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong className="text-text-main">Rispondere alle richieste di contatto e informazioni</strong> —
                  base giuridica: misure precontrattuali su richiesta dell&apos;interessato (art.&nbsp;6(1)(b) GDPR).
                </li>
                <li>
                  <strong className="text-text-main">Gestione degli appuntamenti e della relazione con il paziente</strong> —
                  base giuridica: esecuzione del contratto (art.&nbsp;6(1)(b) GDPR).
                </li>
              </ul>
              <p>
                Qualora il messaggio contenga dati relativi alla salute, il trattamento avviene ai sensi
                dell&apos;art.&nbsp;9(2)(h) GDPR per finalità di medicina preventiva, diagnosi o terapia sanitaria.
              </p>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">4. Periodo di conservazione</h2>
              <p>
                I dati saranno conservati per il tempo strettamente necessario a evadere la richiesta e, successivamente,
                per il periodo previsto dagli obblighi normativi applicabili (tra cui la normativa sulla conservazione della
                documentazione clinica).
              </p>
            </div>

            {/* 5 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">5. Destinatari dei dati</h2>
              <p>I dati non vengono ceduti, venduti o comunicati a terzi, salvo:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>personale dello studio espressamente autorizzato al trattamento;</li>
                <li>
                  fornitori di servizi tecnici (hosting, posta elettronica) che agiscono in qualità di responsabili
                  del trattamento ai sensi dell&apos;art.&nbsp;28 GDPR;
                </li>
                <li>autorità competenti, in caso di obbligo di legge.</li>
              </ul>
            </div>

            {/* 6 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">6. Trasferimento verso Paesi terzi</h2>
              <p>
                I dati non vengono trasferiti verso Paesi al di fuori dell&apos;Unione Europea, salvo diversa e specifica
                comunicazione.
              </p>
            </div>

            {/* 7 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">7. Diritti dell&apos;interessato (artt.&nbsp;15–22 GDPR)</h2>
              <p>L&apos;interessato ha il diritto di:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-text-main">Accesso</strong> ai propri dati personali (art.&nbsp;15);</li>
                <li><strong className="text-text-main">Rettifica</strong> dei dati inesatti o incompleti (art.&nbsp;16);</li>
                <li><strong className="text-text-main">Cancellazione</strong> («diritto all&apos;oblio») (art.&nbsp;17);</li>
                <li><strong className="text-text-main">Limitazione</strong> del trattamento (art.&nbsp;18);</li>
                <li><strong className="text-text-main">Portabilità</strong> dei dati (art.&nbsp;20);</li>
                <li><strong className="text-text-main">Opposizione</strong> al trattamento (art.&nbsp;21);</li>
                <li>
                  non essere sottoposto a decisioni basate <strong className="text-text-main">unicamente su trattamento automatizzato</strong> (art.&nbsp;22).
                </li>
              </ul>
            </div>

            {/* 8 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">8. Come esercitare i diritti</h2>
              <p>
                Per esercitare i propri diritti o per qualsiasi informazione relativa al trattamento dei dati personali,
                è possibile contattare il Titolare del Trattamento scrivendo a:{" "}
                <strong className="text-text-main">{"{{EMAIL_O_PEC}}"}</strong>.
              </p>
            </div>

            {/* 9 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">9. Diritto di reclamo</h2>
              <p>
                L&apos;interessato ha il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali
                (Piazza Venezia 11, 00187 Roma —{" "}
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors"
                >
                  www.garanteprivacy.it
                </a>
                ).
              </p>
            </div>

            <p className="text-text-main/40 text-xs pt-4 border-t border-secondary-container">
              Ultimo aggiornamento: giugno 2026
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
