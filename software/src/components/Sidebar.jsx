import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
function Sidebar() {

  const usuario =
  JSON.parse(
    localStorage.getItem("usuario")
  );

  return (
    <aside className="w-64 min-h-screen border-r p-4">

      <h2 className="font-bold text-xl mb-6">
        Historia Argentina
      </h2>

      <nav className="flex flex-col gap-3">

      {usuario?.tipo === "alumno" && (
  <>
    <Link to="/home">
      Inicio
    </Link>

    <Link to="/historia">
      Historia
    </Link>

    <Link to="/timeline">
      Línea de tiempo
    </Link>

    <Link to="/quiz">
      Quiz
    </Link>

    <Link to="/juegos">
      Juegos
    </Link>

    <Link to="/historial">
      Mi historial
    </Link>
  </>
)}

{usuario?.tipo === "docente" && (
  <>
    <Link to="/docente">
      Panel Docente
    </Link>
  </>
)}

<LogoutButton />
      </nav>

    </aside>
  );
}

export default Sidebar;