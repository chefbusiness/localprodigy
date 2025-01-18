import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Video } from "lucide-react";
import { Link } from "react-router-dom";

export const OtherPlatformsPlans = () => {
  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8 text-center">Otras Plataformas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="text-center hover:shadow-lg transition-all duration-300 bg-pink-50/50">
          <CardContent className="pt-8">
            <Video className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">TikTok Ads</h3>
            <p className="text-lg font-bold text-yellow mb-4">desde 497€/mes</p>
            <p className="text-muted-foreground mb-6">Gestión profesional de campañas en TikTok</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/contacto">Solicitar Plan</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-all duration-300 bg-red-50/50">
          <CardContent className="pt-8">
            <Package className="w-8 h-8 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Pinterest Ads</h3>
            <p className="text-lg font-bold text-yellow mb-4">desde 397€/mes</p>
            <p className="text-muted-foreground mb-6">Estrategias de publicidad en Pinterest</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/contacto">Solicitar Plan</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-all duration-300 bg-purple-50/50">
          <CardContent className="pt-8">
            <Package className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Creación de Contenido</h3>
            <p className="text-lg font-bold text-yellow mb-4">+297€/mes</p>
            <p className="text-muted-foreground mb-6">Contenido optimizado para cada plataforma</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/contacto">Solicitar Plan</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};