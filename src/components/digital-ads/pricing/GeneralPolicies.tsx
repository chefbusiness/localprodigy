import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const GeneralPolicies = () => {
  return (
    <Card className="mt-12 max-w-3xl mx-auto">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-6">Políticas Generales</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-yellow shrink-0" />
            Contratos mínimos 6 meses
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-yellow shrink-0" />
            Los presupuestos de medios son adicionales
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-yellow shrink-0" />
            IVA no incluido
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
  );
};