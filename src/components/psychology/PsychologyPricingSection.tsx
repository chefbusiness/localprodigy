import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PricingPlans } from "@/components/local-seo/PricingPlans";

export const PsychologyPricingSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes de SEO Local para Psicólogos</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Soluciones adaptadas a las necesidades de su consulta psicológica
          </p>
          <Button 
            asChild 
            variant="outline" 
            className="mb-12 hover:bg-yellow hover:text-yellow-foreground transition-colors w-full sm:w-auto"
          >
            <Link to="/servicios/seo-local">
              Más información sobre SEO Local →
            </Link>
          </Button>
        </div>
        <PricingPlans />
      </div>
    </section>
  );
};