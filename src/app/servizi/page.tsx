import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

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
        title="Igiene Dentale"
        description="La prevenzione è la base di un sorriso sano e duraturo. Il nostro team utilizza protocolli minimamente invasivi e tecnologie GBT (Guided Biofilm Therapy) per una pulizia profonda, indolore e confortevole."
        benefits={[
          "Prevenzione efficace di carie e gengiviti",
          "Rimozione sicura di tartaro e macchie superficiali",
          "Mantenimento della salute dei tessuti parodontali",
          "Sedute confortevoli senza sensibilità termica",
        ]}
        process={[
          { step: "Rilevazione Placca", desc: "Localizzatore cromatico per evidenziare il biofilm." },
          { step: "Rimozione Biofilm", desc: "Pulizia delicata con polveri a base di eritritolo." },
          { step: "Ablazione Tartaro", desc: "Tecnologia a ultrasuoni intelligente e indolore." },
          { step: "Lucidatura e Fluoro", desc: "Applicazione finale per fortificare lo smalto." },
        ]}
        heroImage="/images/hero_igiene_1777945951088.png"
      />

      <ServiceSection
        title="Implantologia Avanzata"
        description="Restituiamo funzionalità ed estetica con impianti in titanio biocompatibile pianificati in 3D per la massima precisione, con procedure minimamente invasive e tempi di recupero rapidi."
        benefits={[
          "Ripristino completo della capacità masticatoria",
          "Risultati estetici naturali e armonici",
          "Preservazione dell'osso mascellare e dei denti adiacenti",
          "Protesi fisse garantite e di lunga durata",
        ]}
        process={[
          { step: "Diagnosi 3D", desc: "Scansione CBCT per mappare l'anatomia ossea." },
          { step: "Pianificazione", desc: "Progettazione virtuale dell'intervento." },
          { step: "Chirurgia Guidata", desc: "Inserimento con mascherina di precisione." },
          { step: "Carico Protesico", desc: "Corona definitiva in ceramica integrata." },
        ]}
        heroImage="/images/hero_implantologia_1777945968659.png"
        reverse={true}
      />

      <ServiceSection
        title="Ortodonzia e Allineatori"
        description="Correggiamo le malocclusioni in modo discreto. Siamo Provider certificati per l'ortodonzia invisibile, con percorsi terapeutici su misura per adulti e bambini."
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

      <Footer />
    </div>
  );
}
