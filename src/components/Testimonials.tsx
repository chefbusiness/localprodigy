import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Directora, Clínica Dental García",
    content: "Increíble mejora en nuestra visibilidad local. Nuestras consultas se han duplicado en 3 meses y el ROI de la inversión en marketing digital ha superado todas nuestras expectativas.",
    rating: 5,
    metric: "+100% Consultas"
  },
  {
    name: "Carlos Rodríguez",
    role: "Propietario, Restaurante La Marea",
    content: "El mejor equipo de SEO local con el que hemos trabajado. Resultados reales y medibles. Han conseguido posicionarnos en el top 3 de Google Maps para todas nuestras palabras clave principales.",
    rating: 5,
    metric: "Top 3 Google Maps"
  },
  {
    name: "Ana Martínez",
    role: "Directora, Autoescuela Victoria",
    content: "Profesionales que entienden las necesidades de un negocio local. Gracias a sus campañas de Google Ads y la optimización de nuestro perfil de Google Business, hemos aumentado un 150% las matriculaciones.",
    rating: 5,
    metric: "+150% Conversiones"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-black/[0.02]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
            Historias de Éxito en Marketing Digital Local
          </h2>
          <p className="text-2xl text-muted-foreground">
            Descubre cómo hemos ayudado a negocios locales como el tuyo a crecer con estrategias digitales personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <CardContent className="p-6">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow text-yellow" />
                  ))}
                </div>
                <div className="mb-6 inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold">
                  {testimonial.metric}
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="mt-6">
                  <p className="font-semibold text-xl text-primary">{testimonial.name}</p>
                  <p className="text-base text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};