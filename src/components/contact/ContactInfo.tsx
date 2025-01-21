import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
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
                Calle Gral Pardiñas 60<br />
                28001 Madrid, España
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}