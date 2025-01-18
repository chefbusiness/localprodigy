import { Button } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LocalSEO = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-muted to-background">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="SEO Local Hero"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">SEO Local</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up">
                Domina las búsquedas locales y atrae más clientes de tu zona
              </p>
              <Button asChild size="lg" className="animate-fade-up">
                <Link to="/contacto">Solicitar Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">¿Qué incluye nuestro servicio?</h2>
                  <ul className="space-y-4">
                    {[
                      "Optimización de Google Business Profile",
                      "Investigación de palabras clave locales",
                      "Optimización para múltiples ubicaciones",
                      "Gestión de reseñas y reputación online",
                      "Creación de contenido local relevante",
                      "Construcción de citas (citations)",
                      "Informes mensuales detallados"
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3 group">
                        <Check className="w-5 h-5 text-yellow mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                    alt="SEO Local Dashboard"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <Card className="border-2 border-yellow/20">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-2xl">Planes y Precios</CardTitle>
                    <p className="text-muted-foreground">
                      Soluciones adaptadas a tu negocio
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Plan Local Starter</h3>
                        <p className="text-2xl font-bold text-yellow">297€<span className="text-base font-normal text-muted-foreground">/mes</span></p>
                        <p className="text-sm text-muted-foreground">Ideal para negocios que empiezan</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Plan Local Growth</h3>
                        <p className="text-2xl font-bold text-yellow">597€<span className="text-base font-normal text-muted-foreground">/mes</span></p>
                        <p className="text-sm text-muted-foreground">Para negocios en crecimiento</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Plan Local Authority</h3>
                        <p className="text-2xl font-bold text-yellow">997€<span className="text-base font-normal text-muted-foreground">/mes</span></p>
                        <p className="text-sm text-muted-foreground">Dominio total del mercado local</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button asChild size="lg" className="w-full">
                        <Link to="/contacto">Solicitar Presupuesto</Link>
                      </Button>
                      <p className="text-sm text-center text-muted-foreground">
                        * Precios sin IVA. Contratos mínimos de 3 meses.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">¿Por qué elegir nuestro SEO Local?</h2>
              <p className="text-xl text-muted-foreground">
                Resultados comprobados en posicionamiento local
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Experiencia Comprobada",
                  description: "Años de experiencia en SEO local con casos de éxito documentados",
                  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                },
                {
                  title: "Estrategia Personalizada",
                  description: "Plan adaptado a tu negocio y mercado local específico",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                },
                {
                  title: "Resultados Medibles",
                  description: "Informes detallados y métricas claras de rendimiento",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                }
              ].map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-up border-2 border-transparent hover:border-yellow/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <CardTitle className="group-hover:text-yellow transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LocalSEO;