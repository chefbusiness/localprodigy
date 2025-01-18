import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatIs } from "@/components/national-seo/WhatIs";
import { FAQ } from "@/components/national-seo/FAQ";

const NationalSEO = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="SEO Nacional Hero"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
                SEO Nacional
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Domina las Búsquedas a Nivel Nacional
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed">
                Aumenta tu visibilidad en toda España y alcanza a más clientes potenciales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-yellow hover:bg-yellow-dark text-yellow-foreground text-lg animate-fade-up"
                >
                  <Link to="/contacto">Solicitar Consulta Gratuita</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="text-lg animate-fade-up hover:bg-white/10"
                >
                  <a href="#planes">Ver Planes</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <WhatIs />

        {/* Services Grid */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Nuestros Servicios de SEO Nacional</h2>
              <p className="text-xl text-muted-foreground">
                Soluciones completas para posicionar tu negocio en toda España
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "SEO On Page",
                  description: "Optimización completa de tu sitio web, incluyendo contenido, estructura y elementos técnicos",
                  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                },
                {
                  title: "SEO Off Page",
                  description: "Estrategias de link building y creación de autoridad para tu dominio",
                  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                },
                {
                  title: "Contenido SEO",
                  description: "Creación de contenido optimizado y estratégico para diferentes regiones",
                  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                },
                {
                  title: "Análisis y Reporting",
                  description: "Informes detallados de rendimiento y evolución de posiciones",
                  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                }
              ].map((service) => (
                <Card key={service.title} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-yellow transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planes" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de SEO Nacional</h2>
              <p className="text-xl text-muted-foreground">
                Elige el plan que mejor se adapte a tus objetivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "SEO Essential",
                  price: "597",
                  features: [
                    "SEO On Page básico",
                    "Google Business Profile",
                    "15 keywords objetivo",
                    "Informes mensuales",
                    "Contenido básico"
                  ]
                },
                {
                  name: "SEO Growth",
                  price: "997",
                  popular: true,
                  features: [
                    "SEO On Page completo",
                    "SEO Off Page básico",
                    "30 keywords objetivo",
                    "Link building (5 enlaces/mes)",
                    "Blog posts (2/mes)",
                    "Informes semanales"
                  ]
                },
                {
                  name: "SEO Authority",
                  price: "1.997",
                  features: [
                    "SEO On/Off Page avanzado",
                    "Link building premium",
                    "50+ keywords objetivo",
                    "Blog posts (4/mes)",
                    "Technical SEO",
                    "Video SEO",
                    "Informes personalizados"
                  ]
                }
              ].map((plan) => (
                <Card 
                  key={plan.name}
                  className={`relative hover:shadow-lg transition-all duration-300 animate-fade-up ${
                    plan.popular ? "border-2 border-yellow" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-yellow text-yellow-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Más Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild
                      className={`w-full mt-6 text-lg ${
                        plan.popular 
                          ? "bg-yellow hover:bg-yellow-dark text-yellow-foreground" 
                          : "hover:bg-primary/90"
                      }`}
                    >
                      <Link to="/contacto">Solicitar Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                ¿Necesitas un plan personalizado? ¿Tienes múltiples ubicaciones?
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-lg hover:bg-white/10"
              >
                <Link to="/contacto">Contacta con Nosotros</Link>
              </Button>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default NationalSEO;