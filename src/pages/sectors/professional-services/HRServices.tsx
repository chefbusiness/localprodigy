import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HRBreadcrumbs } from "@/components/hr/HRBreadcrumbs";
import { HRHero } from "@/components/hr/HRHero";
import { HRSchema } from "@/components/hr/HRSchema";
import { HRFAQ } from "@/components/hr/HRFAQ";
import { PricingPlans } from "@/components/local-seo/PricingPlans";
import { GoogleAdsPlans } from "@/components/digital-ads/pricing/GoogleAdsPlans";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HRServices = () => {
  return (
    <>
      <HRSchema />
      <Header />
      <main className="min-h-screen bg-background">
        <HRBreadcrumbs />
        <HRHero />
        
        {/* Planes SEO Local */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Planes de SEO Local para Consultoras de RRHH
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluciones adaptadas a las necesidades de su consultora de recursos humanos
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

        {/* Planes Google Ads */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Publicidad Digital para Consultoras de RRHH
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Campañas de Google Ads optimizadas para el sector de recursos humanos
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

        <HRFAQ />
      </main>
      <Footer />
    </>
  );
};

export default HRServices;