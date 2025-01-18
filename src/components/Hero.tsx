import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-primary/95 to-background text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]" />
      <div className="container mx-auto px-4 py-40 animate-fade-up relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-6 py-2 mb-8 text-lg font-medium rounded-full bg-yellow/10 text-yellow">
            Agencia SEO/SEM Local Líder en España
          </span>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 leading-tight">
            Aumenta tus Ventas con Marketing Digital Local
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Especialistas en posicionamiento SEO local y campañas SEM para negocios que buscan dominar su mercado local. Resultados garantizados y ROI medible.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow-light text-yellow-foreground px-8 py-6 text-lg transition-colors duration-300 relative overflow-hidden group"
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
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg transition-colors duration-300"
              asChild
            >
              <Link to="/servicios">Descubre Nuestros Servicios</Link>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", text: "Clientes Satisfechos" },
              { number: "95%", text: "Tasa de Retención" },
              { number: "3X", text: "ROI Promedio" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-yellow mb-3">{stat.number}</div>
                <div className="text-xl text-white/90 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};