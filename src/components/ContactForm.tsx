"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
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
      const response = await fetch("https://formspree.io/f/info@localseoads.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Negocio: values.businessName,
          Contacto: values.contactName,
          Email: values.email,
          Teléfono: values.phone,
          Sector: values.sector,
          Ciudad: values.city,
          País: values.country,
          Presupuesto: values.budget,
          Mensaje: values.message || "No se incluyó mensaje adicional",
        }),
      });

      if (response.ok) {
        toast.success("¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.", {
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
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