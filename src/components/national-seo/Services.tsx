import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "SEO On Page",
    description: "Optimización completa de tu sitio web, incluyendo contenido, estructura y elementos técnicos",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "SEO Off Page",
    description: "Estrategias de link building y creación de autoridad para tu dominio",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Contenido SEO",
    description: "Creación de contenido optimizado y estratégico para diferentes regiones",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Análisis y Reporting",
    description: "Informes detallados de rendimiento y evolución de posiciones",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Nuestros Servicios de SEO Nacional</h2>
          <p className="text-xl text-muted-foreground">
            Soluciones completas para posicionar tu negocio en toda España
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-yellow transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
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