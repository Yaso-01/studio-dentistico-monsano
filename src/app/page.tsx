import Hero from "@/components/Hero";
import Servizi from "@/components/Servizi";
import Medici from "@/components/Medici";
import Convenzioni from "@/components/Convenzioni";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Servizi preview={true} />
      <Medici preview={true} />
      <Convenzioni />
      <Footer />
    </div>
  );
}
