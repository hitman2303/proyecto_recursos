import { eventos } from "../data/eventos";

export default function Eventos() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ENCABEZADO */}

      <section className="bg-gray-900 text-white px-4 sm:px-6 py-10 sm:py-14">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Acontecimientos
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Eventos históricos
          </h1>

          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Conocé los acontecimientos que marcaron el período
            comprendido entre 1930 y 1982.
          </p>

        </div>

      </section>


      {/* EVENTOS */}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {eventos.map((evento) => (

            <article
              key={evento.id}
              className="bg-white rounded-2xl shadow-md border p-6 hover:shadow-xl transition"
            >

              {/* FECHA */}

              <div className="flex flex-wrap items-center gap-2 mb-4">

                <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {evento.anio}
                </span>

                <span className="text-sm text-gray-500">
                  {evento.fecha}
                </span>

              </div>


              {/* TÍTULO */}

              <h2 className="text-2xl font-bold mb-4">
                {evento.titulo}
              </h2>


              {/* CATEGORÍA */}

              <p className="text-sm font-semibold text-gray-500 mb-4">
                {evento.categoria}
              </p>


              {/* DESCRIPCIÓN */}

              <p className="text-gray-700 leading-relaxed mb-6">
                {evento.descripcion}
              </p>


              {/* IMPORTANCIA */}

              <div className="border-l-4 border-gray-900 pl-4 mb-6">

                <h3 className="font-bold mb-2">
                  ¿Por qué fue importante?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {evento.importancia}
                </p>

              </div>


              {/* PERSONAJES */}

              <div>

                <h3 className="font-bold mb-3">
                  Personajes relacionados
                </h3>

                <div className="flex flex-wrap gap-2">

                  {evento.personajes.map((personaje) => (

                    <span
                      key={personaje}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {personaje}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}