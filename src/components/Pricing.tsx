import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Local Starter",
    price: "297",
    description: "Perfecto para negocios que inician su presencia local",
    features: [
      "Optimización inicial completa de Google Business Profile",
      "Actualización mensual de información",
      "Gestión básica de reseñas",
      "Publicación semanal",
      "Optimización básica para 1 ubicación",
      "Keywords research local (10 palabras clave)",
      "Informes mensuales básicos",
      "Optimización NAP",
    ],
  },
  {
    name: "Local Growth",
    price: "597",
    description: "Ideal para negocios en crecimiento",
    popular: true,
    features: [
      "Todo lo del plan Básico",
      "3 publicaciones semanales",
      "Respuesta a reseñas en 24h",
      "Fotos profesionales mensuales",
      "Posts promocionales",
      "Optimización para 2 ubicaciones",
      "25 keywords principales",
      "Citations building (20 directorios)",
      "Schema markup avanzado",
      "Contenido local mensual (2 artículos)",
      "Campaña Google Ads básica",
    ],
  },
  {
    name: "Local Authority",
    price: "997",
    description: "Para dominar tu mercado local",
    features: [
      "Todo lo del plan Profesional",
      "5 publicaciones semanales",
      "Gestión proactiva de reseñas",
      "Estrategia de fotos premium",
      "Posts con diseño personalizado",
      "Optimización multi-ubicación (hasta 4)",
      "50 keywords objetivo",
      "Citations premium (40 directorios)",
      "Contenido local semanal",
      "Link building local",
      "Gestión campañas avanzada",
      "A/B testing mensual",
      "Remarketing local",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-xl text-gray-600">
            Soluciones adaptadas a las necesidades de tu negocio local
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative hover:shadow-lg transition-shadow animate-fade-up ${
                plan.popular ? "border-secondary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                    Más Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "bg-secondary hover:bg-secondary/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  Empezar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado? ¿Tienes múltiples ubicaciones?
          </p>
          <Button variant="outline" size="lg">
            Contacta con Nosotros
          </Button>
        </div>
      </div>
    </section>
  );
};