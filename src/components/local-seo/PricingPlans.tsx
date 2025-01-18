import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

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

export const PricingPlans = () => {
  return (
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
                  className={`w-full mt-6 text-base ${
                    plan.popular ? "bg-yellow hover:bg-yellow-dark text-yellow-foreground" : ""
                  }`}
                  variant={plan.popular ? "default" : "default"}
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
          <Button variant="outline" size="lg" asChild>
            <Link to="/contacto">Contacta con Nosotros</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};