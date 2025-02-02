import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchitectBreadcrumbs } from "@/components/architect/ArchitectBreadcrumbs";
import { ArchitectHero } from "@/components/architect/ArchitectHero";
import { ArchitectServices } from "@/components/architect/ArchitectServices";
import { ArchitectSchema } from "@/components/architect/ArchitectSchema";
import { ArchitectFAQ } from "@/components/architect/ArchitectFAQ";
import { PricingPlans } from "@/components/local-seo/PricingPlans";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArchitectServicesPage = () => {
  return (
    <>
      <ArchitectSchema />
      <Header />
      <main className="min-h-screen bg-background">
        <ArchitectBreadcrumbs />
        <ArchitectHero />
        <ArchitectServices />
        
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de SEO Local para Arquitectos</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluciones adaptadas a las necesidades de su estudio de arquitectura
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

        <ArchitectFAQ />
      </main>
      <Footer />
    </>
  );
};

export default ArchitectServicesPage;