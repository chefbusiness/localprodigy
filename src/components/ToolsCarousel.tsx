import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const tools = [
  {
    name: "Google Search Console",
    logo: "/lovable-uploads/60c141c3-0a36-456e-a0d3-aee9bda05998.png",
    alt: "Logo de Google Search Console"
  },
  {
    name: "Google Maps",
    logo: "/lovable-uploads/fcc9ba19-2a55-4d1d-a967-fa74fa71bedf.png",
    alt: "Logo de Google Maps"
  },
  {
    name: "Google Reviews",
    logo: "/lovable-uploads/51b793ea-c7df-4ac8-a270-9214ef4aee73.png",
    alt: "Logo de Google Reviews"
  },
  {
    name: "Google Ads",
    logo: "/lovable-uploads/4422f01a-4384-4b80-986d-eb3ecde6e462.png",
    alt: "Logo de Google Ads"
  },
  {
    name: "Google Tag Manager",
    logo: "/lovable-uploads/bb8da74b-326d-4c4f-a491-bdc002e4eb0e.png",
    alt: "Logo de Google Tag Manager"
  },
  {
    name: "Semrush",
    logo: "/lovable-uploads/5531fced-1169-4d9d-bee2-e404cc868d42.png",
    alt: "Logo de Semrush"
  },
  {
    name: "Ahrefs",
    logo: "/lovable-uploads/d2ea3838-5715-4a52-a5d6-b6a9ba86519a.png",
    alt: "Logo de Ahrefs"
  },
  {
    name: "Screaming Frog",
    logo: "/lovable-uploads/a5667ec7-4ba6-4008-9545-58e60313e453.png",
    alt: "Logo de Screaming Frog"
  },
  {
    name: "SearchAtlas",
    logo: "/lovable-uploads/a132eb6b-8d2a-4b35-874e-62998622c211.png",
    alt: "Logo de SearchAtlas"
  },
  {
    name: "LowFruits",
    logo: "/lovable-uploads/69b4b148-ffef-45e4-9b16-1a5db1cf0c24.png",
    alt: "Logo de LowFruits"
  }
];

export const ToolsCarousel = () => {
  const plugin = Autoplay({ delay: 2000, stopOnInteraction: false });

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Herramientas Profesionales
          </h2>
          <p className="text-xl text-muted-foreground">
            Trabajamos con las mejores herramientas SEO del mercado
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {tools.map((tool, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-2">
                  <div className="h-32 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img
                      src={tool.logo}
                      alt={tool.alt}
                      className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 text-muted-foreground">{tool.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};