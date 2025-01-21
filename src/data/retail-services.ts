import { ShoppingBag, Store, Search, Users, BarChart3, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface RetailService {
  title: string;
  description: string;
  keywords: string[];
  icon: LucideIcon;
  slug: string;
}

export const retailServices: RetailService[] = [
  {
    title: "Tiendas de Ropa y Moda",
    description: "Posicionamiento SEO local para tiendas de moda, boutiques y comercios textiles. Aumenta tu visibilidad online y atrae más clientes a tu tienda.",
    keywords: ["SEO tiendas de ropa", "marketing digital moda", "posicionamiento boutiques"],
    icon: ShoppingBag,
    slug: "tiendas-ropa-moda"
  },
  {
    title: "Zapaterías",
    description: "Estrategias de marketing digital especializadas para zapaterías. Mejora tu presencia online y aumenta las ventas en tu zona.",
    keywords: ["SEO zapaterías", "marketing digital calzado", "posicionamiento local zapatos"],
    icon: Store,
    slug: "zapaterias"
  },
  {
    title: "Joyerías",
    description: "Marketing digital para joyerías y tiendas de accesorios. Destaca en las búsquedas locales y atrae clientes de alto valor.",
    keywords: ["SEO joyerías", "marketing digital joyas", "posicionamiento local joyería"],
    icon: Store,
    slug: "joyerias"
  },
  {
    title: "Floristerías",
    description: "Soluciones SEO para floristerías. Aumenta tu visibilidad en fechas clave y mejora tus ventas online y offline.",
    keywords: ["SEO floristerías", "marketing digital flores", "posicionamiento local floristas"],
    icon: Store,
    slug: "floristerias"
  },
  {
    title: "Librerías",
    description: "Marketing digital especializado para librerías. Conecta con lectores locales y aumenta el tráfico a tu tienda.",
    keywords: ["SEO librerías", "marketing digital libros", "posicionamiento local librería"],
    icon: Store,
    slug: "librerias"
  },
  {
    title: "Tiendas de Electrónica",
    description: "Estrategias SEO para tiendas de electrónica. Mejora tu visibilidad online y compite efectivamente en tu mercado local.",
    keywords: ["SEO tiendas electrónica", "marketing digital tecnología", "posicionamiento local electrónica"],
    icon: Store,
    slug: "tiendas-electronica"
  },
  {
    title: "Ferreterías",
    description: "Marketing digital para ferreterías. Aumenta tu presencia online y atrae más clientes profesionales y particulares.",
    keywords: ["SEO ferreterías", "marketing digital ferretería", "posicionamiento local herramientas"],
    icon: Store,
    slug: "ferreterias"
  },
  {
    title: "Tiendas de Juguetes",
    description: "SEO local para tiendas de juguetes. Maximiza tus ventas en temporadas clave y mantén un flujo constante de clientes.",
    keywords: ["SEO jugueterías", "marketing digital juguetes", "posicionamiento local juguetes"],
    icon: Store,
    slug: "tiendas-juguetes"
  },
  {
    title: "Tiendas de Muebles",
    description: "Estrategias digitales para tiendas de muebles. Mejora tu visibilidad online y aumenta las visitas a tu showroom.",
    keywords: ["SEO tiendas muebles", "marketing digital mobiliario", "posicionamiento local muebles"],
    icon: Store,
    slug: "tiendas-muebles"
  },
  {
    title: "Tiendas de Mascotas",
    description: "Marketing digital para tiendas de mascotas. Conecta con dueños de mascotas en tu área y aumenta tus ventas.",
    keywords: ["SEO tiendas mascotas", "marketing digital animales", "posicionamiento local mascotas"],
    icon: Store,
    slug: "tiendas-mascotas"
  },
  {
    title: "Tiendas de Productos Ecológicos",
    description: "SEO local para tiendas eco y orgánicas. Atrae a consumidores conscientes y aumenta tu presencia en el mercado local.",
    keywords: ["SEO tiendas ecológicas", "marketing digital productos orgánicos", "posicionamiento local eco"],
    icon: Store,
    slug: "tiendas-ecologicas"
  }
];