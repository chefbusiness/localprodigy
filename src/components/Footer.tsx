import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo e info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">localSEOads</h3>
            <p className="text-gray-300">
              Potenciamos la visibilidad online de negocios locales en España y Latinoamérica
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios/seo-local" className="text-gray-300 hover:text-white transition-colors">
                  SEO Local
                </Link>
              </li>
              <li>
                <Link to="/servicios/seo-nacional" className="text-gray-300 hover:text-white transition-colors">
                  SEO Nacional
                </Link>
              </li>
              <li>
                <Link to="/servicios/desarrollo-web" className="text-gray-300 hover:text-white transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link to="/servicios/publicidad-digital" className="text-gray-300 hover:text-white transition-colors">
                  Publicidad Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/casos-exito" className="text-gray-300 hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Madrid, España</li>
              <li>
                <a href="tel:+34744717942" className="text-gray-300 hover:text-white transition-colors">
                  +34 744 717 942
                </a>
              </li>
              <li>
                <a href="mailto:info@localseoads.com" className="text-gray-300 hover:text-white transition-colors">
                  info@localseoads.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {currentYear} localSEOads. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};