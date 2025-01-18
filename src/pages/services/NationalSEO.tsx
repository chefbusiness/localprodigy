import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/national-seo/Hero";
import { WhatIs } from "@/components/national-seo/WhatIs";
import { Services } from "@/components/national-seo/Services";
import { Pricing } from "@/components/national-seo/Pricing";
import { FAQ } from "@/components/national-seo/FAQ";
import { ToolsSection } from "@/components/ToolsSection";

const NationalSEO = () => {
  // Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Nacional",
    "description": "Servicio de posicionamiento web para empresas que operan a nivel nacional en España",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads.com",
      "url": "https://localseoads.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planes SEO Nacional",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Essential",
            "description": "Plan básico de SEO nacional"
          },
          "price": "597",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "597",
            "priceCurrency": "EUR",
            "unitText": "mes"
          }
        }
      ]
    }
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
        "name": "SEO Nacional",
        "item": "https://localseoads.com/servicios/seo-nacional"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEO Nacional | Posicionamiento Web en España | localSEOads.com</title>
        <meta name="description" content="Mejora tu visibilidad online a nivel nacional. Expertos en posicionamiento web para empresas que operan en toda España." />
        <meta name="keywords" content="SEO nacional, posicionamiento web españa, SEO españa, agencia SEO, posicionamiento google" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="SEO Nacional | Posicionamiento Web en España" />
        <meta property="og:description" content="Mejora tu visibilidad online a nivel nacional. Expertos en posicionamiento web para empresas que operan en toda España." />
        <meta property="og:image" content="https://localseoads.com/og-seo-nacional.jpg" />
        <meta property="og:url" content="https://localseoads.com/servicios/seo-nacional" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Nacional | Posicionamiento Web en España" />
        <meta name="twitter:description" content="Mejora tu visibilidad online a nivel nacional. Expertos en posicionamiento web para empresas que operan en toda España." />
        <meta name="twitter:image" content="https://localseoads.com/og-seo-nacional.jpg" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="localSEOads.com" />
        <meta name="geo.region" content="ES" />
        <meta name="geo.position" content="40.416775;-3.703790" />
        <meta name="ICBM" content="40.416775, -3.703790" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="es" href="https://localseoads.com/servicios/seo-nacional" />
        <link rel="alternate" hrefLang="en" href="https://localseoads.com/en/services/national-seo" />
        <link rel="alternate" hrefLang="x-default" href="https://localseoads.com/servicios/seo-nacional" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://localseoads.com/servicios/seo-nacional" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <WhatIs />
        <Services />
        <ToolsSection />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default NationalSEO;