import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { UtensilsCrossed, Coffee, ChefHat, Hotel, Cake, Store } from "lucide-react";

const services = [
  {
    title: "Restaurantes Tradicionales",
    description: "Marketing digital para restaurantes de cocina tradicional española y moderna",
    keywords: ["restaurante", "cocina tradicional", "gastronomía española", "restaurante local"],
    icon: ChefHat,
    slug: "restaurantes-tradicionales"
  },
  {
    title: "Cafeterías y Coffee Shops",
    description: "Estrategias digitales para cafeterías y establecimientos de café especializado",
    keywords: ["cafetería", "coffee shop", "café especialidad", "brunch"],
    icon: Coffee,
    slug: "cafeterias"
  },
  {
    title: "Hoteles y Alojamientos",
    description: "Soluciones digitales para hoteles boutique y alojamientos turísticos",
    keywords: ["hotel", "alojamiento", "hostal", "casa rural"],
    icon: Hotel,
    slug: "hoteles"
  },
  {
    title: "Pastelerías y Panaderías",
    description: "Estrategias digitales para pastelerías y panaderías artesanales",
    keywords: ["pastelería", "panadería", "repostería", "bollería"],
    icon: Cake,
    slug: "pastelerias"
  },
  {
    title: "Bares y Restaurantes Temáticos",
    description: "Posicionamiento local para bares y restaurantes especializados",
    keywords: ["bar", "pub", "restaurante temático", "cocina especializada"],
    icon: UtensilsCrossed,
    slug: "bares"
  },
  {
    title: "Tiendas Gourmet",
    description: "Marketing digital para tiendas de productos gourmet y delicatessen",
    keywords: ["tienda gourmet", "delicatessen", "productos artesanales", "alimentación especial"],
    icon: Store,
    slug: "tiendas-gourmet"
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
        <title>Hostelería y Restauración | Servicios de Marketing Digital | localSEOads</title>
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
              fetchpriority="high"
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