import { useNavigate } from "react-router-dom";

function LogoutButton() {

  const navigate = useNavigate();

  const cerrarSesion = () => {

    localStorage.removeItem("usuario");

    navigate("/");

  };

  return (

    <button
      onClick={cerrarSesion}
      className="border rounded-lg px-4 py-2 hover:bg-gray-100"
    >
      Cerrar sesión
    </button>

  );

}

export default LogoutButton;