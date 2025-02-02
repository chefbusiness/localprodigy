import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import Sectors from "@/pages/Sectors";
import LocalSEO from "@/pages/services/LocalSEO";
import NationalSEO from "@/pages/services/NationalSEO";
import WebDevelopment from "@/pages/services/WebDevelopment";
import DigitalAds from "@/pages/services/DigitalAds";
import ProfessionalServices from "@/pages/sectors/ProfessionalServices";
import HealthWellness from "@/pages/sectors/HealthWellness";
import HospitalityRestaurants from "@/pages/sectors/HospitalityRestaurants";
import DentalClinics from "@/pages/sectors/professional-services/DentalClinics";
import LegalServices from "@/pages/sectors/professional-services/LegalServices";
import ConsultancyServices from "@/pages/sectors/professional-services/ConsultancyServices";
import PsychologyServices from "@/pages/sectors/professional-services/PsychologyServices";
import VeterinaryServices from "@/pages/sectors/professional-services/VeterinaryServices";
import LocalRetail from "@/pages/sectors/LocalRetail";
import HomeServices from "@/pages/sectors/HomeServices";
import Automotive from "@/pages/sectors/Automotive";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/sectores" element={<Sectors />} />
            <Route path="/servicios/seo-local" element={<LocalSEO />} />
            <Route path="/servicios/seo-nacional" element={<NationalSEO />} />
            <Route path="/servicios/desarrollo-web" element={<WebDevelopment />} />
            <Route path="/servicios/publicidad-digital" element={<DigitalAds />} />
            <Route path="/sectores/servicios-profesionales" element={<ProfessionalServices />} />
            <Route path="/sectores/salud-bienestar" element={<HealthWellness />} />
            <Route path="/sectores/hosteleria-restauracion" element={<HospitalityRestaurants />} />
            <Route path="/sectores/comercio-local" element={<LocalRetail />} />
            <Route path="/sectores/servicios-hogar" element={<HomeServices />} />
            <Route path="/sectores/automocion" element={<Automotive />} />
            <Route path="/sectores/servicios-profesionales/clinicas-dentales" element={<DentalClinics />} />
            <Route path="/sectores/servicios-profesionales/abogados" element={<LegalServices />} />
            <Route path="/sectores/servicios-profesionales/asesorias" element={<ConsultancyServices />} />
            <Route path="/sectores/servicios-profesionales/psicologos" element={<PsychologyServices />} />
            <Route path="/sectores/servicios-profesionales/veterinarias" element={<VeterinaryServices />} />
          </Routes>
          <WhatsAppWidget />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;