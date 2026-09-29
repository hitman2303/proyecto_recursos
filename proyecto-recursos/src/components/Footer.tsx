import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* =========================
              PROYECTO
          ========================= */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="w-10 h-10 rounded-xl bg-white text-gray-900 flex items-center justify-center font-bold">
                HA
              </div>

              <div>

                <h2 className="font-bold">
                  Historia Argentina
                </h2>

                <p className="text-sm text-gray-400">
                  1930 — 1982
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-relaxed text-sm max-w-md">
              Proyecto educativo interactivo dedicado al estudio de la
              Historia Argentina entre 1930 y 1982, combinando contenidos
              históricos, recursos digitales y actividades interactivas.
            </p>

          </div>


          {/* =========================
              NAVEGACIÓN
          ========================= */}

          <div>

            <h3 className="font-bold mb-4">
              Explorar
            </h3>

            <div className="flex flex-col gap-2 text-sm">

              <Link
                to="/"
                className="text-gray-400 hover:text-white transition"
              >
                Inicio
              </Link>

              <Link
                to="/historia"
                className="text-gray-400 hover:text-white transition"
              >
                Historia
              </Link>

              <Link
                to="/timeline"
                className="text-gray-400 hover:text-white transition"
              >
                Línea de tiempo
              </Link>

              <Link
                to="/personajes"
                className="text-gray-400 hover:text-white transition"
              >
                Personajes
              </Link>

              <Link
                to="/eventos"
                className="text-gray-400 hover:text-white transition"
              >
                Eventos
              </Link>

            </div>

          </div>


          {/* =========================
              RECURSOS
          ========================= */}

          <div>

            <h3 className="font-bold mb-4">
              Recursos
            </h3>

            <div className="flex flex-col gap-2 text-sm">

              <Link
                to="/recursos"
                className="text-gray-400 hover:text-white transition"
              >
                Recursos educativos
              </Link>

              <Link
                to="/tutoriales"
                className="text-gray-400 hover:text-white transition"
              >
                Tutoriales
              </Link>

              <Link
                to="/descargar"
                className="text-gray-400 hover:text-white transition"
              >
                Descargar aplicación
              </Link>

            </div>

          </div>

        </div>


        {/* =========================
            SEPARADOR
        ========================= */}

        <div className="border-t border-gray-800 mt-10 pt-6">

          <div className="flex flex-col sm:flex-row justify-between gap-3 text-sm text-gray-500">

            <p>
              Proyecto Historia Argentina · 1930 — 1982
            </p>

            <p>
              Proyecto educativo
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}