import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PsychologyHero } from "@/components/psychology/PsychologyHero";
import { PsychologyServices } from "@/components/psychology/PsychologyServices";
import { PsychologyFAQ } from "@/components/psychology/PsychologyFAQ";
import { PsychologyPricingSection } from "@/components/psychology/PsychologyPricingSection";
import { PsychologySchema } from "@/components/psychology/PsychologySchema";
import { PsychologyBreadcrumbs } from "@/components/psychology/PsychologyBreadcrumbs";
import { PsychologyAdsSection } from "@/components/psychology/PsychologyAdsSection";

const PsychologyServicesPage = () => {
  return (
    <>
      <PsychologySchema />
      <Header />
      <PsychologyBreadcrumbs />
      <main className="min-h-screen bg-background">
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