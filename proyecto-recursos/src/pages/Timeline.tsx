import { useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "../data/timeline";

export default function Timeline() {
  const [selected, setSelected] = useState(timeline[0]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ENCABEZADO */}
      <section className="bg-gray-900 text-white px-4 sm:px-6 py-14">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Recorrido histórico
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Línea de tiempo
          </h1>

          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Recorré los principales acontecimientos de la Historia Argentina
            entre 1930 y 1982.
          </p>

        </div>
      </section>


      {/* TIMELINE */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        <div className="relative">

          {/* Línea central */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">

            {timeline.map((item, index) => {

              const activo = selected.id === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Punto */}
                  <button
                    onClick={() => setSelected(item)}
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10"
                    aria-label={`Seleccionar ${item.titulo}`}
                  >
                    <motion.div
                      animate={{
                        scale: activo ? 1.4 : 1,
                      }}
                      className={`w-5 h-5 rounded-full border-4 border-white shadow ${
                        activo
                          ? "bg-red-500"
                          : "bg-gray-900"
                      }`}
                    />
                  </button>


                  {/* Tarjeta */}
                  <motion.button
                    onClick={() => setSelected(item)}
                    whileHover={{ scale: 1.02 }}
                    className={`text-left ml-10 md:ml-0 w-full md:w-[45%] ${
                      index % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >

                    <div
                      className={`bg-white rounded-2xl border p-6 shadow-sm transition ${
                        activo
                          ? "border-red-400 shadow-lg"
                          : "border-gray-200"
                      }`}
                    >

                      <span className="inline-block bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                        {item.anio}
                      </span>

                      <h2 className="text-xl font-bold mb-2">
                        {item.titulo}
                      </h2>

                      <p className="text-gray-500 text-sm mb-3">
                        {item.categoria}
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        {item.descripcion}
                      </p>

                    </div>

                  </motion.button>

                </div>
              );
            })}

          </div>
        </div>


        {/* DETALLE */}
        <motion.section
          key={selected.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white rounded-2xl shadow-lg border p-6 sm:p-8"
        >

          <div className="flex flex-wrap gap-3 mb-4">

            <span className="bg-red-500 text-white px-4 py-1 rounded-full font-bold">
              {selected.anio}
            </span>

            <span className="bg-gray-100 px-4 py-1 rounded-full text-gray-700">
              {selected.categoria}
            </span>

          </div>

          <h2 className="text-3xl font-bold mb-4">
            {selected.titulo}
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            {selected.descripcion}
          </p>

          <p className="mt-4 text-gray-500">
            Período: {selected.periodo}
          </p>

        </motion.section>

      </main>

    </div>
  );
}