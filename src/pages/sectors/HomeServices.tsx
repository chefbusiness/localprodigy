import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/retail/HeroSection";
import { ServiceGrid } from "@/components/retail/ServiceGrid";
import { homeServices } from "@/data/home-services";

const HomeServices = () => {
  const pageTitle = "SEO Local para Proveedores de Servicios para el Hogar";
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": "Soluciones de marketing digital especializadas para empresas y profesionales de servicios para el hogar. Mejora tu visibilidad online y atrae más clientes cualificados.",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads",
      "url": "https://localSEOads.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Marketing Digital | localSEOads</title>
        <meta 
          name="description" 
          content="Soluciones especializadas de marketing digital para empresas y profesionales de servicios para el hogar. Mejora tu visibilidad online y atrae más clientes cualificados." 
        />
        <meta 
          name="keywords" 
          content="seo servicios hogar, marketing digital reformas, publicidad fontaneros, seo local electricistas, marketing carpinteros españa" 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <link rel="canonical" href="https://localseoads.com/sectores/servicios-hogar" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <HeroSection 
          title={pageTitle}
          description="Soluciones de marketing digital especializadas para empresas y profesionales de servicios para el hogar. Aumenta tu visibilidad online y atrae más clientes cualificados."
        />

        <div className="container mx-auto px-4 py-24">
          <ServiceGrid services={homeServices} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomeServices;