import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const LocalSEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">SEO Local</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Domina las búsquedas locales y atrae más clientes de tu zona
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">¿Qué incluye nuestro servicio?</h2>
            <ul className="space-y-4">
              {[
                "Optimización de Google Business Profile",
                "Investigación de palabras clave locales",
                "Optimización para múltiples ubicaciones",
                "Gestión de reseñas y reputación online",
                "Creación de contenido local relevante",
                "Construcción de citas (citations)",
                "Informes mensuales detallados"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <Button asChild size="lg">
                <Link to="/contacto">Solicitar Consulta Gratuita</Link>
              </Button>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Precios desde 297€/mes</h2>
            <p className="mb-4">
              Nuestros planes se adaptan a las necesidades específicas de tu negocio:
            </p>
            <ul className="space-y-4">
              <li>• Plan Local Starter: 297€/mes</li>
              <li>• Plan Local Growth: 597€/mes</li>
              <li>• Plan Local Authority: 997€/mes</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              * Precios sin IVA. Contratos mínimos de 3 meses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalSEO;