import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

export default function ServiziPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">

      {/* Page Header */}
      <div className="w-full py-16 bg-white border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Le Nostre Specializzazioni</p>
          <h1 className="text-4xl font-bold font-manrope text-text-main mb-3">Trattamenti Odontoiatrici</h1>
          <p className="text-text-main/60 max-w-xl leading-relaxed">
            Offriamo soluzioni odontoiatriche professionali per ogni esigenza, disponibili nelle sedi di Monsano e Agugliano.
          </p>
        </div>
      </div>

      <ServiceSection
        title="Igiene Dentale"
        description="La prevenzione è la base di un sorriso sano e duraturo. Il nostro team di igienisti utilizza protocolli minimamente invasivi e tecnologie GBT (Guided Biofilm Therapy) per una pulizia profonda, indolore e confortevole."
        benefits={[
          "Prevenzione efficace di carie e gengiviti",
          "Rimozione sicura di tartaro e macchie superficiali",
          "Mantenimento della salute dei tessuti parodontali",
          "Sedute confortevoli senza sensibilità termica",
        ]}
        process={[
          { step: "Rilevazione Placca", desc: "Utilizzo di un localizzatore cromatico per evidenziare il biofilm." },
          { step: "Rimozione Biofilm", desc: "Pulizia delicata con polveri a base di eritritolo." },
          { step: "Ablazione Tartaro", desc: "Tecnologia a ultrasuoni intelligente e indolore." },
          { step: "Lucidatura", desc: "Applicazione finale di fluoro per fortificare lo smalto." },
        ]}
        heroImage="/images/hero_igiene_1777945951088.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png",
        ]}
      />

      <ServiceSection
        title="Implantologia Avanzata"
        description="Restituiamo funzionalità ed estetica al vostro sorriso con impianti in titanio biocompatibile. Pianifichiamo ogni intervento in 3D per la massima precisione, con procedure minimamente invasive e tempi di recupero rapidi."
        benefits={[
          "Ripristino completo della capacità masticatoria",
          "Risultati estetici naturali e armonici",
          "Preservazione dell'osso mascellare e dei denti sani adiacenti",
          "Protesi fisse garantite e di lunga durata",
        ]}
        process={[
          { step: "Diagnosi 3D", desc: "Scansione CBCT per mappare l'anatomia ossea." },
          { step: "Pianificazione", desc: "Progettazione virtuale dell'intervento." },
          { step: "Chirurgia Guidata", desc: "Inserimento dell'impianto con mascherina di precisione." },
          { step: "Carico Protesico", desc: "Applicazione della corona definitiva in ceramica." },
        ]}
        heroImage="/images/hero_implantologia_1777945968659.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png",
        ]}
        reverse={true}
      />

      <ServiceSection
        title="Ortodonzia e Allineatori"
        description="Correggiamo le malocclusioni e allineiamo i denti in modo discreto. Siamo Provider certificati per l'ortodonzia invisibile, con percorsi terapeutici su misura per adulti e bambini."
        benefits={[
          "Trattamenti praticamente invisibili",
          "Nessuna restrizione alimentare",
          "Igiene orale quotidiana facilitata",
          "Comfort elevato senza fili o attacchi metallici",
        ]}
        process={[
          { step: "Scansione Digitale", desc: "Impronta ottica 3D senza fastidiose paste." },
          { step: "ClinCheck", desc: "Simulazione virtuale dei movimenti dentali e del risultato." },
          { step: "Consegna Mascherine", desc: "Applicazione del primo set di allineatori trasparenti." },
          { step: "Monitoraggio", desc: "Controlli periodici per seguire i progressi." },
        ]}
        heroImage="/images/hero_ortodonzia_1777945982119.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png",
        ]}
      />

      <ServiceSection
        title="Sbiancamento Dentale"
        description="Trattamenti di sbiancamento professionale, sicuri ed efficaci, capaci di rimuovere macchie e discromie profonde rispettando la struttura naturale dello smalto."
        benefits={[
          "Sorriso visibilmente più bianco in una sola seduta",
          "Trattamento sicuro senza danneggiare lo smalto",
          "Prodotti desensibilizzanti per il massimo comfort",
          "Risultati duraturi con il giusto mantenimento",
        ]}
        process={[
          { step: "Valutazione", desc: "Analisi del colore di partenza e della salute gengivale." },
          { step: "Protezione", desc: "Isolamento accurato delle gengive e delle labbra." },
          { step: "Applicazione Gel", desc: "Stesura del gel sbiancante ad alta concentrazione." },
          { step: "Attivazione", desc: "Lampada LED per accelerare l'azione sbiancante." },
        ]}
        heroImage="/images/hero_sbiancamento_1777945997300.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png",
        ]}
        reverse={true}
      />

      <Footer />
    </div>
  );
}
