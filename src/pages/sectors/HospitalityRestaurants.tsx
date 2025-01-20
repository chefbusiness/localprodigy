import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  UtensilsCrossed, 
  Coffee, 
  ChefHat, 
  Hotel, 
  Cake, 
  Store,
  GlassWater,
  Soup,
  Fish,
  Beef,
  Salad,
  Globe,
  Truck,
  PartyPopper,
  IceCream
} from "lucide-react";

const services = [
  {
    title: "Restaurantes Tradicionales",
    description: "Cocina tradicional española con platos clásicos como paella, cocido y fabada",
    keywords: ["restaurante tradicional", "cocina española", "gastronomía local"],
    icon: ChefHat,
    slug: "restaurantes-tradicionales"
  },
  {
    title: "Alta Cocina y Gourmet",
    description: "Establecimientos con estrellas Michelin y experiencias gastronómicas únicas",
    keywords: ["restaurante gourmet", "alta cocina", "estrella michelin"],
    icon: UtensilsCrossed,
    slug: "alta-cocina"
  },
  {
    title: "Cocina de Autor",
    description: "Chefs creativos que fusionan técnicas e ingredientes de forma innovadora",
    keywords: ["cocina de autor", "fusión", "innovación culinaria"],
    icon: Soup,
    slug: "cocina-autor"
  },
  {
    title: "Bares de Tapas",
    description: "Especializados en una amplia variedad de pequeños platos para compartir",
    keywords: ["bar de tapas", "tapas", "pinchos"],
    icon: GlassWater,
    slug: "bares-tapas"
  },
  {
    title: "Cocina Mediterránea",
    description: "Centrados en ingredientes frescos y saludables típicos de la dieta mediterránea",
    keywords: ["cocina mediterránea", "saludable", "productos frescos"],
    icon: Salad,
    slug: "cocina-mediterranea"
  },
  {
    title: "Marisquerías y Pescaderías",
    description: "Especializados en productos del mar, muy populares en zonas costeras",
    keywords: ["marisquería", "pescados", "marisco fresco"],
    icon: Fish,
    slug: "marisquerias"
  },
  {
    title: "Asadores y Parrillas",
    description: "Centrados en carnes a la brasa y platos tradicionales",
    keywords: ["asador", "parrilla", "carnes"],
    icon: Beef,
    slug: "asadores"
  },
  {
    title: "Cocina Internacional",
    description: "Restaurantes de cocina italiana, francesa, japonesa y otras culturas",
    keywords: ["cocina internacional", "fusión", "gastronomía mundial"],
    icon: Globe,
    slug: "cocina-internacional"
  },
  {
    title: "Cafeterías y Coffee Shops",
    description: "Establecimientos especializados en café y ambiente acogedor",
    keywords: ["cafetería", "coffee shop", "brunch"],
    icon: Coffee,
    slug: "cafeterias"
  },
  {
    title: "Hoteles y Alojamientos",
    description: "Hoteles boutique, hostales y alojamientos turísticos",
    keywords: ["hotel", "alojamiento", "hostal"],
    icon: Hotel,
    slug: "hoteles"
  },
  {
    title: "Pastelerías y Panaderías",
    description: "Establecimientos especializados en panadería y repostería artesanal",
    keywords: ["pastelería", "panadería", "repostería"],
    icon: Cake,
    slug: "pastelerias"
  },
  {
    title: "Food Trucks",
    description: "Cocina móvil y street food con propuestas innovadoras",
    keywords: ["food truck", "comida callejera", "street food"],
    icon: Truck,
    slug: "food-trucks"
  },
  {
    title: "Catering y Eventos",
    description: "Servicios profesionales para eventos y celebraciones",
    keywords: ["catering", "eventos", "celebraciones"],
    icon: PartyPopper,
    slug: "catering"
  },
  {
    title: "Heladerías Artesanales",
    description: "Helados y postres helados elaborados artesanalmente",
    keywords: ["heladería", "helados artesanales", "postres"],
    icon: IceCream,
    slug: "heladerias"
  }
];

const HospitalityRestaurants = () => {
  // Schema.org markup for better SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hostelería y Restauración | Servicios de Marketing Digital",
    "description": "Soluciones de marketing digital especializadas para negocios y profesionales del sector hostelero y restauración en España",
    "provider": {
      "@type": "Organization",
      "name": "localSEOads",
      "url": "https://localSEOads.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Hostelería y Restauración | Marketing Digital para Restaurantes | localSEOads</title>
        <meta 
          name="description" 
          content="Soluciones especializadas de marketing digital para restaurantes, hoteles, bares y negocios del sector hostelero. Mejora tu visibilidad online y atrae más clientes." 
        />
        <meta 
          name="keywords" 
          content="marketing digital hostelería, SEO restaurantes, publicidad digital hoteles, marketing restaurantes españa, SEO local hostelería" 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <link rel="canonical" href="https://localseoads.com/sectores/hosteleria-restauracion" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section with Background Image */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
              alt="Interior de restaurante moderno representando el sector de hostelería y restauración"
              className="w-full h-full object-cover opacity-10"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hostelería y Restauración
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluciones de marketing digital especializadas para negocios y profesionales del sector hostelero y restauración
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-yellow" />
                  </div>
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