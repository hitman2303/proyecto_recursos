import { useEffect, useState } from "react";

function Historial() {

  const [intentos, setIntentos] =
    useState([]);


  useEffect(() => {

    const usuario =
      JSON.parse(
        localStorage.getItem("usuario")
      );

    const datos =
      JSON.parse(
        localStorage.getItem("historialQuiz")
      ) || [];


    const intentosDelAlumno =
      datos.filter(
        (intento) =>
          intento.nombre === usuario?.nombre
      );


    setIntentos(
      intentosDelAlumno
    );

  }, []);


  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-2">
        Mi historial
      </h1>

      <p className="text-gray-500 mb-6">
        Consultá tus intentos anteriores.
      </p>


      {intentos.length === 0 ? (

        <div className="border rounded-xl p-6 bg-white">

          <p className="text-gray-500">
            Todavía no realizaste ningún Quiz.
          </p>

        </div>

      ) : (

        <div className="border rounded-xl overflow-hidden bg-white">

          <table className="w-full">

            <thead className="bg-gray-50 border-b">

              <tr>

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

              {intentos.map(
                (intento, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-4">
                      {intento.fecha}
                    </td>

                    <td className="p-4">
                      {intento.puntaje}/
                      {intento.total}
                    </td>

                    <td className="p-4">
                      {intento.porcentaje}%
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );

}

export default Historial;