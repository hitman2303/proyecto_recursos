import { personajes } from "../data/personajes";
import SEO from "../components/SEO";
export default function Personajes() {
  return (
   
    <div className="min-h-screen bg-gray-50">
       <SEO
  title="Personajes históricos de Argentina 1930–1982"
  description="Conocé a algunos de los principales protagonistas políticos y sociales del período 1930-1982."
/>
      {/* HERO */}
      <section className="bg-gray-900 text-white px-4 sm:px-6 py-14">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Protagonistas
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Personajes históricos
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Conocé a algunos de los principales protagonistas políticos
            y sociales del período 1930-1982.
          </p>

        </div>

      </section>


      {/* PERSONAJES */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {personajes.map((personaje) => (

            <article
              key={personaje.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* IDENTIFICACIÓN */}

              <div className="flex items-center justify-between gap-3 mb-5">

                <span className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                  {personaje.nombre.charAt(0)}
                </span>

                <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {personaje.categoria}
                </span>

              </div>


              {/* NOMBRE */}

              <h2 className="text-2xl font-bold mb-2">
                {personaje.nombre}
              </h2>


              {/* PERÍODO */}

              <p className="text-sm text-gray-500 font-medium mb-5">
                {personaje.periodo}
              </p>


              {/* DESCRIPCIÓN */}

              <p className="text-gray-700 leading-relaxed">
                {personaje.descripcion}
              </p>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}