"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/servizi", label: "Servizi" },
    { href: "/recensioni", label: "Recensioni" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-secondary-container">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-manrope text-primary">
          Fazi e Bernacchia
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
                  : "hover:text-primary py-1 border-b-2 border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover-scale inline-block"
          >
            Prenota Visita
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-secondary-container p-6 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block ${
                pathname === link.href ? "text-primary font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold w-full text-center mt-2"
          >
            Prenota Visita
          </Link>
        </div>
      )}
    </nav>
  );
}