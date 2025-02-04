import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué resultados puedo esperar del marketing digital para mi asesoría?",
    answer: "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
  },
  {
    question: "¿Cómo se diferencia el marketing digital para asesorías de otros sectores?",
    answer: "El marketing para asesorías requiere un enfoque especializado que considere las regulaciones profesionales, la confidencialidad de la información y la necesidad de construir confianza. Nos centramos en estrategias que resaltan su experiencia y credenciales mientras mantenemos los más altos estándares éticos."
  },
  {
    question: "¿Cuánto tiempo lleva ver resultados en SEO para asesorías?",
    answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área y especialidad pueden influir en estos plazos."
  }
];

export const ConsultancyFAQ = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Preguntas Frecuentes sobre Marketing Digital para Asesorías
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};