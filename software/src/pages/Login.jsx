import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const ingresar = () => {

    if (!tipo) {
      alert("Seleccione si es Alumno o Docente");
      return;
    }

    if (!nombre.trim()) {
      alert("Ingrese su nombre");
      return;
    }

    // =========================
    // ACCESO DOCENTE
    // =========================

    if (tipo === "docente") {

      if (password !== "1234") {
        alert("Contraseña docente incorrecta");
        return;
      }

    }

    // =========================
    // GUARDAR USUARIO
    // =========================

    localStorage.setItem(
      "usuario",
      JSON.stringify({
        nombre: nombre.trim(),
        tipo
      })
    );

    // =========================
    // REDIRECCIÓN
    // =========================

    if (tipo === "docente") {

      navigate("/docente");

    } else {

      navigate("/home");

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Proyecto Historia Argentina
        </h1>

        <p className="text-center text-gray-500 mb-8">
          1930 - 1982
        </p>


        {/* ========================= */}
        {/* TIPO DE USUARIO */}
        {/* ========================= */}

        <h2 className="font-semibold mb-3">
          Seleccione su perfil
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-6">

          <button
            onClick={() => setTipo("alumno")}
            className={`border rounded-xl p-4 ${
              tipo === "alumno"
                ? "bg-blue-100 border-blue-500"
                : ""
            }`}
          >
            <div className="text-2xl">
              👨‍🎓
            </div>

            <div className="font-semibold">
              Alumno
            </div>

          </button>


          <button
            onClick={() => setTipo("docente")}
            className={`border rounded-xl p-4 ${
              tipo === "docente"
                ? "bg-blue-100 border-blue-500"
                : ""
            }`}
          >

            <div className="text-2xl">
              👨‍🏫
            </div>

            <div className="font-semibold">
              Docente
            </div>

          </button>

        </div>


        {/* ========================= */}
        {/* NOMBRE */}
        {/* ========================= */}

        <label className="block mb-2 font-semibold">
          Nombre
        </label>

        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
          className="border rounded-lg p-3 w-full mb-4"
        />


        {/* ========================= */}
        {/* PASSWORD DOCENTE EN ESTA PRUEBA DE 1234*/}
        {/* ========================= */}

        {tipo === "docente" && (

          <div className="mb-4">

            <label className="block mb-2 font-semibold">
              Contraseña docente
            </label>

            <input
              type="password"
              placeholder="Ingrese la contraseña"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="border rounded-lg p-3 w-full"
            />

            <p className="text-xs text-gray-500 mt-2">
              Acceso docente protegido para el proyecto.
            </p>

          </div>

        )}


        {/* ========================= */}
        {/* INGRESAR */}
        {/* ========================= */}

        <button
          onClick={ingresar}
          className="w-full bg-black text-white rounded-lg p-3 mt-4 hover:opacity-90"
        >
          Ingresar
        </button>

      </div>

    </div>

  );

}

export default Login;