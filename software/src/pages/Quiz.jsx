
import Timer from "../components/Timer";
import { questionsByDifficulty } from "../data/quiz";
import { useState, useEffect, useRef } from "react";
import { generarPDF } from "../utils/generarPDF";

const niveles = {
  facil: {
    nombre: "Fácil",
    descripcion: "Preguntas directas sobre fechas, personajes y acontecimientos históricos.",
    color: "border-green-400"
  },
  intermedio: {
    nombre: "Intermedio",
    descripcion: "Relaciones entre acontecimientos, causas y consecuencias.",
    color: "border-yellow-400"
  },
  dificil: {
    nombre: "Difícil",
    descripcion: "Análisis de procesos políticos, económicos y sociales.",
    color: "border-red-400"
  }
};

function mezclarPreguntas(preguntas) {
  return [...preguntas]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
}

function Quiz() {
  const [dificultad, setDificultad] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const resultadoGuardado = useRef(false);

  const iniciarQuiz = (nivel) => {
    const preguntas = mezclarPreguntas(
      questionsByDifficulty[nivel]
    );

    setDificultad(nivel);
    setSelectedQuestions(preguntas);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);

    resultadoGuardado.current = false;
  };

  const elegirOtroNivel = () => {
    setDificultad(null);
    setSelectedQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);

    resultadoGuardado.current = false;
  };

  const handleAnswer = (option) => {
    if (showResult) return;

    const preguntaActual = selectedQuestions[currentQuestion];
    const esCorrecta = option === preguntaActual.answer;

    const nuevoScore = esCorrecta ? score + 1 : score;
    const siguientePregunta = currentQuestion + 1;

    setScore(nuevoScore);

    if (siguientePregunta < selectedQuestions.length) {
      setCurrentQuestion(siguientePregunta);
    } else {
      setShowResult(true);
    }
  };

  const finalizarQuiz = () => {
    setShowResult(true);
  };

  useEffect(() => {
    if (
      !showResult ||
      resultadoGuardado.current ||
      selectedQuestions.length === 0
    ) {
      return;
    }

    resultadoGuardado.current = true;

    const porcentaje = Math.round(
      (score / selectedQuestions.length) * 100
    );

    const usuario = JSON.parse(
      localStorage.getItem("usuario")
    );

    const nuevoIntento = {
      nombre: usuario?.nombre || "Alumno",
      tipo: "Quiz",
      dificultad: niveles[dificultad].nombre,
      puntaje: score,
      total: selectedQuestions.length,
      porcentaje,
      fecha: new Date().toLocaleDateString()
    };

    const intentosGuardados =
      JSON.parse(localStorage.getItem("historialQuiz")) || [];

    intentosGuardados.push(nuevoIntento);

    localStorage.setItem(
      "historialQuiz",
      JSON.stringify(intentosGuardados)
    );
  }, [showResult, score, selectedQuestions, dificultad]);

  // SELECCIÓN DE DIFICULTAD

  if (!dificultad) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-3 text-center">
          Quiz de Historia Argentina
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Seleccioná el nivel de dificultad para comenzar.
          Cada cuestionario contiene 10 preguntas y dura 60 segundos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Object.entries(niveles).map(([clave, nivel]) => (
            <button
              key={clave}
              onClick={() => iniciarQuiz(clave)}
              className={`border-t-4 ${nivel.color} border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition text-left bg-white`}
            >
              <h2 className="text-2xl font-bold mb-3">
                {nivel.nombre}
              </h2>

              <p className="text-gray-600">
                {nivel.descripcion}
              </p>

              <p className="mt-5 font-semibold">
                10 preguntas
              </p>

              <span className="inline-block mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg">
                Comenzar
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // RESULTADO

  if (showResult) {
    const porcentaje = Math.round(
      (score / selectedQuestions.length) * 100
    );

    let mensaje = "";
    let feedback = "";

    if (porcentaje >= 80) {
      mensaje = "Excelente";

      feedback =
        "Demostraste una muy buena comprensión de los procesos históricos trabajados. Lograste reconocer y relacionar acontecimientos, períodos y protagonistas de la Historia Argentina.";
    } else if (porcentaje >= 60) {
      mensaje = "Buen desempeño";

      feedback =
        "Comprendiste correctamente una parte importante de los contenidos. Te recomendamos revisar algunos acontecimientos y procesos históricos para fortalecer tus conocimientos.";
    } else {
      mensaje = "Necesita reforzar contenidos";

      feedback =
        "Te recomendamos volver a consultar la sección de Historia y la Línea de Tiempo para reforzar los principales procesos, acontecimientos y personajes históricos antes de realizar nuevamente la actividad.";
    }

    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Quiz finalizado
        </h1>

        <div className="border rounded-xl p-6 shadow">
          <p className="text-lg mb-3">
            Nivel:
            {" "}
            <strong>{niveles[dificultad].nombre}</strong>
          </p>

          <p className="text-xl mb-2">
            Puntaje:
            {" "}
            <strong>
              {score}/{selectedQuestions.length}
            </strong>
          </p>

          <p className="text-xl mb-2">
            Porcentaje:
            {" "}
            <strong>{porcentaje}%</strong>
          </p>

          <p className="text-xl">
            Desempeño:
            {" "}
            <strong>{mensaje}</strong>
          </p>

          <div className="mt-6 border rounded-xl p-5 bg-gray-50">
            <h2 className="text-xl font-bold mb-3">
              Devolución pedagógica
            </h2>

            <p className="text-gray-700">
              {feedback}
            </p>
          </div>

          <button
            onClick={() => {
              const usuario = JSON.parse(
                localStorage.getItem("usuario")
              );

              generarPDF({
                nombre: usuario?.nombre || "Alumno",
                dificultad: niveles[dificultad].nombre,
                puntaje: score,
                total: selectedQuestions.length,
                porcentaje,
                desempeno: mensaje,
                feedback,
                fecha: new Date().toLocaleDateString()
              });
            }}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
          >
            Descargar resultado PDF
          </button>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => iniciarQuiz(dificultad)}
              className="border px-5 py-3 rounded-lg hover:bg-gray-100"
            >
              Repetir este nivel
            </button>

            <button
              onClick={elegirOtroNivel}
              className="bg-gray-900 text-white px-5 py-3 rounded-lg"
            >
              Elegir otro nivel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // CUESTIONARIO

  const preguntaActual = selectedQuestions[currentQuestion];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Timer
        tiempoInicial={60}
        onTimeUp={finalizarQuiz}
      />

      <div className="flex justify-between items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold">
          Quiz de Historia
        </h1>

        <span className="bg-gray-200 px-3 py-1 rounded-lg font-semibold">
          {niveles[dificultad].nombre}
        </span>
      </div>

      <p className="mb-4 text-gray-600">
        Pregunta {currentQuestion + 1} de {selectedQuestions.length}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-gray-900 h-2 rounded-full transition-all"
          style={{
            width: `${((currentQuestion + 1) / selectedQuestions.length) * 100}%`
          }}
        />
      </div>

      <h2 className="text-xl font-semibold mb-5">
        {preguntaActual.question}
      </h2>

      <div className="flex flex-col gap-3">
        {preguntaActual.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="border p-3 rounded-lg hover:bg-gray-100 transition text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;

