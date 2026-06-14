import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [nombre, setNombre] = useState("");

  const navigate = useNavigate();

  const ingresar = () => {

    if (!nombre.trim()) return;

    localStorage.setItem(
      "usuario",
      JSON.stringify({
        nombre
      })
    );

    navigate("/home");
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-4">
        Proyecto Historia Argentina
      </h1>

      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
        className="border p-2"
      />

      <button
        onClick={ingresar}
        className="ml-2 border px-4 py-2"
      >
        Ingresar
      </button>

    </div>
  );
}

export default Login;