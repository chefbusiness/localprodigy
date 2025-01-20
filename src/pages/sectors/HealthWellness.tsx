import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "Centros Médicos Privados",
    description: "Marketing digital especializado para clínicas y centros médicos privados",
    slug: "centros-medicos",
    keywords: ["centro médico", "clínica privada", "hospital privado", "consultas médicas"]
  },
  {
    title: "Fisioterapeutas",
    description: "Estrategias digitales para clínicas y profesionales de fisioterapia",
    slug: "fisioterapeutas",
    keywords: ["fisioterapeuta", "rehabilitación", "terapia física", "fisioterapia"]
  },
  {
    title: "Nutricionistas",
    description: "Soluciones de marketing digital para nutricionistas y dietistas",
    slug: "nutricionistas",
    keywords: ["nutricionista", "dietista", "nutrición", "dieta personalizada"]
  },
  {
    title: "Centros de Yoga y Pilates",
    description: "Marketing digital para centros de yoga, pilates y bienestar",
    slug: "yoga-pilates",
    keywords: ["yoga", "pilates", "meditación", "mindfulness"]
  },
  {
    title: "Gimnasios y Centros Deportivos",
    description: "Estrategias digitales para gimnasios y centros de fitness",
    slug: "gimnasios",
    keywords: ["gimnasio", "centro deportivo", "fitness", "entrenamiento personal"]
  },
  {
    title: "Spas y Centros de Estética",
    description: "Marketing digital para spas y centros de belleza integral",
    slug: "spas",
    keywords: ["spa", "centro de estética", "tratamientos belleza", "bienestar"]
  },
  {
    title: "Peluquerías y Salones de Belleza",
    description: "Soluciones digitales para peluquerías y salones de belleza",
    slug: "peluquerias",
    keywords: ["peluquería", "salón de belleza", "estilista", "barbería"]
  },
  {
    title: "Centros de Masaje",
    description: "Marketing digital para centros y profesionales del masaje terapéutico",
    slug: "masajes",
    keywords: ["masaje", "terapia manual", "masaje terapéutico", "relajación"]
  },
  {
    title: "Ópticas",
    description: "Estrategias digitales para ópticas y centros de optometría",
    slug: "opticas",
    keywords: ["óptica", "optometrista", "gafas", "lentes de contacto"]
  },
  {
    title: "Farmacias",
    description: "Marketing digital especializado para farmacias y parafarmacias",
    slug: "farmacias",
    keywords: ["farmacia", "parafarmacia", "medicamentos", "productos sanitarios"]
  }
];

const HealthWellness = () => {
  // Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Local para Salud y Bienestar",
    "description": "Servicios especializados de SEO y marketing digital para empresas del sector salud y bienestar",
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
        "name": "Salud y Bienestar",
        "item": "https://localseoads.com/sectores/salud-bienestar"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEO Local para Salud y Bienestar | Marketing Digital Sanitario | localSEOads</title>
        <meta 
          name="description" 
          content="Servicios especializados de SEO Local y Marketing Digital para el sector salud y bienestar. Aumenta tu visibilidad online y atrae más pacientes cualificados." 
        />
        <meta 
          name="keywords" 
          content="seo sector salud, marketing digital sanitario, posicionamiento web salud, publicidad centros médicos, marketing sanitario, seo local salud" 
        />
        <link rel="canonical" href="https://localseoads.com/sectores/salud-bienestar" />
        <meta property="og:title" content="SEO Local para Salud y Bienestar | Marketing Digital Sanitario" />
        <meta property="og:description" content="Servicios especializados de SEO Local y Marketing Digital para el sector salud y bienestar. Aumenta tu visibilidad online y atrae más pacientes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localseoads.com/sectores/salud-bienestar" />
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
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Salud y Bienestar SEO"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                SEO Local para Salud y Bienestar
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Soluciones de marketing digital especializadas para profesionales y empresas del sector salud y bienestar
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
                    <Link to={`/sectores/salud-bienestar/${service.slug}`}>
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

export default HealthWellness;