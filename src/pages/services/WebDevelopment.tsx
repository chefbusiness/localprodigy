import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Desarrollo Web</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Sitios web optimizados para SEO y conversión
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Características</h2>
            <ul className="space-y-4">
              {[
                "Diseño responsive moderno",
                "Optimización SEO desde el inicio",
                "Velocidad de carga optimizada",
                "Integración con Analytics",
                "Panel de administración",
                "Hosting profesional incluido",
                "Certificado SSL incluido"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Button asChild size="lg">
                <Link to="/contacto">Solicitar Presupuesto</Link>
              </Button>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Planes de Desarrollo</h2>
            <p className="mb-4">
              Soluciones web para cada necesidad:
            </p>
            <ul className="space-y-4">
              <li>• Plan Básico Web: 1.497€</li>
              <li>• Plan Profesional Web: 2.997€</li>
              <li>• Plan E-commerce: desde 4.997€</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              * Precios sin IVA. Incluye hosting primer año.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;