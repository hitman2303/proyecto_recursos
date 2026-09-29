import { eventos } from "../data/eventos";

export default function Eventos() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gray-900 text-white px-4 sm:px-6 py-14">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Acontecimientos históricos
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Eventos históricos
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Una selección de acontecimientos fundamentales para comprender
            la Historia Argentina entre 1930 y 1982.
          </p>

        </div>
      </section>


      {/* EVENTOS */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {eventos.map((evento) => (

            <article
              key={evento.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* CABECERA */}
              <div className="bg-gray-900 text-white p-6">

                <div className="flex flex-wrap items-center gap-3 mb-4">

                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {evento.anio}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {evento.fecha}
                  </span>

                </div>

                <h2 className="text-2xl font-bold">
                  {evento.titulo}
                </h2>

              </div>


              {/* CONTENIDO */}
              <div className="p-6">

                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  {evento.categoria}
                </span>

                <p className="text-gray-700 leading-relaxed mt-4">
                  {evento.descripcion}
                </p>


                {/* IMPORTANCIA */}
                <div className="mt-6 bg-gray-50 rounded-xl p-5">

                  <h3 className="font-bold mb-2">
                    ¿Por qué fue importante?
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {evento.importancia}
                  </p>

                </div>


                {/* PERSONAJES */}
                <div className="mt-6">

                  <h3 className="font-bold mb-3">
                    Personajes relacionados
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {evento.personajes.map((personaje) => (

                      <span
                        key={personaje}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {personaje}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}