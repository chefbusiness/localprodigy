import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué resultados puedo esperar del marketing digital para mi clínica veterinaria?",
    answer: "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
  },
  {
    question: "¿Cómo ayuda el SEO local a mi clínica veterinaria?",
    answer: "El SEO local mejora su visibilidad en las búsquedas de Google realizadas por propietarios de mascotas en su área. Esto incluye optimización para términos como 'veterinario cerca de mí', 'clínica veterinaria + [su ciudad]' y servicios específicos que ofrece."
  },
  {
    question: "¿Cuánto tiempo lleva ver resultados en SEO para veterinarias?",
    answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área pueden influir en estos plazos."
  },
  {
    question: "¿Qué presupuesto debo considerar para marketing digital?",
    answer: "El presupuesto varía según sus objetivos y el alcance deseado. Nuestros planes comienzan desde 597€/mes para gestión básica de presencia online. Para una estrategia completa que incluya SEO, PPC y gestión de contenidos, recomendamos un presupuesto mensual desde 997€."
  }
];

export const VeterinaryFAQ = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Preguntas Frecuentes sobre Marketing Digital para Veterinarias
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