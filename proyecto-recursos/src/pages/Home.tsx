import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* =========================
          HERO
      ========================= */}

      <section className="relative overflow-hidden bg-gray-900 text-white">

        <div className="absolute inset-0 opacity-10">

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white" />

          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-white" />

        </div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">

          <div className="max-w-4xl">

            <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-gray-400 font-semibold mb-5">
              Proyecto educativo
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Historia Argentina
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-300 mt-3 font-light">
              1930 — 1982
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mt-8">
              Un recorrido interactivo por uno de los períodos más
              complejos y significativos de la Historia Argentina.
              Explorá acontecimientos, personajes, procesos políticos,
              transformaciones sociales y conflictos que marcaron
              nuestro país.
            </p>


            {/* BOTONES */}

            <div className="flex flex-col sm:flex-row gap-3 mt-10">

              <Link
                to="/historia"
                className="inline-flex justify-center items-center bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Explorar la historia
              </Link>

              <Link
                to="/timeline"
                className="inline-flex justify-center items-center border border-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                Ver línea de tiempo
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          INTRODUCCIÓN
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-3">
            El proyecto
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
            Comprender la historia a través de diferentes recursos
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Esta propuesta reúne información histórica, líneas de tiempo,
            personajes, acontecimientos y recursos educativos para
            facilitar el estudio y la comprensión del período comprendido
            entre 1930 y 1982.
          </p>

        </div>

      </section>


      {/* =========================
          TARJETAS PRINCIPALES
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


          {/* HISTORIA */}

          <Link
            to="/historia"
            className="group bg-white border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >

            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center text-xl font-bold mb-6">
              01
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Historia
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Conocé los principales procesos históricos del período
              y comprendé cómo fueron cambiando la política, la sociedad
              y la economía argentina.
            </p>

            <span className="inline-block mt-6 font-semibold group-hover:translate-x-1 transition">
              Explorar →
            </span>

          </Link>


          {/* TIMELINE */}

          <Link
            to="/timeline"
            className="group bg-white border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >

            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center text-xl font-bold mb-6">
              02
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Línea de tiempo
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Recorré cronológicamente los acontecimientos que
              marcaron la Argentina desde 1930 hasta la Guerra
              de Malvinas.
            </p>

            <span className="inline-block mt-6 font-semibold group-hover:translate-x-1 transition">
              Recorrer →
            </span>

          </Link>


          {/* PERSONAJES */}

          <Link
            to="/personajes"
            className="group bg-white border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >

            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center text-xl font-bold mb-6">
              03
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Personajes
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Conocé a los principales protagonistas políticos,
              militares y sociales del período histórico.
            </p>

            <span className="inline-block mt-6 font-semibold group-hover:translate-x-1 transition">
              Conocer →
            </span>

          </Link>

        </div>

      </section>


      {/* =========================
          PERÍODO
      ========================= */}

      <section className="bg-white border-y">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

          <div className="text-center mb-12">

            <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-3">
              Recorrido
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              1930 — 1982
            </h2>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            {[
              ["1930", "Golpe de Estado"],
              ["1943", "Nuevo golpe militar"],
              ["1955", "Revolución Libertadora"],
              ["1976", "Última dictadura"],
              ["1982", "Guerra de Malvinas"],
            ].map(([anio, titulo]) => (

              <Link
                key={anio}
                to="/timeline"
                className="border rounded-xl p-5 text-center hover:bg-gray-900 hover:text-white transition"
              >

                <p className="text-2xl font-bold mb-2">
                  {anio}
                </p>

                <p className="text-sm">
                  {titulo}
                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        <div className="bg-gray-900 rounded-3xl text-white p-8 sm:p-12 text-center">

          <p className="text-gray-400 uppercase tracking-widest text-sm mb-3">
            Aplicación educativa
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Llevá el proyecto a tu computadora
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Accedé a la aplicación de escritorio con actividades,
            cuestionarios y recursos interactivos para profundizar
            el estudio de la Historia Argentina.
          </p>

          <Link
            to="/descargar"
            className="inline-flex bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Descargar aplicación
          </Link>

        </div>

      </section>

    </div>
  );
}