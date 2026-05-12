"use client";
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/servizi", label: "Servizi" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-secondary-container">
      {/* Barra sedi */}
      <div className="w-full bg-primary/5 border-b border-secondary-container">
        <div className="max-w-[1200px] mx-auto px-6 h-8 flex items-center gap-6 text-xs text-text-main/60">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-primary" />
            Monsano (AN)
          </span>
          <span className="text-secondary-container">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-primary" />
            Agugliano (AN)
          </span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold font-manrope text-primary">Fazi e Bernacchia</span>
          <span className="text-[10px] text-text-main/50 uppercase tracking-widest">Studio Dentistico</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary py-1"
                  : "text-text-main/70 hover:text-primary py-1 border-b-2 border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="bg-primary text-white px-5 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Prenota Visita
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-secondary-container px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${
                pathname === link.href ? "text-primary font-bold" : "text-text-main/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-5 py-2.5 rounded text-sm font-semibold text-center mt-2"
          >
            Prenota Visita
          </Link>
        </div>
      )}
    </nav>
  );
}
