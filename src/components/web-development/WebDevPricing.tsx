import { PricingCard } from "./pricing/PricingCard";
import { PricingCTA } from "./pricing/PricingCTA";

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
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <PricingCTA />
      </div>
    </section>
  );
};