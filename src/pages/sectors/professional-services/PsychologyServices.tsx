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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Servicios SEO para Psicólogos | localprodigy</title>
        <meta name="description" content="Servicios de SEO y marketing digital especializados para psicólogos y profesionales de la salud mental. Mejora tu visibilidad online y atrae más pacientes." />
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
    </div>
  );
};

export default PsychologyServicesPage;