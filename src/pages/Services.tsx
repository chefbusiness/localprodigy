import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, Code, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "SEO Local",
      description: "Mejora tu visibilidad en búsquedas locales y Google Maps. Optimizamos tu presencia para atraer clientes de tu zona.",
      icon: Search,
      link: "/servicios/seo-local"
    },
    {
      title: "SEO Nacional",
      description: "Estrategias de posicionamiento para competir a nivel nacional. Aumenta tu visibilidad en todo el país.",
      icon: Globe,
      link: "/servicios/seo-nacional"
    },
    {
      title: "Desarrollo Web",
      description: "Sitios web optimizados para SEO y conversión. Diseño responsive y velocidad de carga optimizada.",
      icon: Code,
      link: "/servicios/desarrollo-web"
    },
    {
      title: "Publicidad Digital",
      description: "Gestión profesional de campañas en Google Ads, Meta Ads, TikTok y Pinterest. Maximiza tu ROI con estrategias personalizadas.",
      icon: Target,
      link: "/servicios/publicidad-digital"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button asChild>
                    <Link to={service.link}>Ver más detalles →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;