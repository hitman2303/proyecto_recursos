import { useEffect, useState } from "react";

function Historial() {

  const [intentos, setIntentos] = useState([]);

  useEffect(() => {
    const datos =
      JSON.parse(localStorage.getItem("historialQuiz")) || [];

    setIntentos(datos);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Historial de Intentos
      </h1>

      {intentos.length === 0 ? (
        <p>No hay intentos registrados.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Puntaje</th>
              <th>Porcentaje</th>
            </tr>
          </thead>

          <tbody>
            {intentos.map((intento, index) => (
              <tr key={index}>
                <td>{intento.fecha}</td>
                <td>
                  {intento.puntaje}/{intento.total}
                </td>
                <td>{intento.porcentaje}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Historial;