import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DigitalPresenceSection } from "@/components/web-development/DigitalPresenceSection";
import { WebDevFAQ } from "@/components/web-development/WebDevFAQ";
import { TechStackSection } from "@/components/web-development/TechStackSection";
import { WebDevHero } from "@/components/web-development/WebDevHero";
import { WebDevFeatures } from "@/components/web-development/WebDevFeatures";
import { WebDevPricing } from "@/components/web-development/WebDevPricing";
import { Helmet } from "react-helmet";

const WebDevelopment = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planes');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Schema markup para el servicio de desarrollo web
  const webDevSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo Web Profesional",
    "description": "Desarrollo de sitios web optimizados para SEO y conversión. Diseño responsive y velocidad de carga optimizada para negocios locales.",
    "provider": {
      "@type": "Organization",
      "name": "LocalProdigy",
      "image": "https://localprodigy.es/logo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Básico Web",
            "description": "Landing page profesional con diseño responsive",
            "price": "1497",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Profesional Web",
            "description": "Web corporativa hasta 10 páginas con blog integrado",
            "price": "2997",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan E-commerce",
            "description": "Tienda online completa con hasta 100 productos",
            "price": "4997",
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Desarrollo Web Profesional para Negocios Locales | LocalProdigy</title>
        <meta name="description" content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." />
        <meta name="keywords" content="desarrollo web, diseño web, páginas web para negocios, desarrollo web profesional, diseño responsive, web corporativa, tienda online" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Desarrollo Web Profesional para Negocios Locales | LocalProdigy" />
        <meta property="og:description" content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." />
        <meta property="og:image" content="https://localprodigy.es/og-desarrollo-web.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desarrollo Web Profesional para Negocios Locales | LocalProdigy" />
        <meta name="twitter:description" content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." />
        <meta name="twitter:image" content="https://localprodigy.es/og-desarrollo-web.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://localprodigy.es/servicios/desarrollo-web" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(webDevSchema)}
        </script>
      </Helmet>

      <Header />
      <main className="min-h-screen bg-background">
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