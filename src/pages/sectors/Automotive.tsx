import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/retail/HeroSection";
import { ServiceGrid } from "@/components/retail/ServiceGrid";
import { automotiveServices } from "@/data/automotive-services";

const Automotive = () => {
  const pageTitle = "SEO Local para Empresas de Automoción";
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": "Soluciones de marketing digital especializadas para talleres mecánicos, concesionarios y empresas del sector automotriz. Mejora tu visibilidad online y atrae más clientes cualificados.",
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
          content="Soluciones especializadas de marketing digital para talleres mecánicos, concesionarios y empresas del sector automotriz. Mejora tu visibilidad online y atrae más clientes cualificados." 
        />
        <meta 
          name="keywords" 
          content="seo talleres mecánicos, marketing digital automoción, publicidad talleres, seo local concesionarios, marketing automotriz españa" 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <link rel="canonical" href="https://localseoads.com/sectores/automocion" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <HeroSection 
          title={pageTitle}
          description="Soluciones de marketing digital especializadas para empresas del sector automotriz. Aumenta tu visibilidad online y atrae más clientes cualificados."
        />

        <div className="container mx-auto px-4 py-24">
          <ServiceGrid services={automotiveServices} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Automotive;