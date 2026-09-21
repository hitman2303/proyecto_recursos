import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* =========================
          HERO
      ========================= */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">

          <div className="max-w-4xl">

            <p className="text-sm sm:text-base uppercase tracking-widest text-gray-400 mb-4">
              Proyecto educativo
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              Historia Argentina
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6">
              1930 — 1982
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Un recorrido interactivo por los principales procesos
              políticos, sociales y económicos de la Argentina
              durante gran parte del siglo XX.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          PRESENTACIÓN
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <div className="max-w-4xl">

          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Un recorrido por la historia
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Este proyecto propone explorar algunos de los acontecimientos
            más importantes de la Historia Argentina entre 1930 y 1982,
            atravesando golpes de Estado, gobiernos democráticos,
            transformaciones sociales, cambios económicos y conflictos
            políticos.
          </p>

        </div>

      </section>


      {/* =========================
          SECCIONES
      ========================= */}

      <section className="bg-white py-12 sm:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Explorá el proyecto
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            {/* HISTORIA */}

            <Link
              to="/historia"
              className="group bg-gray-50 border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >

              <div className="text-4xl mb-5">
                📖
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600">
                Historia
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Conocé los principales períodos y procesos históricos
                desarrollados entre 1930 y 1982.
              </p>

            </Link>


            {/* TIMELINE */}

            <Link
              to="/timeline"
              className="group bg-gray-50 border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >

              <div className="text-4xl mb-5">
                🕰️
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600">
                Línea de tiempo
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Recorré cronológicamente los acontecimientos que
                marcaron este período.
              </p>

            </Link>


            {/* EVENTOS */}

            <Link
              to="/eventos"
              className="group bg-gray-50 border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >

              <div className="text-4xl mb-5">
                📰
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600">
                Eventos
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Investigá acontecimientos históricos y conocé su
                importancia y consecuencias.
              </p>

            </Link>


            {/* DESCARGA */}

            <Link
              to="/descargar"
              className="group bg-gray-900 text-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >

              <div className="text-4xl mb-5">
                💻
              </div>

              <h3 className="text-xl font-bold mb-3">
                Software educativo
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Descargá la aplicación de escritorio y accedé a
                actividades y recursos interactivos.
              </p>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          CIERRE
      ========================= */}

      <section className="bg-gray-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Aprender historia también puede ser interactivo
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explorá los contenidos, recorré la línea de tiempo,
            descubrí acontecimientos y utilizá el software educativo
            para poner a prueba tus conocimientos.
          </p>

        </div>

      </section>

    </div>
  );
}