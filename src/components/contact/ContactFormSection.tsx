import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Card, CardContent } from "@/components/ui/card";

export const ContactFormSection = () => {
  return (
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
  );
};