import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Search, Globe, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SEO Local",
    description: "Domina las búsquedas locales y Google Maps. Mejora tu visibilidad en tu área de servicio y atrae clientes cualificados cerca de tu negocio.",
    icon: MapPin,
    href: "/servicios/seo-local",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverColor: "hover:bg-emerald-100",
    features: ["Optimización Google Business Profile", "SEO Local para múltiples ubicaciones", "Gestión de reseñas", "Citations building"]
  },
  {
    title: "SEO Nacional",
    description: "Posicionamiento orgánico a nivel nacional. Aumenta tu visibilidad en toda España y domina las búsquedas en tu sector.",
    icon: Globe,
    href: "/servicios/seo-nacional",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-100",
    features: ["Estrategia SEO completa", "Link building autoridad", "Contenido optimizado", "Análisis de competencia"]
  },
  {
    title: "Publicidad Digital",
    description: "Campañas SEM y redes sociales que maximizan tu ROI. Gestión profesional de Google Ads y Meta Ads para resultados inmediatos.",
    icon: MousePointerClick,
    href: "/servicios/publicidad-digital",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-100",
    features: ["Google Ads optimizado", "Facebook & Instagram Ads", "Remarketing avanzado", "Seguimiento de conversiones"]
  },
  {
    title: "Desarrollo Web",
    description: "Sitios web optimizados para SEO que convierten visitantes en clientes. Diseño profesional enfocado en resultados.",
    icon: Search,
    href: "/servicios/desarrollo-web",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    hoverColor: "hover:bg-yellow-100",
    features: ["Diseño responsive", "Optimización Core Web Vitals", "CMS personalizado", "SSL incluido"]
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-black/[0.02]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
            Servicios de Marketing Digital para Negocios Locales
          </h2>
          <p className="text-2xl text-muted-foreground">
            Soluciones integrales de marketing digital diseñadas para aumentar tu visibilidad online y atraer más clientes cualificados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link to={service.href} key={service.title}>
              <Card 
                className={`group transition-all duration-300 ${service.bgColor} ${service.hoverColor} border-none h-full backdrop-blur-sm bg-opacity-50 hover:scale-105 p-8`}
              >
                <CardHeader className="flex flex-row items-center gap-6">
                  <div className={`p-4 rounded-xl ${service.iconColor} bg-white/50`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};