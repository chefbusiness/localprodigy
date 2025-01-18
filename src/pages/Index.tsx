import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Hero />
        <Services />
        <Testimonials />
        <section className="py-16 px-4 bg-muted text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para empezar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Solicita tu consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <Button asChild size="lg">
            <Link to="/contacto">Contactar Ahora</Link>
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;