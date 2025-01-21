import { Check } from "lucide-react";

interface PricingFeatureProps {
  feature: string;
}

export const PricingFeature = ({ feature }: PricingFeatureProps) => {
  return (
    <li className="flex items-start gap-2">
      <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
      <span className="text-muted-foreground">{feature}</span>
    </li>
  );
};