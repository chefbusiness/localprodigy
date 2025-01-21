import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsultancyHero } from "@/components/consultancy/ConsultancyHero";
import { ConsultancyServices } from "@/components/consultancy/ConsultancyServices";
import { ConsultancyPricingSection } from "@/components/consultancy/ConsultancyPricingSection";
import { ConsultancyFAQ } from "@/components/consultancy/ConsultancyFAQ";
import { ConsultancyBreadcrumbs } from "@/components/consultancy/ConsultancyBreadcrumbs";

const ConsultancyServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>SEO Local para Asesorías | Marketing Digital para Asesorías | localSEOads</title>
        <meta 
          name="description" 
          content="Servicios especializados de SEO Local y Marketing Digital para asesorías fiscales y contables. Aumenta tu visibilidad online y consigue más clientes cualificados." 
        />
      </Helmet>

      <Header />
      <ConsultancyBreadcrumbs />
      <main className="min-h-screen bg-background">
        <ConsultancyHero />
        <ConsultancyServices />
        <ConsultancyPricingSection />
        <ConsultancyFAQ />
      </main>
      <Footer />
    </>
  );
};

export default ConsultancyServicesPage;