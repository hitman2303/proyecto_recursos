import { useEffect, useState } from "react";

function Docente() {

  // =========================
  // ESTADOS
  // =========================

  const [intentos, setIntentos] = useState([]);

  const [
    alumnoSeleccionado,
    setAlumnoSeleccionado
  ] = useState("todos");


  // =========================
  // CARGAR RESULTADOS
  // =========================

  useEffect(() => {

    const datos =
      JSON.parse(
        localStorage.getItem("historialQuiz")
      ) || [];

    setIntentos(datos);

  }, []);


  // =========================
  // LISTA DE ALUMNOS
  // =========================

  const alumnos = [
    ...new Set(
      intentos
        .map((intento) => intento.nombre)
        .filter(Boolean)
    )
  ];


  // =========================
  // FILTRAR INTENTOS
  // =========================

  const intentosFiltrados =
    alumnoSeleccionado === "todos"
      ? intentos
      : intentos.filter(
          (intento) =>
            intento.nombre === alumnoSeleccionado
        );


  // =========================
  // ESTADÍSTICAS
  // =========================

  const cantidadIntentos =
    intentosFiltrados.length;


  const promedio =
    cantidadIntentos > 0
      ? (
          intentosFiltrados.reduce(
            (total, intento) =>
              total +
              Number(intento.porcentaje),
            0
          ) / cantidadIntentos
        ).toFixed(0)
      : 0;


  const mejorResultado =
    cantidadIntentos > 0
      ? Math.max(
          ...intentosFiltrados.map(
            (intento) =>
              Number(intento.porcentaje)
          )
        )
      : 0;


  const peorResultado =
    cantidadIntentos > 0
      ? Math.min(
          ...intentosFiltrados.map(
            (intento) =>
              Number(intento.porcentaje)
          )
        )
      : 0;


  // =========================
  // RENDER
  // =========================

  return (

    <div className="p-6">

      {/* ENCABEZADO */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Panel Docente
        </h1>

        <p className="text-gray-500 mt-2">
          Seguimiento del rendimiento de los alumnos
        </p>

      </div>


      {/* ========================= */}
      {/* FILTRO */}
      {/* ========================= */}

      <div className="mb-8">

        <label className="block font-semibold mb-2">
          Filtrar por alumno
        </label>

        <select
          value={alumnoSeleccionado}
          onChange={(e) =>
            setAlumnoSeleccionado(
              e.target.value
            )
          }
          className="border rounded-lg p-3 min-w-60"
        >

          <option value="todos">
            Todos los alumnos
          </option>

          {alumnos.map(
            (alumno) => (

              <option
                key={alumno}
                value={alumno}
              >
                {alumno}
              </option>

            )
          )}

        </select>

      </div>


      {/* ========================= */}
      {/* ESTADÍSTICAS */}
      {/* ========================= */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Intentos
          </p>

          <p className="text-3xl font-bold mt-2">
            {cantidadIntentos}
          </p>

        </div>


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Promedio
          </p>

          <p className="text-3xl font-bold mt-2">
            {promedio}%
          </p>

        </div>


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Mejor resultado
          </p>

          <p className="text-3xl font-bold mt-2">
            {mejorResultado}%
          </p>

        </div>


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Resultado más bajo
          </p>

          <p className="text-3xl font-bold mt-2">
            {peorResultado}%
          </p>

        </div>

      </div>


      {/* ========================= */}
      {/* TABLA */}
      {/* ========================= */}

      <div className="border rounded-xl overflow-hidden">

        <div className="p-4 border-b">

          <h2 className="text-xl font-bold">
            Resultados
          </h2>

          <p className="text-sm text-gray-500">
            {alumnoSeleccionado === "todos"
              ? "Mostrando todos los intentos registrados"
              : `Mostrando resultados de ${alumnoSeleccionado}`
            }
          </p>

        </div>


        {intentosFiltrados.length === 0 ? (

          <p className="p-6 text-gray-500">
            No hay intentos registrados.
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b bg-gray-50">

                  <th className="text-left p-4">
                    Alumno
                  </th>

                  <th className="text-left p-4">
                    Puntaje
                  </th>

                  <th className="text-left p-4">
                    Porcentaje
                  </th>

                  <th className="text-left p-4">
                    Fecha
                  </th>

                </tr>

              </thead>


              <tbody>

                {intentosFiltrados.map(
                  (intento, index) => (

                    <tr
                      key={index}
                      className="border-b"
                    >

                      <td className="p-4">
                        {intento.nombre || "Alumno"}
                      </td>

                      <td className="p-4">
                        {intento.puntaje}/
                        {intento.total}
                      </td>

                      <td className="p-4">
                        {intento.porcentaje}%
                      </td>

                      <td className="p-4">
                        {intento.fecha}
                      </td>

                    </tr>

                  )
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