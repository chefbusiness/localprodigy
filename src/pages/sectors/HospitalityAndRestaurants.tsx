import { Helmet } from "react-helmet";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";
import { UtensilsCrossed, ChefHat, Wine, Coffee, Hotel, Cake, Pizza, Beer } from "lucide-react";

const HospitalityAndRestaurants = () => {
  const services = [
    {
      title: "SEO Local para Restaurantes",
      description: "Optimización SEO especializada para aumentar la visibilidad de tu restaurante en búsquedas locales y Google Maps.",
      icon: UtensilsCrossed
    },
    {
      title: "Google Business Profile",
      description: "Gestión profesional de tu perfil en Google Business, incluyendo fotos, reseñas y publicaciones.",
      icon: ChefHat
    },
    {
      title: "Marketing Digital Gastronómico",
      description: "Estrategias de marketing digital específicas para el sector de la restauración y hostelería.",
      icon: Wine
    }
  ];

  const benefits = [
    {
      title: "Mayor Visibilidad Local",
      description: "Aumenta tu presencia en búsquedas locales y atrae más clientes de tu zona.",
      icon: Coffee
    },
    {
      title: "Gestión de Reputación",
      description: "Monitorización y gestión activa de reseñas y opiniones online.",
      icon: Hotel
    },
    {
      title: "Más Reservas Online",
      description: "Optimización para convertir búsquedas en reservas y visitas.",
      icon: Pizza
    }
  ];

  const faqSchema = [
    {
      question: "¿Por qué es importante el SEO local para restaurantes y hoteles?",
      answer: "El SEO local es crucial para negocios de hostelería porque la mayoría de los clientes buscan opciones cercanas a su ubicación. Una buena estrategia de SEO local aumenta tu visibilidad en Google Maps y búsquedas locales, atrayendo más clientes potenciales."
    },
    {
      question: "¿Cómo puede ayudar el marketing digital a mi restaurante?",
      answer: "El marketing digital puede ayudar a tu restaurante aumentando tu visibilidad online, gestionando tu reputación a través de reseñas, promocionando tus platos y ofertas especiales, y conectando con clientes potenciales a través de redes sociales y búsquedas locales."
    },
    {
      question: "¿Qué incluye la gestión de Google Business Profile?",
      answer: "Nuestra gestión de Google Business Profile incluye la optimización completa de tu perfil, publicación regular de contenido, gestión de reseñas, actualización de fotos y menús, y monitorización de estadísticas para mejorar el rendimiento."
    }
  ];

  return (
    <BusinessLandingPage
      title="Hostelería y Restauración"
      description="Soluciones de SEO local y marketing digital especializadas para restaurantes, hoteles y negocios de hostelería. Aumenta tu visibilidad online y atrae más clientes locales."
      keywords={[
        "SEO restaurantes",
        "marketing digital hostelería",
        "posicionamiento local restaurantes",
        "SEO hoteles",
        "marketing gastronómico",
        "Google Business Profile restaurantes"
      ]}
      heroImage="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      services={services}
      benefits={benefits}
      faqSchema={faqSchema}
      callToAction={{
        title: "Impulsa tu Negocio de Hostelería",
        description: "Descubre cómo podemos ayudarte a atraer más clientes y crecer tu negocio",
        buttonText: "Solicitar Consulta Gratuita",
        buttonLink: "/contacto"
      }}
    >
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Especialistas en SEO Local para Hostelería
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Restaurantes Tradicionales",
                description: "Especialización en cocina española tradicional, desde paella hasta fabada",
                icon: UtensilsCrossed
              },
              {
                title: "Alta Cocina y Gourmet",
                description: "Marketing digital para restaurantes de alta cocina y establecimientos Michelin",
                icon: ChefHat
              },
              {
                title: "Bares y Cafeterías",
                description: "Soluciones para bares de tapas, cafeterías y coffee shops",
                icon: Coffee
              },
              {
                title: "Hoteles y Alojamientos",
                description: "Marketing digital para hoteles boutique, hostales y casas rurales",
                icon: Hotel
              },
              {
                title: "Pastelerías y Panaderías",
                description: "Estrategias digitales para negocios de repostería y panadería",
                icon: Cake
              },
              {
                title: "Servicios de Catering",
                description: "Marketing para empresas de catering y eventos gastronómicos",
                icon: Beer
              }
            ].map((specialty, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-yellow/10 rounded-lg">
                    <specialty.icon className="h-6 w-6 text-yellow" />
                  </div>
                  <h3 className="font-semibold">{specialty.title}</h3>
                </div>
                <p className="text-muted-foreground">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BusinessLandingPage>
  );
};

export default HospitalityAndRestaurants;