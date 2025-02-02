import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RealEstateBreadcrumbs } from "@/components/real-estate/RealEstateBreadcrumbs";
import { RealEstateHero } from "@/components/real-estate/RealEstateHero";
import { RealEstateServices } from "@/components/real-estate/RealEstateServices";
import { RealEstateSchema } from "@/components/real-estate/RealEstateSchema";
import { RealEstateFAQ } from "@/components/real-estate/RealEstateFAQ";
import { PricingPlans } from "@/components/local-seo/PricingPlans";
import { GoogleAdsPlans } from "@/components/digital-ads/pricing/GoogleAdsPlans";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RealEstateServices = () => {
  return (
    <>
      <RealEstateSchema />
      <Header />
      <main className="min-h-screen bg-background">
        <RealEstateBreadcrumbs />
        <RealEstateHero />
        <RealEstateServices />
        
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de SEO Local para Agentes Inmobiliarios</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluciones adaptadas a las necesidades de su agencia inmobiliaria
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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Publicidad Digital para Agentes Inmobiliarios</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Campañas de Google Ads optimizadas para el sector inmobiliario
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

        <RealEstateFAQ />
      </main>
      <Footer />
    </>
  );
};

export default RealEstateServices;