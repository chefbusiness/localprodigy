import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface WebDevHeroProps {
  onScrollToPlans: () => void;
}

export const WebDevHero = ({ onScrollToPlans }: WebDevHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Espacio de trabajo moderno con laptop mostrando código de desarrollo web"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
            Desarrollo Web
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Sitios Web Optimizados para SEO y Conversión
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed">
            Desarrollamos webs que no solo se ven bien, sino que también convierten visitantes en clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow hover:bg-yellow-dark text-yellow-foreground text-lg animate-fade-up"
            >
              <Link to="/contacto">Solicitar Presupuesto</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg animate-fade-up hover:bg-white/10"
              onClick={onScrollToPlans}
            >
              Ver Planes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};