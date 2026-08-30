import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Sidebar() {

  const usuario =
    JSON.parse(
      localStorage.getItem("usuario")
    );

  const linkClass = ({ isActive }) =>
    `
      block px-4 py-3 rounded-xl transition
      ${
        isActive
          ? "bg-black text-white"
          : "hover:bg-gray-100"
      }
    `;

  return (

    <aside className="w-64 min-h-screen bg-white border-r flex flex-col p-4">

      {/* LOGO */}

      <div className="mb-10">

        <h2 className="font-bold text-2xl">
          Historia
        </h2>

        <p className="text-sm text-gray-500">
          Argentina 1930 - 1982
        </p>

      </div>


      {/* USUARIO */}

      {usuario && (

        <div className="border rounded-xl p-3 mb-6 bg-gray-50">

          <p className="font-semibold">
            {usuario.nombre}
          </p>

          <p className="text-xs text-gray-500 capitalize">
            {usuario.tipo}
          </p>

        </div>

      )}


      {/* NAVEGACIÓN */}

      <nav className="flex flex-col gap-2 flex-1">

        {usuario?.tipo === "alumno" && (

          <>

            <NavLink
              to="/home"
              className={linkClass}
            >
              🏠 Inicio
            </NavLink>


            <NavLink
              to="/historia"
              className={linkClass}
            >
              📚 Historia
            </NavLink>


            <NavLink
              to="/timeline"
              className={linkClass}
            >
              🕐 Línea de tiempo
            </NavLink>


            <NavLink
              to="/quiz"
              className={linkClass}
            >
              📝 Quiz
            </NavLink>


            <NavLink
              to="/juegos"
              className={linkClass}
            >
              🎮 Juegos
            </NavLink>


            <NavLink
              to="/historial"
              className={linkClass}
            >
              📊 Mi historial
            </NavLink>


            <NavLink
              to="/acerca"
              className={linkClass}
            >
              ℹ️ Acerca del proyecto
            </NavLink>

          </>

        )}


        {usuario?.tipo === "docente" && (

          <NavLink
            to="/docente"
            className={linkClass}
          >
            👨‍🏫 Panel docente
          </NavLink>

        )}

      </nav>


      {/* LOGOUT */}

      <div className="pt-4 border-t">

        <LogoutButton />

      </div>

    </aside>

  );

}

export default Sidebar;