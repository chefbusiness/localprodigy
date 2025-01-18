import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const IntegratedPacksPlans = () => {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8 text-center">Packs Integrados</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-yellow-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Pack Growth Digital</CardTitle>
            <div className="mb-4">
              <span className="text-4xl font-bold">1.497€</span>
              <span className="text-muted-foreground">/mes</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                SEO Local Essential
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Google Ads Essential
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Meta Ads Essential
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                3 redes sociales
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Contenido básico
              </li>
            </ul>
            <Button 
              asChild
              className="w-full mt-6 text-lg hover:bg-primary/90"
            >
              <Link to="/contacto">Solicitar Pack</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-yellow">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-yellow text-yellow-foreground px-4 py-1 rounded-full text-sm font-medium">
              Más Popular
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Pack Business Total</CardTitle>
            <div className="mb-4">
              <span className="text-4xl font-bold">2.497€</span>
              <span className="text-muted-foreground">/mes</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                SEO Growth
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Google Ads Professional
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Meta Ads Professional
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                5 redes sociales
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Contenido premium
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Email marketing
              </li>
            </ul>
            <Button 
              asChild
              className="w-full mt-6 text-lg bg-yellow hover:bg-yellow-dark text-yellow-foreground"
            >
              <Link to="/contacto">Solicitar Pack</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Pack Enterprise</CardTitle>
            <div className="mb-4">
              <span className="text-4xl font-bold">4.997€</span>
              <span className="text-muted-foreground">/mes</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                SEO Authority
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Campañas en todas las plataformas
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Contenido video/foto profesional
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Estrategia omnicanal
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                Consultoría estratégica
              </li>
            </ul>
            <Button 
              asChild
              className="w-full mt-6 text-lg hover:bg-primary/90"
            >
              <Link to="/contacto">Solicitar Pack</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};