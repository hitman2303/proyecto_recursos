import { useEffect, useState } from "react";

function Docente() {

  const [resultado, setResultado] =
    useState(null);

  useEffect(() => {

    const datos = JSON.parse(
      localStorage.getItem("resultadoQuiz")
    );

    setResultado(datos);

  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold">
        Panel Docente
      </h1>

      {resultado && (

        <div className="mt-4 border p-4">

          <p>
            Puntaje:
            {resultado.puntaje}/
            {resultado.total}
          </p>

          <p>
            Fecha:
            {resultado.fecha}
          </p>

        </div>

      )}

    </div>
  );
}

export default Docente;