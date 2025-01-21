import { Brain, Heart, Globe, Users } from "lucide-react";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";
import { PsychologyHero } from "@/components/psychology/PsychologyHero";
import { PsychologyServices } from "@/components/psychology/PsychologyServices";
import { PsychologyFAQ } from "@/components/psychology/PsychologyFAQ";
import { PsychologyPricingSection } from "@/components/psychology/PsychologyPricingSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

const PsychologyServicesPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <PsychologyHero />
        <PsychologyServices />
        <PsychologyPricingSection />
        <PsychologyFAQ />
      </main>
      <Footer />
    </>
  );
};

export default PsychologyServicesPage;