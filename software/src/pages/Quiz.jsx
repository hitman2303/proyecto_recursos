import Timer from "../components/Timer";
import { questions } from "../data/quiz";
import { useState, useEffect, useRef } from "react";
import { generarPDF } from "../utils/generarPDF";
function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
const [showResult, setShowResult] = useState(false);

const resultadoGuardado = useRef(false);
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

  if (
    showResult &&
    !resultadoGuardado.current
  ) {

    resultadoGuardado.current = true;

    const porcentaje =
      (score / questions.length) * 100;

    const usuario =
      JSON.parse(
        localStorage.getItem("usuario")
      );

    const nuevoIntento = {

      nombre:
        usuario?.nombre || "Alumno",

      puntaje:
        score,

      total:
        questions.length,

      porcentaje:
        porcentaje.toFixed(0),

      fecha:
        new Date().toLocaleDateString(),

    };


    const intentosGuardados =
      JSON.parse(
        localStorage.getItem("historialQuiz")
      ) || [];


    intentosGuardados.push(
      nuevoIntento
    );


    localStorage.setItem(
      "historialQuiz",
      JSON.stringify(
        intentosGuardados
      )
    );

  }

}, [showResult, score]);


  // =========================
  // RESULTADO
  // =========================

  if (showResult) {

    const porcentaje =
      (score / questions.length) * 100;

   let mensaje = "";
let feedback = "";

if (porcentaje >= 80) {

  mensaje = "Excelente";

  feedback =
    "Demostraste una muy buena comprensión de los procesos históricos trabajados. Lograste relacionar acontecimientos, períodos y protagonistas de la Historia Argentina.";

}

else if (porcentaje >= 60) {

  mensaje = "Buen desempeño";

  feedback =
    "Comprendiste correctamente una parte importante de los contenidos trabajados. Te recomendamos revisar algunos acontecimientos históricos para fortalecer tus conocimientos.";

}

else {

  mensaje = "Necesita reforzar contenidos";

  feedback =
    "Te recomendamos volver a consultar la sección de Historia y la Línea de Tiempo para reforzar los principales procesos, acontecimientos y personajes históricos antes de realizar nuevamente la actividad.";

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

    const usuario =
      JSON.parse(
        localStorage.getItem("usuario")
      );

    generarPDF({

      nombre:
        usuario?.nombre || "Alumno",

      puntaje: score,

      total: questions.length,

      porcentaje:
        porcentaje.toFixed(0),

      desempeno:
        mensaje,

      feedback,

      fecha:
        new Date().toLocaleDateString(),

    });

  }}
  className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
>
  Descargar resultado PDF
</button>
<button
  onClick={() => {

    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);

    resultadoGuardado.current = false;

  }}
  className="mt-4 border px-6 py-3 rounded-lg"
>
  Realizar nuevamente
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