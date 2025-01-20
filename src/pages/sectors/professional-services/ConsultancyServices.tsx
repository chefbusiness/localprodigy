import { Link } from "react-router-dom";
import { ConsultancyHero } from "@/components/consultancy/ConsultancyHero";
import { ConsultancyServices } from "@/components/consultancy/ConsultancyServices";
import { ConsultancyFAQ } from "@/components/consultancy/ConsultancyFAQ";
import { ConsultancySchema } from "@/components/consultancy/ConsultancySchema";
import { LegalPricingSection } from "@/components/legal/LegalPricingSection";
import { LegalAdsSection } from "@/components/legal/LegalAdsSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ConsultancyServicesPage = () => {
  return (
    <>
      <ConsultancySchema />
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
              Asesorías
            </li>
          </ol>
        </nav>

        <ConsultancyHero />
        <ConsultancyServices />
        <LegalPricingSection />
        <LegalAdsSection />
        <ConsultancyFAQ />
      </main>
      <Footer />
    </>
  );
};

export default ConsultancyServicesPage;