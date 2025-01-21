import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GoogleAdsPlans } from "@/components/digital-ads/pricing/GoogleAdsPlans";

export const PsychologyAdsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Publicidad Digital para Psicólogos</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Campañas de Google Ads optimizadas para el sector de la psicología
          </p>
          <Button 
            asChild 
            variant="outline" 
            className="mb-12 hover:bg-yellow hover:text-yellow-foreground transition-colors w-full sm:w-auto"
          >
            <Link to="/servicios/publicidad-digital">
              Explorar servicios de publicidad →
            </Link>
          </Button>
        </div>
        <GoogleAdsPlans />
      </div>
    </section>
  );
};