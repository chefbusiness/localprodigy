import { Card, CardContent } from "@/components/ui/card";

const tools = [
  {
    name: "Google Search Console",
    description: "Monitorización y optimización del rendimiento en búsquedas",
    logo: "/tools/google-search-console.svg",
    category: "Google"
  },
  {
    name: "Google Analytics 4",
    description: "Análisis avanzado del comportamiento de usuarios",
    logo: "/tools/google-analytics.svg",
    category: "Google"
  },
  {
    name: "Google Tag Manager",
    description: "Gestión profesional de etiquetas y seguimiento",
    logo: "/tools/google-tag-manager.svg",
    category: "Google"
  },
  {
    name: "Google Site Kit",
    description: "Integración completa de herramientas Google",
    logo: "/tools/google-site-kit.svg",
    category: "Google"
  },
  {
    name: "Ahrefs",
    description: "Análisis de backlinks y keywords research avanzado",
    logo: "/tools/ahrefs.svg",
    category: "Premium"
  },
  {
    name: "Semrush",
    description: "Suite completa de SEO y análisis de competencia",
    logo: "/tools/semrush.svg",
    category: "Premium"
  },
  {
    name: "SearchAtlas",
    description: "Herramienta avanzada de análisis SEO",
    logo: "/tools/searchatlas.svg",
    category: "Premium"
  },
  {
    name: "LowFruits",
    description: "Identificación de oportunidades SEO de alto potencial",
    logo: "/tools/lowfruits.svg",
    category: "Premium"
  }
];

export const ToolsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Herramientas Profesionales que Utilizamos
          </h2>
          <p className="text-xl text-muted-foreground">
            Trabajamos con las mejores herramientas SEO del mercado para garantizar resultados óptimos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Card 
              key={tool.name}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-2 border-transparent hover:border-yellow/20"
            >
              <CardContent className="p-6">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={tool.logo} 
                    alt={`Logo de ${tool.name}`} 
                    className="h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-yellow transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {tool.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    tool.category === "Google" 
                      ? "bg-blue-100 text-blue-700" 
                      : "bg-yellow/10 text-yellow"
                  }`}>
                    {tool.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};