import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const RealEstateBreadcrumbs = () => {
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
        "name": "Sectores",
        "item": "https://localseoads.com/sectores"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Servicios Profesionales",
        "item": "https://localseoads.com/sectores/servicios-profesionales"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Agentes Inmobiliarios",
        "item": "https://localseoads.com/sectores/servicios-profesionales/agentes-inmobiliarios"
      }
    ]
  };

  return (
    <div className="bg-white border-b">
      <nav 
        className="container mx-auto px-4 py-3" 
        aria-label="Breadcrumb"
      >
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <ol 
          className="flex items-center space-x-2 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-primary transition-colors"
              itemProp="item"
            >
              <span itemProp="name">Inicio</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              to="/sectores" 
              className="text-muted-foreground hover:text-primary transition-colors"
              itemProp="item"
            >
              <span itemProp="name">Sectores</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              to="/sectores/servicios-profesionales" 
              className="text-muted-foreground hover:text-primary transition-colors"
              itemProp="item"
            >
              <span itemProp="name">Servicios Profesionales</span>
            </Link>
            <meta itemProp="position" content="3" />
          </li>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
            className="text-primary font-medium"
          >
            <span itemProp="name">Agentes Inmobiliarios</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>
    </div>
  );
};