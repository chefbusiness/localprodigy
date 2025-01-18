import { useEffect, useState } from "react";
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
  },
  {
    name: "Google Analytics 4",
    logo: "/tools/google-analytics.svg",
  },
  {
    name: "Google Tag Manager",
    logo: "/tools/google-tag-manager.svg",
  },
  {
    name: "Google Site Kit",
    logo: "/tools/google-site-kit.svg",
  },
  {
    name: "Ahrefs",
    logo: "/tools/ahrefs.svg",
  },
  {
    name: "Semrush",
    logo: "/tools/semrush.svg",
  },
  {
    name: "SearchAtlas",
    logo: "/tools/searchatlas.svg",
  },
  {
    name: "LowFruits",
    logo: "/tools/lowfruits.svg",
  }
];

export const ToolsCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const plugin = Autoplay({ delay: 2000, stopOnInteraction: false });

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      // Puedes agregar lógica adicional aquí si es necesario
      console.log("Slide changed");
    });
  }, [api]);

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
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {tools.map((tool, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                <div className="p-2">
                  <div className="h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img
                      src={tool.logo}
                      alt={`Logo de ${tool.name}`}
                      className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};