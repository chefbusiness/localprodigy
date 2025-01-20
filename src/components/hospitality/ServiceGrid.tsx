import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  keywords: string[];
  icon: LucideIcon;
  slug: string;
}

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card 
          key={service.title}
          className="group hover:shadow-lg transition-all duration-300"
        >
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-yellow" />
            </div>
            <CardTitle className="text-2xl group-hover:text-yellow transition-colors">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.keywords.map((keyword) => (
                <span 
                  key={keyword}
                  className="text-sm bg-muted px-2 py-1 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <Button 
              className="w-full group-hover:bg-yellow group-hover:text-yellow-foreground transition-all duration-300"
              asChild
            >
              <Link to={`/sectores/hosteleria-restauracion/${service.slug}`}>
                Ver solución específica →
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};