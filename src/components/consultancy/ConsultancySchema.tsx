import { Helmet } from "react-helmet";

export const ConsultancySchema = () => {
  const faqs = [
    {
      question: "¿Qué resultados puedo esperar del marketing digital para mi asesoría?",
      answer: "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
    },
    {
      question: "¿Cómo se diferencia el marketing digital para asesorías de otros sectores?",
      answer: "El marketing para asesorías requiere un enfoque especializado que considere las regulaciones profesionales, la confidencialidad de la información y la necesidad de construir confianza. Nos centramos en estrategias que resaltan su experiencia y credenciales mientras mantenemos los más altos estándares éticos."
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados en SEO para asesorías?",
      answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área y especialidad pueden influir en estos plazos."
    },
    {
      question: "¿Qué presupuesto debo considerar para marketing digital?",
      answer: "El presupuesto varía según sus objetivos y el alcance deseado. Nuestros planes comienzan desde 597€/mes para gestión básica de presencia online. Para una estrategia completa que incluya SEO, PPC y gestión de contenidos, recomendamos un presupuesto mensual desde 997€."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing Digital para Asesorías",
    "description": "Servicios especializados de marketing digital para asesorías fiscales y contables. Incluye SEO local, gestión de reputación online y publicidad digital.",
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
      "name": "Servicios de Marketing Digital para Asesorías",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Starter",
            "description": "Plan básico de SEO local para asesorías",
            "price": "297",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Growth",
            "description": "Plan profesional de SEO local para asesorías",
            "price": "597",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Authority",
            "description": "Plan premium de SEO local para asesorías",
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
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <title>Marketing Digital para Asesorías | SEO y Publicidad para Asesorías Fiscales</title>
      <meta 
        name="description" 
        content="Servicios especializados de marketing digital para asesorías. Aumente su visibilidad online y genere más consultas cualificadas para su asesoría fiscal o contable." 
      />
      <meta name="keywords" content="marketing digital asesorías, seo asesorías fiscales, publicidad asesorías, marketing fiscal, posicionamiento web asesorías" />
      <link rel="canonical" href="https://localseoads.com/sectores/servicios-profesionales/asesorias" />
      
      <meta property="og:title" content="Marketing Digital para Asesorías | Servicios Especializados" />
      <meta property="og:description" content="Servicios de marketing digital especializados para asesorías fiscales y contables. Aumente su visibilidad online y atraiga más clientes cualificados." />
      <meta property="og:url" content="https://localseoads.com/sectores/servicios-profesionales/asesorias" />
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