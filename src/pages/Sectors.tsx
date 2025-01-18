import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { SectorHero } from "@/components/sectors/SectorHero";
import { SectorCard } from "@/components/sectors/SectorCard";
import { GeographicFocus } from "@/components/sectors/GeographicFocus";
import { sectors } from "@/data/sectors";

const Sectors = () => {
  return (
    <>
      <Helmet>
        <title>Sectores y Negocios Locales | SEO Local por Sector | localSEOads.com</title>
        <meta 
          name="description" 
          content="Soluciones de SEO local especializadas por sector. Estrategias personalizadas para diferentes tipos de negocios locales en España, Latinoamérica y USA." 
        />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <SectorHero />

        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <SectorCard 
                key={sector.title}
                {...sector}
              />
            ))}
          </div>

          <GeographicFocus />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Sectors;