import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16"> {/* Añadimos padding-top para compensar el header fijo */}
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Index;