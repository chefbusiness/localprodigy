import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ContactFormSubmitButtonProps {
  isSubmitting: boolean;
}

export function ContactFormSubmitButton({ isSubmitting }: ContactFormSubmitButtonProps) {
  return (
    <Button 
      type="submit" 
      className="w-full"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        'Solicitar Consulta Gratuita'
      )}
    </Button>
  );
}