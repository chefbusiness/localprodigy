import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsultancyHero } from "@/components/consultancy/ConsultancyHero";
import { ConsultancyServices } from "@/components/consultancy/ConsultancyServices";
import { ConsultancyFAQ } from "@/components/consultancy/ConsultancyFAQ";
import { ConsultancyPricingSection } from "@/components/consultancy/ConsultancyPricingSection";
import { Helmet } from "react-helmet";

const ConsultancyServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Digital para Asesorías | SEO Local para Asesorías Fiscales</title>
        <meta 
          name="description" 
          content="Servicios de marketing digital y SEO local especializados para asesorías fiscales y contables. Aumente su visibilidad online y atraiga más clientes cualificados."
        />
      </Helmet>
      <Header />
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