
import { useEffect, useState } from "react";

function Historial() {
  const [intentos, setIntentos] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(
      localStorage.getItem("usuario")
    );

    const datos = JSON.parse(
      localStorage.getItem("historialQuiz")
    ) || [];

    const intentosDelAlumno = datos
      .filter(
        (intento) =>
          intento.nombre === usuario?.nombre
      )
      .map((intento) => ({
        ...intento,
        tipo: intento.tipo || "Quiz",
        dificultad: intento.dificultad || null
      }))
      .reverse();

    setIntentos(intentosDelAlumno);
  }, []);

  const promedio = intentos.length
    ? Math.round(
        intentos.reduce(
          (total, intento) =>
            total + Number(intento.porcentaje || 0),
          0
        ) / intentos.length
      )
    : 0;

  const mejorResultado = intentos.length
    ? Math.max(
        ...intentos.map(
          (intento) =>
            Number(intento.porcentaje || 0)
        )
      )
    : 0;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">
        Mi historial
      </h1>

      <p className="text-gray-500 mb-6">
        Consultá tus resultados en cuestionarios y juegos.
      </p>

      {intentos.length === 0 ? (
        <div className="border rounded-xl p-6 bg-white">
          <p className="text-gray-500">
            Todavía no realizaste ninguna actividad.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Actividades realizadas
              </p>

              <p className="text-2xl font-bold">
                {intentos.length}
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Promedio general
              </p>

              <p className="text-2xl font-bold">
                {promedio}%
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Mejor resultado
              </p>

              <p className="text-2xl font-bold">
                {mejorResultado}%
              </p>
            </div>
          </div>

          <div className="border rounded-xl overflow-x-auto bg-white">
            <table className="w-full min-w-[700px]">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4">
                    Actividad
                  </th>

                  <th className="text-left p-4">
                    Dificultad
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
                </tr>
              </thead>

              <tbody>
                {intentos.map((intento, index) => (
                  <tr
                    key={`${intento.fecha}-${index}`}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">
                      {intento.tipo}
                    </td>

                    <td className="p-4">
                      {intento.dificultad || "—"}
                    </td>

                    <td className="p-4">
                      {intento.fecha}
                    </td>

                    <td className="p-4">
                      {intento.puntaje}/{intento.total}
                    </td>

                    <td className="p-4 font-semibold">
                      {intento.porcentaje}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Historial;
