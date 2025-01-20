import { Building2, UtensilsCrossed, Coffee, Beer, Cake, Hotel, Home, Truck, Users, IceCream } from "lucide-react";
import { BusinessLandingPage } from "@/components/sectors/BusinessLandingPage";

const HospitalityRestaurants = () => {
  const services = [
    {
      title: "SEO Local Especializado",
      description: "Optimización específica para restaurantes y negocios de hostelería, mejorando tu visibilidad en búsquedas locales.",
      icon: Building2
    },
    {
      title: "Google Business Profile",
      description: "Gestión profesional de tu perfil en Google, destacando menús, fotos y reseñas.",
      icon: UtensilsCrossed
    },
    {
      title: "Marketing Digital Gastronómico",
      description: "Estrategias digitales específicas para el sector de la restauración y hostelería.",
      icon: Coffee
    }
  ];

  const benefits = [
    {
      title: "Mayor Visibilidad Local",
      description: "Aumenta tu presencia en búsquedas locales y atrae más clientes de tu zona.",
      icon: Building2
    },
    {
      title: "Gestión de Reputación",
      description: "Monitorización y gestión activa de reseñas y opiniones online.",
      icon: Users
    },
    {
      title: "Contenido Especializado",
      description: "Creación de contenido optimizado para destacar tu oferta gastronómica.",
      icon: UtensilsCrossed
    }
  ];

  const faqSchema = [
    {
      question: "¿Cómo puede el SEO local ayudar a mi restaurante?",
      answer: "El SEO local ayuda a tu restaurante a aparecer en las búsquedas relevantes de tu zona, mejorando tu visibilidad cuando los clientes buscan lugares para comer cerca de ellos."
    },
    {
      question: "¿Qué importancia tienen las reseñas para mi negocio de hostelería?",
      answer: "Las reseñas son fundamentales para la hostelería, ya que influyen directamente en la decisión de compra de los clientes potenciales y mejoran tu posicionamiento en Google."
    },
    {
      question: "¿Cómo puedo destacar frente a la competencia en mi zona?",
      answer: "Mediante una estrategia integral de SEO local, gestión de reseñas, contenido de calidad y optimización de tu Google Business Profile."
    }
  ];

  const callToAction = {
    title: "Impulsa tu Negocio de Hostelería",
    description: "Descubre cómo podemos ayudarte a atraer más clientes y crecer tu negocio",
    buttonText: "Solicitar Consulta Gratuita",
    buttonLink: "/contacto"
  };

  return (
    <BusinessLandingPage
      title="Hostelería y Restauración"
      description="Soluciones de marketing digital especializadas para restaurantes, bares, cafeterías y negocios de hostelería. Mejora tu visibilidad online y atrae más clientes a tu establecimiento."
      keywords={[
        "SEO restaurantes",
        "marketing digital hostelería",
        "posicionamiento web restaurantes",
        "Google My Business hostelería",
        "marketing gastronómico"
      ]}
      heroImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
      services={services}
      benefits={benefits}
      faqSchema={faqSchema}
      callToAction={callToAction}
    >
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Especialidades del Sector
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Restaurantes Tradicionales</h3>
              <ul className="space-y-2">
                <li>Cocina tradicional española</li>
                <li>Alta cocina y gourmet</li>
                <li>Cocina de autor</li>
                <li>Tapas y pinchos</li>
                <li>Cocina mediterránea</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Cocinas Especializadas</h3>
              <ul className="space-y-2">
                <li>Cocina vasca</li>
                <li>Cocina catalana</li>
                <li>Cocina fusión</li>
                <li>Restaurantes vegetarianos</li>
                <li>Cocina internacional</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Otros Establecimientos</h3>
              <ul className="space-y-2">
                <li>Cafeterías y coffee shops</li>
                <li>Bares y pubs</li>
                <li>Pastelerías y panaderías</li>
                <li>Hoteles boutique</li>
                <li>Food trucks y catering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </BusinessLandingPage>
  );
};

export default HospitalityRestaurants;