import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
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
];

export const Pricing = () => {
  return (
    <section id="planes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes de SEO Nacional</h2>
          <p className="text-xl text-muted-foreground">
            Elige el plan que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
  );
};