import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const WhatsAppWidget = () => {
  const phoneNumber = "34744717942";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 rounded-full"
            >
              <Avatar className="w-16 h-16 md:w-24 md:h-24 border-2 border-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <AvatarImage
                  src="/lovable-uploads/617d0370-5a2e-4347-a5d7-a3e0ad7837e9.png"
                  alt="Foto de perfil del consultor SEO"
                  className="object-cover"
                />
              </Avatar>
              {/* WhatsApp Icon Badge */}
              <div className="absolute -bottom-1 -right-1 bg-[#25D366] rounded-full p-1 md:p-1.5 border-2 border-white shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                </svg>
              </div>
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