import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const GoogleAdsPlans = () => {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8 text-center">Google Ads</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="relative hover:shadow-lg transition-all duration-300 bg-red-50/50">
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

        <Card className="relative hover:shadow-lg transition-all duration-300 bg-red-50/50 border-2 border-yellow">
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
    </div>
  );
};