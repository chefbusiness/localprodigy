import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Search, Globe, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SEO Local",
    description: "Domina las búsquedas locales y Google Maps",
    icon: MapPin,
    href: "/servicios/seo-local",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverColor: "hover:bg-emerald-100"
  },
  {
    title: "SEO Nacional",
    description: "Posicionamiento orgánico a nivel nacional",
    icon: Globe,
    href: "/servicios/seo-nacional",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-100"
  },
  {
    title: "Publicidad Digital",
    description: "Campañas SEM y redes sociales",
    icon: MousePointerClick,
    href: "/servicios/publicidad-digital",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-100"
  },
  {
    title: "Desarrollo Web",
    description: "Sitios web optimizados para SEO",
    icon: Search,
    href: "/servicios/desarrollo-web",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    hoverColor: "hover:bg-yellow-100"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-black/[0.02]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones integrales de marketing digital para negocios locales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link to={service.href} key={service.title}>
              <Card 
                className={`group transition-all duration-300 ${service.bgColor} ${service.hoverColor} border-none h-full backdrop-blur-sm bg-opacity-50 hover:scale-105`}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-2 rounded-lg ${service.iconColor}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};