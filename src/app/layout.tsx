import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Studio Dentistico Fazi e Bernacchia | Monsano & Agugliano",
  description: "Studio dentistico professionale con sedi a Monsano e Agugliano (AN). Igiene, implantologia, ortodonzia e convenzioni territoriali.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFAB />
        <CookieBanner />
      </body>
    </html>
  );
}