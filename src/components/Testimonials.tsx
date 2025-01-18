import { Card, CardContent } from "@/components/ui/card";
import { HandshakeIcon, ChartBarIcon, MapPinIcon, StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    company: "Clínica Dental Sonrisas",
    text: "Gracias a localSEOads.com, nuestra visibilidad local aumentó un 200% en 3 meses. Ahora recibimos más pacientes que nunca.",
    icon: HandshakeIcon,
    metric: "+200%",
    metricLabel: "visibilidad local",
    rating: 5,
    sector: "Servicios Profesionales",
    location: "Madrid"
  },
  {
    name: "Carlos Rodríguez",
    company: "Taller Mecánico AutoPro",
    text: "Duplicamos nuestras consultas mensuales y mejoramos nuestra presencia en Google Maps significativamente.",
    icon: ChartBarIcon,
    metric: "2x",
    metricLabel: "consultas mensuales",
    rating: 5,
    sector: "Automoción",
    location: "Barcelona"
  },
  {
    name: "Ana Martínez",
    company: "Restaurante El Rincón",
    text: "La optimización de nuestro perfil de Google Business nos ayudó a destacar entre la competencia local.",
    icon: MapPinIcon,
    metric: "#1",
    metricLabel: "en búsquedas locales",
    rating: 5,
    sector: "Hostelería",
    location: "Valencia"
  },
];

export const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <StarIcon key={index} className="w-4 h-4 text-yellow inline-block" />
    ));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-xl text-gray-600">
            Descubre cómo hemos ayudado a negocios como el tuyo a crecer en su mercado local
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-shadow animate-fade-up border-2 border-transparent hover:border-yellow/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <testimonial.icon className="w-12 h-12 text-yellow" />
                </div>
                <div className="text-4xl font-bold text-primary text-center mb-2">
                  {testimonial.metric}
                </div>
                <div className="text-sm text-gray-600 text-center mb-4">
                  {testimonial.metricLabel}
                </div>
                <div className="text-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-4 italic text-center">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-xs text-yellow mt-2">
                    {testimonial.sector} | {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};