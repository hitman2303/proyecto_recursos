export interface Tutorial {
  id: number;
  titulo: string;
  categoria: "General" | "Alumno" | "Docente";
  descripcion: string;
  icono: string;
  duracion: string;
  pasos: string[];
  consejo: string;
}

export const tutoriales: Tutorial[] = [
  {
    id: 1,
    titulo: "Descargar e instalar el software",
    categoria: "General",
    descripcion:
      "Aprendé a descargar e instalar la aplicación educativa de Historia Argentina en una computadora con Windows.",
    icono: "💻",
    duracion: "5 minutos",
    pasos: [
      "Ingresá a la sección Descargar de esta página web.",
      "Presioná el botón de descarga de la aplicación.",
      "Esperá a que finalice la descarga del instalador.",
      "Buscá el archivo descargado en tu computadora.",
      "Ejecutá el instalador de Historia Argentina.",
      "Seguí las instrucciones que aparecen en pantalla.",
      "Una vez finalizada la instalación, abrí la aplicación."
    ],
    consejo:
      "La aplicación está desarrollada para Windows. Si aparece una advertencia de seguridad, verificá que el archivo provenga del enlace oficial del proyecto antes de decidir si ejecutarlo."
  },

  {
    id: 2,
    titulo: "Iniciar sesión",
    categoria: "General",
    descripcion:
      "Conocé cómo ingresar a la aplicación utilizando el perfil de alumno o docente.",
    icono: "👤",
    duracion: "2 minutos",
    pasos: [
      "Abrí la aplicación Historia Argentina.",
      "Esperá a que aparezca la pantalla de inicio.",
      "Seleccioná el perfil correspondiente: Alumno o Docente.",
      "Ingresá tu nombre en el campo solicitado.",
      "Si seleccionaste Docente, ingresá la contraseña proporcionada por el responsable del proyecto.",
      "Presioná el botón Ingresar.",
      "Accederás a las funciones correspondientes a tu perfil."
    ],
    consejo:
      "Seleccioná correctamente tu perfil, ya que algunas funciones están disponibles únicamente para alumnos o docentes."
  },

  {
    id: 3,
    titulo: "Explorar los contenidos históricos",
    categoria: "Alumno",
    descripcion:
      "Aprendé a consultar la información histórica y utilizar la línea de tiempo.",
    icono: "📖",
    duracion: "4 minutos",
    pasos: [
      "Ingresá a la aplicación utilizando tu perfil de alumno.",
      "Desde el menú lateral, seleccioná Historia.",
      "Leé los contenidos correspondientes al período 1930-1982.",
      "Ingresá a la sección Línea de tiempo.",
      "Seleccioná los acontecimientos históricos que quieras investigar.",
      "Leé las descripciones y relacioná los acontecimientos con los contenidos estudiados.",
      "Regresá al menú principal para continuar explorando."
    ],
    consejo:
      "Te recomendamos consultar primero los contenidos históricos y después utilizar los juegos y cuestionarios."
  },

  {
    id: 4,
    titulo: "Realizar el cuestionario",
    categoria: "Alumno",
    descripcion:
      "Aprendé a resolver el quiz de Historia Argentina y conocer tus resultados.",
    icono: "🧠",
    duracion: "3 minutos",
    pasos: [
      "Ingresá con tu perfil de alumno.",
      "Seleccioná Quiz desde el menú lateral.",
      "Leé atentamente la pregunta que aparece en pantalla.",
      "Seleccioná la respuesta que consideres correcta.",
      "Continuá respondiendo las preguntas.",
      "Prestá atención al temporizador de la actividad.",
      "Al finalizar, observá tu puntaje y porcentaje de respuestas correctas.",
      "Leé la devolución pedagógica que aparece junto al resultado.",
      "Si lo deseás, realizá nuevamente el cuestionario."
    ],
    consejo:
      "No te preocupes si tu primer resultado no es el esperado. Utilizá la devolución pedagógica para identificar qué contenidos necesitás repasar."
  },

  {
    id: 5,
    titulo: "Utilizar los juegos educativos",
    categoria: "Alumno",
    descripcion:
      "Conocé cómo acceder a los juegos y actividades interactivas de la aplicación.",
    icono: "🎮",
    duracion: "4 minutos",
    pasos: [
      "Ingresá a la aplicación con tu perfil de alumno.",
      "Seleccioná Juegos desde el menú lateral.",
      "Elegí una de las actividades disponibles.",
      "Leé las instrucciones antes de comenzar.",
      "Si elegís Ordenar acontecimientos, organizá los eventos siguiendo su orden cronológico.",
      "Comprobá tu respuesta utilizando el botón correspondiente.",
      "Leé la devolución de la actividad.",
      "Podés volver a jugar para reforzar tus conocimientos."
    ],
    consejo:
      "Utilizá la línea de tiempo como material de consulta antes de realizar los juegos de ordenamiento histórico."
  },

  {
    id: 6,
    titulo: "Consultar resultados y descargar PDF",
    categoria: "Alumno",
    descripcion:
      "Aprendé a revisar tus intentos anteriores y guardar los resultados del cuestionario.",
    icono: "📊",
    duracion: "3 minutos",
    pasos: [
      "Ingresá con tu perfil de alumno.",
      "Realizá el cuestionario de Historia Argentina.",
      "Al finalizar, consultá el puntaje obtenido.",
      "Revisá el porcentaje de respuestas correctas.",
      "Leé la devolución pedagógica.",
      "Presioná Descargar resultado PDF para guardar el informe.",
      "Ingresá a Mi historial desde el menú lateral.",
      "Consultá los intentos anteriores registrados en la aplicación."
    ],
    consejo:
      "Guardá tus resultados en PDF para comparar tu progreso. Los datos del historial se almacenan localmente en la computadora."
  },

  {
    id: 7,
    titulo: "Utilizar el panel docente",
    categoria: "Docente",
    descripcion:
      "Conocé las funciones disponibles para consultar resultados y acompañar el aprendizaje de los estudiantes.",
    icono: "👨‍🏫",
    duracion: "5 minutos",
    pasos: [
      "Abrí la aplicación Historia Argentina.",
      "Seleccioná el perfil Docente.",
      "Ingresá tu nombre y la contraseña correspondiente.",
      "Presioná Ingresar.",
      "Accedé al Panel Docente.",
      "Consultá los resultados de los cuestionarios registrados.",
      "Utilizá los filtros disponibles para buscar resultados de estudiantes.",
      "Revisá los puntajes y porcentajes obtenidos.",
      "Utilizá esta información para identificar contenidos que necesitan ser reforzados.",
      "Cuando termines, cerrá la sesión."
    ],
    consejo:
      "Los resultados se guardan localmente. El panel docente no recibe automáticamente información de otras computadoras."
  }
];