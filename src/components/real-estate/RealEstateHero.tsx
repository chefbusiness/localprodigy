import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const RealEstateHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          alt="Oficina moderna de agencia inmobiliaria"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
            Marketing Digital para Agentes Inmobiliarios
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Atraiga Más Clientes Cualificados Para Su Agencia Inmobiliaria
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed">
            Especialistas en marketing digital para agencias inmobiliarias. Aumente su visibilidad online y genere más consultas de propiedades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow hover:bg-yellow-dark text-yellow-foreground text-lg animate-fade-up"
            >
              <Link to="/contacto">Solicitar Consulta Gratuita</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-lg animate-fade-up hover:bg-white/10"
            >
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};