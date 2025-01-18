import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/digital-ads/Hero";
import { ServicesGrid } from "@/components/digital-ads/ServicesGrid";
import { PricingSection } from "@/components/digital-ads/PricingSection";
import { WhatIsSection } from "@/components/digital-ads/WhatIsSection";
import { FAQSection } from "@/components/digital-ads/FAQSection";
import { CTASection } from "@/components/digital-ads/CTASection";

const DigitalAds = () => {
  const scrollToPlanes = () => {
    const planesSection = document.getElementById('planes');
    if (planesSection) {
      planesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero scrollToPlanes={scrollToPlanes} />
        <ServicesGrid />
        <PricingSection />
        <WhatIsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default DigitalAds;