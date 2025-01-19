import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";

const DentalClinics = () => {
  return (
    <BusinessLandingPage
      title="Clínicas Dentales"
      description="Servicios de SEO y marketing digital especializados para clínicas dentales y odontólogos. Aumenta tu visibilidad online y atrae más pacientes cualificados."
      keywords={[
        "dentista",
        "odontólogo",
        "clínica dental",
        "implantes dentales",
        "marketing dental",
        "SEO clínicas dentales"
      ]}
      heroImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
      services={[
        "Posicionamiento SEO Local",
        "Google Business Profile Optimizado",
        "Campañas Google Ads",
        "Diseño Web para Clínicas",
        "Marketing de Contenidos Dental",
        "Gestión de Reseñas"
      ]}
      benefits={[
        {
          title: "Mayor Visibilidad Local",
          description: "Aparece en las primeras posiciones cuando los pacientes busquen servicios dentales en tu zona."
        },
        {
          title: "Pacientes Cualificados",
          description: "Atrae pacientes interesados en tratamientos específicos mediante keywords estratégicas."
        },
        {
          title: "Reputación Online",
          description: "Gestiona y mejora tu imagen online con estrategias de reseñas y testimonios."
        }
      ]}
      faqSchema={[
        {
          question: "¿Cómo puedo mejorar el SEO de mi clínica dental?",
          answer: "La mejora del SEO para clínicas dentales implica optimizar tu Google Business Profile, crear contenido relevante sobre tratamientos, gestionar reseñas positivas y optimizar tu web para búsquedas locales."
        },
        {
          question: "¿Cuánto tiempo se tarda en ver resultados?",
          answer: "Los primeros resultados en SEO local suelen verse entre 3-6 meses, aunque esto puede variar según la competencia en tu zona y la estrategia implementada."
        }
      ]}
    />
  );
};

export default DentalClinics;