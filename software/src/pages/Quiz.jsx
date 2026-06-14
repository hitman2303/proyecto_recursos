import Timer from "../components/Timer";
import { questions } from "../data/quiz";
import { useState, useEffect } from "react";
import { generarPDF } from "../utils/generarPDF";
function Quiz() {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showResult, setShowResult] = useState(false);
const handleAnswer = (option) => {

  if (option === questions[currentQuestion].answer) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;

  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowResult(true);
  }
};
 const finalizarQuiz = () => {
  setShowResult(true);
};
useEffect(() => {
  if (showResult) {
    localStorage.setItem(
      "resultadoQuiz",
      JSON.stringify({
        puntaje: score,
        total: questions.length,
        fecha: new Date().toLocaleDateString(),
      })
    );
  }
}, [showResult, score]);
if (showResult) {

  const porcentaje =
    (score / questions.length) * 100;

  let mensaje = "";

  if (porcentaje >= 80) {
    mensaje = "Excelente";
  }
  else if (porcentaje >= 60) {
    mensaje = "Bueno";
  }
  else {
    mensaje = "Necesita reforzar contenidos";
  }

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">
        Quiz Finalizado
      </h1>

      <p className="mt-4">
        Puntaje: {score}/{questions.length}
      </p>

      <p>
        Porcentaje: {porcentaje.toFixed(0)}%
      </p>

      <p>
        Desempeño: {mensaje}
      </p>

    </div>
  );
}
return (
  <div className="p-6">

    <Timer
      tiempoInicial={60}
      onTimeUp={finalizarQuiz}
    />

    <h1 className="text-3xl font-bold mb-4">
      Quiz de Historia
    </h1>

    <h2 className="text-xl mb-4">
      {questions[currentQuestion].question}
    </h2>

    <div className="flex flex-col gap-2">

      {questions[currentQuestion].options.map(
        (option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="border p-2 rounded hover:bg-gray-100"
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