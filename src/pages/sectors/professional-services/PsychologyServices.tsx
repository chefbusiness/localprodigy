import { Brain, Heart, Globe, Users } from "lucide-react";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";
import { PricingPlans } from "@/components/local-seo/PricingPlans";

const services = [
  {
    title: "SEO Local para Psicólogos",
    description: "Posicionamiento en búsquedas locales para captar pacientes en su área",
    icon: Globe,
    features: [
      "Optimización Google Business Profile",
      "SEO local específico para psicólogos",
      "Posicionamiento por especialidades",
      "Optimización de reseñas"
    ]
  },
  {
    title: "Marketing de Contenidos en Salud Mental",
    description: "Contenido especializado que demuestra su experiencia y genera confianza",
    icon: Brain,
    features: [
      "Blog posts especializados",
      "Guías de salud mental",
      "Casos de éxito anónimos",
      "Newsletter de bienestar"
    ]
  },
  {
    title: "Publicidad Digital para Terapeutas",
    description: "Campañas segmentadas para atraer pacientes potenciales cualificados",
    icon: Heart,
    features: [
      "Google Ads para psicólogos",
      "Facebook & Instagram Ads",
      "Remarketing especializado",
      "Landing pages por especialidad"
    ]
  },
  {
    title: "Gestión de Reputación",
    description: "Construcción y mantenimiento de una sólida presencia online",
    icon: Users,
    features: [
      "Monitorización de reseñas",
      "Gestión de crisis",
      "Construcción de autoridad",
      "Testimonios verificados"
    ]
  }
];

const benefits = [
  {
    title: "Mayor Visibilidad Local",
    description: "Aparezca en las primeras posiciones cuando potenciales pacientes busquen psicólogos en su área",
    icon: Globe,
  },
  {
    title: "Pacientes Cualificados",
    description: "Atraiga pacientes que buscan específicamente sus servicios y especialidades",
    icon: Brain,
  },
  {
    title: "Reputación Online",
    description: "Gestione y mejore su presencia online con reseñas positivas y contenido de calidad",
    icon: Heart,
  }
];

const faqSchema = [
  {
    question: "¿Qué resultados puedo esperar del marketing digital para mi consulta?",
    answer: "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
  },
  {
    question: "¿Cómo se diferencia el marketing digital para psicólogos de otros sectores?",
    answer: "El marketing para psicólogos requiere un enfoque especializado que considere la confidencialidad, la sensibilidad de la información y la necesidad de construir confianza. Nos centramos en estrategias que resaltan su experiencia y credenciales mientras mantenemos los más altos estándares éticos."
  },
  {
    question: "¿Cuánto tiempo lleva ver resultados en SEO para psicólogos?",
    answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área y especialidad pueden influir en estos plazos."
  },
  {
    question: "¿Qué presupuesto debo considerar para marketing digital?",
    answer: "El presupuesto varía según sus objetivos y el alcance deseado. Nuestros planes comienzan desde 597€/mes para gestión básica de presencia online. Para una estrategia completa que incluya SEO, PPC y gestión de contenidos, recomendamos un presupuesto mensual desde 997€."
  }
];

const PsychologyServicesPage = () => {
  return (
    <BusinessLandingPage
      title="Psicólogos"
      description="Aumente su visibilidad online y atraiga más pacientes cualificados a su consulta con nuestras estrategias de marketing digital especializadas para psicólogos."
      keywords={[
        "SEO para psicólogos",
        "Marketing digital psicólogos",
        "Publicidad psicólogos",
        "Google Ads psicólogos",
        "Posicionamiento web psicólogos"
      ]}
      heroImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
      services={services}
      benefits={benefits}
      faqSchema={faqSchema}
      callToAction={{
        title: "¿Listo para aumentar su presencia online?",
        description: "Solicite una consulta gratuita y descubra cómo podemos ayudarle a atraer más pacientes",
        buttonText: "Solicitar Consulta Gratuita",
        buttonLink: "/contacto"
      }}
    >
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Planes de SEO Local para Psicólogos</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Soluciones adaptadas a las necesidades de su consulta psicológica
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>
    </BusinessLandingPage>
  );
};

export default PsychologyServicesPage;