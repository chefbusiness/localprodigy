import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DigitalPresenceSection } from "@/components/web-development/DigitalPresenceSection";
import { WebDevFAQ } from "@/components/web-development/WebDevFAQ";
import { TechStackSection } from "@/components/web-development/TechStackSection";
import { WebDevHero } from "@/components/web-development/WebDevHero";
import { WebDevFeatures } from "@/components/web-development/WebDevFeatures";
import { WebDevPricing } from "@/components/web-development/WebDevPricing";
import { WebDevBreadcrumbs } from "@/components/web-development/WebDevBreadcrumbs";
import { WebDevMeta } from "@/components/web-development/WebDevMeta";

const WebDevelopment = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planes');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <WebDevMeta />
      <Header />
      <main className="min-h-screen bg-background">
        <WebDevBreadcrumbs />
        <WebDevHero onScrollToPlans={scrollToPlans} />
        <WebDevFeatures />
        <WebDevPricing />
        <DigitalPresenceSection />
        <TechStackSection />
        <WebDevFAQ />
      </main>
      <Footer />
    </>
  );
};

export default WebDevelopment;