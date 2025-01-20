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
  IceCream,
  Wheat,
  Flame,
  Sandwich,
  Leaf,
  Wine,
  Utensils,
  Pizza,
  ChefHat as ChefIcon,
  Shell,
  Drumstick,
  Soup as BuffetIcon,
  Palette,
  Timer,
  Coffee as BrunchIcon,
  Globe2,
  Sprout
} from "lucide-react";

const services = [
  {
    title: "Restaurantes de cocina tradicional española",
    description: "Establecimientos especializados en platos clásicos como paella, cocido madrileño y fabada asturiana, manteniendo viva la esencia de nuestra gastronomía.",
    keywords: ["cocina tradicional", "gastronomía española", "platos típicos", "cocina regional"],
    icon: UtensilsCrossed,
    slug: "cocina-tradicional"
  },
  {
    title: "Restaurantes de alta cocina o gourmet",
    description: "Establecimientos de alta gastronomía y estrellas Michelin que ofrecen experiencias culinarias excepcionales y servicio de primera clase.",
    keywords: ["alta cocina", "restaurante gourmet", "estrella michelin", "gastronomía premium"],
    icon: ChefHat,
    slug: "alta-cocina"
  },
  {
    title: "Restaurantes de cocina de autor",
    description: "Espacios creativos donde chefs innovadores fusionan técnicas tradicionales con conceptos modernos para crear experiencias únicas.",
    keywords: ["cocina de autor", "gastronomía creativa", "cocina moderna", "chef creativo"],
    icon: Soup,
    slug: "cocina-autor"
  },
  {
    title: "Restaurantes de tapas",
    description: "Locales especializados en la auténtica tradición española de tapas, ofreciendo una amplia variedad de pequeños platos para compartir.",
    keywords: ["tapas", "pinchos", "raciones", "bar de tapas"],
    icon: GlassWater,
    slug: "tapas"
  },
  {
    title: "Restaurantes de cocina mediterránea",
    description: "Establecimientos centrados en la saludable dieta mediterránea, con productos frescos, aceite de oliva y sabores tradicionales.",
    keywords: ["cocina mediterránea", "dieta mediterránea", "productos frescos", "cocina saludable"],
    icon: Salad,
    slug: "mediterranea"
  },
  {
    title: "Restaurantes de cocina vasca",
    description: "Especialistas en la renombrada gastronomía vasca, famosa por sus pinchos, pescados frescos y carnes a la parrilla.",
    keywords: ["cocina vasca", "pintxos", "asador vasco", "gastronomía del norte"],
    icon: Flame,
    slug: "cocina-vasca"
  },
  {
    title: "Restaurantes de cocina catalana",
    description: "Exponentes de la rica tradición culinaria catalana, desde el pan con tomate hasta las creaciones más vanguardistas.",
    keywords: ["cocina catalana", "gastronomía catalana", "pa amb tomàquet", "cocina moderna"],
    icon: Wheat,
    slug: "cocina-catalana"
  },
  {
    title: "Restaurantes de cocina fusión",
    description: "Espacios innovadores que combinan diferentes culturas culinarias, creando platos únicos que mezclan sabores internacionales.",
    keywords: ["cocina fusión", "gastronomía internacional", "cocina creativa", "sabores del mundo"],
    icon: Globe,
    slug: "fusion"
  },
  {
    title: "Restaurantes vegetarianos y veganos",
    description: "Establecimientos especializados en cocina basada en plantas, ofreciendo alternativas saludables y sostenibles sin productos de origen animal.",
    keywords: ["vegetariano", "vegano", "plant-based", "comida saludable"],
    icon: Leaf,
    slug: "vegetariano-vegano"
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
  },
  {
    title: "Restaurantes de cocina internacional",
    description: "Establecimientos que ofrecen una variada selección de platos de diferentes culturas, incluyendo cocina italiana, francesa, japonesa y otras gastronomías internacionales.",
    keywords: ["cocina internacional", "gastronomía mundial", "fusion", "cocina italiana", "cocina francesa", "cocina japonesa"],
    icon: Globe,
    slug: "cocina-internacional"
  },
  {
    title: "Restaurantes de cocina latinoamericana",
    description: "Espacios gastronómicos especializados en la rica y diversa cocina de América Latina, desde la cocina peruana hasta los asados argentinos.",
    keywords: ["cocina latina", "comida peruana", "cocina mexicana", "asados argentinos", "arepas venezolanas", "cocina colombiana"],
    icon: ChefIcon,
    slug: "cocina-latinoamericana"
  },
  {
    title: "Gastrobares",
    description: "Establecimientos que combinan la alta cocina con un ambiente más informal y desenfadado, ofreciendo tapas gourmet y platos creativos.",
    keywords: ["gastrobar", "tapas gourmet", "cocina creativa", "bar gastronómico", "cocina informal"],
    icon: Wine,
    slug: "gastrobares"
  },
  {
    title: "Restaurantes de mariscos y pescados",
    description: "Especialistas en productos frescos del mar, ofreciendo una amplia variedad de pescados y mariscos preparados de forma tradicional e innovadora.",
    keywords: ["marisquería", "pescados frescos", "marisco", "cocina marinera", "productos del mar"],
    icon: Shell,
    slug: "mariscos-pescados"
  },
  {
    title: "Asadores y parrillas",
    description: "Restaurantes especializados en carnes a la brasa y parrilla, ofreciendo cortes selectos y preparaciones tradicionales.",
    keywords: ["asador", "parrilla", "carnes a la brasa", "barbacoa", "carne a la parrilla"],
    icon: Drumstick,
    slug: "asadores-parrillas"
  },
  {
    title: "Restaurantes buffet",
    description: "Establecimientos que ofrecen una amplia variedad de platos en formato buffet, permitiendo a los clientes elegir entre múltiples opciones.",
    keywords: ["buffet", "autoservicio", "variedad gastronómica", "buffet libre", "all you can eat"],
    icon: BuffetIcon,
    slug: "buffet"
  },
  {
    title: "Restaurantes temáticos",
    description: "Locales con ambientación y decoración específica, que ofrecen una experiencia gastronómica única basada en un tema o concepto particular.",
    keywords: ["restaurante temático", "experiencia gastronómica", "ambientación especial", "decoración temática"],
    icon: Palette,
    slug: "tematicos"
  },
  {
    title: "Restaurantes de cocina rápida o fast food",
    description: "Establecimientos que ofrecen servicio rápido y eficiente, con opciones de comida preparada al momento incluyendo alternativas saludables.",
    keywords: ["fast food", "comida rápida", "servicio rápido", "take away", "para llevar"],
    icon: Timer,
    slug: "fast-food"
  },
  {
    title: "Restaurantes de brunch",
    description: "Especializados en el servicio de brunch, combinando desayuno y almuerzo con opciones variadas y creativas, especialmente populares los fines de semana.",
    keywords: ["brunch", "desayuno tardío", "almuerzo temprano", "café especialidad", "huevos benedict"],
    icon: BrunchIcon,
    slug: "brunch"
  },
  {
    title: "Restaurantes de cocina asiática",
    description: "Establecimientos especializados en las diversas gastronomías asiáticas, incluyendo cocina china, tailandesa, vietnamita y otras variedades orientales.",
    keywords: ["cocina asiática", "comida china", "cocina tailandesa", "cocina vietnamita", "sushi"],
    icon: Globe2,
    slug: "cocina-asiatica"
  },
  {
    title: "Restaurantes ecológicos y km 0",
    description: "Restaurantes comprometidos con la sostenibilidad, utilizando productos locales, orgánicos y de temporada en sus elaboraciones.",
    keywords: ["ecológico", "kilómetro cero", "productos locales", "orgánico", "sostenible"],
    icon: Sprout,
    slug: "ecologicos-km0"
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
