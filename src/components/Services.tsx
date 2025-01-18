import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, LineChart, Code, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SEO Local",
    description: "Mejora tu visibilidad en búsquedas locales y Google Maps. Optimizamos tu presencia para atraer clientes de tu zona.",
    icon: Search,
    link: "/servicios/seo-local",
  },
  {
    title: "Google Business Profile",
    description: "Gestión profesional de tu perfil de Google Business. Maximiza tu visibilidad en búsquedas locales y Google Maps.",
    icon: Globe,
    link: "/servicios/seo-local#google-business",
  },
  {
    title: "SEM Local",
    description: "Campañas de Google Ads optimizadas para tu área de servicio. Atrae clientes cualificados de tu zona.",
    icon: LineChart,
    link: "/servicios/publicidad-digital",
  },
  {
    title: "Desarrollo Web",
    description: "Sitios web optimizados para SEO y conversión. Diseño responsive y velocidad de carga optimizada.",
    icon: Code,
    link: "/servicios/desarrollo-web",
  },
  {
    title: "Social Ads",
    description: "Publicidad en redes sociales dirigida a tu audiencia local. Aumenta tu visibilidad en redes sociales.",
    icon: Share2,
    link: "/servicios/publicidad-digital#social-ads",
  },
  {
    title: "Reputación Online",
    description: "Gestión y monitoreo de reseñas. Mejora tu imagen online y construye confianza con tus clientes.",
    icon: MessageSquare,
    link: "/servicios/seo-local#reputacion-online",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales de marketing digital diseñadas específicamente para negocios locales que buscan crecer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-2 border-transparent hover:border-yellow/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-yellow" />
                </div>
                <CardTitle className="group-hover:text-yellow transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="group-hover:text-yellow group-hover:bg-yellow/10 transition-colors duration-300"
                  asChild
                >
                  <Link to={service.link}>
                    Saber más →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};