import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BusinessLandingPageProps {
  title: string;
  description: string;
  keywords: string[];
  heroImage: string;
  services: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  faqSchema?: {
    question: string;
    answer: string;
  }[];
}

export const BusinessLandingPage = ({
  title,
  description,
  keywords,
  heroImage,
  services,
  benefits,
  faqSchema,
}: BusinessLandingPageProps) => {
  // Schema.org markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "Organization",
      name: "localSEOads",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
  };

  // FAQ Schema si existe
  const faqSchemaData = faqSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchema.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <Helmet>
        <title>{`${title} | Marketing Digital Especializado | localSEOads`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        {faqSchemaData && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchemaData)}
          </script>
        )}
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        {/* Breadcrumbs con Schema */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="text-muted-foreground hover:text-primary" itemProp="item">
                <span itemProp="name">Inicio</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/sectores" className="text-muted-foreground hover:text-primary" itemProp="item">
                <span itemProp="name">Sectores</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/sectores/servicios-profesionales" className="text-muted-foreground hover:text-primary" itemProp="item">
                <span itemProp="name">Servicios Profesionales</span>
              </Link>
              <meta itemProp="position" content="3" />
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-primary">
              <span itemProp="name">{title}</span>
              <meta itemProp="position" content="4" />
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage}
              alt={`Marketing digital para ${title}`}
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Marketing Digital para {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {keywords.map((keyword) => (
                  <span 
                    key={keyword}
                    className="px-3 py-1 bg-muted rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Button asChild size="lg" className="bg-yellow hover:bg-yellow-light text-yellow-foreground">
                <Link to="/contacto">
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestros Servicios para {title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service} className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Beneficios para tu Negocio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section si existe */}
        {faqSchema && (
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Preguntas Frecuentes
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqSchema.map((faq) => (
                  <div key={faq.question} className="bg-background p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};