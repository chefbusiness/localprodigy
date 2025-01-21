import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PricingFeature } from "./PricingFeature";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <Card 
      className={`relative hover:shadow-lg transition-all duration-300 animate-fade-up ${
        plan.popular ? "border-2 border-yellow" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-yellow text-yellow-foreground px-4 py-1 rounded-full text-sm font-medium">
            Más Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
        <div className="mb-4">
          <span className="text-4xl font-bold">{plan.price}€</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <PricingFeature key={feature} feature={feature} />
          ))}
        </ul>
        <Button 
          asChild
          className={`w-full mt-6 text-lg ${
            plan.popular 
              ? "bg-yellow hover:bg-yellow-dark text-yellow-foreground" 
              : "hover:bg-primary/90"
          }`}
        >
          <Link to="/contacto">Solicitar Plan</Link>
        </Button>
      </CardContent>
    </Card>
  );
};