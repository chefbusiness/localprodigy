import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const WebDevFAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cuánto tiempo tarda en desarrollarse un sitio web?</AccordionTrigger>
              <AccordionContent>
                El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page puede estar lista en 2-3 semanas, mientras que un e-commerce completo puede llevar 6-8 semanas. Proporcionamos un cronograma detallado al inicio del proyecto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Qué plataforma es mejor para mi negocio?</AccordionTrigger>
              <AccordionContent>
                La elección depende de tus necesidades específicas. WordPress es excelente para sitios corporativos y blogs, Next.js para aplicaciones web complejas, y Shopify para e-commerce con necesidades estándar. Durante la consulta inicial, evaluamos tus requisitos y recomendamos la mejor solución.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Incluyen el mantenimiento del sitio web?</AccordionTrigger>
              <AccordionContent>
                Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, copias de seguridad, optimización de rendimiento y soporte técnico. El primer año de hosting y mantenimiento básico está incluido en todos nuestros planes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿El sitio web será responsive?</AccordionTrigger>
              <AccordionContent>
                Absolutamente. Todos nuestros desarrollos son 100% responsive y se prueban en múltiples dispositivos y navegadores para garantizar una experiencia óptima en cualquier pantalla.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};