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
            Preguntas Frecuentes sobre SEO Local
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Cuánto tiempo se tarda en ver resultados con el SEO local?
              </AccordionTrigger>
              <AccordionContent>
                Los primeros resultados suelen verse entre 3-6 meses, aunque esto puede variar según la competencia en tu sector y ubicación. Algunos cambios, como la optimización de Google Business Profile, pueden mostrar mejoras en semanas. Nuestro enfoque se centra en conseguir resultados sostenibles a largo plazo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Por qué necesito SEO local si ya tengo una web?
              </AccordionTrigger>
              <AccordionContent>
                Tener una web es solo el primer paso. El SEO local asegura que tu negocio aparezca cuando los clientes de tu zona buscan tus servicios. Incluye optimización de Google Business Profile, gestión de reseñas, creación de contenido local relevante y estrategias específicas para aparecer en el Local Pack de Google.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Qué diferencia hay entre SEO tradicional y SEO local?
              </AccordionTrigger>
              <AccordionContent>
                El SEO local se centra en optimizar tu presencia para búsquedas con intención local ("cerca de mí", "en [ciudad]", etc.) y en Google Maps. Incluye estrategias específicas como la optimización de Google Business Profile, gestión de citations locales y contenido orientado a tu área geográfica.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                ¿Necesito SEO local si solo tengo un negocio físico?
              </AccordionTrigger>
              <AccordionContent>
                ¡Absolutamente! El 78% de las búsquedas locales desde móvil resultan en una compra offline. El SEO local es especialmente importante para negocios físicos, ya que ayuda a aparecer en Google Maps y en búsquedas locales, dirigiendo tráfico cualificado a tu establecimiento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                ¿Qué incluye la gestión de reseñas?
              </AccordionTrigger>
              <AccordionContent>
                Nuestra gestión de reseñas incluye monitorización diaria, respuesta profesional a todas las reseñas (positivas y negativas), estrategias para conseguir más reseñas positivas y análisis de feedback para mejorar tu servicio. Las reseñas son cruciales para el SEO local y la confianza del cliente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                ¿Cómo medimos los resultados del SEO local?
              </AccordionTrigger>
              <AccordionContent>
                Proporcionamos informes mensuales detallados que incluyen: posiciones en búsquedas locales, visibilidad en Google Maps, tráfico a la web, llamadas y direcciones solicitadas desde Google Business Profile, evolución de reseñas, y lo más importante: leads y conversiones generadas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};