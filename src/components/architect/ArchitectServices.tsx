import { Building2, DraftingCompass, Users, Target, BarChart3, Globe } from "lucide-react";

export const ArchitectServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Posicionamiento Local",
      description: "Mejore su visibilidad en búsquedas locales y Google Maps para atraer clientes de su zona."
    },
    {
      icon: DraftingCompass,
      title: "Diseño Web Profesional",
      description: "Creamos sitios web que destacan sus proyectos y transmiten profesionalidad."
    },
    {
      icon: Users,
      title: "Gestión de Reputación",
      description: "Gestione y mejore su reputación online con reseñas positivas de clientes satisfechos."
    },
    {
      icon: Target,
      title: "Publicidad Digital",
      description: "Campañas de Google Ads y redes sociales dirigidas a su público objetivo."
    },
    {
      icon: BarChart3,
      title: "Analytics y Reportes",
      description: "Seguimiento detallado del rendimiento de sus campañas digitales."
    },
    {
      icon: Globe,
      title: "Contenido Especializado",
      description: "Creación de contenido relevante para mostrar su experiencia y proyectos."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Servicios de Marketing Digital para Arquitectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-yellow/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-yellow" />
                </div>
                <h3 className="font-semibold">{service.title}</h3>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};