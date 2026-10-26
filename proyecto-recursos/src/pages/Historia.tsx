
import { historia } from "../data/historia";

export default function Historia() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <header className="bg-gray-900 text-white px-4 sm:px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Recorrido histórico
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Historia Argentina (1930–1982)
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Explorá los principales acontecimientos y procesos
            políticos, económicos y sociales que transformaron
            la Argentina entre 1930 y 1982.
          </p>

        </div>

      </header>


      {/* =========================
          INTRODUCCIÓN
      ========================= */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        <div className="bg-white border rounded-2xl shadow-sm p-6 sm:p-8">

          <h2 className="text-2xl font-bold mb-4">
            Un recorrido por nuestra historia
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Entre 1930 y 1982, la Argentina atravesó profundas
            transformaciones políticas, económicas y sociales.

            Este recorrido permite comprender las interrupciones
            del orden democrático, los cambios en el modelo
            económico, el surgimiento de nuevos movimientos
            políticos y los acontecimientos que marcaron
            la sociedad argentina.
          </p>

        </div>

      </section>


      {/* =========================
          PERÍODOS HISTÓRICOS
      ========================= */}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">

        <div className="space-y-12">

          {historia.map((etapa, index) => (

            <article
              key={etapa.id}
              id={`periodo-${etapa.id}`}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >

              {/* IMAGEN + RESUMEN */}

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* IMAGEN */}

                <div
                  className={`relative min-h-[260px] sm:min-h-[350px] bg-gray-200 ${
                    index % 2 !== 0
                      ? "lg:order-2"
                      : ""
                  }`}
                >

                  {etapa.imagen ? (

                    <img
                      src={etapa.imagen}
                      alt={`Imagen histórica relacionada con ${etapa.titulo}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                  ) : (

                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Imagen histórica no disponible
                    </div>

                  )}

                </div>


                {/* INFORMACIÓN PRINCIPAL */}

                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

                  <span className="self-start bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-5">
                    {etapa.anio}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                    {etapa.titulo}
                  </h2>

                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {etapa.resumen}
                  </p>

                </div>

              </div>


              {/* CONTENIDO DETALLADO */}

              <div className="p-6 sm:p-8 lg:p-10 border-t">

                {/* CONTEXTO */}

                <section className="mb-8">

                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Contexto histórico
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {etapa.contexto}
                  </p>

                </section>


                {/* ACONTECIMIENTOS */}

                <section className="mb-8">

                  <h3 className="text-xl sm:text-2xl font-bold mb-5">
                    Principales acontecimientos
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {etapa.acontecimientos.map(
                      (acontecimiento, i) => (

                        <li
                          key={i}
                          className="flex items-start gap-3 bg-gray-50 rounded-xl border p-4"
                        >

                          <span className="w-7 h-7 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>

                          <span className="text-gray-700 leading-relaxed">
                            {acontecimiento}
                          </span>

                        </li>

                      )
                    )}

                  </ul>

                </section>


                {/* CONSECUENCIAS */}

                <section className="bg-gray-50 rounded-xl border-l-4 border-gray-900 p-6">

                  <h3 className="text-xl font-bold mb-3">
                    Consecuencias históricas
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {etapa.consecuencias}
                  </p>

                </section>

              </div>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}