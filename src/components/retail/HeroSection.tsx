interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-muted to-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Interior de tienda moderna representando el sector de comercio local"
          className="w-full h-full object-cover opacity-10"
          width="1920"
          height="1080"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            SEO Local para Comercio Local
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};