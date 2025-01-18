import React from 'react';

export const SectorHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="SEO por Sectores Hero"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Sectores y Negocios Locales
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Soluciones de SEO local especializadas por sector y adaptadas a las necesidades específicas de cada tipo de negocio
          </p>
        </div>
      </div>
    </section>
  );
};