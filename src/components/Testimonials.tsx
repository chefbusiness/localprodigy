import { Card, CardContent } from "@/components/ui/card";
import { HandshakeIcon, ChartBarIcon, MapPinIcon } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    company: "Clínica Dental Sonrisas",
    text: "Gracias a localSEOads.com, nuestra visibilidad local aumentó un 200% en 3 meses. Ahora recibimos más pacientes que nunca.",
    icon: HandshakeIcon,
    metric: "+200%",
    metricLabel: "visibilidad local",
  },
  {
    name: "Carlos Rodríguez",
    company: "Taller Mecánico AutoPro",
    text: "Duplicamos nuestras consultas mensuales y mejoramos nuestra presencia en Google Maps significativamente.",
    icon: ChartBarIcon,
    metric: "2x",
    metricLabel: "consultas mensuales",
  },
  {
    name: "Ana Martínez",
    company: "Restaurante El Rincón",
    text: "La optimización de nuestro perfil de Google Business nos ayudó a destacar entre la competencia local.",
    icon: MapPinIcon,
    metric: "#1",
    metricLabel: "en búsquedas locales",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-xl text-gray-600">
            Descubre cómo hemos ayudado a negocios como el tuyo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-shadow animate-fade-up"
            >
              <CardContent className="pt-6">
                <testimonial.icon className="w-12 h-12 text-secondary mb-4 mx-auto" />
                <div className="text-4xl font-bold text-primary mb-2">
                  {testimonial.metric}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {testimonial.metricLabel}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};