import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-4 shadow-lg">

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        <Link
          to="/"
          className="font-bold text-xl hover:text-yellow-400"
        >
          Historia Argentina
        </Link>

        <div className="flex flex-wrap gap-4 text-sm">

          <Link to="/" className="hover:text-yellow-400">
            Inicio
          </Link>

          <Link to="/historia" className="hover:text-yellow-400">
            Historia
          </Link>

          <Link to="/timeline" className="hover:text-yellow-400">
            Línea de tiempo
          </Link>

          <Link to="/eventos" className="hover:text-yellow-400">
            Eventos
          </Link>

          <Link to="/personajes" className="hover:text-yellow-400">
            Personajes
          </Link>

          <Link to="/recursos" className="hover:text-yellow-400">
            Recursos
          </Link>

          <Link to="/tutoriales" className="hover:text-yellow-400">
            Tutoriales
          </Link>

          <Link to="/descargar" className="hover:text-yellow-400">
            Descargar
          </Link>

        </div>

      </div>

    </nav>
  );
}