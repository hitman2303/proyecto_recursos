import { useNavigate } from "react-router-dom";

function Home() {

  const navigate =
    useNavigate();

  const usuario =
    JSON.parse(
      localStorage.getItem("usuario")
    );

  return (

    <div className="space-y-8">

      {/* BIENVENIDA */}

      <div className="bg-white border rounded-2xl p-8 shadow-sm">

        <p className="text-gray-500 mb-2">
          Bienvenido/a
        </p>

        <h1 className="text-4xl font-bold">
          {usuario?.nombre || "Alumno"}
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl">

          Explorá los principales acontecimientos
          de la Historia Argentina entre 1930 y
          1982 mediante contenidos, actividades
          y juegos interactivos.

        </p>

      </div>


      {/* ACCESOS */}

      <div>

        <h2 className="text-2xl font-bold mb-4">
          Continuar aprendiendo
        </h2>


        <div className="grid md:grid-cols-3 gap-5">


          <button
            onClick={() =>
              navigate("/historia")
            }
            className="bg-white border rounded-2xl p-6 text-left hover:shadow-md transition"
          >

            <div className="text-3xl mb-3">
              📚
            </div>

            <h3 className="font-bold text-lg">
              Historia
            </h3>

            <p className="text-gray-500 mt-2">
              Conocé los procesos históricos.
            </p>

          </button>


          <button
            onClick={() =>
              navigate("/timeline")
            }
            className="bg-white border rounded-2xl p-6 text-left hover:shadow-md transition"
          >

            <div className="text-3xl mb-3">
              🕐
            </div>

            <h3 className="font-bold text-lg">
              Línea de tiempo
            </h3>

            <p className="text-gray-500 mt-2">
              Explorá los acontecimientos.
            </p>

          </button>


          <button
            onClick={() =>
              navigate("/quiz")
            }
            className="bg-white border rounded-2xl p-6 text-left hover:shadow-md transition"
          >

            <div className="text-3xl mb-3">
              📝
            </div>

            <h3 className="font-bold text-lg">
              Quiz
            </h3>

            <p className="text-gray-500 mt-2">
              Poné a prueba tus conocimientos.
            </p>

          </button>

        </div>

      </div>

    </div>

  );

}

export default Home;