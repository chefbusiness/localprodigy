import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface SectorCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  businesses: string[];
  slug: string;
}

export const SectorCard = ({ title, icon: Icon, description, businesses, slug }: SectorCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-yellow" />
        </div>
        <CardTitle className="text-2xl group-hover:text-yellow transition-colors">
          {title}
        </CardTitle>
        <p className="text-base text-muted-foreground">
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {businesses.slice(0, 5).map((business) => (
            <li 
              key={business}
              className="flex items-center text-muted-foreground"
            >
              <ChevronRight className="h-4 w-4 mr-2 text-yellow" />
              {business}
            </li>
          ))}
        </ul>
        <Button 
          className="w-full group-hover:bg-yellow group-hover:text-yellow-foreground transition-all duration-300"
          asChild
        >
          <Link to={`/sectores/${slug}`}>
            Ver más detalles →
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};