import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    name: "WordPress",
    description: "CMS líder mundial para sitios web y blogs",
    logo: "/tools/wordpress.png"
  },
  {
    name: "Next.js",
    description: "Framework React para aplicaciones web modernas",
    logo: "/tools/nextjs.png"
  },
  {
    name: "Astro",
    description: "Framework para sitios web de alto rendimiento",
    logo: "/tools/astro.png"
  },
  {
    name: "WooCommerce",
    description: "Plataforma e-commerce para WordPress",
    logo: "/tools/woocommerce.png"
  },
  {
    name: "Shopify",
    description: "Plataforma e-commerce todo en uno",
    logo: "/tools/shopify.png"
  }
];

export const TechStackSection = () => {
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
                  <img 
                    src={tech.logo} 
                    alt={`Logo de ${tech.name}`} 
                    className="h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
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