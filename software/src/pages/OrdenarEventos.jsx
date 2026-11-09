
import { useState } from "react";

const eventosCorrectos = [
  { id: 1, año: 1930, texto: "Golpe de Estado encabezado por José Félix Uriburu" },
  { id: 2, año: 1932, texto: "Asunción presidencial de Agustín P. Justo" },
  { id: 3, año: 1943, texto: "Golpe de Estado que derrocó a Ramón Castillo" },
  { id: 4, año: 1945, texto: "Movilización del 17 de octubre" },
  { id: 5, año: 1946, texto: "Primer gobierno de Juan Domingo Perón" },
  { id: 6, año: 1955, texto: "Golpe de Estado y comienzo de la Revolución Libertadora" },
  { id: 7, año: 1958, texto: "Asunción presidencial de Arturo Frondizi" },
  { id: 8, año: 1963, texto: "Asunción presidencial de Arturo Illia" },
  { id: 9, año: 1966, texto: "Golpe de Estado encabezado por Juan Carlos Onganía" },
  { id: 10, año: 1969, texto: "El Cordobazo" },
  { id: 11, año: 1973, texto: "Asunción presidencial de Héctor Cámpora" },
  { id: 12, año: 1973, texto: "Masacre de Ezeiza" },
  { id: 13, año: 1973, texto: "Asunción de Juan Domingo Perón en su tercera presidencia" },
  { id: 14, año: 1976, texto: "Golpe de Estado e inicio del Proceso de Reorganización Nacional" },
  { id: 15, año: 1982, texto: "Comienzo de la Guerra de Malvinas" }
];

const mezclar = (lista) => {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
};

const nuevaRonda = () =>
  mezclar(eventosCorrectos).slice(0, 5);

function OrdenarEventos() {
  const [eventos, setEventos] = useState(nuevaRonda);
  const [resultado, setResultado] = useState(null);
  const [puntaje, setPuntaje] = useState(0);

  const mover = (index, direccion) => {
    if (resultado !== null) return;

    const nuevoIndex = index + direccion;

    if (nuevoIndex < 0 || nuevoIndex >= eventos.length) return;

    const copia = [...eventos];

    [copia[index], copia[nuevoIndex]] = [
      copia[nuevoIndex],
      copia[index]
    ];

    setEventos(copia);
  };

  const comprobar = () => {
    if (resultado !== null) return;

    const aciertos = eventos.filter(
      (evento, index) =>
        evento.id ===
        [...eventos].sort((a, b) => a.año - b.año)
          .sort((a, b) => a.año - b.año)[index]?.id
    ).length;

    // Para los acontecimientos del mismo año,
    // se acepta cualquiera de sus posiciones relativas.
    const ordenCorrecto = [...eventos].sort(
      (a, b) => a.año - b.año
    );

    const puntajeFinal = eventos.filter(
      (evento, index) =>
        evento.id === ordenCorrecto[index].id
    ).length;

    setPuntaje(puntajeFinal);
    setResultado(true);

    const usuario = JSON.parse(
      localStorage.getItem("usuario")
    );

    const intento = {
      nombre: usuario?.nombre || "Alumno",
      tipo: "Ordenar eventos",
      puntaje: puntajeFinal,
      total: eventos.length,
      porcentaje: Math.round(
        (puntajeFinal / eventos.length) * 100
      ),
      fecha: new Date().toLocaleDateString()
    };

    const historial = JSON.parse(
      localStorage.getItem("historialQuiz")
    ) || [];

    historial.push(intento);

    localStorage.setItem(
      "historialQuiz",
      JSON.stringify(historial)
    );
  };

  const reiniciar = () => {
    setEventos(nuevaRonda());
    setResultado(null);
    setPuntaje(0);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        🕐 Ordenar eventos históricos
      </h1>

      <p className="text-gray-500 mb-2">
        Ordená los cinco acontecimientos desde el más antiguo
        hasta el más reciente.
      </p>

      <p className="text-sm text-gray-500 mb-6">
        Utilizá las flechas para cambiar la posición de cada evento.
      </p>

      <div className="space-y-3">
        {eventos.map((evento, index) => (
          <div
            key={evento.id}
            className="border rounded-xl p-4 flex items-center gap-3"
          >
            <span className="font-bold text-lg w-8">
              {index + 1}.
            </span>

            <span className="flex-1">
              {evento.texto}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => mover(index, -1)}
                disabled={resultado !== null || index === 0}
                className="border rounded-lg px-3 py-2 disabled:opacity-30"
                aria-label="Mover hacia arriba"
              >
                ↑
              </button>

              <button
                onClick={() => mover(index, 1)}
                disabled={
                  resultado !== null ||
                  index === eventos.length - 1
                }
                className="border rounded-lg px-3 py-2 disabled:opacity-30"
                aria-label="Mover hacia abajo"
              >
                ↓
              </button>
            </div>
          </div>
        ))}
      </div>

      {resultado === null ? (
        <button
          onClick={comprobar}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
        >
          Comprobar orden
        </button>
      ) : (
        <div className="mt-6 border rounded-xl p-5">
          <h2 className="text-xl font-bold mb-2">
            ¡Ronda finalizada!
          </h2>

          <p className="text-lg mb-2">
            Puntaje: {puntaje}/{eventos.length}
          </p>

          <p className="mb-4">
            {puntaje === eventos.length
              ? "¡Excelente! Ordenaste todos los acontecimientos correctamente."
              : "Buen intento. Revisá el orden cronológico y volvé a intentarlo."}
          </p>

          <h3 className="font-bold mb-2">
            Orden cronológico correcto
          </h3>

          <ol className="list-decimal pl-6 space-y-2">
            {[...eventos].sort(
              (a, b) => a.año - b.año
            ).map((evento) => (
              <li key={evento.id}>
                <strong>{evento.año}:</strong> {evento.texto}
              </li>
            ))}
          </ol>

          <button
            onClick={reiniciar}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
          >
            Jugar otra ronda
          </button>
        </div>
      )}
    </div>
  );
}

export default OrdenarEventos;
