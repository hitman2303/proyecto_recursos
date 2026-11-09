
import { useState, useEffect, useRef } from "react";

const casos = [
  {
    pistas: [
      "Fui un militar argentino.",
      "Encabecé un golpe de Estado en septiembre de 1930.",
      "Mi llegada al poder inició una etapa de gobiernos de facto."
    ],
    opciones: [
      "José Félix Uriburu",
      "Arturo Frondizi",
      "Juan Domingo Perón",
      "Arturo Illia"
    ],
    respuesta: "José Félix Uriburu",
    explicacion: "José Félix Uriburu encabezó el golpe de Estado del 6 de septiembre de 1930 contra Hipólito Yrigoyen."
  },
  {
    pistas: [
      "Fui una figura central de la política argentina del siglo XX.",
      "Antes de ser presidente ocupé la Secretaría de Trabajo y Previsión.",
      "Fui elegido presidente por primera vez en 1946."
    ],
    opciones: [
      "Alejandro Lanusse",
      "Juan Domingo Perón",
      "Pedro Eugenio Aramburu",
      "Leopoldo Galtieri"
    ],
    respuesta: "Juan Domingo Perón",
    explicacion: "Juan Domingo Perón construyó una importante relación política con el movimiento obrero desde la Secretaría de Trabajo y Previsión."
  },
  {
    pistas: [
      "Fui una dirigente política y social argentina.",
      "Tuve una relación muy cercana con el movimiento obrero.",
      "Soy conocida popularmente como Evita."
    ],
    opciones: [
      "Alicia Moreau",
      "Eva Duarte de Perón",
      "María Estela Martínez",
      "Victoria Ocampo"
    ],
    respuesta: "Eva Duarte de Perón",
    explicacion: "Eva Duarte de Perón tuvo una importante participación política y social durante los primeros gobiernos peronistas."
  },
  {
    pistas: [
      "Fui presidente constitucional entre 1958 y 1962.",
      "Mi gobierno estuvo vinculado al desarrollismo.",
      "Impulsé la industrialización y la explotación petrolera."
    ],
    opciones: [
      "Arturo Illia",
      "Arturo Frondizi",
      "Juan Carlos Onganía",
      "Raúl Alfonsín"
    ],
    respuesta: "Arturo Frondizi",
    explicacion: "Arturo Frondizi impulsó políticas desarrollistas orientadas a fortalecer la industria y la producción energética."
  },
  {
    pistas: [
      "Fui presidente durante la década de 1960.",
      "Mi gobierno terminó con un golpe militar en 1966.",
      "Goberné Argentina entre 1963 y 1966."
    ],
    opciones: [
      "Arturo Illia",
      "Arturo Frondizi",
      "Alejandro Lanusse",
      "Héctor Cámpora"
    ],
    respuesta: "Arturo Illia",
    explicacion: "Arturo Illia fue derrocado por el golpe militar del 28 de junio de 1966."
  },
  {
    pistas: [
      "Fui un militar argentino.",
      "Encabecé un gobierno de facto que comenzó en 1966.",
      "Mi dictadura fue debilitada por grandes protestas sociales como el Cordobazo."
    ],
    opciones: [
      "Jorge Rafael Videla",
      "Juan Carlos Onganía",
      "Leopoldo Galtieri",
      "José Félix Uriburu"
    ],
    respuesta: "Juan Carlos Onganía",
    explicacion: "Juan Carlos Onganía encabezó la dictadura iniciada con el golpe de Estado de 1966."
  },
  {
    pistas: [
      "Soy un acontecimiento de la historia argentina.",
      "Ocurrió en Córdoba en mayo de 1969.",
      "Fue una protesta obrero-estudiantil contra la dictadura de Onganía."
    ],
    opciones: [
      "Masacre de Ezeiza",
      "Cordobazo",
      "Revolución Libertadora",
      "Semana Trágica"
    ],
    respuesta: "Cordobazo",
    explicacion: "El Cordobazo fue una importante rebelión popular ocurrida el 29 de mayo de 1969."
  },
  {
    pistas: [
      "Soy un acontecimiento político y social.",
      "Ocurrió el 20 de junio de 1973.",
      "Se produjo durante el regreso de Juan Domingo Perón a la Argentina."
    ],
    opciones: [
      "Cordobazo",
      "Masacre de Ezeiza",
      "Golpe de 1976",
      "17 de octubre"
    ],
    respuesta: "Masacre de Ezeiza",
    explicacion: "La Masacre de Ezeiza ocurrió durante los enfrentamientos armados en el acto de bienvenida a Perón."
  },
  {
    pistas: [
      "Fui un militar argentino.",
      "Integré la Junta Militar que tomó el poder en 1976.",
      "Fui el primer presidente de facto del Proceso de Reorganización Nacional."
    ],
    opciones: [
      "Leopoldo Galtieri",
      "Jorge Rafael Videla",
      "Alejandro Lanusse",
      "Juan Carlos Onganía"
    ],
    respuesta: "Jorge Rafael Videla",
    explicacion: "Jorge Rafael Videla encabezó la primera etapa de la última dictadura cívico-militar."
  },
  {
    pistas: [
      "Fui un funcionario de la última dictadura.",
      "Ocupé el Ministerio de Economía desde 1976.",
      "Impulsé una política de apertura económica y financiera."
    ],
    opciones: [
      "Celestino Rodrigo",
      "José Alfredo Martínez de Hoz",
      "Raúl Prebisch",
      "Álvaro Alsogaray"
    ],
    respuesta: "José Alfredo Martínez de Hoz",
    explicacion: "Martínez de Hoz fue ministro de Economía durante la primera etapa de la última dictadura."
  },
  {
    pistas: [
      "Fui un militar argentino.",
      "Goberné durante la última dictadura.",
      "Era presidente de facto cuando comenzó la Guerra de Malvinas."
    ],
    opciones: [
      "Jorge Rafael Videla",
      "Roberto Viola",
      "Leopoldo Galtieri",
      "Reynaldo Bignone"
    ],
    respuesta: "Leopoldo Galtieri",
    explicacion: "Leopoldo Galtieri encabezó la Junta Militar durante la Guerra de Malvinas en 1982."
  }
];

function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5).slice(0, 8);
}

function DetectiveHistorico() {
  const [preguntas, setPreguntas] = useState([]);
  const [actual, setActual] = useState(0);
  const [pistasVisibles, setPistasVisibles] = useState(1);
  const [score, setScore] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  const guardado = useRef(false);

  const iniciarJuego = () => {
    setPreguntas(mezclar(casos));
    setActual(0);
    setPistasVisibles(1);
    setScore(0);
    setRespondido(false);
    setCorrecto(false);
    setFinalizado(false);
    guardado.current = false;
  };

  useEffect(() => {
    iniciarJuego();
  }, []);

  const revelarPista = () => {
    if (respondido || pistasVisibles >= 3) return;

    setPistasVisibles((anterior) => anterior + 1);
  };

  const responder = (opcion) => {
    if (respondido) return;

    const esCorrecta = opcion === preguntas[actual].respuesta;

    setCorrecto(esCorrecta);
    setRespondido(true);

    if (esCorrecta) {
      const puntos = 4 - pistasVisibles;
      setScore((anterior) => anterior + puntos);
    }
  };

  const siguiente = () => {
    if (actual + 1 < preguntas.length) {
      setActual((anterior) => anterior + 1);
      setPistasVisibles(1);
      setRespondido(false);
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
      tipo: "Detective histórico",
      puntaje: score,
      total: preguntas.length * 3,
      porcentaje: Math.round(
        (score / (preguntas.length * 3)) * 100
      ),
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

  const casoActual = preguntas[actual];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">
        🔎 Detective histórico
      </h1>

      <p className="text-gray-500 mb-6">
        Investigá cada caso, descubrí las pistas y encontrá la respuesta correcta.
      </p>

      {!finalizado ? (
        <div className="border rounded-xl p-6 shadow bg-white">
          <div className="flex justify-between text-sm text-gray-500 mb-5">
            <span>
              Caso {actual + 1} de {preguntas.length}
            </span>

            <span>
              Puntaje: {score}
            </span>
          </div>

          <h2 className="text-xl font-bold mb-4">
            Pistas del caso
          </h2>

          <div className="space-y-3 mb-5">
            {casoActual.pistas.slice(0, pistasVisibles).map(
              (pista, indice) => (
                <div
                  key={indice}
                  className="border rounded-lg p-3 bg-gray-50"
                >
                  <strong>Pista {indice + 1}:</strong> {pista}
                </div>
              )
            )}
          </div>

          {!respondido && pistasVisibles < 3 && (
            <button
              onClick={revelarPista}
              className="border px-4 py-2 rounded-lg mb-6 hover:bg-gray-100"
            >
              Revelar otra pista
            </button>
          )}

          <h3 className="font-semibold mb-3">
            ¿Cuál es la respuesta correcta?
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {casoActual.opciones.map((opcion) => (
              <button
                key={opcion}
                onClick={() => responder(opcion)}
                disabled={respondido}
                className={`border p-3 rounded-lg text-left hover:bg-gray-100 disabled:opacity-70 ${
                  respondido && opcion === casoActual.respuesta
                    ? "border-green-600 bg-green-50"
                    : ""
                }`}
              >
                {opcion}
              </button>
            ))}
          </div>

          {respondido && (
            <div className="mt-5 border rounded-xl p-4 bg-gray-50">
              <p className="font-bold mb-2">
                {correcto
                  ? `¡Correcto! Ganaste ${4 - pistasVisibles} puntos.`
                  : "Respuesta incorrecta."}
              </p>

              <p className="text-gray-700">
                {casoActual.explicacion}
              </p>

              <button
                onClick={siguiente}
                className="mt-5 bg-black text-white px-6 py-3 rounded-lg"
              >
                {actual + 1 === preguntas.length
                  ? "Ver resultado"
                  : "Siguiente caso"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">
            Investigación finalizada
          </h2>

          <p className="text-xl mb-3">
            Puntaje: <strong>{score}/{preguntas.length * 3}</strong>
          </p>

          <p className="text-xl mb-4">
            Resultado:{" "}
            <strong>
              {Math.round(
                (score / (preguntas.length * 3)) * 100
              )}%
            </strong>
          </p>

          <p className="text-gray-600 mb-6">
            {score >= 20
              ? "¡Excelente trabajo, detective! Resolviste los casos utilizando muy pocas pistas."
              : score >= 12
              ? "Buen trabajo. Seguí investigando y relacionando los acontecimientos históricos."
              : "Te recomendamos repasar los personajes y procesos históricos para resolver nuevos casos."}
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

export default DetectiveHistorico;
