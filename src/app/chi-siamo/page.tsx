import Medici from "@/components/Medici";
import Valori from "@/components/Valori";
import Footer from "@/components/Footer";

export default function ChiSiamoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white">
        <Valori />
      </div>
      <Medici />
      <Footer />
    </div>
  );
}
