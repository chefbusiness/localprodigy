import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ChefHat, Coffee, Hotel, Bed } from "lucide-react";

const services = [
  {
    title: "Restaurantes Tradicionales",
    description: "Marketing digital especializado para restaurantes de cocina tradicional española",
    slug: "restaurantes-tradicionales",
    keywords: ["cocina tradicional", "paella", "cocido madrileño", "fabada asturiana"]
  },
  {
    title: "Alta Cocina y Gourmet",
    description: "Estrategias digitales para restaurantes de alta cocina y establecimientos con estrellas Michelin",
    slug: "alta-cocina",
    keywords: ["restaurante gourmet", "estrella michelin", "alta gastronomía", "cocina de autor"]
  },
  {
    title: "Bares de Tapas",
    description: "Soluciones de marketing digital para bares y restaurantes especializados en tapas",
    slug: "bares-tapas",
    keywords: ["bar de tapas", "tapas", "pinchos", "raciones"]
  },
  {
    title: "Cocina Mediterránea",
    description: "Marketing digital para restaurantes de cocina mediterránea y saludable",
    slug: "cocina-mediterranea",
    keywords: ["cocina mediterránea", "dieta mediterránea", "cocina saludable", "productos frescos"]
  },
  {
    title: "Cocina Internacional",
    description: "Estrategias digitales para restaurantes de cocina internacional",
    slug: "cocina-internacional",
    keywords: ["cocina italiana", "cocina japonesa", "cocina francesa", "cocina fusión"]
  },
  {
    title: "Cafeterías y Coffee Shops",
    description: "Marketing digital para cafeterías modernas y coffee shops",
    slug: "cafeterias",
    keywords: ["cafetería", "coffee shop", "café especialidad", "brunch"]
  },
  {
    title: "Hoteles y Alojamientos",
    description: "Soluciones digitales para hoteles boutique y alojamientos turísticos",
    slug: "hoteles",
    keywords: ["hotel boutique", "hostal", "casa rural", "alojamiento turístico"]
  },
  {
    title: "Catering y Eventos",
    description: "Marketing digital para empresas de catering y organización de eventos",
    slug: "catering",
    keywords: ["catering", "eventos", "banquetes", "celebraciones"]
  },
  {
    title: "Food Trucks",
    description: "Estrategias digitales para food trucks y cocina móvil",
    slug: "food-trucks",
    keywords: ["food truck", "street food", "comida callejera", "eventos gastronómicos"]
  },
  {
    title: "Heladerías Artesanales",
    description: "Marketing digital especializado para heladerías artesanales",
    slug: "heladerias",
    keywords: ["heladería artesanal", "helados", "postres helados", "heladería gourmet"]
  }
];

const HospitalityRestaurants = () => {
  // Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Local para Hostelería y Restauración",
    "description": "Servicios especializados de SEO y marketing digital para empresas del sector hostelero y restauración",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads",
      "url": "https://localseoads.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    }
  };

  // BreadcrumbList Schema
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
        "name": "Hostelería y Restauración",
        "item": "https://localseoads.com/sectores/hosteleria-restauracion"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEO Local para Hostelería y Restauración | Marketing Digital Gastronómico | localSEOads</title>
        <meta 
          name="description" 
          content="Servicios especializados de SEO Local y Marketing Digital para el sector de hostelería y restauración. Aumenta tu visibilidad online y atrae más clientes a tu establecimiento." 
        />
        <meta 
          name="keywords" 
          content="seo hostelería, marketing digital restaurantes, posicionamiento web restaurantes, publicidad restaurantes, marketing gastronómico, seo local hostelería" 
        />
        <link rel="canonical" href="https://localseoads.com/sectores/hosteleria-restauracion" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
              alt="Hostelería y Restauración SEO"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                SEO Local para Hostelería y Restauración
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Soluciones de marketing digital especializadas para restaurantes, bares, hoteles y empresas del sector hostelero
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-yellow transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword) => (
                      <span 
                        key={keyword}
                        className="text-sm bg-muted px-2 py-1 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="w-full group-hover:bg-yellow group-hover:text-yellow-foreground transition-all duration-300"
                    asChild
                  >
                    <Link to={`/sectores/hosteleria-restauracion/${service.slug}`}>
                      Ver solución específica →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HospitalityRestaurants;