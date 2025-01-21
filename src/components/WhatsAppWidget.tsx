import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const WhatsAppWidget = () => {
  const phoneNumber = "34744717942";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 rounded-full"
            >
              <Avatar className="w-16 h-16 border-2 border-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <AvatarImage
                  src="/lovable-uploads/617d0370-5a2e-4347-a5d7-a3e0ad7837e9.png"
                  alt="Foto de perfil del consultor SEO"
                  className="object-cover"
                />
              </Avatar>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-white text-primary p-2">
            <p>Contacta con nosotros en WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};