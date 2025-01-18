import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/local-seo/Hero";
import { Benefits } from "@/components/local-seo/Benefits";
import { PricingPlans } from "@/components/local-seo/PricingPlans";
import { ImportanceSection } from "@/components/local-seo/ImportanceSection";
import { FAQ } from "@/components/local-seo/FAQ";
import { Helmet } from "react-helmet";

const LocalSEO = () => {
  // Schema markup for the service
  const localSEOSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de SEO Local",
    "description": "Optimización SEO local para empresas en España. Mejora tu visibilidad en Google Maps y búsquedas locales.",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads.com",
      "image": "https://localseoads.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ES"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planes SEO Local",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Starter",
            "description": "Plan básico de SEO local",
            "price": "297",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Growth",
            "description": "Plan profesional de SEO local",
            "price": "597",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Authority",
            "description": "Plan premium de SEO local",
            "price": "997",
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo medimos los resultados del SEO local?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proporcionamos informes mensuales detallados que incluyen: posiciones en búsquedas locales, visibilidad en Google Maps, tráfico a la web, llamadas y direcciones solicitadas desde Google Business Profile, evolución de reseñas, y lo más importante: leads y conversiones generadas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo se tarda en ver resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los primeros resultados suelen verse entre 3-6 meses, aunque esto puede variar según la competitividad del sector y la ubicación."
        }
      }
    ]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://localseoads.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://localseoads.com/servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO Local",
        "item": "https://localseoads.com/servicios/seo-local"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Servicios SEO Local en España | Optimización Local | localSEOads.com</title>
        <meta name="description" content="Mejora tu visibilidad local en Google con nuestros servicios de SEO local. Especialistas en posicionamiento local para empresas en España. Resultados garantizados." />
        <meta name="keywords" content="SEO local, posicionamiento local, Google Maps, Google Business Profile, SEO España" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Servicios SEO Local en España | localSEOads.com" />
        <meta property="og:description" content="Mejora tu visibilidad local en Google con nuestros servicios de SEO local. Especialistas en posicionamiento local para empresas en España." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localseoads.com/servicios/seo-local" />
        <meta property="og:image" content="https://localseoads.com/og-seo-local.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios SEO Local en España | localSEOads.com" />
        <meta name="twitter:description" content="Mejora tu visibilidad local en Google. Especialistas en SEO local para empresas en España." />
        <meta name="twitter:image" content="https://localseoads.com/og-seo-local.jpg" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="localSEOads.com" />
        <meta name="geo.region" content="ES" />
        <meta name="geo.position" content="40.416775;-3.703790" />
        <meta name="ICBM" content="40.416775, -3.703790" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="es" href="https://localseoads.com/servicios/seo-local" />
        <link rel="alternate" hrefLang="en" href="https://localseoads.com/en/services/local-seo" />
        <link rel="alternate" hrefLang="x-default" href="https://localseoads.com/servicios/seo-local" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://localseoads.com/servicios/seo-local" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(localSEOSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

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