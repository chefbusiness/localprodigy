import { Calculator, Users, Globe, MousePointerClick } from "lucide-react";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";

const ConsultancyServicesPage = () => {
  const services = [
    {
      title: "SEO Local para Asesorías",
      description: "Posicionamiento en búsquedas locales para captar clientes en su área de influencia",
      icon: Globe,
      features: [
        "Optimización Google Business Profile",
        "SEO local específico para asesorías",
        "Posicionamiento por servicios",
        "Optimización de reseñas"
      ]
    },
    {
      title: "Marketing de Contenidos Fiscal",
      description: "Contenido especializado que demuestra su experiencia y genera confianza",
      icon: Calculator,
      features: [
        "Blog posts especializados",
        "Guías fiscales y contables",
        "Casos de éxito",
        "Newsletter fiscal"
      ]
    },
    {
      title: "Publicidad Digital para Asesorías",
      description: "Campañas segmentadas para atraer clientes potenciales cualificados",
      icon: MousePointerClick,
      features: [
        "Google Ads para asesorías",
        "Facebook & LinkedIn Ads",
        "Remarketing especializado",
        "Landing pages por servicio"
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
      description: "Mejore su posicionamiento en búsquedas locales y Google Maps para atraer clientes de su zona.",
      icon: Globe
    },
    {
      title: "Clientes Cualificados",
      description: "Atraiga consultas de clientes potenciales interesados en sus servicios específicos.",
      icon: Users
    },
    {
      title: "ROI Medible",
      description: "Seguimiento detallado de resultados y retorno de inversión de sus campañas.",
      icon: Calculator
    },
    {
      title: "Conversiones Optimizadas",
      description: "Mejora continua de tasas de conversión y calidad de leads generados.",
      icon: MousePointerClick
    }
  ];

  const faqSchema = [
    {
      question: "¿Qué resultados puedo esperar del marketing digital para mi asesoría?",
      answer: "Con una estrategia de marketing digital bien ejecutada, puede esperar un aumento en consultas cualificadas, mejor visibilidad en búsquedas locales, y un fortalecimiento de su marca profesional. Nuestros clientes suelen ver un incremento significativo en consultas online en los primeros 3-6 meses."
    },
    {
      question: "¿Cómo se diferencia el marketing digital para asesorías de otros sectores?",
      answer: "El marketing para asesorías requiere un enfoque especializado que considere las regulaciones profesionales, la confidencialidad de la información y la necesidad de construir confianza. Nos centramos en estrategias que resaltan su experiencia y credenciales mientras mantenemos los más altos estándares éticos."
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados en SEO para asesorías?",
      answer: "El SEO es una estrategia a medio-largo plazo. Aunque algunos resultados pueden verse en 3-4 meses, los resultados más significativos suelen aparecer entre 6-12 meses. Factores como la competencia en su área y especialidad pueden influir en estos plazos."
    }
  ];

  return (
    <BusinessLandingPage
      title="Asesorías Fiscales y Contables"
      description="Marketing digital especializado para asesorías fiscales y contables. Aumente su visibilidad online y genere más consultas cualificadas."
      keywords={[
        "marketing digital asesorías",
        "seo asesorías fiscales",
        "publicidad asesorías",
        "marketing fiscal",
        "posicionamiento web asesorías",
        "google ads asesorías",
        "marketing contable"
      ]}
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
      services={services}
      benefits={benefits}
      faqSchema={faqSchema}
      callToAction={{
        title: "Impulse el Crecimiento de su Asesoría",
        description: "Descubra cómo nuestras soluciones de marketing digital pueden ayudarle a atraer más clientes cualificados",
        buttonText: "Solicitar Consulta Gratuita",
        buttonLink: "/contacto"
      }}
    />
  );
};

export default ConsultancyServicesPage;