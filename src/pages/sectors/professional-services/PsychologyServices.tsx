import { Brain, Users, Globe, MousePointerClick, Heart, HeartPulse } from "lucide-react";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";

const PsychologyServicesPage = () => {
  const services = [
    {
      title: "SEO Local para Psicólogos",
      description: "Posicionamiento en búsquedas locales para captar pacientes en su área de influencia",
      icon: Brain,
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
      icon: Heart,
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
      icon: MousePointerClick,
      features: [
        "Google Ads para psicólogos",
        "Facebook & Instagram Ads",
        "Remarketing especializado",
        "Landing pages por especialidad"
      ]
    },
    {
      title: "Gestión de Reputación Online",
      description: "Construcción y mantenimiento de una presencia profesional online",
      icon: HeartPulse,
      features: [
        "Monitorización de reseñas",
        "Gestión de privacidad",
        "Construcción de autoridad",
        "Testimonios verificados"
      ]
    }
  ];

  const benefits = [
    {
      title: "Mayor Visibilidad Local",
      description: "Mejore su posicionamiento en búsquedas locales y Google Maps para atraer pacientes de su zona.",
      icon: Globe
    },
    {
      title: "Pacientes Cualificados",
      description: "Atraiga consultas de pacientes potenciales interesados en sus servicios específicos.",
      icon: Users
    },
    {
      title: "Privacidad Garantizada",
      description: "Gestión de contenido y marketing respetando la confidencialidad del paciente.",
      icon: Heart
    },
    {
      title: "Conversiones Optimizadas",
      description: "Mejora continua de tasas de conversión y calidad de consultas generadas.",
      icon: Brain
    }
  ];

  const faqSchema = [
    {
      question: "¿Qué resultados puedo esperar del marketing digital para mi consulta?",
      answer: "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
    },
    {
      question: "¿Cómo se maneja la privacidad en el marketing para psicólogos?",
      answer: "Nuestro enfoque prioriza la confidencialidad del paciente y cumple con todas las normativas de privacidad. Trabajamos con testimonios anónimos, casos de éxito generalizados y contenido que respeta la sensibilidad de la salud mental."
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados en SEO para psicólogos?",
      answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área y especialidad pueden influir en estos plazos."
    }
  ];

  return (
    <BusinessLandingPage
      title="Psicólogos y Terapeutas"
      description="Marketing digital especializado para profesionales de la salud mental. Aumente su visibilidad online y genere más consultas cualificadas respetando la privacidad del paciente."
      keywords={[
        "marketing digital psicólogos",
        "seo psicólogos",
        "publicidad terapeutas",
        "marketing salud mental",
        "posicionamiento web psicólogos",
        "google ads psicólogos",
        "marketing terapeutas"
      ]}
      heroImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
      services={services}
      benefits={benefits}
      faqSchema={faqSchema}
      callToAction={{
        title: "Impulse el Crecimiento de su Consulta",
        description: "Descubra cómo nuestras soluciones de marketing digital pueden ayudarle a atraer más pacientes cualificados",
        buttonText: "Solicitar Consulta Gratuita",
        buttonLink: "/contacto"
      }}
    />
  );
};

export default PsychologyServicesPage;