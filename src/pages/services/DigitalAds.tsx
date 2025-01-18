import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalAds = () => {
  const plans = [
    {
      title: "Google Ads Essential",
      price: "497€/mes",
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
      price: "797€/mes",
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
      price: "497€/mes",
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
      price: "797€/mes",
      features: [
        "Todo lo anterior +",
        "Instagram Shopping",
        "Messenger Ads",
        "Audience building",
        "Presupuesto recomendado: desde 1.000€"
      ]
    }
  ];

  const additionalServices = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Publicidad Digital</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Maximiza tu retorno de inversión con campañas publicitarias optimizadas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan) => (
            <div key={plan.title} className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
              <p className="text-xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Servicios Adicionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {additionalServices.map((service) => (
            <div key={service.title} className="bg-muted p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg font-bold mb-4">{service.price}</p>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/contacto">Solicitar Presupuesto</Link>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Información Importante</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Los presupuestos de medios son adicionales a las tarifas de gestión</li>
            <li>• Contratos mínimos de 6 meses</li>
            <li>• 10% descuento en pago trimestral</li>
            <li>• 20% descuento en pago semestral</li>
            <li>• 25% descuento en pago anual</li>
            <li>• IVA no incluido</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalAds;