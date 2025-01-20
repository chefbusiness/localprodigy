import {
  UtensilsCrossed, 
  Coffee,
  ChefHat,
  Hotel,
  Cake,
  Store,
  GlassWater,
  Soup,
  Fish,
  Beef,
  Salad,
  Globe,
  Truck,
  PartyPopper,
  IceCream,
  Wheat,
  Flame,
  Sandwich,
  Leaf,
  Wine,
  Utensils,
  Pizza,
  ChefHat as ChefIcon,
  Shell,
  Drumstick,
  Soup as BuffetIcon,
  Palette,
  Timer,
  Coffee as BrunchIcon,
  Globe2,
  Sprout,
  Beer,
  Building,
  Home
} from "lucide-react";

export const hospitalityServices = [
  {
    title: "Restaurantes de cocina tradicional española",
    description: "Establecimientos especializados en platos clásicos como paella, cocido madrileño y fabada asturiana, manteniendo viva la esencia de nuestra gastronomía.",
    keywords: ["cocina tradicional", "gastronomía española", "platos típicos", "cocina regional"],
    icon: UtensilsCrossed,
    slug: "cocina-tradicional"
  },
  {
    title: "Restaurantes de alta cocina o gourmet",
    description: "Establecimientos de alta gastronomía y estrellas Michelin que ofrecen experiencias culinarias excepcionales y servicio de primera clase.",
    keywords: ["alta cocina", "restaurante gourmet", "estrella michelin", "gastronomía premium"],
    icon: ChefHat,
    slug: "alta-cocina"
  },
  {
    title: "Restaurantes de cocina de autor",
    description: "Espacios creativos donde chefs innovadores fusionan técnicas tradicionales con conceptos modernos para crear experiencias únicas.",
    keywords: ["cocina de autor", "gastronomía creativa", "cocina moderna", "chef creativo"],
    icon: Soup,
    slug: "cocina-autor"
  },
  {
    title: "Restaurantes de tapas",
    description: "Locales especializados en la auténtica tradición española de tapas, ofreciendo una amplia variedad de pequeños platos para compartir.",
    keywords: ["tapas", "pinchos", "raciones", "bar de tapas"],
    icon: GlassWater,
    slug: "tapas"
  },
  {
    title: "Restaurantes de cocina mediterránea",
    description: "Establecimientos centrados en la saludable dieta mediterránea, con productos frescos, aceite de oliva y sabores tradicionales.",
    keywords: ["cocina mediterránea", "dieta mediterránea", "productos frescos", "cocina saludable"],
    icon: Salad,
    slug: "mediterranea"
  },
  {
    title: "Restaurantes de cocina vasca",
    description: "Especialistas en la renombrada gastronomía vasca, famosa por sus pinchos, pescados frescos y carnes a la parrilla.",
    keywords: ["cocina vasca", "pintxos", "asador vasco", "gastronomía del norte"],
    icon: Flame,
    slug: "cocina-vasca"
  },
  {
    title: "Restaurantes de cocina catalana",
    description: "Exponentes de la rica tradición culinaria catalana, desde el pan con tomate hasta las creaciones más vanguardistas.",
    keywords: ["cocina catalana", "gastronomía catalana", "pa amb tomàquet", "cocina moderna"],
    icon: Wheat,
    slug: "cocina-catalana"
  },
  {
    title: "Restaurantes de cocina fusión",
    description: "Espacios innovadores que combinan diferentes culturas culinarias, creando platos únicos que mezclan sabores internacionales.",
    keywords: ["cocina fusión", "gastronomía internacional", "cocina creativa", "sabores del mundo"],
    icon: Globe,
    slug: "fusion"
  },
  {
    title: "Restaurantes vegetarianos y veganos",
    description: "Establecimientos especializados en cocina basada en plantas, ofreciendo alternativas saludables y sostenibles sin productos de origen animal.",
    keywords: ["vegetariano", "vegano", "plant-based", "comida saludable"],
    icon: Leaf,
    slug: "vegetariano-vegano"
  },
  {
    title: "Cafeterías y Coffee Shops",
    description: "Establecimientos especializados en café de alta calidad, bebidas artesanales y ambiente acogedor para trabajo y reuniones sociales.",
    keywords: ["cafetería", "coffee shop", "café especialidad", "brunch", "meriendas"],
    icon: Coffee,
    slug: "cafeterias"
  },
  {
    title: "Bares y Pubs",
    description: "Locales de ocio nocturno y socialización, ofreciendo bebidas, tapas y ambiente distendido para el entretenimiento.",
    keywords: ["bar", "pub", "copas", "cervecería", "bar de tapas"],
    icon: Beer,
    slug: "bares-pubs"
  },
  {
    title: "Pastelerías y Panaderías",
    description: "Establecimientos especializados en productos de panadería y repostería artesanal, ofreciendo una amplia variedad de panes y dulces.",
    keywords: ["pastelería", "panadería", "repostería", "dulces", "pan artesanal"],
    icon: Cake,
    slug: "pastelerias"
  },
  {
    title: "Hoteles Boutique",
    description: "Alojamientos exclusivos y de diseño que ofrecen una experiencia única y personalizada a sus huéspedes.",
    keywords: ["hotel boutique", "alojamiento exclusivo", "hotel diseño", "hotel lujo"],
    icon: Building,
    slug: "hoteles-boutique"
  },
  {
    title: "Hostales y Pensiones",
    description: "Alojamientos acogedores y económicos que ofrecen una alternativa práctica para estancias cortas y viajeros.",
    keywords: ["hostal", "pensión", "alojamiento económico", "bed and breakfast"],
    icon: Hotel,
    slug: "hostales"
  },
  {
    title: "Casas Rurales",
    description: "Alojamientos en entornos rurales que permiten disfrutar de la naturaleza y la tranquilidad del campo.",
    keywords: ["casa rural", "turismo rural", "alojamiento rural", "agroturismo"],
    icon: Home,
    slug: "casas-rurales"
  },
  {
    title: "Food Trucks",
    description: "Cocina móvil que ofrece opciones gastronómicas innovadoras y de calidad en diferentes ubicaciones y eventos.",
    keywords: ["food truck", "comida callejera", "street food", "eventos gastronómicos"],
    icon: Truck,
    slug: "food-trucks"
  },
  {
    title: "Hamburgueserías",
    description: "Establecimientos especializados en hamburguesas gourmet y creativas, utilizando ingredientes de calidad.",
    keywords: ["hamburguesas", "burger", "hamburguesas gourmet", "fast casual"],
    icon: Beef,
    slug: "hamburgueserias"
  },
  {
    title: "Pizzerías",
    description: "Restaurantes especializados en pizzas artesanales, desde estilos tradicionales italianos hasta creaciones modernas.",
    keywords: ["pizzería", "pizza artesanal", "cocina italiana", "pizza gourmet"],
    icon: Pizza,
    slug: "pizzerias"
  },
  {
    title: "Catering y Eventos",
    description: "Servicios profesionales de alimentación para eventos y celebraciones, adaptados a las necesidades del cliente.",
    keywords: ["catering", "eventos", "banquetes", "celebraciones", "servicio food"],
    icon: PartyPopper,
    slug: "catering"
  },
  {
    title: "Heladerías Artesanales",
    description: "Establecimientos especializados en helados y postres helados elaborados de forma artesanal con ingredientes naturales.",
    keywords: ["heladería", "helados artesanales", "postres helados", "gelato"],
    icon: IceCream,
    slug: "heladerias"
  }
];
