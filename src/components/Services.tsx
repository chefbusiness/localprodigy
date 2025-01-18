import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, LineChart, Code, Share2, MessageSquare } from "lucide-react";

const services = [
  {
    title: "SEO Local",
    description: "Mejora tu visibilidad en búsquedas locales y Google Maps",
    icon: Search,
  },
  {
    title: "Google Business Profile",
    description: "Optimización y gestión de tu perfil de empresa en Google",
    icon: Globe,
  },
  {
    title: "SEM Local",
    description: "Campañas de publicidad dirigidas a tu área de servicio",
    icon: LineChart,
  },
  {
    title: "Desarrollo Web",
    description: "Sitios web optimizados para conversión y SEO",
    icon: Code,
  },
  {
    title: "Social Ads",
    description: "Publicidad en redes sociales para alcance local",
    icon: Share2,
  },
  {
    title: "Reputación Online",
    description: "Gestión y monitoreo de reseñas y opiniones",
    icon: MessageSquare,
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">
            Soluciones integrales de marketing digital para negocios locales
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};