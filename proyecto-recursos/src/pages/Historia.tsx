import { historia } from "../data/historia";

export default function Historia() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <section className="bg-gray-900 text-white px-4 sm:px-6 py-10 sm:py-14 md:py-16">

        <div className="max-w-6xl mx-auto">

          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-3">
            Proyecto Historia Argentina
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Historia Argentina
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            1930 — 1982
          </p>

          <p className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Un recorrido por los principales procesos políticos,
            sociales y económicos que atravesaron la Argentina entre
            1930 y 1982.
          </p>

        </div>

      </section>


      {/* =========================
          CONTENIDO
      ========================= */}

      <main className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10 md:py-12">

        <div className="space-y-6 sm:space-y-8 md:space-y-12">

          {historia.map((periodo) => (

            <article
              key={periodo.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden"
            >

              {/* =========================
                  IMAGEN
              ========================= */}

              {periodo.imagen && (

                <div className="w-full h-44 sm:h-56 md:h-80 overflow-hidden">

                  <img
                    src={periodo.imagen}
                    alt={periodo.titulo}
                    className="w-full h-full object-cover"
                  />

                </div>

              )}


              {/* =========================
                  INFORMACIÓN
              ========================= */}

              <div className="p-4 sm:p-6 md:p-10">

                {/* AÑO */}

                <span className="inline-block bg-gray-900 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">

                  {periodo.anio}

                </span>


                {/* TÍTULO */}

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">

                  {periodo.titulo}

                </h2>


                {/* RESUMEN */}

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">

                  {periodo.resumen}

                </p>


                {/* CONTEXTO */}

                <div className="mb-6 sm:mb-8">

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">

                    Contexto histórico

                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">

                    {periodo.contexto}

                  </p>

                </div>


                {/* ACONTECIMIENTOS */}

                <div className="mb-6 sm:mb-8">

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">

                    Acontecimientos principales

                  </h3>

                  <ul className="space-y-3">

                    {periodo.acontecimientos.map(
                      (acontecimiento, index) => (

                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed"
                        >

                          <span className="font-bold mt-0.5 flex-shrink-0">
                            •
                          </span>

                          <span>
                            {acontecimiento}
                          </span>

                        </li>

                      )
                    )}

                  </ul>

                </div>


                {/* CONSECUENCIAS */}

                <div className="border-l-4 border-gray-900 pl-3 sm:pl-5">

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">

                    Consecuencias

                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">

                    {periodo.consecuencias}

                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}