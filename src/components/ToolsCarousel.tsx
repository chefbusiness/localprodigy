import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const tools = [
  {
    name: "Google Search Console",
    logo: "/lovable-uploads/feefc302-1eab-43d4-999b-13da2c8f81b7.png",
    alt: "Logo de Google Search Console"
  },
  {
    name: "Google Maps",
    logo: "/lovable-uploads/1ae123c4-8e2a-40ff-a2c0-338d863ef107.png",
    alt: "Logo de Google Maps"
  },
  {
    name: "Google Reviews",
    logo: "/lovable-uploads/3570aa4d-6460-4e46-88ff-1bcc0a4b6b1b.png",
    alt: "Logo de Google Reviews"
  },
  {
    name: "Google Ads",
    logo: "/lovable-uploads/a6520fce-62a2-4bc0-b312-a34af7025add.png",
    alt: "Logo de Google Ads"
  },
  {
    name: "Google Tag Manager",
    logo: "/lovable-uploads/d906c4b4-5c95-4981-a886-9a5e5e5fd6c7.png",
    alt: "Logo de Google Tag Manager"
  },
  {
    name: "Google Analytics",
    logo: "/lovable-uploads/5d7f6031-874a-44d8-aa3d-cfaf62db2987.png",
    alt: "Logo de Google Analytics"
  },
  {
    name: "Semrush",
    logo: "/lovable-uploads/3c00543a-4722-4d40-abd4-452960601ecd.png",
    alt: "Logo de Semrush"
  },
  {
    name: "Screaming Frog",
    logo: "/lovable-uploads/42e021ad-f11a-42d8-9df0-5b9658abea91.png",
    alt: "Logo de Screaming Frog"
  },
  {
    name: "SearchAtlas",
    logo: "/lovable-uploads/54485163-ee87-4080-babd-990be5f6e624.png",
    alt: "Logo de SearchAtlas"
  },
  {
    name: "LowFruits",
    logo: "/lovable-uploads/cb8619e0-c51a-4334-a933-99a8f83784b9.png",
    alt: "Logo de LowFruits"
  },
  {
    name: "Google Business Profile",
    logo: "/lovable-uploads/51eab936-1148-4a0a-ad7e-c12507b7da54.png",
    alt: "Logo de Google Business Profile"
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
                <div className="p-4">
                  <div className="h-40 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img
                      src={tool.logo}
                      alt={tool.alt}
                      className="h-28 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-medium text-center mt-3 text-muted-foreground">{tool.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};