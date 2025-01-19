const faqData = [
  {
    question: "¿Cómo puedo mejorar el SEO local de mi clínica dental?",
    answer: "El SEO local para clínicas dentales requiere una estrategia integral que incluye la optimización de Google Business Profile, creación de contenido relevante sobre tratamientos dentales, gestión activa de reseñas de pacientes y optimización técnica de tu web para búsquedas locales."
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados con el SEO dental?",
    answer: "Los primeros resultados en SEO local para clínicas dentales suelen verse entre 3-6 meses, aunque esto puede variar según la competencia en tu zona y la estrategia implementada. Las campañas de Google Ads pueden mostrar resultados inmediatos."
  },
  {
    question: "¿Por qué necesito marketing digital para mi clínica dental?",
    answer: "El marketing digital es esencial para las clínicas dentales modernas ya que el 80% de los pacientes buscan servicios dentales en Google antes de elegir una clínica. Una estrategia digital efectiva te ayuda a captar estos pacientes potenciales y convertirlos en pacientes reales."
  },
  {
    question: "¿Qué incluye el servicio de SEO local para dentistas?",
    answer: "Nuestro servicio incluye optimización de Google Business Profile, gestión de reseñas, creación de contenido dental especializado, optimización técnica SEO, estrategia de keywords locales, y seguimiento detallado de resultados con informes mensuales."
  }
];

export const DentalFAQ = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Preguntas Frecuentes sobre SEO para Clínicas Dentales
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};