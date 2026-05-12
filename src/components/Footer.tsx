import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-secondary-container pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-base font-bold font-manrope text-primary">Studio Dentistico Fazi e Bernacchia</h3>
            <p className="text-sm text-text-main/55 leading-relaxed max-w-sm">
              Odontoiatria professionale al servizio delle comunità di Monsano e Agugliano. Prevenzione, cura e qualità clinica.
            </p>
          </div>

          {/* Sede Monsano */}
          <div className="space-y-2">
            <h4 className="font-bold text-text-main text-sm">Sede di Monsano</h4>
            <p className="text-xs text-text-main/55 leading-relaxed">Via Roma 123<br />60030 Monsano (AN)</p>
            <p className="text-xs text-text-main/55">T: +39 0731 123456</p>
            <p className="text-xs text-text-main/55">Lun–Ven: 09:00–19:30</p>
          </div>

          {/* Sede Agugliano */}
          <div className="space-y-2">
            <h4 className="font-bold text-text-main text-sm">Sede di Agugliano</h4>
            <p className="text-xs text-text-main/55 leading-relaxed">Via Verdi 45<br />60020 Agugliano (AN)</p>
            <p className="text-xs text-text-main/55">T: +39 071 987654</p>
            <p className="text-xs text-text-main/55">Lun–Ven: 08:30–18:30</p>
          </div>

        </div>

        <div className="pt-6 border-t border-secondary-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-main/40">
            © 2026 Studio Dentistico Fazi e Bernacchia — Monsano & Agugliano (AN). Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-xs text-text-main/40">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
