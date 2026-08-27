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

  const cantidadIntentos =
    intentos.length;


  const promedio =
    cantidadIntentos > 0
      ? (
          intentos.reduce(
            (total, intento) =>
              total + Number(intento.porcentaje),
            0
          ) / cantidadIntentos
        ).toFixed(0)
      : 0;


  const mejorResultado =
    cantidadIntentos > 0
      ? Math.max(
          ...intentos.map(
            intento =>
              Number(intento.porcentaje)
          )
        )
      : 0;


  const peorResultado =
    cantidadIntentos > 0
      ? Math.min(
          ...intentos.map(
            intento =>
              Number(intento.porcentaje)
          )
        )
      : 0;

const alumnos = [
  ...new Set(
    intentos.map(
      intento => intento.nombre
    )
  )
];
const [alumnoSeleccionado, setAlumnoSeleccionado] =
  useState("todos");
  const intentosFiltrados =
  alumnoSeleccionado === "todos"
    ? intentos
    : intentos.filter(
        intento =>
          intento.nombre === alumnoSeleccionado
      );
  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-2">
        Panel Docente
      </h1>

      <p className="text-gray-500 mb-8">
        Seguimiento del rendimiento de los alumnos
      </p>


      {/* ========================= */}
      {/* TARJETAS */}
      {/* ========================= */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Intentos
          </p>

          <p className="text-3xl font-bold">
            {cantidadIntentos}
          </p>

        </div>


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Promedio
          </p>

          <p className="text-3xl font-bold">
            {promedio}%
          </p>

        </div>


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Mejor resultado
          </p>

          <p className="text-3xl font-bold">
            {mejorResultado}%
          </p>

        </div>


        <div className="border rounded-xl p-5 shadow-sm">

          <p className="text-gray-500">
            Resultado más bajo
          </p>

          <p className="text-3xl font-bold">
            {peorResultado}%
          </p>

        </div>

      </div>

<div className="mb-6">

  <label className="block font-semibold mb-2">
    Filtrar por alumno
  </label>

  <select
    value={alumnoSeleccionado}
    onChange={(e) =>
      setAlumnoSeleccionado(e.target.value)
    }
    className="border rounded-lg p-2"
  >

    <option value="todos">
      Todos los alumnos
    </option>

    {alumnos.map(
      alumno => (
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
      {/* TABLA */}
      {/* ========================= */}

      <div className="border rounded-xl overflow-hidden">

        <div className="p-4 border-b">

          <h2 className="text-xl font-bold">
            Historial de evaluaciones
          </h2>

        </div>


        {intentos.length === 0 ? (

          <p className="p-6 text-gray-500">
            Todavía no hay evaluaciones registradas.
          </p>

        ) : (

          <table className="w-full">

            <thead>

              <tr className="border-b">

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

              {intentos.map(
                (intento, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-4">
                      {intento.nombre}
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

        )}

      </div>

    </div>

  );

}

export default Docente;