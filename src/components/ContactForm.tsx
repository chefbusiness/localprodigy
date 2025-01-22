"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { ContactFormHeader } from "./contact/ContactFormHeader";
import { ContactFormFields, formSchema, type FormSchemaType } from "./contact/ContactFormFields";
import { ContactFormSubmitButton } from "./contact/ContactFormSubmitButton";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      sector: "",
      city: "",
      country: "",
      message: "",
      budget: "",
    },
  });

  async function onSubmit(values: FormSchemaType) {
    setIsSubmitting(true);
    try {
      const templateParams = {
        to_email: 'info@localseoads.com',
        from_name: values.contactName,
        from_email: values.email,
        business_name: values.businessName,
        phone: values.phone,
        sector: values.sector,
        location: `${values.city}, ${values.country}`,
        budget: values.budget,
        message: values.message || 'No se incluyó mensaje adicional',
      };

      await emailjs.send(
        process.env.VITE_EMAILJS_SERVICE_ID || '',
        process.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      toast.success("¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.", {
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast.error("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.", {
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg animate-fade-up">
      <ContactFormHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ContactFormFields form={form} />
          <ContactFormSubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
}