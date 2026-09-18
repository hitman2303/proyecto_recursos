import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between min-h-16">

          {/* LOGO / NOMBRE */}
          <Link
            to="/"
            onClick={cerrarMenu}
            className="font-bold text-base sm:text-lg md:text-xl whitespace-nowrap hover:text-yellow-400 transition"
          >
            Historia Argentina
          </Link>


          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>


          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">

            <Link
              to="/"
              className="hover:text-yellow-400 transition"
            >
              Inicio
            </Link>

            <Link
              to="/historia"
              className="hover:text-yellow-400 transition"
            >
              Historia
            </Link>

            <Link
              to="/personajes"
              className="hover:text-yellow-400 transition"
            >
              Personajes
            </Link>

            <Link
              to="/eventos"
              className="hover:text-yellow-400 transition"
            >
              Eventos
            </Link>

            <Link
              to="/recursos"
              className="hover:text-yellow-400 transition"
            >
              Recursos
            </Link>

            <Link
              to="/tutoriales"
              className="hover:text-yellow-400 transition"
            >
              Tutoriales
            </Link>

            <Link
              to="/descargar"
              className="hover:text-yellow-400 transition"
            >
              Descargar
            </Link>

          </div>

        </div>


        {/* MENÚ MOBILE */}
        {menuAbierto && (

          <div className="md:hidden border-t border-gray-700 py-4">

            <div className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={cerrarMenu}
                className="px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                Inicio
              </Link>

              <Link
                to="/historia"
                onClick={cerrarMenu}
                className="px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                Historia
              </Link>

              <Link
                to="/personajes"
                onClick={cerrarMenu}
                className="px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                Personajes
              </Link>

              <Link
                to="/eventos"
                onClick={cerrarMenu}
                className="px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                Eventos
              </Link>

              <Link
                to="/recursos"
                onClick={cerrarMenu}
                className="px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                Recursos
              </Link>

              <Link
                to="/tutoriales"
                onClick={cerrarMenu}
                className="px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                Tutoriales
              </Link>

              <Link
                to="/descargar"
                onClick={cerrarMenu}
                className="px-3 py-3 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                Descargar software
              </Link>

            </div>

          </div>

        )}

      </div>

    </nav>
  );
}