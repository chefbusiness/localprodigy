import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        {/* Hero Section - Updated padding-top */}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">SEO Local</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up">
                Domina las búsquedas locales y atrae más clientes de tu zona
              </p>
              <Button asChild size="lg" className="animate-fade-up">
                <Link to="/contacto">Solicitar Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de SEO Local</h2>
              <p className="text-xl text-muted-foreground">
                Soluciones adaptadas a las necesidades de tu negocio local
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                ¿Necesitas un plan personalizado? ¿Tienes múltiples ubicaciones?
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contacto">Contacta con Nosotros</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegir nuestro SEO Local?</h2>
              <p className="text-xl text-muted-foreground">
                Resultados comprobados en posicionamiento local
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </main>
      <Footer />
    </>
  );
};

export default LocalSEO;