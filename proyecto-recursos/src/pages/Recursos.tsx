import { useState } from "react";
import { Link } from "react-router-dom";
import { recursos } from "../data/recursos";
import { materiales } from "../data/materiales";
export default function Recursos() {

  const [categoria, setCategoria] = useState("Todos");

  const categorias = [
    "Todos",
    ...new Set(recursos.map((recurso) => recurso.categoria)),
  ];

  const recursosFiltrados = recursos.filter((recurso) =>
    categoria === "Todos"
      ? true
      : recurso.categoria === categoria
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Biblioteca educativa
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Recursos para estudiantes
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Accedé a materiales de estudio, herramientas interactivas,
            actividades y contenidos educativos para comprender la
            Historia Argentina entre 1930 y 1982.
          </p>

        </div>

      </section>


      {/* PRESENTACIÓN */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="bg-white rounded-2xl border p-6 sm:p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-4">
            Aprendé a tu ritmo
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Esta biblioteca reúne diferentes recursos digitales
            para acompañar el aprendizaje de los principales
            acontecimientos de la Historia Argentina.

            Podés consultar información, investigar personajes,
            recorrer la línea de tiempo y utilizar actividades
            interactivas para reforzar tus conocimientos.
          </p>

        </div>

      </section>


      {/* FILTROS */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">

        <h2 className="text-2xl font-bold mb-5">
          Explorá los recursos
        </h2>

        <div className="flex flex-wrap gap-3">

          {categorias.map((cat) => (

            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-5 py-2 rounded-xl font-medium transition ${
                categoria === cat
                  ? "bg-gray-900 text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

      </section>


      {/* TARJETAS */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {recursosFiltrados.map((recurso) => (

            <article
              key={recurso.id}
              className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >

              {/* ICONO */}

              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-3xl mb-6">
                {recurso.icono}
              </div>


              {/* CATEGORÍA */}

              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                {recurso.categoria}
              </span>


              {/* TÍTULO */}

              <h3 className="text-xl font-bold mb-4">
                {recurso.titulo}
              </h3>


              {/* DESCRIPCIÓN */}

              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {recurso.descripcion}
              </p>


              {/* BOTÓN */}

              <Link
                to={recurso.enlace}
                className="inline-flex justify-center items-center bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
              >
                Acceder al recurso →
              </Link>

            </article>

          ))}

        </div>

      </main>

{/* =========================
    MATERIALES DESCARGABLES
========================= */}

<section className="bg-white border-y py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* ENCABEZADO */}

    <div className="mb-10">

      <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-3">
        Biblioteca digital
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Materiales descargables
      </h2>

      <p className="text-gray-600 max-w-3xl leading-relaxed">
        Descargá guías de estudio, cuadros comparativos,
        actividades de análisis de fuentes y cuestionarios
        para complementar tu aprendizaje.
      </p>

    </div>


    {/* TARJETAS */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {materiales.map((material) => (

        <article
          key={material.id}
          className="bg-gray-50 border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
        >

          {/* ICONO */}

          <div className="w-14 h-14 bg-gray-900 text-white rounded-xl flex items-center justify-center text-3xl mb-5">
            {material.icono}
          </div>


          {/* CATEGORÍA */}

          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">
            {material.categoria}
          </p>


          {/* TÍTULO */}

          <h3 className="text-xl font-bold mb-4">
            {material.titulo}
          </h3>


          {/* DESCRIPCIÓN */}

          <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
            {material.descripcion}
          </p>


          {/* BOTÓN DESCARGAR */}

          <a
            href={material.archivo}
            download
            className="inline-flex items-center justify-center bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
          >
            📥 Descargar PDF
          </a>

        </article>

      ))}

    </div>

  </div>

</section>
      {/* SOFTWARE */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">

        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12">

          <div className="max-w-3xl">

            <p className="uppercase tracking-widest text-gray-400 text-sm mb-3">
              Aprendizaje interactivo
            </p>

            <h2 className="text-3xl font-bold mb-5">
              Complementá tus estudios con nuestra aplicación
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              El software educativo permite realizar cuestionarios,
              actividades y juegos relacionados con los contenidos
              históricos trabajados en este proyecto.
            </p>

            <Link
              to="/descargar"
              className="inline-flex bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Conocer la aplicación
            </Link>

          </div>

        </div>

      </section>
      

    </div>
  );
}