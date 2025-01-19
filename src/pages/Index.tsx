import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ToolsCarousel } from "@/components/ToolsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Hero />
        <Services />
        <Testimonials />
        <ToolsCarousel />
        <section className="py-32 px-4 bg-muted text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para empezar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Solicita tu consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <Button 
            asChild 
            size="lg"
            className="px-6 md:px-8 py-5 md:py-6 text-base md:text-lg bg-yellow hover:bg-yellow-light text-yellow-foreground transition-colors duration-300"
          >
            <Link to="/contacto">Contactar Ahora</Link>
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;