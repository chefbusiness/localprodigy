import { Helmet } from "react-helmet";

export const DentalSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Local para Clínicas Dentales",
    "description": "Servicios especializados de SEO Local y Marketing Digital para clínicas dentales. Aumentamos tu visibilidad online y atraemos más pacientes cualificados.",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads",
      "url": "https://localSEOads.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios SEO para Clínicas Dentales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Starter",
            "description": "Plan básico de SEO local para clínicas dentales",
            "price": "297",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Local Growth",
            "description": "Plan profesional de SEO local para clínicas dentales",
            "price": "597",
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>SEO Local para Clínicas Dentales | Marketing Digital Dental | localSEOads</title>
      <meta 
        name="description" 
        content="Especialistas en SEO local y marketing digital para clínicas dentales. Aumenta tu visibilidad online, atrae más pacientes y destaca en tu zona. ¡Solicita presupuesto!" 
      />
      <meta 
        name="keywords" 
        content="seo clínicas dentales, marketing digital dentistas, posicionamiento web dental, publicidad clínica dental, marketing odontológico, seo local dentistas" 
      />
      <link rel="canonical" href="https://localseoads.com/sectores/servicios-profesionales/clinicas-dentales" />
      <meta property="og:title" content="SEO Local para Clínicas Dentales | Marketing Digital Dental" />
      <meta property="og:description" content="Especialistas en SEO local y marketing digital para clínicas dentales. Aumenta tu visibilidad online y atrae más pacientes cualificados." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://localseoads.com/sectores/servicios-profesionales/clinicas-dentales" />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};