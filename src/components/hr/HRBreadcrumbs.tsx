import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const HRBreadcrumbs = () => {
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
        "name": "Recursos Humanos",
        "item": "https://localseoads.com/sectores/servicios-profesionales/recursos-humanos"
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
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
          </li>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <li>
            <Link 
              to="/sectores" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sectores
            </Link>
          </li>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <li>
            <Link 
              to="/sectores/servicios-profesionales" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios Profesionales
            </Link>
          </li>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <li className="text-primary font-medium">
            Recursos Humanos
          </li>
        </ol>
      </nav>
    </div>
  );
};