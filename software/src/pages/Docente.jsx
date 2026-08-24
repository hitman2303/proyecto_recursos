import { useEffect, useState } from "react";

function Docente() {

  const [intentos, setIntentos] = useState([]);

  useEffect(() => {

    const datos =
      JSON.parse(
        localStorage.getItem("historialQuiz")
      ) || [];

    setIntentos(datos);

  }, []);


  // =========================
  // ESTADÍSTICAS
  // =========================

  const totalIntentos = intentos.length;

  const promedio =
    totalIntentos > 0
      ? intentos.reduce(
          (total, intento) =>
            total + Number(intento.porcentaje),
          0
        ) / totalIntentos
      : 0;

  const mejorResultado =
    totalIntentos > 0
      ? Math.max(
          ...intentos.map(
            (intento) =>
              Number(intento.porcentaje)
          )
        )
      : 0;


  return (

    <div className="p-6">

      {/* TÍTULO */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Panel Docente
        </h1>

        <p className="text-gray-500 mt-2">
          Seguimiento de los resultados de los alumnos
        </p>

      </div>


      {/* ========================= */}
      {/* TARJETAS DE ESTADÍSTICAS */}
      {/* ========================= */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        {/* INTENTOS */}

        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Intentos realizados
          </p>

          <p className="text-3xl font-bold mt-2">
            {totalIntentos}
          </p>

        </div>


        {/* PROMEDIO */}

        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Promedio general
          </p>

          <p className="text-3xl font-bold mt-2">
            {promedio.toFixed(0)}%
          </p>

        </div>


        {/* MEJOR */}

        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Mejor resultado
          </p>

          <p className="text-3xl font-bold mt-2">
            {mejorResultado}%
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* TABLA */}
      {/* ========================= */}

      <div className="border rounded-xl overflow-hidden">

        <div className="p-5 border-b">

          <h2 className="text-xl font-bold">
            Historial de resultados
          </h2>

        </div>


        {intentos.length === 0 ? (

          <div className="p-6">

            <p className="text-gray-500">
              Todavía no hay resultados registrados.
            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-4">
                    Alumno
                  </th>
                  <th className="text-left p-4">
                    Fecha
                  </th>

                  <th className="text-left p-4">
                    Puntaje
                  </th>

                  <th className="text-left p-4">
                    Porcentaje
                  </th>

                  <th className="text-left p-4">
                    Desempeño
                  </th>

                </tr>

              </thead>


              <tbody>

                {intentos.map(
                  (intento, index) => {

                    const porcentaje =
                      Number(
                        intento.porcentaje
                      );


                    let desempeño = "";

                    if (porcentaje >= 80) {

                      desempeño =
                        "Excelente";

                    } else if (
                      porcentaje >= 60
                    ) {

                      desempeño =
                        "Bueno";

                    } else {

                      desempeño =
                        "Necesita reforzar";

                    }


                    return (

                      <tr
                        key={index}
                        className="border-b"
                      >
                        <td className="p-4">
                          {intento.nombre || "Alumno"}
                        </td>

                        <td className="p-4">
                          {intento.fecha}
                        </td>

                        <td className="p-4">
                          {intento.puntaje}/
                          {intento.total}
                        </td>

                        <td className="p-4">
                          {porcentaje}%
                        </td>

                        <td className="p-4">
                          {desempeño}
                        </td>

                      </tr>

                    );

                  }
                )}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>

  );
}

export default Docente;