import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PsychologyHero } from "@/components/psychology/PsychologyHero";
import { PsychologyServices } from "@/components/psychology/PsychologyServices";
import { PsychologyFAQ } from "@/components/psychology/PsychologyFAQ";
import { PsychologyPricingSection } from "@/components/psychology/PsychologyPricingSection";
import { PsychologyBreadcrumbs } from "@/components/psychology/PsychologyBreadcrumbs";
import { PsychologyAdsSection } from "@/components/psychology/PsychologyAdsSection";
import { PsychologySchema } from "@/components/psychology/PsychologySchema";

const PsychologyServicesPage = () => {
  return (
    <>
      <PsychologySchema />
      <Header />
      <main className="min-h-screen bg-background">
        <PsychologyBreadcrumbs />
        <PsychologyHero />
        <PsychologyServices />
        <PsychologyPricingSection />
        <PsychologyAdsSection />
        <PsychologyFAQ />
      </main>
      <Footer />
    </>
  );
};

export default PsychologyServicesPage;