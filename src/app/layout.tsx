import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/structured-data";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Studio Dentistico Fazi e Bernacchia | Monsano & Agugliano",
  description: "Studio dentistico Fazi e Bernacchia: igiene, implantologia, ortodonzia, parodontologia e sbiancamento a Monsano e Agugliano (AN). Due sedi, convenzioni territoriali e assistenza professionale per tutta la famiglia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Studio Dentistico Fazi e Bernacchia | Monsano & Agugliano",
    description: "Studio dentistico Fazi e Bernacchia: igiene, implantologia, ortodonzia, parodontologia e sbiancamento a Monsano e Agugliano (AN). Due sedi, convenzioni territoriali e assistenza professionale per tutta la famiglia.",
    url: SITE_URL,
    siteName: "Studio Dentistico Fazi e Bernacchia",
    locale: "it_IT",
    type: "website",
  },
  verification: {
    google: "DAOAc2znMW2RoJJdx_vrlF7s8LZOgq6_bCx8Zv-vNlg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <WhatsAppFAB />
        <CookieBanner />
      </body>
    </html>
  );
}