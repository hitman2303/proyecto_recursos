
import { useState, useEffect, useRef } from "react";
import { personajes } from "../data/personajes";

function QuienSoy() {
  const [personajeActual, setPersonajeActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respondido, setRespondido] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [pistasVisibles, setPistasVisibles] = useState(1);

  const resultadoGuardado = useRef(false);

  const personaje = personajes[personajeActual];

  const responder = (opcion) => {
    if (respondido) return;

    setRespuestaSeleccionada(opcion);
    setRespondido(true);

    if (opcion === personaje.respuesta) {
      const puntosObtenidos = Math.max(1, 4 - pistasVisibles);
      setPuntaje((actual) => actual + puntosObtenidos);
    }
  };

  const revelarPista = () => {
    if (pistasVisibles < personaje.pistas.length && !respondido) {
      setPistasVisibles((actual) => actual + 1);
    }
  };

  const siguiente = () => {
    const siguientePersonaje = personajeActual + 1;

    if (siguientePersonaje < personajes.length) {
      setPersonajeActual(siguientePersonaje);
      setRespondido(false);
      setRespuestaSeleccionada(null);
      setPistasVisibles(1);
    } else {
      setMostrarResultado(true);
    }
  };

  const reiniciarJuego = () => {
    setPersonajeActual(0);
    setPuntaje(0);
    setMostrarResultado(false);
    setRespondido(false);
    setRespuestaSeleccionada(null);
    setPistasVisibles(1);
    resultadoGuardado.current = false;
  };

  useEffect(() => {
    if (mostrarResultado && !resultadoGuardado.current) {
      resultadoGuardado.current = true;

      const puntajeMaximo = personajes.length * 3;
      const porcentaje = Math.round(
        (puntaje / puntajeMaximo) * 100
      );

      const usuario = JSON.parse(
        localStorage.getItem("usuario")
      );

      const intento = {
        nombre: usuario?.nombre || "Alumno",
        tipo: "¿Quién soy?",
        puntaje,
        total: puntajeMaximo,
        porcentaje,
        fecha: new Date().toLocaleDateString()
      };

      const historial = JSON.parse(
        localStorage.getItem("historialQuiz")
      ) || [];

      historial.push(intento);

      localStorage.setItem(
        "historialQuiz",
        JSON.stringify(historial)
      );
    }
  }, [mostrarResultado, puntaje]);

  if (mostrarResultado) {
    const puntajeMaximo = personajes.length * 3;
    const porcentaje = Math.round(
      (puntaje / puntajeMaximo) * 100
    );

    let mensaje = "¡Seguí practicando!";

    if (porcentaje >= 85) {
      mensaje = "¡Excelente! Reconocés muy bien a los protagonistas históricos.";
    } else if (porcentaje >= 60) {
      mensaje = "¡Muy buen trabajo! Tenés una buena base de conocimientos.";
    } else if (porcentaje >= 40) {
      mensaje = "Buen intento. Te recomendamos repasar los personajes históricos.";
    }

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          🕵️ Juego finalizado
        </h1>

        <div className="border rounded-xl p-6 shadow-sm">
          <p className="text-xl mb-2">
            Puntaje: <strong>{puntaje}/{puntajeMaximo}</strong>
          </p>

          <p className="text-xl mb-4">
            Porcentaje: <strong>{porcentaje}%</strong>
          </p>

          <div className="bg-gray-50 border rounded-xl p-4">
            <h2 className="font-bold mb-2">
              Devolución
            </h2>
            <p>{mensaje}</p>
          </div>

          <button
            onClick={reiniciarJuego}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
          >
            Jugar nuevamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        🕵️ ¿Quién soy?
      </h1>

      <p className="text-gray-500 mb-8">
        Descubrí qué personaje histórico se esconde detrás de las pistas.
        ¡Cuantas menos pistas necesites, más puntos obtenés!
      </p>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>
            Personaje {personajeActual + 1} de {personajes.length}
          </span>
          <span>
            Puntaje: {puntaje}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-black h-2 rounded-full transition-all"
            style={{
              width: `${((personajeActual + 1) / personajes.length) * 100}%`
            }}
          />
        </div>
      </div>

      <div className="border rounded-2xl p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">
          Pistas
        </h2>

        <div className="space-y-3">
          {personaje.pistas.slice(0, pistasVisibles).map(
            (pista, index) => (
              <div
                key={index}
                className="border-l-4 border-black pl-4 py-2"
              >
                <p className="text-sm text-gray-500 mb-1">
                  Pista {index + 1}
                </p>
                <p>{pista}</p>
              </div>
            )
          )}
        </div>

        {!respondido && pistasVisibles < personaje.pistas.length && (
          <button
            onClick={revelarPista}
            className="mt-5 border px-5 py-2 rounded-lg hover:bg-gray-100"
          >
            Revelar otra pista
          </button>
        )}

        <p className="text-sm text-gray-500 mt-4">
          Puntos posibles por acertar: {Math.max(1, 4 - pistasVisibles)}
        </p>
      </div>

      <h2 className="font-bold mb-3">
        ¿Quién es este personaje?
      </h2>

      <div className="grid gap-3">
        {personaje.opciones.map((opcion) => {
          const esCorrecta = opcion === personaje.respuesta;
          const esSeleccionada = opcion === respuestaSeleccionada;

          let estilo = "border p-4 rounded-xl text-left transition";

          if (respondido && esCorrecta) {
            estilo += " bg-green-100 border-green-500";
          } else if (respondido && esSeleccionada) {
            estilo += " bg-red-100 border-red-500";
          } else if (!respondido) {
            estilo += " hover:bg-gray-100";
          }

          return (
            <button
              key={opcion}
              onClick={() => responder(opcion)}
              disabled={respondido}
              className={estilo}
            >
              {opcion}
            </button>
          );
        })}
      </div>

      {respondido && (
        <div className="mt-5 border rounded-xl p-4">
          {respuestaSeleccionada === personaje.respuesta ? (
            <p className="text-green-700 font-bold">
              ¡Correcto! Obtuviste {Math.max(1, 4 - pistasVisibles)} puntos.
            </p>
          ) : (
            <p className="text-red-700 font-bold">
              No es correcto. La respuesta era {personaje.respuesta}.
            </p>
          )}

          <button
            onClick={siguiente}
            className="mt-4 bg-black text-white px-6 py-3 rounded-lg"
          >
            {personajeActual === personajes.length - 1
              ? "Ver resultado"
              : "Siguiente personaje"}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuienSoy;
