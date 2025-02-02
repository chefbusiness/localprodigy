import { 
  Search, 
  MapPin, 
  Star, 
  TrendingUp, 
  Users, 
  MessageSquare,
  Calendar,
  Activity,
  PawPrint,
  Stethoscope
} from "lucide-react";

export const VeterinaryServices = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Local para Veterinarias",
      description: "Mejore su visibilidad en búsquedas locales y Google Maps para atraer a propietarios de mascotas cercanos."
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      description: "Optimización completa de su perfil de Google para destacar sus servicios veterinarios y horarios."
    },
    {
      icon: Star,
      title: "Gestión de Reseñas",
      description: "Construcción y gestión activa de su reputación online para generar confianza."
    },
    {
      icon: TrendingUp,
      title: "Publicidad Digital",
      description: "Campañas segmentadas para promocionar sus servicios veterinarios en su área de influencia."
    },
    {
      icon: Users,
      title: "Redes Sociales",
      description: "Gestión profesional de sus redes sociales para conectar con propietarios de mascotas."
    },
    {
      icon: MessageSquare,
      title: "Contenido Especializado",
      description: "Creación de contenido relevante sobre cuidado animal y servicios veterinarios."
    },
    {
      icon: Calendar,
      title: "Sistema de Citas Online",
      description: "Implementación de reserva de citas online para mejorar la experiencia del cliente."
    },
    {
      icon: Activity,
      title: "Analítica y Reportes",
      description: "Seguimiento detallado del rendimiento de sus campañas de marketing digital."
    },
    {
      icon: PawPrint,
      title: "Marketing de Servicios",
      description: "Promoción efectiva de sus servicios veterinarios especializados."
    },
    {
      icon: Stethoscope,
      title: "Branding Profesional",
      description: "Desarrollo de una imagen profesional y confiable para su clínica veterinaria."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Servicios de Marketing Digital para Veterinarias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones especializadas para ayudar a su clínica veterinaria a crecer y atraer más pacientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg border hover:border-yellow transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-yellow/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-yellow" />
                </div>
                <h3 className="font-semibold">{service.title}</h3>
              </div>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};