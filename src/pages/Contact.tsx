import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <ContactHeader />
          <ContactFormSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;