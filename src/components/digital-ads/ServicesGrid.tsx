import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, PenTool, RotateCw, Layout, Target } from "lucide-react";

const services = [
  {
    title: "Google Ads",
    description: "Campañas en el buscador más usado del mundo",
    icon: Target,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverColor: "hover:bg-emerald-100"
  },
  {
    title: "Meta Ads",
    description: "Publicidad en Facebook e Instagram",
    icon: Facebook,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-100"
  },
  {
    title: "TikTok Ads",
    description: "Alcanza a la audiencia más joven",
    icon: PenTool,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-100"
  },
  {
    title: "Pinterest Ads",
    description: "Ideal para negocios visuales",
    icon: Layout,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    hoverColor: "hover:bg-red-100"
  },
  {
    title: "Display Ads",
    description: "Anuncios gráficos en toda la red",
    icon: PenTool,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    hoverColor: "hover:bg-orange-100"
  },
  {
    title: "Remarketing",
    description: "Reconecta con usuarios interesados",
    icon: RotateCw,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    hoverColor: "hover:bg-yellow-100"
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Nuestros Servicios de Publicidad</h2>
          <p className="text-xl text-muted-foreground">
            Soluciones publicitarias para cada plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={`group transition-all duration-300 ${service.bgColor} ${service.hoverColor} border-none`}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`p-2 rounded-lg ${service.iconColor}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};