import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publicidad Digital</h1>
            <p className="text-xl text-muted-foreground">
              Maximiza tu retorno de inversión con campañas publicitarias optimizadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.title} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{plan.title}</CardTitle>
                  <p className="text-3xl font-bold text-yellow">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Servicios Adicionales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {additionalServices.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-lg font-bold text-yellow mb-4">{service.price}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-yellow hover:bg-yellow-light text-yellow-foreground">
              <Link to="/contacto">Solicitar Presupuesto</Link>
            </Button>
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
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow shrink-0" />
                  IVA no incluido
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DigitalAds;