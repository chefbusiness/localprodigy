import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - LocalSEOAds | Consulta Gratuita de Marketing Digital</title>
        <meta name="description" content="Contacta con nuestro equipo de expertos en SEO local y marketing digital. Solicita tu consulta gratuita y descubre cómo podemos ayudarte a hacer crecer tu negocio local." />
        <meta name="keywords" content="contacto seo local, consulta marketing digital, agencia seo españa, consultoría seo gratuita" />
        <meta property="og:title" content="Contacto - LocalSEOAds | Consulta Gratuita de Marketing Digital" />
        <meta property="og:description" content="Contacta con nuestro equipo de expertos en SEO local y marketing digital. Solicita tu consulta gratuita y descubre cómo podemos ayudarte a hacer crecer tu negocio local." />
        <link rel="canonical" href="https://localseoads.com/contacto" />
      </Helmet>
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