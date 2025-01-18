import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Clínica Dental García",
    content: "Increíble mejora en nuestra visibilidad local. Nuestras consultas se han duplicado en 3 meses.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    role: "Restaurante La Marea",
    content: "El mejor equipo de SEO local con el que hemos trabajado. Resultados reales y medibles.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Autoescuela Victoria",
    content: "Profesionales que entienden las necesidades de un negocio local. Muy recomendables.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-black/[0.02]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground">
            Historias de éxito de negocios locales que han confiado en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="backdrop-blur-sm bg-white/50 border-none hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};