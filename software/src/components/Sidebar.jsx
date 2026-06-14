import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r p-4">

      <h2 className="font-bold text-xl mb-6">
        Historia Argentina
      </h2>

      <nav className="flex flex-col gap-3">

        <Link to="/home">
          Inicio
        </Link>

        <Link to="/quiz">
          Quiz
        </Link>

        <Link to="/timeline">
          Línea de Tiempo
        </Link>

        <Link to="/juegos">
          Juegos
        </Link>

        <Link to="/acerca">
          Acerca de
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;