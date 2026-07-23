import { SITE_URL } from "@/lib/site";
import { STUDIO_PHONE, STUDIO_EMAIL } from "@/lib/contact";

const dentistMonsano = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Studio Dentistico Fazi e Bernacchia — Sede di Monsano",
  url: SITE_URL,
  telephone: STUDIO_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Largo Due Querce 85/B",
    addressLocality: "Monsano",
    addressRegion: "AN",
    postalCode: "60030",
    addressCountry: "IT",
  },
  // TODO: aggiungere coordinate GPS
  openingHoursSpecification: [
    // Il martedì è escluso: apertura solo 2 martedì al mese, non esprimibile con openingHoursSpecification
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "15:00",
      closes: "19:00",
    },
  ],
};

const dentistAgugliano = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Studio Dentistico Fazi e Bernacchia — Sede di Agugliano",
  url: SITE_URL,
  telephone: STUDIO_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Sebastiano Petrelli 2/A",
    addressLocality: "Agugliano",
    addressRegion: "AN",
    postalCode: "60020",
    addressCountry: "IT",
  },
  // TODO: aggiungere coordinate GPS
  openingHoursSpecification: [
    // Il martedì è escluso: apertura solo 2 martedì al mese, non esprimibile con openingHoursSpecification
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "15:00",
      closes: "19:00",
    },
  ],
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Studio Dentistico Associato Fazi Francesco e Bernacchia Ricciotti Ilaria",
  url: SITE_URL,
  email: STUDIO_EMAIL,
  telephone: STUDIO_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Sebastiano Petrelli 2/A",
    addressLocality: "Agugliano",
    addressRegion: "AN",
    postalCode: "60020",
    addressCountry: "IT",
  },
  description:
    "Studio dentistico associato con sedi a Monsano e Agugliano (AN): igiene, implantologia, ortodonzia, parodontologia e sbiancamento.",
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Studio Dentistico Fazi e Bernacchia",
  url: SITE_URL,
  inLanguage: "it-IT",
};

const schemas = [dentistMonsano, dentistAgugliano, organization, website];

export default function StructuredData() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
