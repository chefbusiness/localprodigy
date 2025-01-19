import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";
import { Stethoscope, MapPin, Users, ChartBar, Award, MegaphoneIcon } from "lucide-react";
import { PricingPlans } from "@/components/local-seo/PricingPlans";
import { GoogleAdsPlans } from "@/components/digital-ads/pricing/GoogleAdsPlans";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DentalClinics = () => {
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

  return (
    <>
      <BusinessLandingPage
        title="Clínicas Dentales"
        description="Servicios especializados de SEO Local y Marketing Digital SEM para clínicas dentales. Aumenta tu visibilidad online, atrae más pacientes cualificados y destaca en tu zona de influencia con estrategias personalizadas de posicionamiento web."
        keywords={[
          "SEO local clínicas dentales",
          "marketing digital dentistas",
          "posicionamiento web dental",
          "publicidad Google clínica dental",
          "marketing online odontólogos",
          "SEO dentistas",
          "SEM clínicas dentales",
          "Google Ads dentistas",
          "marketing dental España",
          "posicionamiento local dentistas"
        ]}
        heroImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
        services={[
          {
            title: "SEO Local Especializado",
            description: "Optimización para búsquedas locales y Google Business Profile",
            icon: MapPin
          },
          {
            title: "Campañas SEM Dental",
            description: "Publicidad segmentada en Google Ads para captar pacientes",
            icon: MegaphoneIcon
          },
          {
            title: "Marketing de Contenidos",
            description: "Contenido especializado en servicios dentales",
            icon: Stethoscope
          },
          {
            title: "Gestión de Reputación",
            description: "Optimización de reseñas y testimonios de pacientes",
            icon: Award
          },
          {
            title: "Análisis y Resultados",
            description: "Seguimiento detallado de métricas y conversiones",
            icon: ChartBar
          },
          {
            title: "Experiencia del Paciente",
            description: "Mejora de la presencia digital y atención online",
            icon: Users
          }
        ]}
        benefits={[
          {
            title: "Mayor Visibilidad Local",
            description: "Posiciónate en las primeras posiciones de Google cuando los pacientes busquen servicios dentales en tu zona.",
            icon: MapPin
          },
          {
            title: "Pacientes Cualificados",
            description: "Atrae pacientes interesados en tratamientos específicos mediante keywords estratégicas y publicidad segmentada.",
            icon: Users
          },
          {
            title: "Reputación Online",
            description: "Gestiona y mejora tu imagen digital con estrategias de reseñas y testimonios verificados.",
            icon: Award
          },
          {
            title: "ROI Medible",
            description: "Seguimiento detallado de conversiones y retorno de inversión en marketing digital.",
            icon: ChartBar
          }
        ]}
        faqSchema={faqData}
        callToAction={{
          title: "¿Listo para aumentar los pacientes de tu clínica dental?",
          description: "Solicita una consultoría gratuita y descubre cómo podemos ayudarte a crecer",
          buttonText: "Solicitar Presupuesto",
          buttonLink: "/contacto"
        }}
      >
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Planes de SEO Local para Clínicas Dentales</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Soluciones adaptadas a las necesidades de tu clínica dental
              </p>
              <Button asChild variant="outline" className="mb-12">
                <Link to="/servicios/seo-local">
                  Ver todos los detalles de nuestros servicios SEO Local →
                </Link>
              </Button>
            </div>
            <PricingPlans />
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Publicidad Digital para Clínicas Dentales</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Campañas de Google Ads optimizadas para el sector dental
              </p>
              <Button asChild variant="outline" className="mb-12">
                <Link to="/servicios/publicidad-digital">
                  Descubre todas nuestras soluciones de publicidad digital →
                </Link>
              </Button>
            </div>
            <GoogleAdsPlans />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Preguntas Frecuentes sobre SEO para Clínicas Dentales
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqData.map((faq) => (
                <div 
                  key={faq.question} 
                  className="bg-background p-6 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BusinessLandingPage>
    </>
  );
};

export default DentalClinics;