import type { Metadata } from "next";
import ServiceSection from "@/components/ServiceSection";
import AltriServizi from "@/components/AltriServizi";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Servizi | Studio Dentistico Fazi e Bernacchia",
  description: "Igiene dentale, implantologia, ortodonzia, parodontologia e sbiancamento: le specializzazioni dello Studio Dentistico Fazi e Bernacchia a Monsano e Agugliano (AN).",
  alternates: {
    canonical: "/servizi",
  },
};

export default function ServiziPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">

      {/* Page Header */}
      <div className="w-full py-16 md:py-20 bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">Le Nostre Specializzazioni</p>
          <h1 className="text-4xl md:text-5xl font-bold font-manrope text-text-main tracking-tight mb-3">
            Trattamenti Odontoiatrici
          </h1>
          <p className="text-text-main/55 max-w-xl leading-relaxed">
            Soluzioni professionali per ogni esigenza, disponibili nelle sedi di Monsano e Agugliano con un approccio clinico preciso e personalizzato.
          </p>
        </div>
      </div>

      <ServiceSection
        title="Protesi Dentali"
        description="Permette di riabilitare funzione ed estetica delle arcate dentarie."
        benefits={[
          // TODO: testo in bozza, da far approvare al cliente
          "Ripristina una masticazione efficace e naturale",
          // TODO: testo in bozza, da far approvare al cliente
          "Migliora l'estetica del sorriso",
          // TODO: testo in bozza, da far approvare al cliente
          "Soluzioni su misura per ogni esigenza",
          // TODO: testo in bozza, da far approvare al cliente
          "Materiali di qualità per risultati duraturi",
        ]}
        process={[
          { step: "Studio del Caso", desc: "Tramite foto, modelli e analisi della funzione masticatoria." },
          { step: "Preparazione", desc: "Limatura dei denti per applicare i provvisori." },
          { step: "Prova Estetica e Funzionale", desc: "Si valuta la precisione del manufatto e la qualità estetica." },
          { step: "Consegna", desc: "Cementazione definitiva del manufatto protesico." },
        ]}
        heroImage="/images/servizi-faccette.jpeg"
        reverse={true}
        imageAnchor="bottom"
      />

      <ServiceSection
        title="Igiene Dentale"
        description="La prevenzione è la base di un sorriso sano e duraturo. Procedura in cui si rimuove placca e tartaro, prevenendo parodontiti e gengiviti."
        benefits={[
          "Prevenzione efficace di carie e gengiviti",
          "Rimozione sicura di tartaro e macchie superficiali",
          "Mantenimento della salute dei tessuti parodontali",
          "Sedute confortevoli senza sensibilità termica",
        ]}
        process={[
          { step: "Rilevazione Placca", desc: "Localizzatore cromatico per evidenziare il biofilm." },
          { step: "Ablazione Tartaro", desc: "Tecnologia a ultrasuoni o air flow." },
          { step: "Lucidatura", desc: "Rimozione delle macchie tramite pasta abrasiva." },
        ]}
        heroImage="/images/hero_igiene_1777945951088.png"
      />

      <ServiceSection
        title="Chirurgia Implantare"
        description="Restituiamo funzionalità ed estetica tramite l'inserimento di viti in titanio nell'osso mascellare o mandibolare per sostituire le radici dei denti mancanti."
        benefits={[
          "Ripristino completo della capacità masticatoria",
          "Risultati estetici naturali e armonici",
          "Preservazione dell'osso mascellare e dei denti adiacenti",
        ]}
        process={[
          { step: "Pianificazione e Progettazione dell'Intervento", desc: "Dopo valutazione con modelli e rx 2D e 3D." },
          { step: "Chirurgia", desc: "Inserimento della o delle viti implantari nell'osso." },
          { step: "Carico Protesico", desc: "Inserimento di corona o protesi definitiva sopra gli impianti." },
        ]}
        heroImage="/images/servizi-implantologia.jpeg"
        reverse={true}
      />

      <ServiceSection
        title="Parodontologia"
        description="Si occupa della salute dei tessuti di sostegno dei denti: gengive, osso alveolare, legamento parodontale e cemento radicolare."
        benefits={[
          // TODO: testo in bozza, da far approvare al cliente
          "Diagnosi precoce di gengiviti e parodontiti",
          // TODO: testo in bozza, da far approvare al cliente
          "Riduzione di sanguinamento e infiammazione gengivale",
          // TODO: testo in bozza, da far approvare al cliente
          "Prevenzione della perdita dei denti",
          // TODO: testo in bozza, da far approvare al cliente
          "Salute gengivale nel tempo",
        ]}
        process={[
          { step: "Visita Parodontale", desc: "Valutazione clinica e sondaggio parodontale." },
          { step: "Terapia Causale", desc: "Igiene profonda e rimozione del tartaro sottogengivale." },
          { step: "Terapia Chirurgica", desc: "Nei casi più avanzati, quando necessaria." },
          { step: "Mantenimento", desc: "Richiami periodici per la salute gengivale nel tempo." },
        ]}
        heroImage="/images/servizi-intervento.jpg"
      />

      <ServiceSection
        title="Ortodonzia Tradizionale"
        description="Previene e corregge le malocclusioni e i disallineamenti dentali. Il suo scopo è estetico e ripristina la corretta masticazione, respirazione e fonazione."
        benefits={[
          // TODO: testo in bozza, da far approvare al cliente
          "Corregge malocclusioni anche complesse",
          // TODO: testo in bozza, da far approvare al cliente
          "Adatta a bambini e adulti",
          // TODO: testo in bozza, da far approvare al cliente
          "Ripristina una corretta masticazione e respirazione",
          // TODO: testo in bozza, da far approvare al cliente
          "Risultati stabili nel tempo",
        ]}
        process={[
          { step: "Diagnosi e Piano di Trattamento", desc: "Tramite modelli e tracciati cefalometrici." },
          { step: "Ortodonzia Funzionale", desc: "Applicazione di apparecchi mobili e fissi per correggere la crescita ossea." },
          { step: "Ortodonzia Fissa", desc: "Per il corretto allineamento dei denti." },
          // TODO: testo in bozza, da far approvare al cliente
          { step: "Monitoraggio", desc: "Controlli periodici per verificare i progressi del trattamento." },
        ]}
        heroImage="/images/servizi-diagnosi.jpg"
        reverse={true}
      />

      <ServiceSection
        title="Ortodonzia Invisibile"
        description="Trattamento per allineare i denti avvalendosi di allineatori (mascherine) trasparenti, rimovibili e realizzate su misura."
        benefits={[
          "Trattamenti praticamente invisibili",
          "Nessuna restrizione alimentare",
          "Igiene orale quotidiana facilitata",
          "Comfort elevato senza attacchi metallici",
        ]}
        process={[
          { step: "Scansione Digitale", desc: "Impronta ottica 3D senza paste." },
          { step: "ClinCheck", desc: "Simulazione virtuale del risultato finale." },
          { step: "Allineatori", desc: "Applicazione del primo set trasparente." },
          { step: "Monitoraggio", desc: "Controlli periodici dei progressi." },
        ]}
        heroImage="/images/hero_ortodonzia_1777945982119.png"
      />

      <ServiceSection
        title="Sbiancamento Dentale"
        description="Trattamenti professionali sicuri ed efficaci per rimuovere macchie e discromie profonde rispettando la struttura naturale dello smalto."
        benefits={[
          "Sorriso visibilmente più bianco in una seduta",
          "Trattamento sicuro senza danneggiare lo smalto",
          "Prodotti desensibilizzanti per il massimo comfort",
          "Risultati duraturi con il giusto mantenimento",
        ]}
        process={[
          { step: "Valutazione", desc: "Analisi del colore e salute gengivale." },
          { step: "Protezione", desc: "Isolamento accurato di gengive e labbra." },
          { step: "Applicazione Gel", desc: "Gel sbiancante ad alta concentrazione." },
          { step: "Attivazione LED", desc: "Lampada LED per azione sbiancante accelerata." },
        ]}
        heroImage="/images/hero_sbiancamento_1777945997300.png"
        reverse={true}
      />

      <AltriServizi />

      <Footer />
    </div>
  );
}
