
import { useNavigate } from "react-router-dom";

const juegos = [
  {
    icono: "🕐",
    titulo: "Ordenar eventos",
    descripcion: "Ordená diferentes acontecimientos históricos desde el más antiguo hasta el más reciente.",
    ruta: "/juegos/ordenar-eventos"
  },
  {
    icono: "🕵️",
    titulo: "¿Quién soy?",
    descripcion: "Descubrí qué personaje histórico se esconde detrás de las pistas.",
    ruta: "/juegos/quien-soy"
  },
  {
    icono: "📜",
    titulo: "La línea del tiempo",
    descripcion: "Poné a prueba tu capacidad para ordenar acontecimientos y fechas de la historia argentina.",
    ruta: "/juegos/linea-tiempo"
  },
  {
    icono: "⚖️",
    titulo: "Verdadero o falso",
    descripcion: "Analizá afirmaciones sobre acontecimientos, personajes y procesos históricos.",
    ruta: "/juegos/verdadero-falso"
  },
  {
    icono: "🔎",
    titulo: "Detective histórico",
    descripcion: "Resolvé misterios históricos utilizando pistas que te ayudarán a descubrir la respuesta.",
    ruta: "/juegos/detective"
  }
];

function Juegos() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          🎮 Juegos
        </h1>

        <p className="text-gray-500 mt-2">
          Poné a prueba tus conocimientos de Historia Argentina
          mediante diferentes actividades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {juegos.map((juego) => (
          <div
            key={juego.ruta}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition bg-white flex flex-col"
          >
            <div className="text-4xl mb-4">
              {juego.icono}
            </div>

            <h2 className="text-xl font-bold mb-2">
              {juego.titulo}
            </h2>

            <p className="text-gray-500 mb-6 flex-grow">
              {juego.descripcion}
            </p>

            <button
              onClick={() => navigate(juego.ruta)}
              className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 self-start"
            >
              Jugar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Juegos;
