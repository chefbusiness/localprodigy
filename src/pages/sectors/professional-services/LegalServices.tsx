import { LegalHero } from "@/components/legal/LegalHero";
import { LegalServices } from "@/components/legal/LegalServices";
import { LegalFAQ } from "@/components/legal/LegalFAQ";
import { LegalSchema } from "@/components/legal/LegalSchema";
import { PricingPlans } from "@/components/local-seo/PricingPlans";
import { GoogleAdsPlans } from "@/components/digital-ads/pricing/GoogleAdsPlans";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LegalServicesPage = () => {
  return (
    <>
      <LegalSchema />
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Inicio
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="/sectores" className="text-muted-foreground hover:text-primary">
                Sectores
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="/sectores/servicios-profesionales" className="text-muted-foreground hover:text-primary">
                Servicios Profesionales
              </Link>
            </li>
            <span>/</span>
            <li className="text-primary">
              Abogados
            </li>
          </ol>
        </nav>

        <LegalHero />
        <LegalServices />

        {/* Pricing Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de SEO Local para Despachos de Abogados</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluciones adaptadas a las necesidades de tu despacho legal
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

        {/* Google Ads Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Publicidad Digital para Despachos de Abogados</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Campañas de Google Ads optimizadas para el sector legal
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

        <LegalFAQ />
      </main>
      <Footer />
    </>
  );
};

export default LegalServicesPage;