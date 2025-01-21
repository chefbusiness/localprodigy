import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Globe, Users } from "lucide-react";

const services = [
  {
    title: "SEO Local para Psicólogos",
    description: "Posicionamiento en búsquedas locales para captar pacientes en su área",
    icon: Globe,
    features: [
      "Optimización Google Business Profile",
      "SEO local específico para psicólogos",
      "Posicionamiento por especialidades",
      "Optimización de reseñas"
    ]
  },
  {
    title: "Marketing de Contenidos en Salud Mental",
    description: "Contenido especializado que demuestra su experiencia y genera confianza",
    icon: Brain,
    features: [
      "Blog posts especializados",
      "Guías de salud mental",
      "Casos de éxito anónimos",
      "Newsletter de bienestar"
    ]
  },
  {
    title: "Publicidad Digital para Terapeutas",
    description: "Campañas segmentadas para atraer pacientes potenciales cualificados",
    icon: Heart,
    features: [
      "Google Ads para psicólogos",
      "Facebook & Instagram Ads",
      "Remarketing especializado",
      "Landing pages por especialidad"
    ]
  },
  {
    title: "Gestión de Reputación",
    description: "Construcción y mantenimiento de una sólida presencia online",
    icon: Users,
    features: [
      "Monitorización de reseñas",
      "Gestión de crisis",
      "Construcción de autoridad",
      "Testimonios verificados"
    ]
  }
];

export const PsychologyServices = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Servicios de Marketing Digital para Psicólogos
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones especializadas para aumentar la visibilidad de su consulta y atraer más pacientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="bg-background hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-yellow/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-yellow" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};