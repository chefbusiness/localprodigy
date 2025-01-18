import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Preguntas Frecuentes sobre SEO Nacional
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Cuánto tiempo se tarda en ver resultados con el SEO nacional?
              </AccordionTrigger>
              <AccordionContent>
                Los primeros resultados suelen verse entre 4-8 meses, aunque esto puede variar según la competitividad del sector y las keywords objetivo. El SEO nacional requiere una estrategia más compleja y a largo plazo que el SEO local, pero los resultados son más duraderos y escalables.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Qué diferencia hay entre SEO nacional y SEO local?
              </AccordionTrigger>
              <AccordionContent>
                El SEO nacional se enfoca en posicionar tu web para búsquedas a nivel país, sin limitación geográfica. Requiere estrategias más amplias de contenido, link building y autoridad de dominio. El SEO local, en cambio, se centra en posicionamiento para búsquedas con intención local específica.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Qué incluye el servicio de SEO nacional?
              </AccordionTrigger>
              <AccordionContent>
                Nuestro servicio incluye optimización técnica completa, estrategia de contenidos, link building de calidad, optimización de palabras clave, análisis de competencia, informes mensuales detallados y ajustes continuos de estrategia basados en resultados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                ¿Necesito SEO nacional si ya tengo SEO local?
              </AccordionTrigger>
              <AccordionContent>
                Si tu objetivo es expandirte más allá de tu mercado local o tienes un negocio que puede servir a clientes en todo el país, el SEO nacional es esencial. Ambas estrategias pueden complementarse para maximizar tu visibilidad tanto a nivel local como nacional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                ¿Cómo medís los resultados del SEO nacional?
              </AccordionTrigger>
              <AccordionContent>
                Utilizamos herramientas profesionales para medir rankings de keywords, tráfico orgánico, conversiones, autoridad de dominio, backlinks ganados y ROI. Proporcionamos informes mensuales detallados con métricas clave y recomendaciones estratégicas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                ¿Qué tipo de empresas necesitan SEO nacional?
              </AccordionTrigger>
              <AccordionContent>
                El SEO nacional es ideal para e-commerce, servicios online, marcas con presencia en múltiples ciudades, empresas B2B, fabricantes, mayoristas y cualquier negocio que quiera captar clientes en todo el país sin limitación geográfica.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};