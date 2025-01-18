import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const PricingSection = () => {
  return (
    <section id="planes" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes de Publicidad Digital</h2>
          <p className="text-xl text-muted-foreground">
            Elige la plataforma y el plan que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Card 
            key="Google Ads Essential" 
            className="relative hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Google Ads Essential</CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold">497€</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Gestión de campaña
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Search Ads
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Remarketing básico
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Informes mensuales
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Presupuesto recomendado: desde 500€
                </li>
              </ul>
              <Button 
                asChild
                className="w-full mt-6 text-lg hover:bg-primary/90"
              >
                <Link to="/contacto">Solicitar Plan</Link>
              </Button>
            </CardContent>
          </Card>

          <Card 
            key="Google Ads Professional" 
            className="relative hover:shadow-lg transition-all duration-300 border-2 border-yellow"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-yellow text-yellow-foreground px-4 py-1 rounded-full text-sm font-medium">
                Más Popular
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Google Ads Professional</CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold">797€</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Todo lo anterior +
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Display Ads
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Shopping Ads
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Remarketing avanzado
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                  Presupuesto recomendado: desde 1.000€
                </li>
              </ul>
              <Button 
                asChild
                className="w-full mt-6 text-lg bg-yellow hover:bg-yellow-dark text-yellow-foreground"
              >
                <Link to="/contacto">Solicitar Plan</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <Card key="TikTok Ads" className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <h3 className="text-xl font-semibold mb-2">TikTok Ads</h3>
              <p className="text-lg font-bold text-yellow mb-4">desde 497€/mes</p>
              <p className="text-muted-foreground">Gestión profesional de campañas en TikTok</p>
            </CardContent>
          </Card>
          <Card key="Pinterest Ads" className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <h3 className="text-xl font-semibold mb-2">Pinterest Ads</h3>
              <p className="text-lg font-bold text-yellow mb-4">desde 397€/mes</p>
              <p className="text-muted-foreground">Estrategias de publicidad en Pinterest</p>
            </CardContent>
          </Card>
          <Card key="Creación de Contenido" className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <h3 className="text-xl font-semibold mb-2">Creación de Contenido</h3>
              <p className="text-lg font-bold text-yellow mb-4">+297€/mes</p>
              <p className="text-muted-foreground">Contenido optimizado para cada plataforma</p>
            </CardContent>
          </Card>
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
  );
};
