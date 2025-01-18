import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Facebook, Instagram, Package, Video } from "lucide-react";
import { Link } from "react-router-dom";

export const PricingSection = () => {
  return (
    <section id="planes" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Planes de Publicidad Digital</h2>
          <p className="text-xl text-muted-foreground">
            Elige la plataforma y el plan que mejor se adapte a tus objetivos
          </p>
        </div>

        {/* Google Ads Plans */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Google Ads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="relative hover:shadow-lg transition-all duration-300 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Google Ads Essential</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">497€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Gestión de campaña
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Search Ads
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Remarketing básico
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Informes mensuales
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Presupuesto recomendado: desde 500€
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full mt-6 text-lg hover:bg-primary/90"
                >
                  <Link to="/contacto">Solicitar Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-all duration-300 bg-red-50/50 border-2 border-yellow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-yellow text-yellow-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Google Ads Professional</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">797€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Todo lo anterior +
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Display Ads
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Shopping Ads
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Remarketing avanzado
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Presupuesto recomendado: desde 1.000€
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full mt-6 text-lg bg-yellow hover:bg-yellow-dark text-yellow-foreground"
                >
                  <Link to="/contacto">Solicitar Plan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Meta Ads Plans */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Meta Ads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="relative hover:shadow-lg transition-all duration-300 bg-blue-50/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Facebook className="w-6 h-6 text-blue-600" />
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Meta Ads Essential</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">497€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Facebook e Instagram Ads
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    2 campañas activas
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Remarketing básico
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Presupuesto recomendado: desde 500€
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full mt-6 text-lg hover:bg-primary/90"
                >
                  <Link to="/contacto">Solicitar Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-all duration-300 bg-blue-50/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Facebook className="w-6 h-6 text-blue-600" />
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Meta Ads Professional</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">797€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Todo lo anterior +
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Instagram Shopping
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Messenger Ads
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Audience building
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Presupuesto recomendado: desde 1.000€
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full mt-6 text-lg hover:bg-primary/90"
                >
                  <Link to="/contacto">Solicitar Plan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Social Media Plans */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Otras Plataformas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-pink-50/50">
              <CardContent className="pt-8">
                <Video className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">TikTok Ads</h3>
                <p className="text-lg font-bold text-yellow mb-4">desde 497€/mes</p>
                <p className="text-muted-foreground mb-6">Gestión profesional de campañas en TikTok</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contacto">Solicitar Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-red-50/50">
              <CardContent className="pt-8">
                <Package className="w-8 h-8 mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-semibold mb-2">Pinterest Ads</h3>
                <p className="text-lg font-bold text-yellow mb-4">desde 397€/mes</p>
                <p className="text-muted-foreground mb-6">Estrategias de publicidad en Pinterest</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contacto">Solicitar Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 bg-purple-50/50">
              <CardContent className="pt-8">
                <Package className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Creación de Contenido</h3>
                <p className="text-lg font-bold text-yellow mb-4">+297€/mes</p>
                <p className="text-muted-foreground mb-6">Contenido optimizado para cada plataforma</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contacto">Solicitar Plan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integrated Packs */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Packs Integrados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Pack Growth Digital</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">1.497€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    SEO Local Essential
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Google Ads Essential
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Meta Ads Essential
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    3 redes sociales
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Contenido básico
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full mt-6 text-lg hover:bg-primary/90"
                >
                  <Link to="/contacto">Solicitar Pack</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-yellow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-yellow text-yellow-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Pack Business Total</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">2.497€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    SEO Growth
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Google Ads Professional
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Meta Ads Professional
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    5 redes sociales
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Contenido premium
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Email marketing
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full mt-6 text-lg bg-yellow hover:bg-yellow-dark text-yellow-foreground"
                >
                  <Link to="/contacto">Solicitar Pack</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Pack Enterprise</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">4.997€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    SEO Authority
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Campañas en todas las plataformas
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Contenido video/foto profesional
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Estrategia omnicanal
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow shrink-0 mt-1" />
                    Consultoría estratégica
                  </li>
                </ul>
                <Button 
                  asChild
                  className="w-full mt-6 text-lg hover:bg-primary/90"
                >
                  <Link to="/contacto">Solicitar Pack</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Add-ons Disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Sesiones foto/video",
                price: "397",
                description: "Contenido visual profesional"
              },
              {
                title: "Diseño de creatividades",
                price: "297",
                description: "Diseños mensuales"
              },
              {
                title: "Copywriting adicional",
                price: "197",
                description: "Contenido mensual"
              },
              {
                title: "Gestión de crisis",
                price: "997",
                description: "Servicio especializado"
              },
              {
                title: "Consultoría por horas",
                price: "97",
                description: "Asesoramiento experto"
              }
            ].map((addon) => (
              <Card key={addon.title} className="text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-slate-50">
                <CardContent className="pt-8">
                  <h3 className="text-lg font-semibold mb-2">{addon.title}</h3>
                  <p className="text-lg font-bold text-yellow mb-2">desde {addon.price}€</p>
                  <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/contacto">Solicitar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* General Policies */}
        <Card className="mt-12 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6">Políticas Generales</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow shrink-0" />
                Contratos mínimos 6 meses
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow shrink-0" />
                Los presupuestos de medios son adicionales
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow shrink-0" />
                IVA no incluido
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow shrink-0" />
                10% descuento en pago trimestral
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow shrink-0" />
                20% descuento en pago semestral
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow shrink-0" />
                25% descuento en pago anual
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿Necesitas una estrategia personalizada? ¿Tienes un presupuesto específico?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="text-lg hover:bg-white/10"
          >
            <Link to="/contacto">Contacta con Nosotros</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
