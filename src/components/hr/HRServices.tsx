import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, BriefcaseIcon, HandshakeIcon } from "lucide-react";

const services = [
  {
    title: "SEO Local para Consultoras RRHH",
    description: "Posicionamiento en búsquedas locales para captar clientes corporativos en su área",
    icon: Users,
    features: [
      "Optimización Google Business Profile",
      "SEO local específico para RRHH",
      "Posicionamiento por servicios",
      "Optimización de reseñas"
    ]
  },
  {
    title: "Marketing de Contenidos RRHH",
    description: "Contenido especializado que demuestra su experiencia en recursos humanos",
    icon: BriefcaseIcon,
    features: [
      "Blog posts especializados",
      "Guías de RRHH",
      "Casos de éxito",
      "Newsletter sectorial"
    ]
  },
  {
    title: "Publicidad Digital RRHH",
    description: "Campañas segmentadas para atraer empresas y candidatos cualificados",
    icon: Target,
    features: [
      "Google Ads para RRHH",
      "LinkedIn Ads",
      "Remarketing especializado",
      "Landing pages por servicio"
    ]
  },
  {
    title: "Gestión de Marca Empleadora",
    description: "Construcción y mantenimiento de una sólida presencia online como empleador",
    icon: HandshakeIcon,
    features: [
      "Employer branding",
      "Gestión de reputación",
      "Construcción de autoridad",
      "Testimonios verificados"
    ]
  }
];

export const HRServices = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Servicios de Marketing Digital para Consultoras de RRHH
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones especializadas para aumentar la visibilidad de su consultora y atraer más clientes corporativos
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