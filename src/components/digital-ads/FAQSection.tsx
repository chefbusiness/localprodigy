import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cuál es la diferencia entre SEO y SEM?</AccordionTrigger>
              <AccordionContent>
                Mientras que el SEO se centra en mejorar el posicionamiento orgánico a largo plazo, el SEM ofrece resultados inmediatos a través de publicidad pagada. El SEO requiere tiempo para ver resultados, pero el SEM permite aparecer en las primeras posiciones de manera instantánea mediante pujas por palabras clave.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cuánto presupuesto necesito para empezar con SEM?</AccordionTrigger>
              <AccordionContent>
                El presupuesto mínimo recomendado para comenzar con SEM es de 500€ mensuales en publicidad, además de la tarifa de gestión. Este presupuesto permite realizar pruebas efectivas y obtener datos relevantes para optimizar las campañas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿En qué plataformas publicitarias debería invertir?</AccordionTrigger>
              <AccordionContent>
                La elección de plataformas depende de tu negocio y objetivos. Google Ads es esencial para captar usuarios con intención de compra, mientras que las redes sociales son ideales para crear awareness y engagement. Realizamos un análisis personalizado para recomendar la mejor estrategia para tu caso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Cuánto tiempo necesito para ver resultados?</AccordionTrigger>
              <AccordionContent>
                Con SEM, los resultados son inmediatos en términos de visibilidad. Sin embargo, recomendamos un período mínimo de 3 meses para optimizar las campañas, ajustar las pujas y maximizar el ROI en base a los datos recopilados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>¿Qué incluye la gestión de campañas?</AccordionTrigger>
              <AccordionContent>
                Nuestro servicio incluye investigación de palabras clave, creación y optimización de anuncios, seguimiento de conversiones, ajuste de pujas, testing A/B, remarketing, informes mensuales y recomendaciones estratégicas para mejorar el rendimiento de tus campañas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
