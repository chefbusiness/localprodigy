import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/local-seo/Hero";
import { Benefits } from "@/components/local-seo/Benefits";
import { PricingPlans } from "@/components/local-seo/PricingPlans";
import { ImportanceSection } from "@/components/local-seo/ImportanceSection";
import { FAQ } from "@/components/local-seo/FAQ";

const LocalSEO = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <Benefits />
        <PricingPlans />
        <ImportanceSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default LocalSEO;