import { useState } from "react";
import { Link } from "react-router-dom";
import { tutoriales } from "../data/tutoriales";

export default function Tutoriales() {

  const [categoria, setCategoria] = useState("Todos");

  const [tutorialAbierto, setTutorialAbierto] =
    useState<number | null>(null);

  const categorias = [
    "Todos",
    "General",
    "Alumno",
    "Docente"
  ];

  const tutorialesFiltrados = tutoriales.filter(
    (tutorial) =>
      categoria === "Todos" ||
      tutorial.categoria === categoria
  );

const cambiarTutorial = (id: number) => {
  setTutorialAbierto((anterior) =>
    anterior === id ? null : id
  );
};

  return (
    <div className="min-h-screen bg-gray-50">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Centro de ayuda
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Tutoriales del software
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Aprendé a utilizar la aplicación educativa
            de Historia Argentina 1930-1982 mediante
            guías paso a paso.
          </p>

        </div>

      </section>


      {/* =========================
          PRESENTACIÓN
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8">

          <h2 className="text-2xl font-bold mb-4">
            ¿Cómo utilizar estos tutoriales?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Seleccioná el tutorial que necesitás consultar.
            Cada guía contiene instrucciones organizadas
            paso a paso para facilitar el uso del software.
            Podés filtrar los contenidos según tu perfil.
          </p>

        </div>

      </section>


      {/* =========================
          FILTROS
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">

        <h2 className="text-2xl font-bold mb-5">
          Seleccioná tu tutorial
        </h2>
<p className="text-gray-600 mb-6">
  Seleccioná una categoría y hacé clic sobre
  cualquiera de los tutoriales para visualizar
  sus instrucciones paso a paso.
</p>
        <div className="flex flex-wrap gap-3">

          {categorias.map((cat) => (

            <button
              key={cat}
              onClick={() => {
                setCategoria(cat);
                setTutorialAbierto(null);
              }}
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


      {/* =========================
          LISTA DE TUTORIALES
      ========================= */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">

        <div className="space-y-5">

          {tutorialesFiltrados.map((tutorial) => {

            const abierto =
              tutorialAbierto === tutorial.id;

            return (

              <article
                key={tutorial.id}
                className="bg-white border rounded-2xl shadow-sm overflow-hidden"
              >

                {/* ENCABEZADO DEL TUTORIAL */}

                <button
                  onClick={() => cambiarTutorial(tutorial.id)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition"
                  aria-expanded={abierto}
                  aria-controls={`tutorial-${tutorial.id}`}
                >

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 shrink-0 rounded-xl bg-gray-900 text-white flex items-center justify-center text-2xl">
                      {tutorial.icono}
                    </div>

                    <div className="flex-1 min-w-0">

                      <div className="flex flex-wrap items-center gap-3 mb-2">

                        <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1 rounded-full">
                          {tutorial.categoria}
                        </span>

                        <span className="text-sm text-gray-500">
                          ⏱ {tutorial.duracion}
                        </span>

                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold mb-3">
                        {tutorial.titulo}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {tutorial.descripcion}
                      </p>

                    </div>

                    <span className="text-2xl text-gray-500">
                      {abierto ? "−" : "+"}
                    </span>

                  </div>

                </button>


                {/* CONTENIDO DESPLEGABLE */}

                {abierto && (

                  <div
                    id={`tutorial-${tutorial.id}`}
                    className="border-t bg-gray-50 p-6 sm:p-8"
                  >

                    <h4 className="text-xl font-bold mb-6">
                      Instrucciones paso a paso
                    </h4>


                    {/* PASOS */}

                    <ol className="space-y-5">

                      {tutorial.pasos.map((paso, index) => (

                        <li
                          key={index}
                          className="flex items-start gap-4"
                        >

                          <span className="shrink-0 w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                            {index + 1}
                          </span>

                          <p className="text-gray-700 leading-relaxed pt-1">
                            {paso}
                          </p>

                        </li>

                      ))}

                    </ol>


                    {/* CONSEJO */}

                    <div className="mt-8 bg-white border-l-4 border-gray-900 rounded-lg p-5">

                      <h5 className="font-bold mb-2">
                        💡 Recomendación
                      </h5>

                      <p className="text-gray-600 leading-relaxed">
                        {tutorial.consejo}
                      </p>

                    </div>

                  </div>

                )}

              </article>

            );

          })}

        </div>

      </main>


      {/* =========================
          DESCARGA
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">

        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center">

          <h2 className="text-3xl font-bold mb-5">
            ¿Todavía no tenés la aplicación?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Descargá el software educativo para Windows
            y comenzá a explorar sus contenidos,
            cuestionarios y actividades interactivas.
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