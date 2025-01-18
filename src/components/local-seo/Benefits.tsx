import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: "Experiencia Comprobada",
    description: "Años de experiencia en SEO local con casos de éxito documentados",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Estrategia Personalizada",
    description: "Plan adaptado a tu negocio y mercado local específico",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Resultados Medibles",
    description: "Informes detallados y métricas claras de rendimiento",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegir nuestro SEO Local?</h2>
          <p className="text-xl text-muted-foreground">
            Resultados comprobados en posicionamiento local
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-2 border-transparent hover:border-yellow/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardTitle className="group-hover:text-yellow transition-colors duration-300">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};