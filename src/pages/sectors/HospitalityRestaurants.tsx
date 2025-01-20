import { ChefHat, UtensilsCrossed, Coffee, Hotel, Truck, Cake } from "lucide-react";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";

const HospitalityRestaurants = () => {
  const services = [
    {
      title: "Restaurantes Tradicionales",
      description: "Marketing digital para restaurantes de cocina tradicional española y moderna",
      icon: ChefHat
    },
    {
      title: "Cafeterías y Coffee Shops",
      description: "Estrategias digitales para cafeterías y establecimientos de café especializado",
      icon: Coffee
    },
    {
      title: "Hoteles y Alojamientos",
      description: "Soluciones digitales para hoteles boutique y alojamientos turísticos",
      icon: Hotel
    },
    {
      title: "Food Trucks y Catering",
      description: "Marketing digital para food trucks y servicios de catering",
      icon: Truck
    },
    {
      title: "Pastelerías y Panaderías",
      description: "Estrategias digitales para pastelerías y panaderías artesanales",
      icon: Cake
    },
    {
      title: "Bares y Restaurantes Temáticos",
      description: "Posicionamiento local para bares y restaurantes especializados",
      icon: UtensilsCrossed
    }
  ];

  const benefits = [
    {
      title: "Mayor Visibilidad Local",
      description: "Aumenta tu presencia en búsquedas locales y atrae más clientes de tu zona",
      icon: ChefHat
    },
    {
      title: "Gestión de Reputación Online",
      description: "Mejora y gestiona tu reputación a través de reseñas y valoraciones",
      icon: Coffee
    },
    {
      title: "Reservas y Pedidos Online",
      description: "Implementa y optimiza sistemas de reservas y pedidos online",
      icon: Hotel
    },
    {
      title: "Marketing Gastronómico",
      description: "Estrategias específicas para promocionar tu oferta gastronómica",
      icon: UtensilsCrossed
    }
  ];

  const faqSchema = [
    {
      question: "¿Cómo puede el SEO local ayudar a mi restaurante?",
      answer: "El SEO local ayuda a tu restaurante a aparecer en las búsquedas locales relevantes, mejora tu visibilidad en Google Maps y aumenta el tráfico de clientes potenciales de tu zona."
    },
    {
      question: "¿Qué importancia tienen las reseñas para mi negocio hostelero?",
      answer: "Las reseñas son fundamentales para la hostelería ya que influyen directamente en la decisión de los clientes, mejoran tu posicionamiento local y aumentan la confianza de los clientes potenciales."
    },
    {
      question: "¿Cómo puedo destacar frente a la competencia en mi zona?",
      answer: "Mediante una estrategia integral de SEO local, optimización de Google Business Profile, gestión de reseñas y contenido relevante para tu audiencia local."
    }
  ];

  return (
    <BusinessLandingPage
      title="Hostelería y Restauración"
      description="Servicios especializados de SEO Local y Marketing Digital para el sector de hostelería y restauración. Aumenta tu visibilidad online y atrae más clientes a tu establecimiento."
      keywords={[
        "seo hostelería",
        "marketing digital restaurantes",
        "posicionamiento web restaurantes",
        "publicidad restaurantes",
        "marketing gastronómico",
        "seo local hostelería"
      ]}
      heroImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
      services={services}
      benefits={benefits}
      faqSchema={faqSchema}
      callToAction={{
        title: "¿Listo para aumentar tu presencia online?",
        description: "Descubre cómo podemos ayudarte a atraer más clientes a tu negocio",
        buttonText: "Solicitar Presupuesto",
        buttonLink: "/contacto"
      }}
    />
  );
};

export default HospitalityRestaurants;