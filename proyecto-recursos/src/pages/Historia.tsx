export default function Historia() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold mb-10">
        Historia Argentina (1930 - 1982)
      </h1>

      {/* 1930 */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Golpe de 1930</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          El golpe de Estado de 1930 representó la ruptura del orden democrático en Argentina,
          inaugurando una etapa de inestabilidad política caracterizada por la intervención militar.
        </p>
      </section>

      {/* Década Infame */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Década Infame (1930-1943)</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Se caracterizó por el fraude electoral, la corrupción y la dependencia económica del modelo agroexportador.
        </p>
      </section>

      {/* Peronismo */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Peronismo (1946-1955)</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Etapa de transformación social con ampliación de derechos laborales,
          intervención del Estado en la economía y protagonismo de la clase trabajadora.
        </p>
      </section>

      {/* 1955 */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Revolución Libertadora</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Golpe militar que derrocó a Perón y proscribió el peronismo durante años.
        </p>
      </section>

      {/* 1976 */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Dictadura (1976-1983)</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Régimen militar que implementó terrorismo de Estado,
          con desapariciones, censura y represión sistemática.
        </p>
      </section>

      {/* Malvinas */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold">Guerra de Malvinas (1982)</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Conflicto bélico con el Reino Unido que marcó el inicio del fin de la dictadura militar.
        </p>
      </section>
    </div>
  );
}