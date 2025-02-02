import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué resultados puedo esperar del marketing digital para mi consultora de RRHH?",
    answer: "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas de empresas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en leads cualificados en los primeros 3-6 meses."
  },
  {
    question: "¿Cómo ayuda el SEO local a mi consultora de recursos humanos?",
    answer: "El SEO local mejora su visibilidad en las búsquedas de Google realizadas por empresas en su área que buscan servicios de RRHH. Optimizamos para términos como 'consultora RRHH cerca de mí', 'selección de personal en [ciudad]' y servicios específicos que ofrece."
  },
  {
    question: "¿Cuánto tiempo lleva ver resultados en SEO para consultoras de RRHH?",
    answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su zona pueden influir en estos plazos."
  },
  {
    question: "¿Qué presupuesto debo considerar para marketing digital?",
    answer: "El presupuesto varía según sus objetivos y el alcance deseado. Nuestros planes comienzan desde 597€/mes para gestión básica de presencia online. Para una estrategia completa que incluya SEO, PPC y gestión de contenidos, recomendamos un presupuesto mensual desde 997€."
  }
];

export const HRFAQ = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Preguntas Frecuentes sobre Marketing Digital para Consultoras de RRHH
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