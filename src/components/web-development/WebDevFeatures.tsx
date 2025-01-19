import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Diseño Responsive",
    description: "Tu web se verá perfecta en cualquier dispositivo"
  },
  {
    title: "Optimización SEO",
    description: "Código limpio y estructura optimizada para buscadores"
  },
  {
    title: "Velocidad de Carga",
    description: "Optimización de recursos para máximo rendimiento"
  },
  {
    title: "Seguridad SSL",
    description: "Certificado SSL incluido para proteger los datos"
  },
  {
    title: "Panel de Control",
    description: "Gestiona tu contenido fácilmente"
  },
  {
    title: "Soporte Técnico",
    description: "Asistencia profesional cuando la necesites"
  }
];

export const WebDevFeatures = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Características de Nuestro Desarrollo</h2>
          <p className="text-xl text-muted-foreground">
            Tecnología moderna y mejores prácticas para tu sitio web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-yellow transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};