import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const contactDetails = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Calle Gral Pardiñas 60, Madrid, España",
    tooltip: "Visítanos en nuestra oficina central"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+34 744 717 942",
    tooltip: "Llámanos en horario comercial"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@localseoads.com",
    tooltip: "Escríbenos en cualquier momento"
  }
];

export const ContactInfo = () => {
  return (
    <div className="grid gap-4">
      {contactDetails.map((detail, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <detail.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{detail.title}</h3>
                      <p className="text-muted-foreground">{detail.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{detail.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};