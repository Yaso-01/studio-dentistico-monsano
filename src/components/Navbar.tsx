"use client";
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDIO_PHONE } from "@/lib/contact";

const links = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/convenzioni", label: "Convenzioni" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-secondary-container">

      {/* Barra sedi */}
      <div className="w-full bg-primary/[0.04] border-b border-secondary-container/60">
        <div className="max-w-[1200px] mx-auto px-6 h-8 flex items-center gap-5 text-[11px] text-text-main/50 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin size={11} className="text-primary/70" />
            Monsano (AN) ·{" "}
            <a href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
              {STUDIO_PHONE}
            </a>
          </span>
          <span className="hidden sm:block w-px h-3 bg-secondary-container" />
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin size={11} className="text-primary/70" />
            Agugliano (AN) ·{" "}
            <a href={`tel:${STUDIO_PHONE.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
              {STUDIO_PHONE}
            </a>
          </span>
        </div>
      </div>

      {/* Navbar principale */}
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="text-[15px] font-bold font-manrope text-primary tracking-tight">
            Fazi &amp; Bernacchia
          </span>
          <span className="text-[10px] text-text-main/40 uppercase tracking-[0.12em]">Studio Dentistico</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-7 text-[13px] font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors duration-200 ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-text-main/60 hover:text-text-main"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="ml-2 bg-primary text-white px-5 py-2 rounded-md text-[13px] font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Prenota Visita
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-text-main/70"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-secondary-container px-6 pb-6 pt-3 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm ${
                pathname === link.href ? "text-primary font-semibold" : "text-text-main/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold text-center mt-2"
          >
            Prenota Visita
          </Link>
        </div>
      )}
    </nav>
  );
}
