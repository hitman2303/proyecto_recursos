
const questionsByDifficulty = {
  facil: [
    {
      question: "¿Quién encabezó el golpe de Estado de 1930?",
      options: ["Hipólito Yrigoyen", "José Félix Uriburu", "Juan D. Perón", "Agustín P. Justo"],
      answer: "José Félix Uriburu"
    },
    {
      question: "¿Qué período comenzó con el golpe de Estado de 1930?",
      options: ["Década Infame", "Revolución Libertadora", "Revolución Argentina", "Proceso de Reorganización Nacional"],
      answer: "Década Infame"
    },
    {
      question: "¿Qué característica política fue frecuente durante la Década Infame?",
      options: ["Elecciones completamente libres", "Fraude electoral", "Sufragio femenino", "Ausencia de conflictos políticos"],
      answer: "Fraude electoral"
    },
    {
      question: "¿Qué acontecimiento internacional afectó profundamente la economía argentina desde 1929?",
      options: ["Primera Guerra Mundial", "Revolución Rusa", "Gran Depresión", "Segunda Guerra Mundial"],
      answer: "Gran Depresión"
    },
    {
      question: "¿En qué año ocurrió el golpe de Estado que derrocó a Ramón Castillo?",
      options: ["1930", "1943", "1946", "1955"],
      answer: "1943"
    },
    {
      question: "¿Qué significan las siglas GOU?",
      options: ["Grupo de Oficiales Unidos", "Gobierno Organizado Unitario", "Gran Organización Unificada", "Grupo Obrero Unido"],
      answer: "Grupo de Oficiales Unidos"
    },
    {
      question: "¿Qué cargo ocupó Juan Domingo Perón antes de llegar a la presidencia?",
      options: ["Ministro de Economía", "Secretario de Trabajo y Previsión", "Gobernador de Buenos Aires", "Presidente de la Corte Suprema"],
      answer: "Secretario de Trabajo y Previsión"
    },
    {
      question: "¿En qué año fue elegido presidente Juan Domingo Perón por primera vez?",
      options: ["1943", "1945", "1946", "1952"],
      answer: "1946"
    },
    {
      question: "¿Qué acontecimiento ocurrió el 17 de octubre de 1945?",
      options: [
        "El golpe contra Perón",
        "Una movilización obrera que reclamó la liberación de Perón",
        "La sanción de la Constitución de 1949",
        "El inicio de la Revolución Libertadora"
      ],
      answer: "Una movilización obrera que reclamó la liberación de Perón"
    },
    {
      question: "¿En qué año fue derrocado Juan Domingo Perón por un golpe militar?",
      options: ["1946", "1952", "1955", "1962"],
      answer: "1955"
    },
    {
      question: "¿Cómo se denominó el golpe de Estado que derrocó a Perón en 1955?",
      options: ["Revolución Argentina", "Revolución Libertadora", "Revolución de Mayo", "Proceso de Reorganización Nacional"],
      answer: "Revolución Libertadora"
    },
    {
      question: "¿Qué ocurrió con el peronismo después del golpe de 1955?",
      options: [
        "Fue declarado partido oficial",
        "Fue proscripto",
        "Gobernó sin interrupciones",
        "Desapareció de la vida política"
      ],
      answer: "Fue proscripto"
    }
  ],

  intermedio: [
    {
      question: "¿Quién fue presidente de Argentina entre 1958 y 1962?",
      options: ["Arturo Illia", "Arturo Frondizi", "Juan Carlos Onganía", "Pedro Eugenio Aramburu"],
      answer: "Arturo Frondizi"
    },
    {
      question: "¿Quién gobernó Argentina entre 1963 y 1966?",
      options: ["Arturo Illia", "Arturo Frondizi", "Alejandro Lanusse", "Juan Domingo Perón"],
      answer: "Arturo Illia"
    },
    {
      question: "¿Quiénes eran los Azules y los Colorados?",
      options: [
        "Dos partidos políticos",
        "Dos agrupaciones sindicales",
        "Dos facciones enfrentadas dentro de las Fuerzas Armadas",
        "Dos organizaciones guerrilleras"
      ],
      answer: "Dos facciones enfrentadas dentro de las Fuerzas Armadas"
    },
    {
      question: "¿Qué ocurrió con el gobierno de Arturo Illia en 1966?",
      options: [
        "Finalizó su mandato",
        "Fue derrocado por un golpe militar",
        "Renunció para permitir el regreso de Perón",
        "Fue elegido nuevamente"
      ],
      answer: "Fue derrocado por un golpe militar"
    },
    {
      question: "¿Qué militar encabezó el golpe de Estado de 1966?",
      options: ["Jorge Rafael Videla", "Juan Carlos Onganía", "Leopoldo Galtieri", "Alejandro Lanusse"],
      answer: "Juan Carlos Onganía"
    },
    {
      question: "¿Qué organizaciones guerrilleras actuaron durante las décadas de 1960 y 1970?",
      options: ["Montoneros y ERP", "GOU y CGT", "Azules y Colorados", "UCR y PJ"],
      answer: "Montoneros y ERP"
    },
    {
      question: "¿Qué acontecimiento de 1969 expresó el descontento social y obrero contra la dictadura de Onganía?",
      options: ["La Noche de los Bastones Largos", "El Cordobazo", "La Masacre de Ezeiza", "El 17 de octubre"],
      answer: "El Cordobazo"
    },
    {
      question: "¿Qué acontecimiento ocurrió el 20 de junio de 1973?",
      options: ["El Cordobazo", "La Masacre de Ezeiza", "El golpe de Estado de 1976", "La Guerra de Malvinas"],
      answer: "La Masacre de Ezeiza"
    },
    {
      question: "¿En qué año asumió Juan Domingo Perón su tercera presidencia?",
      options: ["1971", "1972", "1973", "1974"],
      answer: "1973"
    },
    {
      question: "¿Qué factor contribuyó al golpe de Estado de 1966?",
      options: [
        "La estabilidad política y el apoyo unánime al gobierno",
        "La presión de sectores militares y el cuestionamiento al gobierno de Illia",
        "La finalización de la Guerra de Malvinas",
        "La renuncia de Juan Domingo Perón"
      ],
      answer: "La presión de sectores militares y el cuestionamiento al gobierno de Illia"
    },
    {
      question: "¿Qué relación tuvo el Cordobazo con la dictadura de Onganía?",
      options: [
        "Fortaleció definitivamente al gobierno militar",
        "Expresó una fuerte oposición social y debilitó al régimen",
        "Provocó el regreso inmediato de Perón",
        "Marcó el inicio de la Guerra de Malvinas"
      ],
      answer: "Expresó una fuerte oposición social y debilitó al régimen"
    },
    {
      question: "¿Qué objetivo político tuvo la apertura electoral impulsada por Alejandro Lanusse?",
      options: [
        "Facilitar una salida política negociada de la dictadura",
        "Prohibir definitivamente todas las elecciones",
        "Iniciar el Proceso de Reorganización Nacional",
        "Declarar la guerra al Reino Unido"
      ],
      answer: "Facilitar una salida política negociada de la dictadura"
    }
  ],

  dificil: [
    {
      question: "¿En qué fecha comenzó la última dictadura cívico-militar argentina?",
      options: ["24 de marzo de 1976", "2 de abril de 1982", "17 de octubre de 1945", "9 de julio de 1973"],
      answer: "24 de marzo de 1976"
    },
    {
      question: "¿Cuál fue el nombre oficial que utilizó la última dictadura militar?",
      options: [
        "Revolución Libertadora",
        "Proceso de Reorganización Nacional",
        "Revolución Argentina",
        "Gobierno de Reconstrucción Nacional"
      ],
      answer: "Proceso de Reorganización Nacional"
    },
    {
      question: "¿Quién fue el ministro de Economía que impulsó las principales reformas económicas de la dictadura desde 1976?",
      options: ["José Alfredo Martínez de Hoz", "Raúl Prebisch", "Celestino Rodrigo", "Álvaro Alsogaray"],
      answer: "José Alfredo Martínez de Hoz"
    },
    {
      question: "¿Qué ocurrió el 2 de abril de 1982?",
      options: [
        "Finalizó la dictadura",
        "Comenzó la Guerra de Malvinas",
        "Asumió Raúl Alfonsín",
        "Se produjo el golpe de Estado de 1976"
      ],
      answer: "Comenzó la Guerra de Malvinas"
    },
    {
      question: "¿En qué año finalizó la Guerra de Malvinas?",
      options: ["1979", "1980", "1982", "1983"],
      answer: "1982"
    },
    {
      question: "¿Qué transformación económica buscó impulsar la política de Martínez de Hoz?",
      options: [
        "Fortalecer exclusivamente la industria nacional mediante el cierre de importaciones",
        "Promover la apertura económica y la valorización financiera",
        "Eliminar el sistema financiero",
        "Reemplazar toda actividad privada por empresas estatales"
      ],
      answer: "Promover la apertura económica y la valorización financiera"
    },
    {
      question: "¿Por qué se considera que el golpe de 1976 dio inicio a una dictadura cívico-militar?",
      options: [
        "Porque participaron únicamente oficiales de las Fuerzas Armadas",
        "Porque contó con participación y apoyo de sectores civiles, económicos e institucionales",
        "Porque fue organizado por partidos democráticos",
        "Porque se realizó mediante elecciones"
      ],
      answer: "Porque contó con participación y apoyo de sectores civiles, económicos e institucionales"
    },
    {
      question: "¿Cuál fue una característica central del terrorismo de Estado durante la última dictadura?",
      options: [
        "La ampliación de la participación electoral",
        "La persecución, secuestro, tortura y desaparición forzada de personas",
        "La libertad irrestricta de prensa",
        "La eliminación de las Fuerzas Armadas"
      ],
      answer: "La persecución, secuestro, tortura y desaparición forzada de personas"
    },
    {
      question: "¿Qué relación existió entre la censura y el terrorismo de Estado?",
      options: [
        "La censura permitió ampliar el debate público",
        "La censura ayudó a controlar la información y limitar las denuncias",
        "La censura fue aplicada únicamente durante las elecciones",
        "No existió relación entre ambas"
      ],
      answer: "La censura ayudó a controlar la información y limitar las denuncias"
    },
    {
      question: "¿Qué consecuencia política tuvo la derrota argentina en la Guerra de Malvinas?",
      options: [
        "Consolidó el poder de la Junta Militar por décadas",
        "Aceleró el debilitamiento del régimen militar y la transición democrática",
        "Provocó el regreso de Perón",
        "Inició la Revolución Libertadora"
      ],
      answer: "Aceleró el debilitamiento del régimen militar y la transición democrática"
    },
    {
      question: "¿Qué diferencia importante existió entre el desarrollismo de Frondizi y el modelo económico de Martínez de Hoz?",
      options: [
        "Frondizi buscó impulsar la industrialización y Martínez de Hoz promovió la apertura financiera y comercial",
        "Ambos aplicaron exactamente el mismo modelo económico",
        "Frondizi eliminó la industria y Martínez de Hoz la nacionalizó",
        "Ninguno intervino en la economía"
      ],
      answer: "Frondizi buscó impulsar la industrialización y Martínez de Hoz promovió la apertura financiera y comercial"
    },
    {
      question: "¿Por qué el período 1976-1983 es considerado una ruptura del orden constitucional?",
      options: [
        "Porque se realizaron elecciones presidenciales regulares",
        "Porque las Fuerzas Armadas tomaron el poder por la fuerza y suspendieron las instituciones democráticas",
        "Porque se modificó únicamente el sistema tributario",
        "Porque el Congreso eligió a una nueva Junta Militar"
      ],
      answer: "Porque las Fuerzas Armadas tomaron el poder por la fuerza y suspendieron las instituciones democráticas"
    }
  ]
};

export { questionsByDifficulty };
