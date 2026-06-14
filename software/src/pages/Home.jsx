import { Link } from "react-router-dom";

function Home() {

  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Bienvenido
      </h1>

      <h2 className="text-xl mb-6">
        {usuario?.nombre}
      </h2>

      <div className="flex flex-col gap-3">

        <Link
          to="/quiz"
          className="border p-3"
        >
          Quiz
        </Link>

        <Link
          to="/timeline"
          className="border p-3"
        >
          Línea de Tiempo
        </Link>

        <Link
          to="/juegos"
          className="border p-3"
        >
          Juegos
        </Link>

        <Link
          to="/acerca"
          className="border p-3"
        >
          Acerca de
        </Link>

      </div>

    </div>
  );
}

export default Home;