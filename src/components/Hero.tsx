import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, BarChart3, Target } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary via-primary/95 to-background text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4 py-24 md:py-32 animate-fade-up relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16 md:space-y-20">
          {/* Hero Content */}
          <div className="space-y-6 md:space-y-8">
            <span className="inline-block px-6 py-2 text-base md:text-lg font-medium rounded-full bg-yellow/10 text-yellow">
              Agencia SEO/SEM Local Líder en España
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 leading-tight">
              Aumenta tus Ventas con Marketing Digital Local
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Especialistas en posicionamiento SEO local y campañas SEM para negocios que buscan dominar su mercado local. Resultados garantizados y ROI medible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-yellow hover:bg-yellow-light text-yellow-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-colors duration-300 relative overflow-hidden group"
                asChild
              >
                <Link to="/contacto">
                  <span className="relative z-10">Solicita Presupuesto Gratis</span>
                  <div className="absolute inset-0 bg-yellow-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-colors duration-300"
                asChild
              >
                <Link to="/servicios">Descubre Nuestros Servicios</Link>
              </Button>
            </div>
          </div>

          {/* Logos Section */}
          <div className="space-y-8">
            <p className="text-lg text-gray-300">Plataformas con las que trabajamos:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Meta Ads",
                  logo: "/lovable-uploads/203f9369-c9f2-4df5-ad01-85f06f9a69a2.png"
                },
                {
                  name: "Google Ads",
                  logo: "/lovable-uploads/0c6dd505-ae2f-4765-a37d-5d985496a700.png"
                },
                {
                  name: "Pinterest Ads",
                  logo: "/lovable-uploads/ca4ae698-198d-4c73-bfdb-897082cfe849.png"
                },
                {
                  name: "TikTok Ads",
                  logo: "/lovable-uploads/136e2839-0c20-4c4e-8208-31e099ce1737.png"
                }
              ].map((platform, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm rounded-xl hover:bg-black/50 transition-colors duration-300 border border-white/10"
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="h-24 md:h-28 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { 
                number: "500+", 
                text: "Clientes Satisfechos",
                bgColor: "bg-[#E5DEFF]",
                icon: Users,
                iconColor: "#8B5CF6"
              },
              { 
                number: "95%", 
                text: "Tasa de Retención",
                bgColor: "bg-[#D3E4FD]",
                icon: BarChart3,
                iconColor: "#0EA5E9"
              },
              { 
                number: "3X", 
                text: "ROI Promedio",
                bgColor: "bg-[#FDE1D3]",
                icon: Target,
                iconColor: "#F97316"
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`p-6 md:p-8 rounded-2xl ${stat.bgColor} backdrop-blur-md border border-white/20 hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
              >
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <stat.icon size={28} color={stat.iconColor} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 md:mb-3">{stat.number}</div>
                <div className="text-lg md:text-xl text-primary/80 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};