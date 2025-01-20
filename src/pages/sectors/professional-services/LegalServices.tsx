import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalServices } from "@/components/legal/LegalServices";
import { LegalFAQ } from "@/components/legal/LegalFAQ";
import { LegalSchema } from "@/components/legal/LegalSchema";
import { ContactForm } from "@/components/ContactForm";

const LegalServicesPage = () => {
  return (
    <>
      <LegalSchema />
      <Header />
      <main className="min-h-screen bg-background">
        <LegalHero />
        <LegalServices />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </section>
        <LegalFAQ />
      </main>
      <Footer />
    </>
  );
};

export default LegalServicesPage;