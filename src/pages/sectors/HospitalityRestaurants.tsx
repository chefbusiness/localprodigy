import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/hospitality/HeroSection";
import { ServiceGrid } from "@/components/hospitality/ServiceGrid";
import { hospitalityServices } from "@/data/hospitality-services";

const HospitalityRestaurants = () => {
  // Schema.org markup for better SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hostelería y Restauración | Servicios de Marketing Digital",
    "description": "Soluciones de marketing digital especializadas para negocios y profesionales del sector hostelero y restauración en España",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads",
      "url": "https://localSEOAds.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Hostelería y Restauración | Marketing Digital para Restaurantes | localSEOads</title>
        <meta 
          name="description" 
          content="Soluciones especializadas de marketing digital para restaurantes, hoteles, bares y negocios del sector hostelero. Mejora tu visibilidad online y atrae más clientes." 
        />
        <meta 
          name="keywords" 
          content="marketing digital hostelería, SEO restaurantes, publicidad digital hoteles, marketing restaurantes españa, SEO local hostelería" 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <link rel="canonical" href="https://localseoads.com/sectores/hosteleria-restauracion" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <HeroSection 
          title="Hostelería y Restauración"
          description="Soluciones de marketing digital especializadas para negocios y profesionales del sector hostelero y restauración"
        />

        <div className="container mx-auto px-4 py-24">
          <ServiceGrid services={hospitalityServices} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HospitalityRestaurants;