import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Search, Globe, MousePointerClick, Users, BarChart } from "lucide-react";

const services = [
  {
    title: "SEO Local para Abogados",
    description: "Posicionamiento en búsquedas locales para captar clientes en su área de influencia",
    icon: Search,
    features: [
      "Optimización Google Business Profile",
      "SEO local específico para abogados",
      "Posicionamiento por especialidades",
      "Optimización de reseñas"
    ]
  },
  {
    title: "Marketing de Contenidos Legal",
    description: "Contenido especializado que demuestra su experiencia y genera confianza",
    icon: Scale,
    features: [
      "Blog posts especializados",
      "Guías legales",
      "Casos de éxito",
      "Newsletter legal"
    ]
  },
  {
    title: "Publicidad Digital Legal",
    description: "Campañas segmentadas para atraer clientes potenciales cualificados",
    icon: MousePointerClick,
    features: [
      "Google Ads para abogados",
      "Facebook & LinkedIn Ads",
      "Remarketing especializado",
      "Landing pages por práctica"
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

export const LegalServices = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Servicios de Marketing Digital para Abogados
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones especializadas para aumentar la visibilidad de su despacho y atraer más clientes
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