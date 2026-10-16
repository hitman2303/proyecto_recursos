import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [submenu, setSubmenu] = useState("");

  const location = useLocation();

  const cerrarMenus = () => {
    setMenuAbierto(false);
    setSubmenu("");
  };

  const historiaLinks = [
    { nombre: "Historia", ruta: "/historia" },
    { nombre: "Línea de tiempo", ruta: "/timeline" },
    { nombre: "Eventos", ruta: "/eventos" },
    { nombre: "Personajes", ruta: "/personajes" },
  ];

  const recursosLinks = [
    { nombre: "Recursos educativos", ruta: "/recursos" },
    { nombre: "Tutoriales", ruta: "/tutoriales" },
  ];

  const linkActivo = (ruta: string) =>
    location.pathname === ruta;

  const grupoActivo = (links: typeof historiaLinks) =>
    links.some((link) => linkActivo(link.ruta));

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">

      <nav className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between h-18 min-h-[72px]">

          {/* LOGO */}

          <Link
            to="/"
            onClick={cerrarMenus}
            className="flex items-center gap-3"
          >
            <div className="bg-white text-gray-900 w-11 h-11 rounded-xl flex items-center justify-center font-bold">
              HA
            </div>

            <div>
              <h1 className="font-bold text-base sm:text-lg">
                Historia Argentina
              </h1>

              <p className="text-xs text-gray-400">
                1930 — 1982
              </p>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}

          <div className="hidden lg:flex items-center gap-6">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Inicio
            </NavLink>

            {/* EXPLORAR HISTORIA */}

            <div className="relative group">

              <button
                type="button"
                className={`flex items-center gap-2 py-4 transition ${
                  grupoActivo(historiaLinks)
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Explorar historia
                <span>⌄</span>
              </button>

              <div className="absolute top-full left-0 w-56 bg-white text-gray-900 rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition">

                {historiaLinks.map((link) => (
                  <Link
                    key={link.ruta}
                    to={link.ruta}
                    onClick={cerrarMenus}
                    className="block px-5 py-3 hover:bg-gray-100 transition"
                  >
                    {link.nombre}
                  </Link>
                ))}

              </div>
            </div>

            {/* RECURSOS */}

            <div className="relative group">

              <button
                type="button"
                className={`flex items-center gap-2 py-4 transition ${
                  grupoActivo(recursosLinks)
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Recursos educativos
                <span>⌄</span>
              </button>

              <div className="absolute top-full left-0 w-56 bg-white text-gray-900 rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition">

                {recursosLinks.map((link) => (
                  <Link
                    key={link.ruta}
                    to={link.ruta}
                    onClick={cerrarMenus}
                    className="block px-5 py-3 hover:bg-gray-100 transition"
                  >
                    {link.nombre}
                  </Link>
                ))}

              </div>
            </div>

            {/* DESCARGAR */}

            <Link
              to="/descargar"
              onClick={cerrarMenus}
              className="bg-white text-gray-900 px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Descargar app
            </Link>

          </div>

          {/* BOTÓN HAMBURGUESA */}

          <button
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="lg:hidden border border-gray-600 rounded-lg p-2.5"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-mobile"
          >
            <span className="text-2xl">
              {menuAbierto ? "✕" : "☰"}
            </span>
          </button>

        </div>

        {/* MENÚ MOBILE */}

        {menuAbierto && (
          <div
            id="menu-mobile"
            className="lg:hidden border-t border-gray-700 py-4"
          >

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={cerrarMenus}
                className="px-4 py-3 rounded-lg hover:bg-gray-800"
              >
                Inicio
              </Link>

              {/* HISTORIA */}

              <button
                type="button"
                onClick={() =>
                  setSubmenu(
                    submenu === "historia" ? "" : "historia"
                  )
                }
                className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-800"
                aria-expanded={submenu === "historia"}
              >
                Explorar historia
                <span>⌄</span>
              </button>

              {submenu === "historia" && (
                <div className="ml-4 flex flex-col gap-1">

                  {historiaLinks.map((link) => (
                    <Link
                      key={link.ruta}
                      to={link.ruta}
                      onClick={cerrarMenus}
                      className="px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg"
                    >
                      {link.nombre}
                    </Link>
                  ))}

                </div>
              )}

              {/* RECURSOS */}

              <button
                type="button"
                onClick={() =>
                  setSubmenu(
                    submenu === "recursos" ? "" : "recursos"
                  )
                }
                className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-800"
                aria-expanded={submenu === "recursos"}
              >
                Recursos educativos
                <span>⌄</span>
              </button>

              {submenu === "recursos" && (
                <div className="ml-4 flex flex-col gap-1">

                  {recursosLinks.map((link) => (
                    <Link
                      key={link.ruta}
                      to={link.ruta}
                      onClick={cerrarMenus}
                      className="px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg"
                    >
                      {link.nombre}
                    </Link>
                  ))}

                </div>
              )}

              {/* DESCARGAR */}

              <Link
                to="/descargar"
                onClick={cerrarMenus}
                className="bg-white text-gray-900 text-center font-bold rounded-xl px-4 py-3 mt-3"
              >
                Descargar aplicación
              </Link>

            </div>

          </div>
        )}

      </nav>

    </header>
  );
}