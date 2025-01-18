import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const tools = [
  {
    name: "Google Search Console",
    logo: "/tools/google-search-console.svg",
    alt: "Logo de Google Search Console"
  },
  {
    name: "Google Analytics",
    logo: "/tools/google-analytics.svg",
    alt: "Logo de Google Analytics"
  },
  {
    name: "Google Tag Manager",
    logo: "/tools/google-tag-manager.svg",
    alt: "Logo de Google Tag Manager"
  },
  {
    name: "Ahrefs",
    logo: "/tools/ahrefs.svg",
    alt: "Logo de Ahrefs"
  },
  {
    name: "Semrush",
    logo: "/tools/semrush.svg",
    alt: "Logo de Semrush"
  },
  {
    name: "SearchAtlas",
    logo: "/tools/searchatlas.svg",
    alt: "Logo de SearchAtlas"
  },
  {
    name: "LowFruits",
    logo: "/tools/lowfruits.svg",
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