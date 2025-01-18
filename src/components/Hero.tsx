import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 py-32 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Potencia tu Negocio Local con SEO y SEM
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Aumenta tu visibilidad online y atrae más clientes cualificados a tu negocio local
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow-light text-yellow-foreground px-8 transition-colors duration-300"
            >
              Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};