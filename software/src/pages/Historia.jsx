export default function Historia() {

  const temas = [

    {
      titulo: "Golpe de 1930",
      descripcion:
        "Primer golpe militar moderno en Argentina."
    },

    {
      titulo: "Década Infame",
      descripcion:
        "Fraude electoral y dependencia económica."
    },

    {
      titulo: "Peronismo",
      descripcion:
        "Transformación social y laboral."
    },

    {
      titulo: "Dictadura Militar",
      descripcion:
        "Terrorismo de Estado y desapariciones."
    },

    {
      titulo: "Guerra de Malvinas",
      descripcion:
        "Conflicto bélico de 1982."
    }

  ];

  return (

    <div>

      <h1 className="text-5xl font-bold mb-10">
        Historia Argentina
      </h1>

      <div className="grid gap-8">

        {temas.map((tema, index) => (

          <div
            key={index}
            className="
              bg-gray-900
              p-8 rounded-2xl
              border border-gray-800
            "
          >

            <h2 className="text-3xl font-bold mb-4">
              {tema.titulo}
            </h2>

            <p className="text-gray-400">
              {tema.descripcion}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}