import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-muted-foreground">
              Estamos aquí para ayudarte a hacer crecer tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-6">
                      <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-yellow" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                        <p className="text-muted-foreground text-lg">+34 744 717 942</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-yellow" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground text-lg">info@localseoads.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="h-12 w-12 rounded-lg bg-yellow/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-yellow" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                        <p className="text-muted-foreground text-lg">
                          Calle Principal 123<br />
                          28001 Madrid, España
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Horario de Atención</h2>
                  <div className="space-y-4 text-lg">
                    <p className="flex justify-between">
                      <span>Lunes a Viernes:</span>
                      <span className="text-muted-foreground">9:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="text-muted-foreground">10:00 - 14:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="text-muted-foreground">Cerrado</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:pt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;