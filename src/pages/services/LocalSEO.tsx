import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Local Starter",
    price: "297",
    description: "Perfecto para negocios que inician su presencia local",
    features: {
      gbp: [
        "Optimización inicial completa",
        "Actualización mensual de información",
        "Gestión básica de reseñas",
        "1 publicación semanal",
      ],
      seo: [
        "Optimización básica para 1 ubicación",
        "Keywords research local (10 palabras clave)",
        "Informes mensuales básicos",
        "Optimización NAP",
      ],
    },
  },
  {
    name: "Local Growth",
    price: "597",
    description: "Ideal para negocios en crecimiento",
    popular: true,
    features: {
      gbp: [
        "3 publicaciones semanales",
        "Respuesta a reseñas en 24h",
        "Fotos profesionales mensuales",
        "Posts promocionales",
      ],
      seo: [
        "Optimización para 2 ubicaciones",
        "25 keywords principales",
        "Citations building (20 directorios)",
        "Schema markup avanzado",
        "Contenido local mensual (2 artículos)",
      ],
      sem: [
        "Campaña Google Ads básica",
        "Presupuesto hasta 500€ (no incluido)",
        "Optimización mensual",
      ],
    },
  },
  {
    name: "Local Authority",
    price: "997",
    description: "Para dominar tu mercado local",
    features: {
      gbp: [
        "5 publicaciones semanales",
        "Gestión proactiva de reseñas",
        "Estrategia de fotos premium",
        "Posts con diseño personalizado",
      ],
      seo: [
        "Optimización multi-ubicación (hasta 4)",
        "50 keywords objetivo",
        "Citations premium (40 directorios)",
        "Contenido local semanal",
        "Link building local",
      ],
      sem: [
        "Gestión campañas avanzada",
        "Presupuesto hasta 2000€ (no incluido)",
        "A/B testing mensual",
        "Remarketing local",
      ],
    },
  },
];

const LocalSEO = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="SEO Local Hero"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-yellow/10 text-yellow">
                SEO Local
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                Domina las Búsquedas Locales
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed">
                Aumenta tu visibilidad en Google Maps y búsquedas locales. Atrae más clientes cualificados de tu zona.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="animate-fade-up">
                  <Link to="/contacto">Solicitar Consulta Gratuita</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="animate-fade-up">
                  <Link to="#planes">Ver Planes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegir nuestro SEO Local?</h2>
              <p className="text-xl text-muted-foreground">
                Resultados comprobados en posicionamiento local
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Experiencia Comprobada",
                  description: "Años de experiencia en SEO local con casos de éxito documentados",
                  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                },
                {
                  title: "Estrategia Personalizada",
                  description: "Plan adaptado a tu negocio y mercado local específico",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                },
                {
                  title: "Resultados Medibles",
                  description: "Informes detallados y métricas claras de rendimiento",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                }
              ].map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-2 border-transparent hover:border-yellow/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <CardTitle className="group-hover:text-yellow transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="planes" className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de SEO Local</h2>
              <p className="text-xl text-muted-foreground">
                Soluciones adaptadas a las necesidades de tu negocio local
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan) => (
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
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow">Google Business Profile</h4>
                      <ul className="space-y-2">
                        {plan.features.gbp.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-yellow">SEO Local</h4>
                      <ul className="space-y-2">
                        {plan.features.seo.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.features.sem && (
                      <div>
                        <h4 className="font-semibold mb-3 text-yellow">SEM Local</h4>
                        <ul className="space-y-2">
                          {plan.features.sem.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button 
                      asChild
                      className="w-full mt-6"
                      variant={plan.popular ? "secondary" : "default"}
                    >
                      <Link to="/contacto">Empezar Ahora</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                ¿Necesitas un plan personalizado? ¿Tienes múltiples ubicaciones?
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contacto">Contacta con Nosotros</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Importance of Local SEO Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                La Importancia del SEO Local en 2025
              </h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  En 2025, el SEO local se ha convertido en una herramienta fundamental para la supervivencia y el crecimiento de las PYMEs. Con el 46% de las búsquedas en Google teniendo una intención local, y el 88% de las búsquedas desde móvil resultando en una visita o llamada a un negocio local en las siguientes 24 horas, la presencia local online ya no es opcional.
                </p>
                <p>
                  Para las pequeñas y medianas empresas, el SEO local representa la oportunidad de competir de igual a igual con grandes corporaciones en su área geográfica. A través de una estrategia bien ejecutada de SEO local, una PYME puede destacar en los resultados de búsqueda locales, aparecer en el Local Pack de Google y captar clientes cualificados de su zona de influencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Preguntas Frecuentes sobre SEO Local
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Cuánto tiempo se tarda en ver resultados con el SEO local?
                  </AccordionTrigger>
                  <AccordionContent>
                    Los primeros resultados suelen verse entre 3-6 meses, aunque esto puede variar según la competencia en tu sector y ubicación. Algunos cambios, como la optimización de Google Business Profile, pueden mostrar mejoras en semanas. Nuestro enfoque se centra en conseguir resultados sostenibles a largo plazo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Por qué necesito SEO local si ya tengo una web?
                  </AccordionTrigger>
                  <AccordionContent>
                    Tener una web es solo el primer paso. El SEO local asegura que tu negocio aparezca cuando los clientes de tu zona buscan tus servicios. Incluye optimización de Google Business Profile, gestión de reseñas, creación de contenido local relevante y estrategias específicas para aparecer en el Local Pack de Google.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Qué diferencia hay entre SEO tradicional y SEO local?
                  </AccordionTrigger>
                  <AccordionContent>
                    El SEO local se centra en optimizar tu presencia para búsquedas con intención local ("cerca de mí", "en [ciudad]", etc.) y en Google Maps. Incluye estrategias específicas como la optimización de Google Business Profile, gestión de citations locales y contenido orientado a tu área geográfica.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Necesito SEO local si solo tengo un negocio físico?
                  </AccordionTrigger>
                  <AccordionContent>
                    ¡Absolutamente! El 78% de las búsquedas locales desde móvil resultan en una compra offline. El SEO local es especialmente importante para negocios físicos, ya que ayuda a aparecer en Google Maps y en búsquedas locales, dirigiendo tráfico cualificado a tu establecimiento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Qué incluye la gestión de reseñas?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nuestra gestión de reseñas incluye monitorización diaria, respuesta profesional a todas las reseñas (positivas y negativas), estrategias para conseguir más reseñas positivas y análisis de feedback para mejorar tu servicio. Las reseñas son cruciales para el SEO local y la confianza del cliente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    ¿Cómo medís los resultados del SEO local?
                  </AccordionTrigger>
                  <AccordionContent>
                    Proporcionamos informes mensuales detallados que incluyen: posiciones en búsquedas locales, visibilidad en Google Maps, tráfico a la web, llamadas y direcciones solicitadas desde Google Business Profile, evolución de reseñas, y lo más importante: leads y conversiones generadas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LocalSEO;
