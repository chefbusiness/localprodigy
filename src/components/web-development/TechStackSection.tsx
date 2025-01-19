import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const technologies = [
  {
    name: "WordPress",
    description: "CMS líder mundial para sitios web y blogs",
    logo: "/lovable-uploads/7e68e1c4-0b83-4339-9e57-7337c5e601c3.png"
  },
  {
    name: "Next.js",
    description: "Framework React para aplicaciones web modernas",
    logo: "/lovable-uploads/9961c294-0288-49e4-8f52-5c38d91134c8.png"
  },
  {
    name: "Astro",
    description: "Framework para sitios web de alto rendimiento",
    logo: "/lovable-uploads/5ceec2be-230b-4be2-a5da-435eb8a9805e.png"
  },
  {
    name: "WooCommerce",
    description: "Plataforma e-commerce para WordPress",
    logo: "/lovable-uploads/b8c1029e-ad7a-40d0-a012-f29a8c1ff8a0.png"
  },
  {
    name: "Shopify",
    description: "Plataforma e-commerce todo en uno",
    logo: "/lovable-uploads/1cef11f9-badb-41c1-b0e0-5736ca80e946.png"
  }
];

export const TechStackSection = () => {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (techName: string) => {
    console.error(`Error loading image for ${techName}`);
    setImageErrors(prev => ({...prev, [techName]: true}));
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Tecnologías que Utilizamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {technologies.map((tech) => (
            <Card 
              key={tech.name}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-2 border-transparent hover:border-yellow/20"
            >
              <CardContent className="p-6">
                <div className="h-16 flex items-center justify-center mb-4">
                  {imageErrors[tech.name] ? (
                    <div className="text-muted-foreground text-sm">
                      {tech.name}
                    </div>
                  ) : (
                    <img 
                      src={tech.logo} 
                      alt={`Logo de ${tech.name}`} 
                      className="h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={() => handleImageError(tech.name)}
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-yellow transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};