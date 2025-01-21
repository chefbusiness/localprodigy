import { Brain, Heart, Globe } from "lucide-react";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";

const services = [
  {
    title: "SEO Local para Psicólogos",
    description: "Mejore su visibilidad en búsquedas locales y Google Maps",
    icon: Globe,
  },
  {
    title: "Marketing de Contenidos",
    description: "Contenido especializado que genera confianza y autoridad",
    icon: Brain,
  },
  {
    title: "Publicidad Digital",
    description: "Campañas segmentadas para atraer pacientes cualificados",
    icon: Heart,
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
    question: "¿Cómo puede el SEO local ayudar a mi consulta de psicología?",
    answer: "El SEO local ayuda a que su consulta aparezca en las búsquedas de Google cuando potenciales pacientes buscan psicólogos en su área. Esto aumenta su visibilidad y atrae más pacientes cualificados."
  },
  {
    question: "¿Cuánto tiempo se necesita para ver resultados?",
    answer: "Los primeros resultados suelen verse entre 3-6 meses, aunque esto puede variar según la competencia en su área y el estado actual de su presencia online."
  },
  {
    question: "¿Qué incluye el servicio de SEO local para psicólogos?",
    answer: "Nuestro servicio incluye optimización de Google Business Profile, creación de contenido local relevante, gestión de reseñas, optimización de su sitio web y estrategias específicas para psicólogos."
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
    />
  );
};

export default PsychologyServicesPage;