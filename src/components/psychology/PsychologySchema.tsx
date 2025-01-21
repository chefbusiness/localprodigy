import { Helmet } from "react-helmet";

export const PsychologySchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing Digital para Psicólogos",
    "description": "Servicios especializados de marketing digital para psicólogos y terapeutas. Incluye SEO local, gestión de reputación online y publicidad digital.",
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
      "name": "Servicios de Marketing Digital para Psicólogos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Starter",
            "description": "Plan básico de SEO local para psicólogos",
            "price": "297",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Growth",
            "description": "Plan profesional de SEO local para psicólogos",
            "price": "597",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Authority",
            "description": "Plan premium de SEO local para psicólogos",
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
        "name": "¿Qué resultados puedo esperar del marketing digital para mi consulta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se maneja la privacidad en el marketing para psicólogos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro enfoque prioriza la confidencialidad del paciente y cumple con todas las normativas de privacidad. Trabajamos con testimonios anónimos, casos de éxito generalizados y contenido que respeta la sensibilidad de la salud mental."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>Marketing Digital para Psicólogos | SEO y Publicidad para Consultas</title>
      <meta 
        name="description" 
        content="Servicios especializados de marketing digital para psicólogos. Aumente su visibilidad online y genere más consultas cualificadas para su práctica profesional." 
      />
      <meta name="keywords" content="marketing digital psicólogos, seo psicólogos, publicidad psicólogos, marketing consulta psicología" />
      <link rel="canonical" href="https://localseoads.com/sectores/servicios-profesionales/psicologos" />
      
      <meta property="og:title" content="Marketing Digital para Psicólogos | Servicios Especializados" />
      <meta property="og:description" content="Servicios de marketing digital especializados para psicólogos. Aumente su visibilidad online y atraiga más pacientes cualificados." />
      <meta property="og:url" content="https://localseoads.com/sectores/servicios-profesionales/psicologos" />
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