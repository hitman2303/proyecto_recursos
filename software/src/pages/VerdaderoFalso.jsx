
import { useState, useEffect, useRef } from "react";

const afirmaciones = [
  {
    texto: "José Félix Uriburu encabezó el golpe de Estado de 1930.",
    respuesta: true,
    explicacion: "Correcto. Uriburu encabezó el golpe militar del 6 de septiembre de 1930 que derrocó a Hipólito Yrigoyen."
  },
  {
    texto: "La Década Infame se caracterizó por la transparencia electoral.",
    respuesta: false,
    explicacion: "La Década Infame estuvo marcada por el fraude electoral, la corrupción y la inestabilidad política."
  },
  {
    texto: "El GOU tuvo participación en el golpe de Estado de 1943.",
    respuesta: true,
    explicacion: "El Grupo de Oficiales Unidos fue una agrupación militar vinculada al golpe que derrocó a Ramón Castillo."
  },
  {
    texto: "Juan Domingo Perón fue elegido presidente por primera vez en 1946.",
    respuesta: true,
    explicacion: "Perón ganó las elecciones presidenciales de febrero de 1946 y asumió en junio de ese año."
  },
  {
    texto: "La Revolución Libertadora derrocó a Juan Domingo Perón en 1955.",
    respuesta: true,
    explicacion: "El golpe de septiembre de 1955 derrocó al gobierno de Perón e inició la dictadura denominada Revolución Libertadora."
  },
  {
    texto: "Arturo Frondizi gobernó Argentina entre 1963 y 1966.",
    respuesta: false,
    explicacion: "Frondizi gobernó entre 1958 y 1962. Arturo Illia fue presidente entre 1963 y 1966."
  },
  {
    texto: "Los Azules y los Colorados eran dos facciones enfrentadas dentro de las Fuerzas Armadas.",
    respuesta: true,
    explicacion: "Ambas facciones militares tenían diferencias sobre la orientación política y el papel del peronismo."
  },
  {
    texto: "El Cordobazo ocurrió en mayo de 1969.",
    respuesta: true,
    explicacion: "El Cordobazo fue una importante protesta obrero-estudiantil contra la dictadura de Juan Carlos Onganía."
  },
  {
    texto: "La Masacre de Ezeiza ocurrió el 20 de junio de 1973.",
    respuesta: true,
    explicacion: "La jornada estuvo marcada por enfrentamientos armados durante el regreso de Juan Domingo Perón al país."
  },
  {
    texto: "La última dictadura comenzó el 24 de marzo de 1976.",
    respuesta: true,
    explicacion: "Ese día las Fuerzas Armadas derrocaron a María Estela Martínez de Perón e instauraron el Proceso de Reorganización Nacional."
  },
  {
    texto: "José Alfredo Martínez de Hoz fue ministro de Economía durante la última dictadura.",
    respuesta: true,
    explicacion: "Martínez de Hoz impulsó una política económica de apertura comercial y financiera desde 1976."
  },
  {
    texto: "La Guerra de Malvinas comenzó en 1983.",
    respuesta: false,
    explicacion: "La guerra comenzó el 2 de abril de 1982 y finalizó el 14 de junio de ese año."
  }
];

function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5).slice(0, 10);
}

function VerdaderoFalso() {
  const [preguntas, setPreguntas] = useState([]);
  const [actual, setActual] = useState(0);
  const [score, setScore] = useState(0);
  const [respondida, setRespondida] = useState(false);
  const [respuestaElegida, setRespuestaElegida] = useState(null);
  const [finalizado, setFinalizado] = useState(false);

  const guardado = useRef(false);

  const iniciarJuego = () => {
    setPreguntas(mezclar(afirmaciones));
    setActual(0);
    setScore(0);
    setRespondida(false);
    setRespuestaElegida(null);
    setFinalizado(false);
    guardado.current = false;
  };

  useEffect(() => {
    iniciarJuego();
  }, []);

  const responder = (respuesta) => {
    if (respondida || finalizado) return;

    setRespuestaElegida(respuesta);
    setRespondida(true);

    if (respuesta === preguntas[actual].respuesta) {
      setScore((anterior) => anterior + 1);
    }
  };

  const siguiente = () => {
    if (actual + 1 < preguntas.length) {
      setActual((anterior) => anterior + 1);
      setRespondida(false);
      setRespuestaElegida(null);
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
      tipo: "Verdadero o falso",
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

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">
        ⚖️ Verdadero o falso
      </h1>

      <p className="text-gray-500 mb-6">
        Leé cada afirmación y decidí si es verdadera o falsa.
      </p>

      {!finalizado ? (
        <div className="border rounded-xl p-6 shadow bg-white">
          <div className="flex justify-between mb-5 text-sm text-gray-500">
            <span>
              Afirmación {actual + 1} de {preguntas.length}
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

          <h2 className="text-xl font-semibold mb-8">
            {preguntas[actual].texto}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => responder(true)}
              disabled={respondida}
              className="border-2 border-green-600 rounded-xl p-4 font-bold hover:bg-green-50 disabled:opacity-60"
            >
              Verdadero
            </button>

            <button
              onClick={() => responder(false)}
              disabled={respondida}
              className="border-2 border-red-600 rounded-xl p-4 font-bold hover:bg-red-50 disabled:opacity-60"
            >
              Falso
            </button>
          </div>

          {respondida && (
            <div className="mt-6 border rounded-xl p-4 bg-gray-50">
              <p className="font-bold mb-2">
                {respuestaElegida === preguntas[actual].respuesta
                  ? "¡Respuesta correcta!"
                  : "Respuesta incorrecta"}
              </p>

              <p className="text-gray-700">
                {preguntas[actual].explicacion}
              </p>

              <button
                onClick={siguiente}
                className="mt-5 bg-black text-white px-6 py-3 rounded-lg"
              >
                {actual + 1 === preguntas.length
                  ? "Ver resultado"
                  : "Siguiente afirmación"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">
            ¡Juego terminado!
          </h2>

          <p className="text-xl mb-2">
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
              ? "¡Excelente! Reconocés muy bien los acontecimientos y procesos históricos."
              : score >= 6
              ? "¡Buen trabajo! Te recomendamos repasar algunas afirmaciones y sus explicaciones."
              : "Seguí practicando. Volvé a consultar el material de Historia para reforzar tus conocimientos."}
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

export default VerdaderoFalso;
