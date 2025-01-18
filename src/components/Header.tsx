import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainMenuItems = [
    { label: "Inicio", href: "/" },
    { label: "Contacto", href: "/contacto" },
  ];

  const serviceMenuItems = [
    { 
      label: "SEO Local", 
      href: "/servicios/seo-local",
      description: "Mejora tu visibilidad en búsquedas locales y Google Maps"
    },
    { 
      label: "SEO Nacional", 
      href: "/servicios/seo-nacional",
      description: "Estrategias de posicionamiento para competir a nivel nacional"
    },
    { 
      label: "Desarrollo Web", 
      href: "/servicios/desarrollo-web",
      description: "Sitios web optimizados para SEO y conversión"
    },
    { 
      label: "Publicidad Digital", 
      href: "/servicios/publicidad-digital",
      description: "Campañas de publicidad digital optimizadas"
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
            <MapPin className="h-6 w-6 text-yellow" />
            <span>localSEOads</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {mainMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-600 hover:text-yellow transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-yellow transition-colors">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] md:w-[500px] lg:w-[600px] p-4 bg-white rounded-md shadow-lg">
                      <div className="grid gap-3 md:grid-cols-2">
                        {serviceMenuItems.map((service) => (
                          <Link
                            key={service.label}
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              className="bg-yellow hover:bg-yellow-light text-yellow-foreground transition-colors"
              asChild
            >
              <Link to="/contacto">Consulta Gratuita</Link>
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col space-y-4">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-600 hover:text-yellow transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-2 py-1">
                <div className="text-gray-600 font-medium mb-2">Servicios</div>
                {serviceMenuItems.map((service) => (
                  <Link
                    key={service.label}
                    to={service.href}
                    className="block text-gray-600 hover:text-yellow transition-colors py-2 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              <Button 
                className="w-full bg-yellow hover:bg-yellow-light text-yellow-foreground transition-colors"
                asChild
              >
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                  Consulta Gratuita
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};