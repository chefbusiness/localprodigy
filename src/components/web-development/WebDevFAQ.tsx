import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en desarrollarse un sitio web?",
    answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page puede estar lista en 2-3 semanas, mientras que un e-commerce completo puede llevar 6-8 semanas. Siempre proporcionamos un cronograma detallado al inicio del proyecto."
  },
  {
    question: "¿Qué tecnología es mejor para mi sitio web?",
    answer: "La elección de la tecnología depende de tus necesidades específicas. WordPress es excelente para sitios con mucho contenido y blogs, Next.js para aplicaciones web modernas y de alto rendimiento, y Shopify para e-commerce con necesidades estándar."
  },
  {
    question: "¿Incluyen el mantenimiento del sitio web?",
    answer: "Sí, todos nuestros planes incluyen mantenimiento básico durante el primer año. Esto incluye actualizaciones de seguridad, copias de seguridad y soporte técnico."
  },
  {
    question: "¿Los sitios web son optimizados para SEO?",
    answer: "Absolutamente. Todos nuestros desarrollos incluyen optimización SEO técnica básica: estructura optimizada, meta tags, velocidad de carga, mobile-first y SSL. Para estrategias SEO más avanzadas, consulta nuestros planes de SEO."
  },
  {
    question: "¿Puedo actualizar el contenido yo mismo?",
    answer: "Sí, implementamos un panel de administración intuitivo que te permite actualizar contenido, imágenes y productos fácilmente. Además, proporcionamos formación básica para que puedas gestionar tu sitio."
  }
];

export const WebDevFAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
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