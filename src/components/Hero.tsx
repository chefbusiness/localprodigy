import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary via-primary/95 to-background text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4 py-40 animate-fade-up relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
            Agencia SEO/SEM Local
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Potencia tu Negocio Local con SEO y SEM
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Aumenta tu visibilidad online y atrae más clientes cualificados a tu negocio local
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow-light text-yellow-foreground px-8 transition-colors duration-300 relative overflow-hidden group"
              asChild
            >
              <Link to="/contacto">
                <span className="relative z-10">Consulta Gratuita</span>
                <div className="absolute inset-0 bg-yellow-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 transition-colors duration-300"
              asChild
            >
              <Link to="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};