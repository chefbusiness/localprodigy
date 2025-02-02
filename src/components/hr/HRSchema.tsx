import { Helmet } from "react-helmet";

export const HRSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing Digital para Consultoras de Recursos Humanos",
    "description": "Servicios especializados de marketing digital para consultoras de RRHH. Incluye SEO local, gestión de reputación online y publicidad digital.",
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
      "name": "Servicios de Marketing Digital para RRHH",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Starter",
            "description": "Plan básico de SEO local para consultoras de RRHH",
            "price": "297",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Growth",
            "description": "Plan profesional de SEO local para consultoras de RRHH",
            "price": "597",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Authority",
            "description": "Plan premium de SEO local para consultoras de RRHH",
            "price": "997",
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>Marketing Digital para Consultoras de RRHH | SEO y Publicidad para Recursos Humanos</title>
      <meta 
        name="description" 
        content="Servicios especializados de marketing digital para consultoras de recursos humanos. Aumente su visibilidad online y genere más consultas cualificadas para su consultora de RRHH." 
      />
      <meta 
        name="keywords" 
        content="marketing digital RRHH, seo consultoras recursos humanos, publicidad recursos humanos, marketing consultoras RRHH, posicionamiento web recursos humanos" 
      />
      <link 
        rel="canonical" 
        href="https://localseoads.com/sectores/servicios-profesionales/recursos-humanos" 
      />
      
      <meta 
        property="og:title" 
        content="Marketing Digital para Consultoras de RRHH | Servicios Especializados" 
      />
      <meta 
        property="og:description" 
        content="Servicios de marketing digital especializados para consultoras de recursos humanos. Aumente su visibilidad online y atraiga más clientes cualificados." 
      />
      <meta 
        property="og:url" 
        content="https://localseoads.com/sectores/servicios-profesionales/recursos-humanos" 
      />
      <meta property="og:type" content="website" />
      
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};