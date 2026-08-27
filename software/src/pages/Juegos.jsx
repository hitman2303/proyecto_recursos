import { useNavigate } from "react-router-dom";

function Juegos() {

  const navigate = useNavigate();

  return (

    <div className="p-6">

      {/* ENCABEZADO */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          🎮 Juegos
        </h1>

        <p className="text-gray-500 mt-2">
          Poné a prueba tus conocimientos de Historia Argentina
          mediante diferentes actividades.
        </p>

      </div>


      {/* JUEGOS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* ========================= */}
        {/* ORDENAR EVENTOS */}
        {/* ========================= */}

        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

          <div className="text-4xl mb-4">
            🕐
          </div>

          <h2 className="text-xl font-bold mb-2">
            Ordenar eventos
          </h2>

          <p className="text-gray-500 mb-6">
            Ordená diferentes acontecimientos históricos
            desde el más antiguo hasta el más reciente.
          </p>

          <button
            onClick={() =>
              navigate("/juegos/ordenar-eventos")
            }
            className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80"
          >
            Jugar
          </button>

        </div>


        {/* ========================= */}
        {/* ¿QUIÉN SOY? */}
        {/* ========================= */}

        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

          <div className="text-4xl mb-4">
            🕵️
          </div>

          <h2 className="text-xl font-bold mb-2">
            ¿Quién soy?
          </h2>

          <p className="text-gray-500 mb-6">
            Descubrí qué personaje histórico se esconde
            detrás de las pistas.
          </p>

          <button
            disabled
            className="bg-gray-300 text-gray-600 px-5 py-2 rounded-lg cursor-not-allowed"
          >
            Próximamente
          </button>

        </div>


      </div>

    </div>

  );

}

export default Juegos;