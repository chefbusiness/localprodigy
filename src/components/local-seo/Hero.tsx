import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="SEO Local Hero"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
            SEO Local
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Domina las Búsquedas Locales
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed">
            Aumenta tu visibilidad en Google Maps y búsquedas locales. Atrae más clientes cualificados de tu zona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-up">
              <Link to="/contacto">Solicitar Consulta Gratuita</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-up">
              <Link to="#planes">Ver Planes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};