import { Card } from "@/components/ui/card";

export const WhatIsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">¿Qué es el SEM y la Publicidad Digital?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Search Engine Marketing (SEM)</h3>
            <p className="text-muted-foreground">
              El SEM, o Marketing en Motores de Búsqueda, es una estrategia de marketing digital que se centra en la promoción de sitios web mediante anuncios pagados en los resultados de búsqueda. A través de plataformas como Google Ads, el SEM permite que tu negocio aparezca en las primeras posiciones cuando los usuarios buscan productos o servicios relacionados con tu actividad.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Publicidad Digital</h3>
            <p className="text-muted-foreground">
              La publicidad digital abarca todas las formas de promoción en línea, incluyendo anuncios en redes sociales, display advertising, remarketing y más. Esta estrategia multicanal permite alcanzar a tu audiencia ideal en diferentes plataformas y momentos del customer journey, maximizando las oportunidades de conversión.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};