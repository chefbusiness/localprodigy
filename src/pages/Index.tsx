import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <section className="py-16 px-4 bg-muted">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;