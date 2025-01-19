import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MegaphoneIcon, Stethoscope, Award, ChartBar, Users } from "lucide-react";

const services = [
  {
    title: "SEO Local Especializado",
    description: "Optimización para búsquedas locales y Google Business Profile",
    icon: MapPin
  },
  {
    title: "Campañas SEM Dental",
    description: "Publicidad segmentada en Google Ads para captar pacientes",
    icon: MegaphoneIcon
  },
  {
    title: "Marketing de Contenidos",
    description: "Contenido especializado en servicios dentales",
    icon: Stethoscope
  },
  {
    title: "Gestión de Reputación",
    description: "Optimización de reseñas y testimonios de pacientes",
    icon: Award
  },
  {
    title: "Análisis y Resultados",
    description: "Seguimiento detallado de métricas y conversiones",
    icon: ChartBar
  },
  {
    title: "Experiencia del Paciente",
    description: "Mejora de la presencia digital y atención online",
    icon: Users
  }
];

export const DentalServices = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Servicios de Marketing Digital para Clínicas Dentales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-background hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-yellow/10 rounded-lg">
                  <service.icon className="h-6 w-6 text-yellow" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};