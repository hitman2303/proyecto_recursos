function Acerca() {

  return (

    <div className="max-w-5xl mx-auto space-y-8">

      {/* ENCABEZADO */}

      <section className="bg-white border rounded-2xl p-8 shadow-sm">

        <p className="text-sm text-gray-500 mb-2">
          Proyecto educativo interactivo
        </p>

        <h1 className="text-4xl font-bold mb-4">

          Historia Argentina
          <span className="block text-2xl text-gray-500 mt-2">
            1930 – 1982
          </span>

        </h1>

        <p className="text-gray-600 leading-relaxed max-w-3xl">

          Este proyecto propone una experiencia
          educativa interactiva para abordar algunos
          de los principales procesos, acontecimientos
          y protagonistas de la Historia Argentina
          desde 1930 hasta la Guerra de Malvinas.

        </p>

      </section>


      {/* PROPÓSITO */}

      <section className="bg-white border rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-4">
          Propósito del proyecto
        </h2>

        <p className="text-gray-600 leading-relaxed">

          El software fue desarrollado con el propósito
          de complementar el aprendizaje de la Historia
          Argentina mediante recursos digitales,
          actividades interactivas y estrategias de
          gamificación.

        </p>

        <p className="text-gray-600 leading-relaxed mt-4">

          La propuesta busca que los estudiantes puedan
          explorar contenidos históricos de una manera
          más activa, relacionando acontecimientos,
          períodos y protagonistas.

        </p>

      </section>


      {/* EXPERIENCIA DEL ALUMNO */}

      <section>

        <h2 className="text-2xl font-bold mb-4">
          Experiencia del alumno
        </h2>


        <div className="grid md:grid-cols-2 gap-5">


          <div className="bg-white border rounded-2xl p-6">

            <div className="text-3xl mb-3">
              📚
            </div>

            <h3 className="font-bold text-lg">
              Contenidos históricos
            </h3>

            <p className="text-gray-600 mt-2">

              Acceso a información sobre los principales
              procesos y acontecimientos históricos
              comprendidos entre 1930 y 1982.

            </p>

          </div>


          <div className="bg-white border rounded-2xl p-6">

            <div className="text-3xl mb-3">
              🕐
            </div>

            <h3 className="font-bold text-lg">
              Línea de tiempo
            </h3>

            <p className="text-gray-600 mt-2">

              Exploración cronológica de acontecimientos
              relevantes para comprender la relación
              entre los diferentes períodos históricos.

            </p>

          </div>


          <div className="bg-white border rounded-2xl p-6">

            <div className="text-3xl mb-3">
              📝
            </div>

            <h3 className="font-bold text-lg">
              Quiz interactivo
            </h3>

            <p className="text-gray-600 mt-2">

              Actividad de evaluación con temporizador,
              resultados, devolución pedagógica y
              posibilidad de generar un informe en PDF.

            </p>

          </div>


          <div className="bg-white border rounded-2xl p-6">

            <div className="text-3xl mb-3">
              🎮
            </div>

            <h3 className="font-bold text-lg">
              Juegos educativos
            </h3>

            <p className="text-gray-600 mt-2">

              Actividades orientadas a reforzar el
              aprendizaje mediante desafíos y dinámicas
              interactivas.

            </p>

          </div>

        </div>

      </section>


      {/* DOCENTE */}

      <section className="bg-white border rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-4">
          Herramientas para el docente
        </h2>

        <p className="text-gray-600 leading-relaxed">

          El sistema incorpora un panel docente que
          permite consultar los resultados obtenidos por
          los alumnos, visualizar intentos realizados y
          analizar información relacionada con el
          desempeño dentro del Quiz.

        </p>

        <p className="text-gray-600 leading-relaxed mt-4">

          De esta manera, el proyecto no solo funciona
          como un recurso de aprendizaje, sino también
          como una herramienta de acompañamiento y
          seguimiento educativo.

        </p>

      </section>


      {/* TECNOLOGÍAS */}

      <section className="bg-white border rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Tecnologías utilizadas
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="border rounded-xl p-4 text-center">

            <h3 className="font-bold">
              React
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Interfaz
            </p>

          </div>


          <div className="border rounded-xl p-4 text-center">

            <h3 className="font-bold">
              Vite
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Desarrollo
            </p>

          </div>


          <div className="border rounded-xl p-4 text-center">

            <h3 className="font-bold">
              Tailwind CSS
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Diseño
            </p>

          </div>


          <div className="border rounded-xl p-4 text-center">

            <h3 className="font-bold">
              Electron
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Aplicación
            </p>

          </div>

        </div>

      </section>


      {/* CIERRE */}

      <section className="border rounded-2xl p-8 bg-gray-900 text-white">

        <h2 className="text-2xl font-bold mb-4">
          Un recurso para aprender de forma interactiva
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-3xl">

          Historia Argentina 1930–1982 integra contenidos,
          actividades y recursos digitales en una única
          experiencia educativa, buscando promover una
          participación activa de los estudiantes en la
          construcción de sus conocimientos.

        </p>

      </section>

    </div>

  );

}

export default Acerca;