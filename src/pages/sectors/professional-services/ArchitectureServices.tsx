import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";
import { Building2, Search, MousePointerClick, PenTool, Ruler, Users, LayoutPanelTop, Compass } from "lucide-react";

const ArchitectureServices = () => {
  const services = [
    {
      title: "SEO Local para Arquitectos",
      description: "Posicionamiento en búsquedas locales para atraer clientes cualificados en su área",
      icon: Search
    },
    {
      title: "Marketing de Contenidos Especializado",
      description: "Contenido que destaca su portfolio y experiencia en proyectos arquitectónicos",
      icon: PenTool
    },
    {
      title: "Publicidad Digital",
      description: "Campañas segmentadas para promocionar sus servicios de arquitectura",
      icon: MousePointerClick
    }
  ];

  const benefits = [
    {
      title: "Visibilidad Local Mejorada",
      description: "Aumente su presencia en búsquedas locales y atraiga más clientes potenciales en su área",
      icon: Building2
    },
    {
      title: "Portfolio Digital Optimizado",
      description: "Presente sus proyectos de manera profesional y atractiva para potenciales clientes",
      icon: LayoutPanelTop
    },
    {
      title: "Generación de Leads Cualificados",
      description: "Reciba consultas de clientes interesados en sus servicios de arquitectura",
      icon: Users
    },
    {
      title: "Autoridad en el Sector",
      description: "Posiciónese como experto en arquitectura y diseño en su área",
      icon: Compass
    }
  ];

  const faqSchema = [
    {
      question: "¿Qué resultados puedo esperar del marketing digital para mi estudio de arquitectura?",
      answer: "Con una estrategia bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
    },
    {
      question: "¿Cómo ayuda el SEO local a mi estudio de arquitectura?",
      answer: "El SEO local mejora su visibilidad en las búsquedas de Google realizadas por potenciales clientes en su área. Esto incluye optimización para términos como 'arquitecto cerca de mí', 'estudio de arquitectura + [su ciudad]' y servicios específicos que ofrece."
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados en SEO para arquitectos?",
      answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área pueden influir en estos plazos."
    }
  ];

  return (
    <BusinessLandingPage
      title="Arquitectos"
      description="Marketing digital especializado para estudios de arquitectura. Aumente su visibilidad online y atraiga más clientes cualificados para sus servicios de arquitectura y diseño."
      keywords={[
        "SEO para arquitectos",
        "Marketing digital arquitectura",
        "Publicidad estudios arquitectura",
        "Posicionamiento web arquitectos",
        "Marketing arquitectos online"
      ]}
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
      services={services}
      benefits={benefits}
      faqSchema={faqSchema}
      callToAction={{
        title: "Potencie su Presencia Digital",
        description: "Descubra cómo podemos ayudarle a atraer más clientes cualificados para su estudio de arquitectura",
        buttonText: "Solicitar Presupuesto",
        buttonLink: "/contacto"
      }}
    />
  );
};

export default ArchitectureServices;