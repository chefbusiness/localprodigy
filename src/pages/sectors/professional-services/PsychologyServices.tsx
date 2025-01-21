import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PsychologyHero } from "@/components/psychology/PsychologyHero";
import { PsychologyServices } from "@/components/psychology/PsychologyServices";
import { PsychologyPricingSection } from "@/components/psychology/PsychologyPricingSection";
import { PsychologyFAQ } from "@/components/psychology/PsychologyFAQ";
import { PsychologyBreadcrumbs } from "@/components/psychology/PsychologyBreadcrumbs";

const PsychologyServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>SEO Local para Psicólogos | Marketing Digital para Psicólogos | localSEOads</title>
        <meta 
          name="description" 
          content="Servicios especializados de SEO Local y Marketing Digital para psicólogos y terapeutas. Aumenta tu visibilidad online y consigue más pacientes cualificados." 
        />
      </Helmet>

      <Header />
      <PsychologyBreadcrumbs />
      <main>
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