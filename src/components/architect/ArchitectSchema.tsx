import { Helmet } from "react-helmet";

export const ArchitectSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing Digital para Arquitectos",
    "description": "Servicios especializados de marketing digital para estudios de arquitectura. Incluye SEO local, gestión de reputación online y publicidad digital.",
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
      "name": "Servicios de Marketing Digital para Arquitectos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Starter",
            "description": "Plan básico de SEO local para estudios de arquitectura",
            "price": "297",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Growth",
            "description": "Plan profesional de SEO local para estudios de arquitectura",
            "price": "597",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Authority",
            "description": "Plan premium de SEO local para estudios de arquitectura",
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
        "name": "¿Qué resultados puedo esperar del marketing digital para mi estudio de arquitectura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo lleva ver resultados en SEO para arquitectos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área pueden influir en estos plazos."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>Marketing Digital para Arquitectos | SEO y Publicidad para Estudios de Arquitectura</title>
      <meta 
        name="description" 
        content="Servicios especializados de marketing digital para arquitectos. Aumente su visibilidad online y genere más consultas cualificadas para su estudio de arquitectura." 
      />
      <meta name="keywords" content="marketing digital arquitectos, seo estudios arquitectura, publicidad arquitectos, marketing arquitectos, posicionamiento web arquitectos" />
      <link rel="canonical" href="https://localseoads.com/sectores/servicios-profesionales/arquitectos" />
      
      <meta property="og:title" content="Marketing Digital para Arquitectos | Servicios Especializados" />
      <meta property="og:description" content="Servicios de marketing digital especializados para estudios de arquitectura. Aumente su visibilidad online y atraiga más clientes cualificados." />
      <meta property="og:url" content="https://localseoads.com/sectores/servicios-profesionales/arquitectos" />
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