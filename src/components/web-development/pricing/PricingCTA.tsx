import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PricingCTA = () => {
  return (
    <div className="text-center mt-16">
      <p className="text-muted-foreground mb-6">
        ¿Necesitas funcionalidades específicas? ¿Tienes un proyecto especial?
      </p>
      <Button 
        variant="outline" 
        size="lg" 
        asChild 
        className="text-lg hover:bg-white/10"
      >
        <Link to="/contacto">Contacta con Nosotros</Link>
      </Button>
    </div>
  );
};