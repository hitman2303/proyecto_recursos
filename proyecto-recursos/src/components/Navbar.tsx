import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6 shadow-lg">
      <Link to="/" className="hover:text-yellow-400">Inicio</Link>
      <Link to="/historia" className="hover:text-yellow-400">Historia</Link>
      <Link to="/personajes" className="hover:text-yellow-400">Personajes</Link>
      <Link to="/eventos" className="hover:text-yellow-400">Eventos</Link>
      <Link to="/recursos" className="hover:text-yellow-400">Recursos</Link>
      <Link to="/tutoriales" className="hover:text-yellow-400">Tutoriales</Link>
      <Link to="/descargar" className="hover:text-yellow-400">Descargar</Link>
    </nav>
  );
}