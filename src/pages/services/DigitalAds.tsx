import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Facebook, PenTool, RotateCw, Layout, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DigitalAds = () => {
  const scrollToPlanes = () => {
    const planesSection = document.getElementById('planes');
    if (planesSection) {
      planesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="SEM y Publicidad Digital Hero"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
                SEM y Publicidad Digital
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Campañas de SEM y Publicidad Digital que Generan Resultados
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed">
                Maximiza tu retorno de inversión con estrategias de Search Engine Marketing (SEM) y publicidad digital optimizadas
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
                  onClick={scrollToPlanes}
                >
                  Ver Planes
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Nuestros Servicios de Publicidad</h2>
              <p className="text-xl text-muted-foreground">
                Soluciones publicitarias para cada plataforma
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Google Ads",
                  description: "Campañas en el buscador más usado del mundo",
                  icon: Target,
                  bgColor: "bg-emerald-50",
                  iconColor: "text-emerald-600",
                  hoverColor: "hover:bg-emerald-100"
                },
                {
                  title: "Meta Ads",
                  description: "Publicidad en Facebook e Instagram",
                  icon: Facebook,
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600",
                  hoverColor: "hover:bg-blue-100"
                },
                {
                  title: "TikTok Ads",
                  description: "Alcanza a la audiencia más joven",
                  icon: PenTool,
                  bgColor: "bg-purple-50",
                  iconColor: "text-purple-600",
                  hoverColor: "hover:bg-purple-100"
                },
                {
                  title: "Pinterest Ads",
                  description: "Ideal para negocios visuales",
                  icon: Layout,
                  bgColor: "bg-red-50",
                  iconColor: "text-red-600",
                  hoverColor: "hover:bg-red-100"
                },
                {
                  title: "Display Ads",
                  description: "Anuncios gráficos en toda la red",
                  icon: PenTool,
                  bgColor: "bg-orange-50",
                  iconColor: "text-orange-600",
                  hoverColor: "hover:bg-orange-100"
                },
                {
                  title: "Remarketing",
                  description: "Reconecta con usuarios interesados",
                  icon: RotateCw,
                  bgColor: "bg-yellow-50",
                  iconColor: "text-yellow-600",
                  hoverColor: "hover:bg-yellow-100"
                }
              ].map((service) => (
                <Card 
                  key={service.title} 
                  className={`group transition-all duration-300 ${service.bgColor} ${service.hoverColor} border-none`}
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
              ))}
            </div>
          </div>
        </section>

        <section id="planes" className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de Publicidad Digital</h2>
              <p className="text-xl text-muted-foreground">
                Elige la plataforma y el plan que mejor se adapte a tus objetivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
              {[
                {
                  title: "Google Ads Essential",
                  price: "497",
                  features: [
                    "Gestión de campaña",
                    "Search Ads",
                    "Remarketing básico",
                    "Informes mensuales",
                    "Presupuesto recomendado: desde 500€"
                  ]
                },
                {
                  title: "Google Ads Professional",
                  price: "797",
                  popular: true,
                  features: [
                    "Todo lo anterior +",
                    "Display Ads",
                    "Shopping Ads",
                    "Remarketing avanzado",
                    "Presupuesto recomendado: desde 1.000€"
                  ]
                },
                {
                  title: "Meta Ads Essential",
                  price: "497",
                  features: [
                    "Facebook e Instagram Ads",
                    "2 campañas activas",
                    "Remarketing básico",
                    "Informes mensuales",
                    "Presupuesto recomendado: desde 500€"
                  ]
                },
                {
                  title: "Meta Ads Professional",
                  price: "797",
                  features: [
                    "Todo lo anterior +",
                    "Instagram Shopping",
                    "Messenger Ads",
                    "Audience building",
                    "Presupuesto recomendado: desde 1.000€"
                  ]
                }
              ].map((plan) => (
                <Card 
                  key={plan.title}
                  className={`relative hover:shadow-lg transition-all duration-300 ${
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
                    <CardTitle className="text-2xl mb-4">{plan.title}</CardTitle>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              {[
                {
                  title: "TikTok Ads",
                  price: "desde 497€/mes",
                  description: "Gestión profesional de campañas en TikTok"
                },
                {
                  title: "Pinterest Ads",
                  price: "desde 397€/mes",
                  description: "Estrategias de publicidad en Pinterest"
                },
                {
                  title: "Creación de Contenido",
                  price: "+297€/mes",
                  description: "Contenido optimizado para cada plataforma"
                }
              ].map((service) => (
                <Card key={service.title} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-lg font-bold text-yellow mb-4">{service.price}</p>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Información Importante</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-yellow shrink-0" />
                    Los presupuestos de medios son adicionales a las tarifas de gestión
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-yellow shrink-0" />
                    Contratos mínimos de 6 meses
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-yellow shrink-0" />
                    10% descuento en pago trimestral
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-yellow shrink-0" />
                    20% descuento en pago semestral
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-yellow shrink-0" />
                    25% descuento en pago anual
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                ¿Necesitas una estrategia personalizada? ¿Tienes un presupuesto específico?
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

        {/* What is SEM and Digital Advertising Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">¿Qué es el SEM y la Publicidad Digital?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Search Engine Marketing (SEM)</h3>
                <p className="text-muted-foreground">
                  El SEM, o Marketing en Motores de Búsqueda, es una estrategia de marketing digital que se centra en la promoción de sitios web mediante anuncios pagados en los resultados de búsqueda. A través de plataformas como Google Ads, el SEM permite que tu negocio aparezca en las primeras posiciones cuando los usuarios buscan productos o servicios relacionados con tu actividad.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Publicidad Digital</h3>
                <p className="text-muted-foreground">
                  La publicidad digital abarca todas las formas de promoción en línea, incluyendo anuncios en redes sociales, display advertising, remarketing y más. Esta estrategia multicanal permite alcanzar a tu audiencia ideal en diferentes plataformas y momentos del customer journey, maximizando las oportunidades de conversión.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cuál es la diferencia entre SEO y SEM?</AccordionTrigger>
                  <AccordionContent>
                    Mientras que el SEO se centra en mejorar el posicionamiento orgánico a largo plazo, el SEM ofrece resultados inmediatos a través de publicidad pagada. El SEO requiere tiempo para ver resultados, pero el SEM permite aparecer en las primeras posiciones de manera instantánea mediante pujas por palabras clave.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Cuánto presupuesto necesito para empezar con SEM?</AccordionTrigger>
                  <AccordionContent>
                    El presupuesto mínimo recomendado para comenzar con SEM es de 500€ mensuales en publicidad, además de la tarifa de gestión. Este presupuesto permite realizar pruebas efectivas y obtener datos relevantes para optimizar las campañas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿En qué plataformas publicitarias debería invertir?</AccordionTrigger>
                  <AccordionContent>
                    La elección de plataformas depende de tu negocio y objetivos. Google Ads es esencial para captar usuarios con intención de compra, mientras que las redes sociales son ideales para crear awareness y engagement. Realizamos un análisis personalizado para recomendar la mejor estrategia para tu caso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Cuánto tiempo necesito para ver resultados?</AccordionTrigger>
                  <AccordionContent>
                    Con SEM, los resultados son inmediatos en términos de visibilidad. Sin embargo, recomendamos un período mínimo de 3 meses para optimizar las campañas, ajustar las pujas y maximizar el ROI en base a los datos recopilados.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>¿Qué incluye la gestión de campañas?</AccordionTrigger>
                  <AccordionContent>
                    Nuestro servicio incluye investigación de palabras clave, creación y optimización de anuncios, seguimiento de conversiones, ajuste de pujas, testing A/B, remarketing, informes mensuales y recomendaciones estratégicas para mejorar el rendimiento de tus campañas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section - Below FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-6">
              ¿Necesitas una estrategia personalizada? ¿Tienes un presupuesto específico?
            </p>
            <Button 
              size="lg" 
              asChild 
              className="bg-yellow hover:bg-yellow-light text-yellow-foreground text-lg"
            >
              <Link to="/contacto">Contacta con Nosotros</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default DigitalAds;
