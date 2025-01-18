import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const addOns = [
  {
    title: "Sesiones foto/video",
    price: "397",
    description: "Contenido visual profesional"
  },
  {
    title: "Diseño de creatividades",
    price: "297",
    description: "Diseños mensuales"
  },
  {
    title: "Copywriting adicional",
    price: "197",
    description: "Contenido mensual"
  },
  {
    title: "Gestión de crisis",
    price: "997",
    description: "Servicio especializado"
  },
  {
    title: "Consultoría por horas",
    price: "97",
    description: "Asesoramiento experto"
  }
];

export const AddOnsSection = () => {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8 text-center">Add-ons Disponibles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {addOns.map((addon) => (
          <Card key={addon.title} className="text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-slate-50">
            <CardContent className="pt-8">
              <h3 className="text-lg font-semibold mb-2">{addon.title}</h3>
              <p className="text-lg font-bold text-yellow mb-2">desde {addon.price}€</p>
              <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/contacto">Solicitar</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};