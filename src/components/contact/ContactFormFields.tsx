import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  businessName: z.string().min(2, {
    message: "El nombre del negocio debe tener al menos 2 caracteres.",
  }),
  contactName: z.string().min(2, {
    message: "El nombre de contacto debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  phone: z.string().min(9, {
    message: "Por favor, introduce un número de teléfono válido.",
  }),
  sector: z.string({
    required_error: "Por favor, selecciona un sector.",
  }),
  location: z.string().min(2, {
    message: "Por favor, introduce tu ubicación.",
  }),
  message: z.string().optional(),
  budget: z.string({
    required_error: "Por favor, selecciona un presupuesto aproximado.",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

interface ContactFormFieldsProps {
  form: UseFormReturn<FormSchemaType>;
}

export function ContactFormFields({ form }: ContactFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del Negocio</FormLabel>
              <FormControl>
                <Input placeholder="Tu negocio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de Contacto</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="tu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="+34 600 000 000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="sector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu sector" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="dental">Clínica Dental</SelectItem>
                  <SelectItem value="legal">Servicios Legales</SelectItem>
                  <SelectItem value="restaurant">Restaurante</SelectItem>
                  <SelectItem value="automotive">Taller Mecánico</SelectItem>
                  <SelectItem value="realestate">Inmobiliaria</SelectItem>
                  <SelectItem value="health">Salud y Bienestar</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ubicación</FormLabel>
              <FormControl>
                <Input placeholder="Ciudad" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="budget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Presupuesto Mensual Aproximado</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un rango" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="297">297€ - Plan SEO Local Básico</SelectItem>
                <SelectItem value="597">597€ - Plan SEO Local Profesional</SelectItem>
                <SelectItem value="997">997€ - Plan SEO Local Premium</SelectItem>
                <SelectItem value="497-ads">497€ - Google Ads Essential</SelectItem>
                <SelectItem value="797-ads">797€ - Google Ads Professional</SelectItem>
                <SelectItem value="497-meta">497€ - Meta Ads Essential</SelectItem>
                <SelectItem value="797-meta">797€ - Meta Ads Professional</SelectItem>
                <SelectItem value="1497-pack">1.497€ - Pack Growth Digital</SelectItem>
                <SelectItem value="2497-pack">2.497€ - Pack Business Total</SelectItem>
                <SelectItem value="4997-pack">4.997€ - Pack Enterprise</SelectItem>
                <SelectItem value="custom">Presupuesto Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mensaje (Opcional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Cuéntanos más sobre tu negocio y objetivos..."
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

export { formSchema };
export type { FormSchemaType };