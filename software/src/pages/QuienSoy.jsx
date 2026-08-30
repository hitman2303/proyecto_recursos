import { useState } from "react";
import { personajes } from "../data/personajes";

function QuienSoy() {

  const [personajeActual, setPersonajeActual] =
    useState(0);

  const [puntaje, setPuntaje] =
    useState(0);

  const [mostrarResultado, setMostrarResultado] =
    useState(false);

  const [respondido, setRespondido] =
    useState(false);

  const [respuestaSeleccionada, setRespuestaSeleccionada] =
    useState(null);


  const personaje =
    personajes[personajeActual];


  // =========================
  // RESPONDER
  // =========================

  const responder = (opcion) => {

    if (respondido) return;

    setRespuestaSeleccionada(opcion);

    setRespondido(true);

    if (
      opcion === personaje.respuesta
    ) {

      setPuntaje(
        (puntajeActual) =>
          puntajeActual + 1
      );

    }

  };


  // =========================
  // SIGUIENTE
  // =========================

  const siguiente = () => {

    const siguientePersonaje =
      personajeActual + 1;

    if (
      siguientePersonaje <
      personajes.length
    ) {

      setPersonajeActual(
        siguientePersonaje
      );

      setRespondido(false);

      setRespuestaSeleccionada(null);

    } else {

      setMostrarResultado(true);

    }

  };


  // =========================
  // REINICIAR
  // =========================

  const reiniciarJuego = () => {

    setPersonajeActual(0);

    setPuntaje(0);

    setMostrarResultado(false);

    setRespondido(false);

    setRespuestaSeleccionada(null);

  };


  // =========================
  // RESULTADO FINAL
  // =========================

  if (mostrarResultado) {

    const porcentaje =
      (
        (puntaje /
          personajes.length) *
        100
      ).toFixed(0);


    return (

      <div className="p-6 max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-4">
          🕵️ Juego finalizado
        </h1>

        <p className="text-xl">
          Puntaje:
          {" "}
          {puntaje}/
          {personajes.length}
        </p>

        <p className="text-xl mt-2">
          Porcentaje:
          {" "}
          {porcentaje}%
        </p>


        <button
          onClick={reiniciarJuego}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
        >
          Jugar nuevamente
        </button>

      </div>

    );

  }


  // =========================
  // JUEGO
  // =========================

  return (

    <div className="p-6 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-2">
        🕵️ ¿Quién soy?
      </h1>

      <p className="text-gray-500 mb-8">
        Leé las pistas e identificá al personaje histórico.
      </p>


      {/* PROGRESO */}

      <div className="mb-6">

        <p className="text-sm text-gray-500 mb-2">
          Personaje
          {" "}
          {personajeActual + 1}
          {" "}
          de
          {" "}
          {personajes.length}
        </p>

        <div className="w-full bg-gray-200 rounded-full h-2">

          <div
            className="bg-black h-2 rounded-full transition-all"
            style={{
              width:
                `${
                  ((personajeActual + 1) /
                    personajes.length) *
                  100
                }%`
            }}
          />

        </div>

      </div>


      {/* PISTAS */}

      <div className="border rounded-2xl p-6 mb-6">

        <h2 className="text-xl font-bold mb-4">
          Pistas
        </h2>

        <div className="space-y-3">

          {personaje.pistas.map(
            (pista, index) => (

              <div
                key={index}
                className="border-l-4 border-black pl-4"
              >

                <p>
                  {pista}
                </p>

              </div>

            )
          )}

        </div>

      </div>


      {/* OPCIONES */}

      <div className="grid gap-3">

        {personaje.opciones.map(
          (opcion) => {

            const esCorrecta =
              opcion === personaje.respuesta;

            const esSeleccionada =
              opcion ===
              respuestaSeleccionada;

            let estilo =
              "border p-4 rounded-xl text-left transition";


            if (respondido) {

              if (esCorrecta) {

                estilo +=
                  " bg-green-100 border-green-500";

              }

              else if (
                esSeleccionada
              ) {

                estilo +=
                  " bg-red-100 border-red-500";

              }

            }


            return (

              <button
                key={opcion}
                onClick={() =>
                  responder(opcion)
                }
                className={estilo}
              >
                {opcion}
              </button>

            );

          }
        )}

      </div>


      {/* SIGUIENTE */}

      {respondido && (

        <div className="mt-6">

          <button
            onClick={siguiente}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            {personajeActual ===
            personajes.length - 1
              ? "Ver resultado"
              : "Siguiente personaje"
            }
          </button>

        </div>

      )}

    </div>

  );

}

export default QuienSoy;