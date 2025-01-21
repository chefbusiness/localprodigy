import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/retail/HeroSection";
import { ServiceGrid } from "@/components/retail/ServiceGrid";
import { retailServices } from "@/data/retail-services";

const LocalRetail = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SEO Local para Comercio Local | Marketing Digital para Tiendas",
    "description": "Soluciones de marketing digital especializadas para comercios y tiendas locales. Mejora tu visibilidad online y atrae más clientes cualificados.",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads",
      "url": "https://localSEOads.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>SEO Local para Comercio Local | Marketing Digital para Tiendas | localSEOads</title>
        <meta 
          name="description" 
          content="Soluciones especializadas de marketing digital para tiendas y comercios locales. Mejora tu visibilidad online y atrae más clientes cualificados a tu negocio." 
        />
        <meta 
          name="keywords" 
          content="seo comercio local, marketing digital tiendas, publicidad tiendas local, seo local comercios, marketing tiendas españa" 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <link rel="canonical" href="https://localseoads.com/sectores/comercio-local" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <HeroSection 
          title="SEO Local para Comercio Local"
          description="Soluciones de marketing digital especializadas para tiendas y comercios locales. Aumenta tu visibilidad online y atrae más clientes cualificados."
        />

        <div className="container mx-auto px-4 py-24">
          <ServiceGrid services={retailServices} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LocalRetail;