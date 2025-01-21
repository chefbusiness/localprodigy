import { Helmet } from "react-helmet";
import { breadcrumbSchema, faqSchema, webDevSchema } from "./WebDevSchemas";

export const WebDevMeta = () => {
  return (
    <Helmet>
      <title>Desarrollo Web Profesional para Negocios Locales | LocalProdigy</title>
      <meta 
        name="description" 
        content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." 
      />
      <meta 
        name="keywords" 
        content="desarrollo web, diseño web, páginas web para negocios, desarrollo web profesional, diseño responsive, web corporativa, tienda online" 
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta 
        property="og:title" 
        content="Desarrollo Web Profesional para Negocios Locales | LocalProdigy" 
      />
      <meta 
        property="og:description" 
        content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." 
      />
      <meta property="og:image" content="https://localprodigy.es/og-desarrollo-web.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta 
        name="twitter:title" 
        content="Desarrollo Web Profesional para Negocios Locales | LocalProdigy" 
      />
      <meta 
        name="twitter:description" 
        content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." 
      />
      <meta name="twitter:image" content="https://localprodigy.es/og-desarrollo-web.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://localprodigy.es/servicios/desarrollo-web" />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify(webDevSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};