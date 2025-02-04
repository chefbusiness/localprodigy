import { Link } from "react-router-dom";

export const LegalBreadcrumbs = () => {
  return (
    <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Inicio
          </Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/sectores" className="text-muted-foreground hover:text-primary">
            Sectores
          </Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/sectores/servicios-profesionales" className="text-muted-foreground hover:text-primary">
            Servicios Profesionales
          </Link>
        </li>
        <span>/</span>
        <li className="text-primary">
          Abogados
        </li>
      </ol>
    </nav>
  );
};