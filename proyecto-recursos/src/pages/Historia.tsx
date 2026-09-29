import { Link } from "react-router-dom";

export default function Historia() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* =========================
          HEADER
      ========================= */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Recorrido histórico
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Historia Argentina
          </h1>

          <p className="text-2xl text-gray-400 mb-6">
            1930 — 1982
          </p>

          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Un recorrido por los principales procesos políticos,
            sociales y económicos que atravesaron la Argentina durante
            este período.
          </p>

        </div>

      </section>


      {/* =========================
          INTRODUCCIÓN
      ========================= */}

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-14">

        <div className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm mb-12">

          <h2 className="text-2xl font-bold mb-4">
            Un período de profundas transformaciones
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Entre 1930 y 1982, la Argentina atravesó golpes de Estado,
            gobiernos democráticos, transformaciones económicas,
            conflictos sociales, cambios en las relaciones laborales
            y períodos de fuerte inestabilidad política.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Comprender este período permite analizar cómo se
            transformaron las instituciones, la sociedad y el papel
            del Estado, hasta llegar a la Guerra de Malvinas y a la
            crisis final de la última dictadura militar.
          </p>

        </div>


        {/* =========================
            ETAPAS
        ========================= */}

        <div className="space-y-8">


          {/* 1930 */}

          <section className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">

            <div className="flex flex-col sm:flex-row sm:items-start gap-5">

              <div className="shrink-0">

                <span className="inline-flex bg-gray-900 text-white px-4 py-2 rounded-full font-bold">
                  1930
                </span>

              </div>

              <div>

                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Ruptura institucional
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Golpe de Estado de 1930
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  El golpe de Estado de 1930 representó la ruptura
                  del orden democrático en Argentina. Las Fuerzas
                  Armadas derrocaron al presidente Hipólito Yrigoyen
                  e inauguraron una etapa caracterizada por la
                  intervención militar en la vida política.
                </p>

              </div>

            </div>

          </section>


          {/* DÉCADA INFAME */}

          <section className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">

            <div className="flex flex-col sm:flex-row gap-5">

              <span className="shrink-0 inline-flex h-fit bg-gray-900 text-white px-4 py-2 rounded-full font-bold">
                1930–1943
              </span>

              <div>

                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Política y economía
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Década Infame
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  El período estuvo caracterizado por el fraude
                  electoral, la corrupción y la exclusión de amplios
                  sectores de la sociedad de la participación política.
                  Al mismo tiempo, la economía argentina comenzó a
                  experimentar importantes transformaciones vinculadas
                  con el crecimiento de la industrialización.
                </p>

              </div>

            </div>

          </section>


          {/* PERONISMO */}

          <section className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">

            <div className="flex flex-col sm:flex-row gap-5">

              <span className="shrink-0 inline-flex h-fit bg-gray-900 text-white px-4 py-2 rounded-full font-bold">
                1946–1955
              </span>

              <div>

                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Política y sociedad
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Primer peronismo
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  El primer gobierno de Juan Domingo Perón produjo
                  importantes transformaciones sociales y políticas.
                  Se ampliaron derechos laborales, aumentó el
                  protagonismo de los trabajadores y se fortaleció
                  la intervención del Estado en la economía.
                </p>

              </div>

            </div>

          </section>


          {/* 1955 */}

          <section className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">

            <div className="flex flex-col sm:flex-row gap-5">

              <span className="shrink-0 inline-flex h-fit bg-gray-900 text-white px-4 py-2 rounded-full font-bold">
                1955
              </span>

              <div>

                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Ruptura política
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Revolución Libertadora
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Un golpe militar derrocó a Juan Domingo Perón.
                  El nuevo régimen proscribió al peronismo y comenzó
                  una etapa de fuerte conflictividad política que
                  continuaría durante los años siguientes.
                </p>

              </div>

            </div>

          </section>


          {/* 1976 */}

          <section className="bg-white border rounded-2xl p-6 sm:p-8 shadow-sm">

            <div className="flex flex-col sm:flex-row gap-5">

              <span className="shrink-0 inline-flex h-fit bg-gray-900 text-white px-4 py-2 rounded-full font-bold">
                1976–1982
              </span>

              <div>

                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Dictadura y terrorismo de Estado
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Última dictadura militar
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  El 24 de marzo de 1976 las Fuerzas Armadas
                  derrocaron al gobierno de Isabel Perón y comenzó
                  la última dictadura militar argentina. El régimen
                  estuvo marcado por el terrorismo de Estado,
                  la represión, la censura y las desapariciones
                  forzadas.
                </p>

              </div>

            </div>

          </section>


          {/* MALVINAS */}

          <section className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg">

            <div className="flex flex-col sm:flex-row gap-5">

              <span className="shrink-0 inline-flex h-fit bg-white text-gray-900 px-4 py-2 rounded-full font-bold">
                1982
              </span>

              <div>

                <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Conflicto bélico
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Guerra de Malvinas
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  El conflicto con el Reino Unido comenzó el 2 de
                  abril de 1982 y finalizó el 14 de junio con la
                  rendición argentina. La derrota profundizó la crisis
                  de la dictadura militar y aceleró el proceso que
                  conduciría al retorno de la democracia.
                </p>

              </div>

            </div>

          </section>

        </div>


        {/* =========================
            SIGUIENTE RECURSO
        ========================= */}

        <div className="mt-14 text-center">

          <p className="text-gray-500 mb-4">
            ¿Querés recorrer los acontecimientos cronológicamente?
          </p>

          <Link
            to="/timeline"
            className="inline-flex bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
          >
            Explorar línea de tiempo →
          </Link>

        </div>

      </main>

    </div>
  );
}