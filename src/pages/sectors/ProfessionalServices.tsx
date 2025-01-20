import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "Clínicas Dentales",
    description: "Servicios de SEO y marketing digital especializados para clínicas dentales y odontólogos",
    slug: "clinicas-dentales",
    keywords: ["dentista", "odontólogo", "clínica dental", "implantes dentales"]
  },
  {
    title: "Abogados",
    description: "Estrategias de marketing digital para bufetes jurídicos y abogados independientes",
    slug: "abogados",
    keywords: ["abogado", "bufete jurídico", "asesoría legal", "despacho de abogados"]
  },
  {
    title: "Asesorías",
    description: "Soluciones SEO para asesorías fiscales y contables",
    slug: "asesorias",
    keywords: ["asesoría fiscal", "gestoría", "contabilidad", "consultoría empresarial"]
  },
  {
    title: "Psicólogos y Terapeutas",
    description: "Marketing digital especializado para profesionales de la salud mental",
    slug: "psicologos",
    keywords: ["psicólogo", "terapeuta", "psicoterapia", "salud mental"]
  },
  {
    title: "Veterinarias",
    description: "Estrategias digitales para clínicas veterinarias y especialistas en salud animal",
    slug: "veterinarias",
    keywords: ["veterinario", "clínica veterinaria", "hospital veterinario", "servicios veterinarios"]
  },
  {
    title: "Arquitectos",
    description: "Soluciones de marketing digital para estudios de arquitectura y profesionales independientes",
    slug: "arquitectos",
    keywords: ["arquitecto", "estudio de arquitectura", "diseño arquitectónico", "proyectos arquitectónicos"]
  },
  {
    title: "Agentes Inmobiliarios",
    description: "Marketing digital especializado para agentes y agencias inmobiliarias",
    slug: "inmobiliarias",
    keywords: ["agente inmobiliario", "inmobiliaria", "bienes raíces", "venta de propiedades"]
  },
  {
    title: "Recursos Humanos",
    description: "Estrategias digitales para consultoras y profesionales de RRHH",
    slug: "recursos-humanos",
    keywords: ["consultora RRHH", "selección de personal", "recursos humanos", "gestión del talento"]
  },
  {
    title: "Centros de Formación",
    description: "Marketing digital para academias y centros educativos",
    slug: "formacion",
    keywords: ["academia", "centro de formación", "cursos", "formación profesional"]
  },
  {
    title: "Gestorías",
    description: "Soluciones digitales para gestorías administrativas",
    slug: "gestorias",
    keywords: ["gestoría", "trámites administrativos", "gestión documental", "asesoría administrativa"]
  }
];

const ProfessionalServices = () => {
  return (
    <>
      <Helmet>
        <title>Servicios Profesionales | SEO Local para Profesionales | localSEOads.com</title>
        <meta 
          name="description" 
          content="Soluciones de SEO local especializadas para servicios profesionales. Marketing digital para clínicas, abogados, asesores y más profesionales." 
        />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Servicios Profesionales SEO"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                SEO Local para Servicios Profesionales
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Soluciones de marketing digital especializadas para profesionales y empresas de servicios
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
                    <Link to={`/sectores/servicios-profesionales/${service.slug}`}>
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

export default ProfessionalServices;