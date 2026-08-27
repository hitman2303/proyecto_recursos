import { useState } from "react";

const eventosCorrectos = [
  {
    id: 1,
    año: 1930,
    texto: "Golpe de Estado de 1930"
  },
  {
    id: 2,
    año: 1946,
    texto: "Primer gobierno de Juan Domingo Perón"
  },
  {
    id: 3,
    año: 1955,
    texto: "Golpe de Estado de 1955"
  },
  {
    id: 4,
    año: 1976,
    texto: "Golpe de Estado de 1976"
  },
  {
    id: 5,
    año: 1982,
    texto: "Guerra de Malvinas"
  }
];

function OrdenarEventos() {

  const [eventos, setEventos] =
    useState(
      [...eventosCorrectos].sort(
        () => Math.random() - 0.5
      )
    );

  const [resultado, setResultado] =
    useState(null);


  const moverArriba = (index) => {

    if (index === 0) return;

    const copia = [...eventos];

    [
      copia[index - 1],
      copia[index]
    ] = [
      copia[index],
      copia[index - 1]
    ];

    setEventos(copia);

  };


  const comprobar = () => {

    const correcto =
      eventos.every(
        (evento, index) =>
          evento.id ===
          eventosCorrectos[index].id
      );

    setResultado(correcto);

  };


  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-2">
        Ordenar eventos históricos
      </h1>

      <p className="text-gray-500 mb-6">
        Ordená los acontecimientos desde el más antiguo
        al más reciente.
      </p>


      <div className="space-y-3">

        {eventos.map(
          (evento, index) => (

            <div
              key={evento.id}
              className="border rounded-xl p-4 flex items-center justify-between"
            >

              <span>
                {evento.texto}
              </span>

              <button
                onClick={() =>
                  moverArriba(index)
                }
                className="border rounded-lg px-3 py-1"
              >
                ↑
              </button>

            </div>

          )
        )}

      </div>


      <button
        onClick={comprobar}
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
      >
        Comprobar
      </button>


      {resultado === true && (

        <p className="mt-6 text-green-600 font-bold">
          ¡Excelente! Los eventos están correctamente ordenados.
        </p>

      )}


      {resultado === false && (

        <p className="mt-6 text-red-600 font-bold">
          El orden no es correcto. Intentá nuevamente.
        </p>

      )}

    </div>

  );

}

export default OrdenarEventos;