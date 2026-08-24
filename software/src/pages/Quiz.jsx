import Timer from "../components/Timer";
import { questions } from "../data/quiz";
import { useState, useEffect } from "react";
import { generarPDF } from "../utils/generarPDF";

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultadoGuardado, setResultadoGuardado] = useState(false);

  const handleAnswer = (option) => {

    const esCorrecta =
      option === questions[currentQuestion].answer;

    const nuevoScore =
      esCorrecta ? score + 1 : score;

    if (esCorrecta) {
      setScore(nuevoScore);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion);

    } else {

      setScore(nuevoScore);
      setShowResult(true);

    }
  };

  const finalizarQuiz = () => {
    setShowResult(true);
  };

  useEffect(() => {

    if (showResult && !resultadoGuardado) {

      const porcentaje =
        (score / questions.length) * 100;

     const usuario =
  JSON.parse(localStorage.getItem("usuario")) || {
    nombre: "Alumno"
  };

const nuevoIntento = {
  nombre: usuario.nombre,
  puntaje: score,
  total: questions.length,
  porcentaje: porcentaje.toFixed(0),
  fecha: new Date().toLocaleDateString(),
};

      const intentosGuardados =
        JSON.parse(
          localStorage.getItem("historialQuiz")
        ) || [];

      intentosGuardados.push(nuevoIntento);

      localStorage.setItem(
        "historialQuiz",
        JSON.stringify(intentosGuardados)
      );

      setResultadoGuardado(true);
    }

  }, [showResult, score, resultadoGuardado]);


  // =========================
  // RESULTADO
  // =========================

  if (showResult) {

    const porcentaje =
      (score / questions.length) * 100;

    let mensaje = "";

    if (porcentaje >= 80) {

      mensaje = "Excelente";

    } else if (porcentaje >= 60) {

      mensaje = "Bueno";

    } else {

      mensaje = "Necesita reforzar contenidos";

    }

    return (

      <div className="p-6 max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Quiz Finalizado
        </h1>

        <div className="border rounded-xl p-6 shadow">

          <p className="text-xl mb-2">
            Puntaje:
            {" "}
            <strong>
              {score}/{questions.length}
            </strong>
          </p>

          <p className="text-xl mb-2">
            Porcentaje:
            {" "}
            <strong>
              {porcentaje.toFixed(0)}%
            </strong>
          </p>

          <p className="text-xl">
            Desempeño:
            {" "}
            <strong>
              {mensaje}
            </strong>
          </p>

          <button
            onClick={() =>
              generarPDF({
                puntaje: score,
                total: questions.length,
                porcentaje: porcentaje.toFixed(0),
                fecha: new Date().toLocaleDateString()
              })
            }
            className="mt-6 border rounded-lg px-4 py-2"
          >
            Descargar PDF
          </button>

        </div>

      </div>

    );
  }


  // =========================
  // QUIZ
  // =========================

  return (

    <div className="p-6 max-w-2xl mx-auto">

      <Timer
        tiempoInicial={60}
        onTimeUp={finalizarQuiz}
      />

      <h1 className="text-3xl font-bold mb-4">
        Quiz de Historia
      </h1>

      <p className="mb-4">
        Pregunta {currentQuestion + 1} de {questions.length}
      </p>

      <h2 className="text-xl mb-4">
        {questions[currentQuestion].question}
      </h2>

      <div className="flex flex-col gap-2">

        {questions[currentQuestion].options.map(
          (option) => (

            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="border p-3 rounded-lg hover:bg-gray-100"
            >
              {option}
            </button>

          )
        )}

      </div>

    </div>

  );
}

export default Quiz;