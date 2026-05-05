export default function Footer() {
  return (
    <footer className="bg-white border-t border-secondary-container pt-16 pb-8">
      <div className="max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-manrope text-primary">Fazi e Bernacchia</h3>
            <p className="text-sm text-text-main/60 leading-relaxed">
              Eccellenza odontoiatrica a Monsano. Tecnologia e all'avanguardia per il benessere del tuo sorriso e della tua famiglia.[cite: 3]
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-text-main">Link Rapidi</h4>
            <ul className="space-y-2 text-sm text-text-main/60">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termini e Condizioni</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-text-main">Seguici</h4>
            <p className="text-sm text-text-main/60">Via Roma 123, 60030 Monsano (AN)</p>
            <p className="text-sm text-text-main/60">T: +39 0731 123456</p>
          </div>

        </div>

        <div className="pt-8 border-t border-secondary-container text-center">
          <p className="text-xs text-text-main/40 font-inter">
            © 2026 Studio Dentistico Fazi e Bernacchia - Monsano (AN). Tutti i diritti riservati.[cite: 3]
          </p>
        </div>
      </div>
    </footer>
  );
}