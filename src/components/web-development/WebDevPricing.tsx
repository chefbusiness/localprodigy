import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
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
];

export const WebDevPricing = () => {
  return (
    <section id="planes" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes de Desarrollo Web</h2>
          <p className="text-xl text-muted-foreground">
            Soluciones web adaptadas a tu negocio
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
  );
};