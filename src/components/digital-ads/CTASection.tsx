import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto px-4">
          ¿Necesitas una estrategia personalizada? ¿Tienes un presupuesto específico?
        </p>
        <Button 
          size="lg" 
          asChild 
          className="bg-yellow hover:bg-yellow-light text-yellow-foreground text-lg w-full sm:w-auto"
        >
          <Link to="/contacto">Contacta con Nosotros</Link>
        </Button>
      </div>
    </section>
  );
};