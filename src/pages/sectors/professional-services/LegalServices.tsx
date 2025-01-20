import { LegalHero } from "@/components/legal/LegalHero";
import { LegalServices } from "@/components/legal/LegalServices";
import { LegalFAQ } from "@/components/legal/LegalFAQ";
import { LegalSchema } from "@/components/legal/LegalSchema";
import { LegalBreadcrumbs } from "@/components/legal/LegalBreadcrumbs";
import { LegalPricingSection } from "@/components/legal/LegalPricingSection";
import { LegalAdsSection } from "@/components/legal/LegalAdsSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LegalServicesPage = () => {
  return (
    <>
      <LegalSchema />
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <LegalBreadcrumbs />
        <LegalHero />
        <LegalServices />
        <LegalPricingSection />
        <LegalAdsSection />
        <LegalFAQ />
      </main>
      <Footer />
    </>
  );
};

export default LegalServicesPage;