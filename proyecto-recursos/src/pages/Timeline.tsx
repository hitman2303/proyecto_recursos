import { timeline } from "../data/timeline";

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ENCABEZADO */}

      <section className="bg-gray-900 text-white px-4 sm:px-6 py-10 sm:py-14">

        <div className="max-w-5xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Recorrido histórico
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Línea de tiempo
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Recorré los principales acontecimientos de la Historia
            Argentina entre 1930 y 1982.
          </p>

        </div>

      </section>


      {/* TIMELINE */}

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        <div className="relative">

          {/* LÍNEA CENTRAL */}

          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gray-300 sm:-translate-x-1/2">
          </div>


          {/* EVENTOS */}

          <div className="space-y-10">

            {timeline.map((evento, index) => {

              const derecha = index % 2 !== 0;

              return (

                <div
                  key={evento.id}
                  className="relative flex"
                >

                  {/* PUNTO */}

                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-900 border-4 border-gray-50 rounded-full z-10">
                  </div>


                  {/* TARJETA */}

                  <div
                    className={`
                      ml-10 sm:ml-0
                      w-full sm:w-[calc(50%-2rem)]
                      ${
                        derecha
                          ? "sm:ml-auto"
                          : "sm:mr-auto"
                      }
                    `}
                  >

                    <div className="bg-white rounded-xl shadow-md border p-5 sm:p-6 hover:shadow-xl transition">

                      <span className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                        {evento.anio}
                      </span>

                      <h2 className="text-xl sm:text-2xl font-bold mb-3">
                        {evento.titulo}
                      </h2>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {evento.descripcion}
                      </p>

                      <span className="text-sm font-semibold text-gray-500">
                        {evento.categoria}
                      </span>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </main>

    </div>
  );
}