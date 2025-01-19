import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DigitalPresenceSection } from "@/components/web-development/DigitalPresenceSection";
import { WebDevFAQ } from "@/components/web-development/WebDevFAQ";
import { TechStackSection } from "@/components/web-development/TechStackSection";
import { Helmet } from "react-helmet";

const WebDevelopment = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planes');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Schema markup para el servicio de desarrollo web
  const webDevSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo Web Profesional",
    "description": "Desarrollo de sitios web optimizados para SEO y conversión. Diseño responsive y velocidad de carga optimizada para negocios locales.",
    "provider": {
      "@type": "Organization",
      "name": "LocalProdigy",
      "image": "https://localprodigy.es/logo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Básico Web",
            "description": "Landing page profesional con diseño responsive",
            "price": "1497",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Profesional Web",
            "description": "Web corporativa hasta 10 páginas con blog integrado",
            "price": "2997",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan E-commerce",
            "description": "Tienda online completa con hasta 100 productos",
            "price": "4997",
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Desarrollo Web Profesional para Negocios Locales | LocalProdigy</title>
        <meta name="description" content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." />
        <meta name="keywords" content="desarrollo web, diseño web, páginas web para negocios, desarrollo web profesional, diseño responsive, web corporativa, tienda online" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Desarrollo Web Profesional para Negocios Locales | LocalProdigy" />
        <meta property="og:description" content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." />
        <meta property="og:image" content="https://localprodigy.es/og-desarrollo-web.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desarrollo Web Profesional para Negocios Locales | LocalProdigy" />
        <meta name="twitter:description" content="Desarrollo web profesional optimizado para SEO y conversión. Sitios web rápidos, seguros y efectivos para negocios locales en España." />
        <meta name="twitter:image" content="https://localprodigy.es/og-desarrollo-web.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://localprodigy.es/servicios/desarrollo-web" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(webDevSchema)}
        </script>
      </Helmet>

      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Desarrollo Web Hero"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
                Desarrollo Web
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Sitios Web Optimizados para SEO y Conversión
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed">
                Desarrollamos webs que no solo se ven bien, sino que también convierten visitantes en clientes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-yellow hover:bg-yellow-dark text-yellow-foreground text-lg animate-fade-up"
                >
                  <Link to="/contacto">Solicitar Presupuesto</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg animate-fade-up hover:bg-white/10"
                  onClick={scrollToPlans}
                >
                  Ver Planes
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Características de Nuestro Desarrollo</h2>
              <p className="text-xl text-muted-foreground">
                Tecnología moderna y mejores prácticas para tu sitio web
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Diseño Responsive",
                  description: "Tu web se verá perfecta en cualquier dispositivo"
                },
                {
                  title: "Optimización SEO",
                  description: "Código limpio y estructura optimizada para buscadores"
                },
                {
                  title: "Velocidad de Carga",
                  description: "Optimización de recursos para máximo rendimiento"
                },
                {
                  title: "Seguridad SSL",
                  description: "Certificado SSL incluido para proteger los datos"
                },
                {
                  title: "Panel de Control",
                  description: "Gestiona tu contenido fácilmente"
                },
                {
                  title: "Soporte Técnico",
                  description: "Asistencia profesional cuando la necesites"
                }
              ].map((feature) => (
                <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-yellow transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planes" className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de Desarrollo Web</h2>
              <p className="text-xl text-muted-foreground">
                Soluciones web adaptadas a tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Plan Básico Web",
                  price: "1.497",
                  features: [
                    "Landing page profesional",
                    "Diseño responsive",
                    "Hasta 5 secciones",
                    "Optimización SEO básica",
                    "Hosting primer año",
                    "SSL incluido"
                  ]
                },
                {
                  name: "Plan Profesional Web",
                  price: "2.997",
                  popular: true,
                  features: [
                    "Web corporativa hasta 10 páginas",
                    "Blog integrado",
                    "Panel de administración",
                    "Optimización SEO avanzada",
                    "Multiidioma (ES)",
                    "Integración con CRM básico",
                    "Hosting primer año",
                    "SSL incluido"
                  ]
                },
                {
                  name: "Plan E-commerce",
                  price: "4.997",
                  features: [
                    "Tienda online completa",
                    "Hasta 100 productos",
                    "Panel de gestión",
                    "Pasarela de pagos",
                    "Sistema de envíos",
                    "SEO E-commerce",
                    "Formación básica",
                    "Hosting primer año",
                    "SSL incluido"
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
                ¿Necesitas funcionalidades específicas? ¿Tienes un proyecto especial?
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

        <DigitalPresenceSection />
        <TechStackSection />
        <WebDevFAQ />
      </main>
      <Footer />
    </>
  );
};

export default WebDevelopment;