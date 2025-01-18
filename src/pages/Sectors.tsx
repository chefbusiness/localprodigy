import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Building2, HeartPulse, UtensilsCrossed, Store, Wrench, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const sectors = [
  {
    title: "Servicios Profesionales",
    icon: Building2,
    description: "Servicios profesionales y asesoramiento especializado",
    businesses: [
      "Clínicas dentales y odontólogos",
      "Abogados y bufetes jurídicos",
      "Asesorías fiscales y contables",
      "Psicólogos y terapeutas",
      "Veterinarias",
      "Arquitectos y estudios de arquitectura",
      "Agentes inmobiliarios",
      "Consultoras de recursos humanos",
      "Academias y centros de formación",
      "Gestorías administrativas"
    ]
  },
  {
    title: "Salud y Bienestar",
    icon: HeartPulse,
    description: "Servicios relacionados con la salud y el bienestar personal",
    businesses: [
      "Centros médicos privados",
      "Fisioterapeutas",
      "Nutricionistas",
      "Centros de yoga y pilates",
      "Gimnasios y centros deportivos",
      "Spas y centros de estética",
      "Peluquerías y salones de belleza",
      "Centros de masaje",
      "Ópticas",
      "Farmacias"
    ]
  },
  {
    title: "Hostelería y Restauración",
    icon: UtensilsCrossed,
    description: "Negocios de alimentación, hospedaje y ocio",
    businesses: [
      "Restaurantes",
      "Cafeterías y coffee shops",
      "Bares y pubs",
      "Pastelerías y panaderías",
      "Hoteles boutique",
      "Hostales y pensiones",
      "Casas rurales",
      "Food trucks",
      "Catering y eventos",
      "Heladerías artesanales"
    ]
  },
  {
    title: "Comercio Local",
    icon: Store,
    description: "Tiendas y comercios minoristas locales",
    businesses: [
      "Tiendas de ropa y moda",
      "Zapaterías",
      "Joyerías",
      "Floristerías",
      "Librerías",
      "Tiendas de electrónica",
      "Ferreterías",
      "Tiendas de muebles",
      "Tiendas de mascotas",
      "Tiendas de productos ecológicos"
    ]
  },
  {
    title: "Servicios para el Hogar",
    icon: Wrench,
    description: "Profesionales y empresas de mantenimiento y mejora del hogar",
    businesses: [
      "Fontaneros",
      "Electricistas",
      "Carpinteros",
      "Pintores",
      "Empresas de reformas",
      "Jardineros",
      "Cerrajeros",
      "Empresas de limpieza",
      "Servicios de control de plagas",
      "Decoradores de interiores"
    ]
  },
  {
    title: "Automoción",
    icon: Car,
    description: "Servicios relacionados con vehículos y transporte",
    businesses: [
      "Talleres mecánicos",
      "Concesionarios locales",
      "Autoescuelas",
      "Lavaderos de coches",
      "Tiendas de repuestos",
      "Talleres de chapa y pintura",
      "Electricistas del automóvil",
      "Empresas de alquiler de vehículos",
      "ITV",
      "Servicios de grúa"
    ]
  }
];

const Sectors = () => {
  return (
    <>
      <Helmet>
        <title>Sectores y Negocios Locales | SEO Local por Sector | localSEOads.com</title>
        <meta 
          name="description" 
          content="Soluciones de SEO local especializadas por sector. Estrategias personalizadas para diferentes tipos de negocios locales en España, Latinoamérica y USA." 
        />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="SEO por Sectores Hero"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Sectores y Negocios Locales
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Soluciones de SEO local especializadas por sector y adaptadas a las necesidades específicas de cada tipo de negocio
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Card 
                key={sector.title}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center mb-4">
                    <sector.icon className="h-6 w-6 text-yellow" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-yellow transition-colors">
                    {sector.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {sector.businesses.slice(0, 5).map((business) => (
                      <li 
                        key={business}
                        className="flex items-center text-muted-foreground"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-yellow" />
                        {business}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full group-hover:bg-yellow group-hover:text-yellow-foreground transition-all duration-300"
                    asChild
                  >
                    <Link to={`/sectores/${sector.title.toLowerCase().replace(/ /g, "-")}`}>
                      Ver más detalles →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Enfoque Geográfico Personalizado
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-3">España</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Keywords por ciudad/barrio</li>
                  <li>Búsquedas "cerca de mí"</li>
                  <li>Variantes regionales</li>
                </ul>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-3">Latinoamérica</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Modismos locales</li>
                  <li>Keywords por país</li>
                  <li>Búsquedas por colonias</li>
                </ul>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-3">Estados Unidos</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>SEO bilingüe</li>
                  <li>Búsquedas "near me"</li>
                  <li>Keywords por ZIP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Sectors;