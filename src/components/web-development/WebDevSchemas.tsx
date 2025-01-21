export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://localprodigy.es"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Servicios",
      "item": "https://localprodigy.es/servicios"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Desarrollo Web",
      "item": "https://localprodigy.es/servicios/desarrollo-web"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda en desarrollarse un sitio web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page puede estar lista en 2-3 semanas, mientras que un e-commerce completo puede llevar 6-8 semanas. Siempre proporcionamos un cronograma detallado al inicio del proyecto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tecnología es mejor para mi sitio web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La elección de la tecnología depende de tus necesidades específicas. WordPress es excelente para sitios con mucho contenido y blogs, Next.js para aplicaciones web modernas y de alto rendimiento, y Shopify para e-commerce con necesidades estándar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Incluyen el mantenimiento del sitio web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, todos nuestros planes incluyen mantenimiento básico durante el primer año. Esto incluye actualizaciones de seguridad, copias de seguridad y soporte técnico."
      }
    }
  ]
};

export const webDevSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Desarrollo Web Profesional",
  "description": "Desarrollo de sitios web optimizados para SEO y conversión. Diseño responsive y velocidad de carga optimizada para negocios locales.",
  "provider": {
    "@type": "Organization",
    "name": "LocalProdigy",
    "image": "https://localprodigy.es/logo.png"
  },
  "areaServed": {
    "@type": "Country",
    "name": "España"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Desarrollo Web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plan Básico Web",
          "description": "Landing page profesional con diseño responsive",
          "price": "1497",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plan Profesional Web",
          "description": "Web corporativa hasta 10 páginas con blog integrado",
          "price": "2997",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plan E-commerce",
          "description": "Tienda online completa con hasta 100 productos",
          "price": "4997",
          "priceCurrency": "EUR"
        }
      }
    ]
  }
};