import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const DentalHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
          alt="Marketing digital y SEO local para clínicas dentales"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            SEO Local y SEM Marketing Digital para Clínicas Dentales
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-100">
            Servicios especializados de SEO Local y Marketing Digital SEM para clínicas dentales. 
            Aumenta tu visibilidad online, atrae más pacientes cualificados y destaca en tu zona.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-up delay-200">
            {[
              "SEO local clínicas dentales",
              "marketing digital dentistas",
              "posicionamiento web dental",
              "Google Ads dentistas",
              "marketing dental España"
            ].map((keyword) => (
              <span 
                key={keyword}
                className="px-3 py-1 bg-muted rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
          <Button 
            asChild 
            size="lg" 
            className="bg-yellow hover:bg-yellow/90 text-yellow-foreground animate-fade-up delay-300"
          >
            <Link to="/contacto">
              Solicitar Presupuesto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};