
import { useState, useEffect, useRef } from "react";

const preguntasOriginales = [
  {
    evento: "Golpe de Estado encabezado por José Félix Uriburu.",
    opciones: ["1928", "1930", "1932", "1943"],
    respuesta: "1930",
    explicacion: "Ocurrió el 6 de septiembre de 1930 y derrocó a Hipólito Yrigoyen."
  },
  {
    evento: "Movilización obrera del 17 de octubre por la liberación de Perón.",
    opciones: ["1943", "1945", "1946", "1955"],
    respuesta: "1945",
    explicacion: "El 17 de octubre de 1945 fue una movilización fundamental para el surgimiento del peronismo como movimiento político."
  },
  {
    evento: "Primer triunfo electoral de Juan Domingo Perón.",
    opciones: ["1943", "1945", "1946", "1952"],
    respuesta: "1946",
    explicacion: "Perón fue elegido presidente en febrero de 1946."
  },
  {
    evento: "Golpe de Estado que derrocó a Juan Domingo Perón.",
    opciones: ["1952", "1955", "1958", "1962"],
    respuesta: "1955",
    explicacion: "El golpe de septiembre de 1955 dio inicio a la Revolución Libertadora."
  },
  {
    evento: "Inicio de la presidencia de Arturo Frondizi.",
    opciones: ["1955", "1958", "1962", "1963"],
    respuesta: "1958",
    explicacion: "Arturo Frondizi asumió la presidencia el 1 de mayo de 1958."
  },
  {
    evento: "Golpe de Estado que derrocó a Arturo Illia.",
    opciones: ["1962", "1963", "1966", "1969"],
    respuesta: "1966",
    explicacion: "El golpe del 28 de junio de 1966 instaló la dictadura de la Revolución Argentina."
  },
  {
    evento: "El Cordobazo.",
    opciones: ["1966", "1968", "1969", "1973"],
    respuesta: "1969",
    explicacion: "El Cordobazo ocurrió el 29 de mayo de 1969 y fue una gran protesta obrero-estudiantil."
  },
  {
    evento: "Masacre de Ezeiza.",
    opciones: ["1972", "1973", "1974", "1976"],
    respuesta: "1973",
    explicacion: "Ocurrió el 20 de junio de 1973, durante el regreso de Perón a la Argentina."
  },
  {
    evento: "Golpe de Estado que inició el Proceso de Reorganización Nacional.",
    opciones: ["1973", "1974", "1976", "1978"],
    respuesta: "1976",
    explicacion: "El golpe cívico-militar ocurrió el 24 de marzo de 1976."
  },
  {
    evento: "Comienzo de la Guerra de Malvinas.",
    opciones: ["1979", "1980", "1982", "1983"],
    respuesta: "1982",
    explicacion: "La guerra comenzó el 2 de abril de 1982 y finalizó el 14 de junio."
  }
];

function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function LineaTiempoJuego() {
  const [preguntas, setPreguntas] = useState([]);
  const [actual, setActual] = useState(0);
  const [score, setScore] = useState(0);
  const [respondida, setRespondida] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const guardado = useRef(false);

  const iniciarJuego = () => {
    setPreguntas(mezclar(preguntasOriginales));
    setActual(0);
    setScore(0);
    setRespondida(false);
    setCorrecto(false);
    setFinalizado(false);
    guardado.current = false;
  };

  useEffect(() => {
    iniciarJuego();
  }, []);

  const responder = (opcion) => {
    if (respondida) return;

    const esCorrecta = opcion === preguntas[actual].respuesta;

    setCorrecto(esCorrecta);
    setRespondida(true);

    if (esCorrecta) {
      setScore((anterior) => anterior + 1);
    }
  };

  const siguiente = () => {
    if (actual + 1 < preguntas.length) {
      setActual((anterior) => anterior + 1);
      setRespondida(false);
      setCorrecto(false);
    } else {
      setFinalizado(true);
    }
  };

  useEffect(() => {
    if (!finalizado || guardado.current) return;

    guardado.current = true;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const intento = {
      nombre: usuario?.nombre || "Alumno",
      tipo: "La línea del tiempo",
      puntaje: score,
      total: preguntas.length,
      porcentaje: Math.round((score / preguntas.length) * 100),
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
  }, [finalizado, score, preguntas.length]);

  if (!preguntas.length) return null;

  const pregunta = preguntas[actual];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">
        📜 La línea del tiempo
      </h1>

      <p className="text-gray-500 mb-6">
        Identificá en qué año ocurrió cada acontecimiento de la Historia Argentina.
      </p>

      {!finalizado ? (
        <div className="border rounded-xl p-6 shadow bg-white">
          <div className="flex justify-between text-sm text-gray-500 mb-5">
            <span>
              Pregunta {actual + 1} de {preguntas.length}
            </span>
            <span>
              Aciertos: {score}
            </span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
            <div
              className="bg-gray-900 h-2 rounded-full"
              style={{
                width: `${((actual + 1) / preguntas.length) * 100}%`
              }}
            />
          </div>

          <h2 className="text-xl font-bold mb-6">
            ¿En qué año ocurrió este acontecimiento?
          </h2>

          <div className="border-l-4 border-gray-800 pl-4 py-4 mb-6">
            <p className="text-lg">
              {pregunta.evento}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {pregunta.opciones.map((opcion) => (
              <button
                key={opcion}
                onClick={() => responder(opcion)}
                disabled={respondida}
                className="border rounded-lg p-4 font-bold text-lg hover:bg-gray-100 disabled:opacity-70"
              >
                {opcion}
              </button>
            ))}
          </div>

          {respondida && (
            <div className="mt-6 border rounded-xl p-4 bg-gray-50">
              <p className="font-bold mb-2">
                {correcto ? "¡Respuesta correcta!" : `Respuesta incorrecta. El año correcto es ${pregunta.respuesta}.`}
              </p>

              <p className="text-gray-700">
                {pregunta.explicacion}
              </p>

              <button
                onClick={siguiente}
                className="mt-5 bg-black text-white px-6 py-3 rounded-lg"
              >
                {actual + 1 === preguntas.length
                  ? "Ver resultado"
                  : "Siguiente"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">
            ¡Actividad finalizada!
          </h2>

          <p className="text-xl mb-3">
            Puntaje: <strong>{score}/{preguntas.length}</strong>
          </p>

          <p className="text-xl mb-4">
            Resultado:{" "}
            <strong>
              {Math.round((score / preguntas.length) * 100)}%
            </strong>
          </p>

          <p className="text-gray-600 mb-6">
            {score >= 8
              ? "¡Excelente! Tenés un gran dominio de la cronología histórica."
              : score >= 6
              ? "¡Buen trabajo! Repasá algunas fechas para mejorar."
              : "Te recomendamos consultar la Línea de Tiempo del material de Historia y volver a intentarlo."}
          </p>

          <button
            onClick={iniciarJuego}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Volver a jugar
          </button>
        </div>
      )}
    </div>
  );
}

export default LineaTiempoJuego;
