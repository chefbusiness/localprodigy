import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface BusinessLandingPageProps {
  title: string;
  description: string;
  keywords: string[];
  heroImage: string;
  services: Service[];
  benefits: Benefit[];
  faqSchema?: {
    question: string;
    answer: string;
  }[];
  callToAction: CallToAction;
  children?: React.ReactNode;
}

export const BusinessLandingPage = ({
  title,
  description,
  keywords,
  heroImage,
  services,
  benefits,
  faqSchema,
  callToAction,
  children,
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
        <title>{`SEO Local y Marketing Digital para ${title} | localSEOads`}</title>
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

      <main className="min-h-screen bg-background">
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
              alt={`Marketing digital y SEO local para ${title}`}
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                SEO Local y Marketing Digital para {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-100">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-up delay-200">
                {keywords.slice(0, 5).map((keyword) => (
                  <span 
                    key={keyword}
                    className="px-3 py-1 bg-muted rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-yellow hover:bg-yellow-light text-yellow-foreground animate-fade-up delay-300"
              >
                <Link to="/contacto">
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contenido específico del sector */}
        {children}

        {/* Call to Action */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{callToAction.title}</h2>
              <p className="text-xl text-muted-foreground mb-8">
                {callToAction.description}
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-yellow hover:bg-yellow-light text-yellow-foreground"
              >
                <Link to={callToAction.buttonLink}>
                  {callToAction.buttonText}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};