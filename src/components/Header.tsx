import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "#servicios" },
    { label: "Precios", href: "#precios" },
    { label: "Casos de Éxito", href: "#testimonios" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
            <MapPin className="h-6 w-6 text-yellow" />
            <span>localSEOads</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-yellow transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-yellow hover:bg-yellow-light text-yellow-foreground transition-colors">
              Consulta Gratuita
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
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-yellow transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-yellow hover:bg-yellow-light text-yellow-foreground transition-colors">
                Consulta Gratuita
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};