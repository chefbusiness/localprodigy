import { Helmet } from "react-helmet";

export const RealEstateSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing Digital para Agentes Inmobiliarios",
    "description": "Servicios especializados de marketing digital para agencias inmobiliarias. Incluye SEO local, gestión de reputación online y publicidad digital.",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Marketing Digital Inmobiliario",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Starter",
            "description": "Plan básico de SEO local para agencias inmobiliarias",
            "price": "297",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Growth",
            "description": "Plan profesional de SEO local para agencias inmobiliarias",
            "price": "597",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Authority",
            "description": "Plan premium de SEO local para agencias inmobiliarias",
            "price": "997",
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué resultados puedo esperar del marketing digital para mi agencia inmobiliaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas de propiedades en los primeros 3-6 meses."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo lleva ver resultados en SEO inmobiliario?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su zona pueden influir en estos plazos."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>Marketing Digital para Agentes Inmobiliarios | SEO y Publicidad Inmobiliaria</title>
      <meta 
        name="description" 
        content="Servicios especializados de marketing digital para agentes inmobiliarios. Aumente su visibilidad online y genere más consultas cualificadas para su agencia inmobiliaria." 
      />
      <meta name="keywords" content="marketing digital inmobiliario, seo agencias inmobiliarias, publicidad inmobiliaria, marketing agentes inmobiliarios, posicionamiento web inmobiliarias" />
      <link rel="canonical" href="https://localseoads.com/sectores/servicios-profesionales/agentes-inmobiliarios" />
      
      <meta property="og:title" content="Marketing Digital para Agentes Inmobiliarios | Servicios Especializados" />
      <meta property="og:description" content="Servicios de marketing digital especializados para agencias inmobiliarias. Aumente su visibilidad online y atraiga más clientes cualificados." />
      <meta property="og:url" content="https://localseoads.com/sectores/servicios-profesionales/agentes-inmobiliarios" />
      <meta property="og:type" content="website" />
      
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};