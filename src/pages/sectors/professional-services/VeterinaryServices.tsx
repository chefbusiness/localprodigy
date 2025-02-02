import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VeterinaryHero } from "@/components/veterinary/VeterinaryHero";
import { VeterinaryServices } from "@/components/veterinary/VeterinaryServices";
import { VeterinaryFAQ } from "@/components/veterinary/VeterinaryFAQ";
import { VeterinaryPricingSection } from "@/components/veterinary/VeterinaryPricingSection";
import { VeterinarySchema } from "@/components/veterinary/VeterinarySchema";
import { VeterinaryBreadcrumbs } from "@/components/veterinary/VeterinaryBreadcrumbs";
import { VeterinaryAdsSection } from "@/components/veterinary/VeterinaryAdsSection";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const VeterinaryServicesPage = () => {
  return (
    <>
      <VeterinarySchema />
      <Header />
      <VeterinaryBreadcrumbs />
      <main className="min-h-screen bg-background">
        <VeterinaryHero />
        <VeterinaryServices />
        <VeterinaryPricingSection />
        <VeterinaryAdsSection />
        <VeterinaryFAQ />
      </main>
      <WhatsAppWidget />
      <Footer />
    </>
  );
};

export default VeterinaryServicesPage;