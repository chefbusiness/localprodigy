import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PsychologyHero } from "@/components/psychology/PsychologyHero";
import { PsychologyServices } from "@/components/psychology/PsychologyServices";
import { PsychologyFAQ } from "@/components/psychology/PsychologyFAQ";
import { PsychologyPricingSection } from "@/components/psychology/PsychologyPricingSection";
import { PsychologySchema } from "@/components/psychology/PsychologySchema";
import { Link } from "react-router-dom";

const PsychologyServicesPage = () => {
  return (
    <>
      <PsychologySchema />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Inicio
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="/sectores" className="text-muted-foreground hover:text-primary">
                Sectores
              </Link>
            </li>
            <span>/</span>
            <li>
              <Link to="/sectores/servicios-profesionales" className="text-muted-foreground hover:text-primary">
                Servicios Profesionales
              </Link>
            </li>
            <span>/</span>
            <li className="text-primary">
              Psicólogos
            </li>
          </ol>
        </nav>
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