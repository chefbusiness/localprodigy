import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const NationalSEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">SEO Nacional</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Posiciona tu negocio en todo el país
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Servicios Incluidos</h2>
            <ul className="space-y-4">
              {[
                "SEO On Page completo",
                "SEO Off Page y link building",
                "Investigación de palabras clave",
                "Optimización técnica",
                "Creación de contenido SEO",
                "Análisis de competencia",
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
            <h2 className="text-2xl font-semibold mb-6">Precios desde 597€/mes</h2>
            <p className="mb-4">
              Planes adaptados a diferentes objetivos:
            </p>
            <ul className="space-y-4">
              <li>• SEO Essential: 597€/mes</li>
              <li>• SEO Growth: 997€/mes</li>
              <li>• SEO Authority: 1.997€/mes</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              * Precios sin IVA. Contratos mínimos de 6 meses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalSEO;