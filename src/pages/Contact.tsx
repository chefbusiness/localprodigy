import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactInfo } from "@/components/contact/ContactInfo";

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
              <ContactInfo />
              
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