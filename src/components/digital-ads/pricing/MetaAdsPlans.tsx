import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const MetaAdsPlans = () => {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8 text-center">Meta Ads</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="relative hover:shadow-lg transition-all duration-300 bg-blue-50/50">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <Facebook className="w-6 h-6 text-blue-600" />
              <Instagram className="w-6 h-6 text-pink-600" />
            </div>
            <CardTitle className="text-2xl mb-4">Meta Ads Essential</CardTitle>
            <div className="mb-4">
              <span className="text-4xl font-bold">497€</span>
              <span className="text-muted-foreground">/mes</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Facebook e Instagram Ads
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                2 campañas activas
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Remarketing básico
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

        <Card className="relative hover:shadow-lg transition-all duration-300 bg-blue-50/50">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <Facebook className="w-6 h-6 text-blue-600" />
              <Instagram className="w-6 h-6 text-pink-600" />
            </div>
            <CardTitle className="text-2xl mb-4">Meta Ads Professional</CardTitle>
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
                Instagram Shopping
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Messenger Ads
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Audience building
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Presupuesto recomendado: desde 1.000€
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
      </div>
    </div>
  );
};