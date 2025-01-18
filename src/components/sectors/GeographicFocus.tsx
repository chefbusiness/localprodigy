export const GeographicFocus = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Enfoque Geográfico Personalizado
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-3">España</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>Keywords por ciudad/barrio</li>
            <li>Búsquedas "cerca de mí"</li>
            <li>Variantes regionales</li>
          </ul>
        </div>
        <div className="p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-3">Latinoamérica</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>Modismos locales</li>
            <li>Keywords por país</li>
            <li>Búsquedas por colonias</li>
          </ul>
        </div>
        <div className="p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-3">Estados Unidos</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>SEO bilingüe</li>
            <li>Búsquedas "near me"</li>
            <li>Keywords por ZIP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};