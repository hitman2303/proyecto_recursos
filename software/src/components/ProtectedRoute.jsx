import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
  role
}) {

  const usuario =
    JSON.parse(
      localStorage.getItem("usuario")
    );

  // No hay usuario
  if (!usuario) {

    return <Navigate to="/" replace />;

  }

  // El usuario no tiene el rol requerido
  if (role && usuario.tipo !== role) {

    if (usuario.tipo === "docente") {
      return <Navigate to="/docente" replace />;
    }

    return <Navigate to="/home" replace />;

  }

  return children;
}

export default ProtectedRoute;