import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GoogleAdsPlans } from "./pricing/GoogleAdsPlans";
import { MetaAdsPlans } from "./pricing/MetaAdsPlans";
import { OtherPlatformsPlans } from "./pricing/OtherPlatformsPlans";
import { IntegratedPacksPlans } from "./pricing/IntegratedPacksPlans";
import { AddOnsSection } from "./pricing/AddOnsSection";
import { GeneralPolicies } from "./pricing/GeneralPolicies";

export const PricingSection = () => {
  return (
    <section id="planes" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes de Publicidad Digital</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Elige la plataforma y el plan que mejor se adapte a tus objetivos
          </p>
        </div>

        <GoogleAdsPlans />
        <MetaAdsPlans />
        <OtherPlatformsPlans />
        <IntegratedPacksPlans />
        <AddOnsSection />
        <GeneralPolicies />

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto px-4">
            ¿Necesitas una estrategia personalizada? ¿Tienes un presupuesto específico?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="text-lg hover:bg-white/10 w-full sm:w-auto"
          >
            <Link to="/contacto">Contacta con Nosotros</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};