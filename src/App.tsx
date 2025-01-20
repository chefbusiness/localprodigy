import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import LocalSEO from "./pages/services/LocalSEO";
import NationalSEO from "./pages/services/NationalSEO";
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalAds from "./pages/services/DigitalAds";
import ProfessionalServices from "./pages/sectors/ProfessionalServices";
import DentalClinics from "./pages/sectors/professional-services/DentalClinics";
import LegalServices from "./pages/sectors/professional-services/LegalServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/sectores/servicios-profesionales/clinicas-dentales" element={<DentalClinics />} />
          <Route path="/sectores/servicios-profesionales/abogados" element={<LegalServices />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;