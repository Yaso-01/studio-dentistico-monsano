import Hero from "@/components/Hero";
import Medici from "@/components/Medici";
import Servizi from "@/components/Servizi";
import Recensioni from "@/components/Recensioni";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Servizi preview={true} />
      <Medici preview={true} />
      <Recensioni preview={true} />
      <Footer />
    </div>
  );
}