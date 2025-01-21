import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PsychologyHero } from "@/components/psychology/PsychologyHero";
import { PsychologyServices } from "@/components/psychology/PsychologyServices";
import { PsychologyFAQ } from "@/components/psychology/PsychologyFAQ";
import { PsychologyPricingSection } from "@/components/psychology/PsychologyPricingSection";
import { Helmet } from "react-helmet";

const PsychologyServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Digital para Psicólogos | SEO Local para Psicólogos</title>
        <meta 
          name="description" 
          content="Servicios de marketing digital y SEO local especializados para psicólogos y terapeutas. Aumente su visibilidad online y atraiga más pacientes cualificados."
        />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        <PsychologyHero />
        <PsychologyServices />
        <PsychologyPricingSection />
        <PsychologyFAQ />
      </main>
      <Footer />
    </>
  );
};

export default PsychologyServicesPage;