import { Helmet } from "react-helmet";

export const ConsultancySchema = () => {
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