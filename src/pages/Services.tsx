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
      title: "SEM Publicidad Digital",
      description: "Gestión profesional de campañas en Google Ads, Meta Ads, TikTok y Pinterest. Maximiza tu ROI con estrategias personalizadas.",
      icon: Target,
      link: "/servicios/publicidad-digital"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-muted-foreground">
              Soluciones digitales completas para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-yellow" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-yellow transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full group-hover:bg-yellow group-hover:text-yellow-foreground transition-all duration-300"
                  >
                    <Link to={service.link}>Ver más detalles →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;