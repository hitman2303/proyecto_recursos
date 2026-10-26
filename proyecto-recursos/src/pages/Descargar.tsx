import SEO from "../components/SEO";

export default function Descargar() {
  const enlaceDescarga =
    "https://github.com/hitman2303/proyecto_recursos/releases/download/v1.0.0/Historia.Argentina.Setup.1.0.0.exe";

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">

      <SEO
        title="Descargar software de Historia Argentina"
        description="Descargá el software educativo de Historia Argentina 1930-1982 para Windows. Explorá contenidos históricos, juegos, cuestionarios y actividades interactivas."
      />

      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border p-8 sm:p-12 text-center">

        <div className="text-6xl mb-6">
          💻
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
          Descargar aplicación
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Descargá el software educativo del Proyecto
          Historia Argentina (1930–1982) para Windows.
          Aprendé mediante contenidos históricos,
          cuestionarios, juegos y actividades interactivas.
        </p>

        <div className="bg-gray-50 border rounded-xl p-5 mb-8 text-left">

          <h2 className="font-bold text-gray-900 mb-3">
            ¿Qué incluye la aplicación?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>📚 Contenidos de Historia Argentina.</li>
            <li>📅 Línea de tiempo interactiva.</li>
            <li>🧠 Cuestionarios con devolución pedagógica.</li>
            <li>🎮 Juegos educativos.</li>
            <li>📊 Historial de resultados y panel docente.</li>
            <li>📄 Exportación de resultados a PDF.</li>
          </ul>

        </div>

        <a
          href={enlaceDescarga}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition shadow-md"
        >
          ⬇ Descargar para Windows
        </a>

        <p className="text-sm text-gray-500 mt-5">
          Versión 1.0.0 · Windows · Descarga desde GitHub Releases
        </p>

        <p className="text-sm text-gray-500 mt-3">
          Una vez descargado el instalador, abrilo y seguí
          las instrucciones que aparecen en pantalla.
        </p>

        <p className="text-xs text-gray-400 mt-6">
          Proyecto educativo Historia Argentina 1930–1982.
        </p>

      </main>

    </div>
  );
}