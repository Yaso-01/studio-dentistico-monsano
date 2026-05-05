import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ServiziPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Page Header */}
      <div className="w-full py-24 text-center bg-white border-b border-secondary-container">
        <div className="max-w-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">— Le Nostre Specializzazioni</p>
          <h1 className="text-5xl md:text-6xl font-bold font-manrope text-text-main mb-6">Trattamenti d'Eccellenza</h1>
          <p className="text-lg text-text-main/60 max-w-2xl mx-auto">
            Offriamo soluzioni odontoiatriche all'avanguardia per ogni tua esigenza, con un approccio clinico sereno, preciso e personalizzato.
          </p>
        </div>
      </div>

      {/* Igiene Dentale */}
      <ServiceSection 
        title="Igiene Dentale"
        description="La prevenzione è la base di un sorriso sano e duraturo. Il nostro team di igienisti utilizza protocolli minimamente invasivi e tecnologie GBT (Guided Biofilm Therapy) per una pulizia profonda, indolore e confortevole."
        benefits={[
          "Prevenzione efficace di carie e gengiviti",
          "Rimozione sicura di tartaro e macchie superficiali",
          "Mantenimento della salute dei tessuti parodontali",
          "Sedute confortevoli senza sensibilità termica"
        ]}
        process={[
          { step: "Rilevazione Placca", desc: "Utilizzo di un localizzatore cromatico per evidenziare il biofilm." },
          { step: "Rimozione Biofilm", desc: "Pulizia delicata con polveri a base di eritritolo." },
          { step: "Ablazione Tartaro", desc: "Tecnologia a ultrasuoni intelligente e indolore." },
          { step: "Lucidatura", desc: "Applicazione finale di fluoro per fortificare lo smalto." }
        ]}
        heroImage="/images/hero_igiene_1777945951088.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png"
        ]}
      />

      {/* Implantologia (Reverse) */}
      <ServiceSection 
        title="Implantologia Avanzata"
        description="Restituiamo funzionalità ed estetica al tuo sorriso con impianti in titanio biocompatibile. Pianifichiamo ogni intervento in 3D per la massima precisione, garantendo procedure minimamente invasive e tempi di recupero rapidi."
        benefits={[
          "Ripristino completo della capacità masticatoria",
          "Risultati estetici naturali e armonici",
          "Preservazione dell'osso mascellare e dei denti sani adiacenti",
          "Protesi fisse garantite e di lunga durata"
        ]}
        process={[
          { step: "Diagnosi 3D", desc: "Scansione CBCT per mappare l'anatomia ossea." },
          { step: "Pianificazione", desc: "Progettazione virtuale dell'intervento." },
          { step: "Chirurgia Guidata", desc: "Inserimento dell'impianto con mascherina di precisione." },
          { step: "Carico Protesico", desc: "Applicazione della corona definitiva in ceramica." }
        ]}
        heroImage="/images/hero_implantologia_1777945968659.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png"
        ]}
        reverse={true}
      />

      {/* Filler Visuale 1 */}
      <div className="w-full relative aspect-[21/9] min-h-[400px]">
        <Image 
          src="/images/filler_waiting_room_1777946017951.png" 
          alt="Sala d'attesa moderna"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      {/* Ortodonzia */}
      <ServiceSection 
        title="Ortodonzia e Allineatori"
        description="Correggiamo le malocclusioni e allineiamo i tuoi denti in modo discreto. Siamo Provider certificati per l'ortodonzia invisibile, offrendo percorsi terapeutici su misura per adulti e bambini."
        benefits={[
          "Trattamenti praticamente invisibili",
          "Nessuna restrizione alimentare",
          "Igiene orale quotidiana facilitata",
          "Comfort elevato senza fili o attacchi metallici"
        ]}
        process={[
          { step: "Scansione Digitale", desc: "Impronta ottica 3D senza fastidiose paste." },
          { step: "ClinCheck", desc: "Simulazione virtuale dei movimenti dentali e del risultato finale." },
          { step: "Consegna Mascherine", desc: "Applicazione del primo set di allineatori trasparenti." },
          { step: "Monitoraggio", desc: "Controlli periodici per seguire i progressi." }
        ]}
        heroImage="/images/hero_ortodonzia_1777945982119.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png"
        ]}
      />

      {/* Sbiancamento (Reverse) */}
      <ServiceSection 
        title="Sbiancamento Dentale"
        description="Dona nuova luce al tuo viso. Offriamo trattamenti di sbiancamento dentale professionale, sicuri ed efficaci, capaci di rimuovere macchie e discromie profonde rispettando la struttura naturale dello smalto."
        benefits={[
          "Sorriso visibilmente più bianco in una sola seduta",
          "Trattamento sicuro senza danneggiare lo smalto",
          "Prodotti desensibilizzanti per il massimo comfort",
          "Risultati duraturi con il giusto mantenimento"
        ]}
        process={[
          { step: "Valutazione", desc: "Analisi del colore di partenza e della salute gengivale." },
          { step: "Protezione", desc: "Isolamento accurato delle gengive e delle labbra." },
          { step: "Applicazione Gel", desc: "Stesura del gel sbiancante ad alta concentrazione." },
          { step: "Attivazione", desc: "Utilizzo di lampada LED per accelerare l'azione sbiancante." }
        ]}
        heroImage="/images/hero_sbiancamento_1777945997300.png"
        resultImages={[
          "/images/risultato_prima_1777946046110.png",
          "/images/risultato_dopo_1777946064555.png"
        ]}
        reverse={true}
      />

      {/* Filler Visuale 2 */}
      <div className="w-full relative aspect-[21/9] min-h-[400px]">
        <Image 
          src="/images/filler_clinic_detail_1777946032605.png" 
          alt="Dettaglio strumentazione clinica"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      <Footer />
    </div>
  );
}
