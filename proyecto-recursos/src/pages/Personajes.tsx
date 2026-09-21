import { personajes } from "../data/personajes";

export default function Personajes() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ENCABEZADO */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

          <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
            Historia Argentina
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
            Personajes históricos
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Conocé algunas de las figuras políticas y sociales más
            importantes del período comprendido entre 1930 y 1982.
          </p>

        </div>

      </section>


      {/* PERSONAJES */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {personajes.map((personaje) => (

            <article
              key={personaje.id}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* CATEGORÍA */}

              <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1 rounded-full mb-4">
                {personaje.categoria}
              </span>


              {/* NOMBRE */}

              <h2 className="text-2xl font-bold mb-2">
                {personaje.nombre}
              </h2>


              {/* PERÍODO */}

              <p className="text-sm font-semibold text-gray-500 mb-4">
                {personaje.periodo}
              </p>


              {/* DESCRIPCIÓN */}

              <p className="text-gray-600 leading-relaxed">
                {personaje.descripcion}
              </p>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}