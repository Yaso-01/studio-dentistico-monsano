import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Studio Dentistico Fazi e Bernacchia",
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Page header */}
      <div className="w-full py-16 md:py-20 bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Informativa legale</p>
          <h1 className="text-4xl md:text-5xl font-bold font-manrope text-text-main tracking-tight mb-3">Cookie Policy</h1>
          <p className="text-text-main/55 max-w-xl leading-relaxed text-sm">
            Informazioni sull&apos;uso dei cookie e delle tecnologie di tracciamento su questo sito.
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
              <h2 className="text-base font-bold font-manrope text-text-main">1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell&apos;utente durante la
                navigazione. Permettono al sito di ricordare azioni e preferenze dell&apos;utente (ad es. la scelta sulla
                gestione dei cookie) per un determinato periodo di tempo.
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">2. Cookie tecnici e necessari</h2>
              <p>
                Questo sito utilizza esclusivamente cookie tecnici necessari al suo corretto funzionamento.
                Non vengono utilizzati cookie di profilazione, né cookie di terze parti per finalità pubblicitarie o di
                marketing.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-secondary-container/50">
                      <th className="text-left p-3 font-semibold text-text-main border border-secondary-container">Nome</th>
                      <th className="text-left p-3 font-semibold text-text-main border border-secondary-container">Tipo</th>
                      <th className="text-left p-3 font-semibold text-text-main border border-secondary-container">Finalità</th>
                      <th className="text-left p-3 font-semibold text-text-main border border-secondary-container">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3 border border-secondary-container font-mono">cookie-consent</td>
                      <td className="p-3 border border-secondary-container">localStorage</td>
                      <td className="p-3 border border-secondary-container">
                        Memorizza la scelta dell&apos;utente in merito ai cookie per non mostrare il banner a ogni visita.
                      </td>
                      <td className="p-3 border border-secondary-container">Persistente (fino alla cancellazione manuale)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-text-main/55 text-xs">
                Il dato viene salvato in <code className="font-mono bg-secondary-container/60 px-1 py-0.5 rounded">localStorage</code> del
                browser, non come cookie HTTP tradizionale. Non viene trasmesso ai server del sito ad ogni richiesta.
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">3. Font (caratteri tipografici)</h2>
              <p>
                I caratteri tipografici utilizzati su questo sito sono caricati tramite la libreria{" "}
                <code className="font-mono bg-secondary-container/60 px-1 py-0.5 rounded">next/font</code>, che li
                auto-ospita localmente al momento della pubblicazione del sito. Non vengono effettuate richieste
                ai server di Google Fonts durante la navigazione: <strong className="text-text-main">nessun cookie di terze
                parti viene impostato per i font</strong>.
              </p>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">4. Mappa (Google Maps)</h2>
              <p>
                Le indicazioni stradali per raggiungere lo studio sono fornite tramite <strong className="text-text-main">link
                esterni</strong> a Google Maps (Google LLC). Facendo clic su un collegamento mappa si viene reindirizzati al
                sito di Google, dove si applicano le{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors"
                >
                  politiche sulla privacy di Google
                </a>
                . <strong className="text-text-main">Non è incorporata alcuna mappa tramite iframe</strong> in questa pagina:
                il caricamento della pagina non comporta di per sé l&apos;invio di dati a Google né l&apos;impostazione di
                cookie da parte di Google.
              </p>
              <p className="text-text-main/55 text-xs">
                Qualora in futuro venisse integrata una mappa Google Maps incorporata (iframe), essa sarà gateata
                dal consenso dell&apos;utente e aggiunta a questa policy.
              </p>
            </div>

            {/* 5 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">5. Analisi e tracciamento di terze parti</h2>
              <p>
                Al momento <strong className="text-text-main">non sono presenti</strong> sistemi di analisi, statistiche
                o tracciamento di terze parti (es. Google Analytics, Meta Pixel). Qualora venissero introdotti in futuro,
                questa Cookie Policy sarà aggiornata e sarà richiesto il consenso dell&apos;utente tramite il banner cookie.
              </p>
            </div>

            {/* 6 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">6. Gestione del consenso</h2>
              <p>
                Alla prima visita viene mostrato un banner che consente di:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-text-main">Accettare</strong> tutti i cookie (tecnici + eventuali futuri cookie analitici);</li>
                <li><strong className="text-text-main">Limitarsi ai soli cookie necessari</strong>.</li>
              </ul>
              <p>
                La scelta viene memorizzata in <code className="font-mono bg-secondary-container/60 px-1 py-0.5 rounded">localStorage</code>{" "}
                e il banner non viene mostrato nelle visite successive. È possibile modificare le preferenze in
                qualsiasi momento tramite il controllo{" "}
                <strong className="text-text-main">&ldquo;Gestisci cookie&rdquo;</strong> presente in fondo a ogni pagina del sito.
              </p>
            </div>

            {/* 7 */}
            <div className="space-y-3">
              <h2 className="text-base font-bold font-manrope text-text-main">7. Contatti</h2>
              <p>
                Per informazioni sulla presente Cookie Policy o sul trattamento dei dati personali, consultare la{" "}
                <a href="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                  Privacy Policy
                </a>{" "}
                o contattare il Titolare del Trattamento ai recapiti ivi indicati.
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
