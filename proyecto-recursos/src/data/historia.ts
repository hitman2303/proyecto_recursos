export interface PeriodoHistorico {
  id: number;
  anio: string;
  titulo: string;
  resumen: string;
  contexto: string;
  acontecimientos: string[];
  consecuencias: string;
  imagen?: string;
}

export const historia: PeriodoHistorico[] = [
  {
    id: 1,
    anio: "1930",
    titulo: "Golpe de Estado de 1930",
    resumen:
      "El 6 de septiembre de 1930 un golpe de Estado derrocó al presidente Hipólito Yrigoyen e inauguró una etapa de inestabilidad institucional y de creciente intervención de las Fuerzas Armadas en la política argentina.",
    contexto:
      "La crisis económica internacional iniciada en 1929 afectó profundamente a la Argentina. Al mismo tiempo, el gobierno de Yrigoyen atravesaba dificultades políticas y económicas que fueron aprovechadas por sectores opositores para impulsar su derrocamiento.",
    acontecimientos: [
      "Derrocamiento de Hipólito Yrigoyen.",
      "Inicio del gobierno de facto encabezado por José Félix Uriburu.",
      "Intervención de las instituciones democráticas.",
      "Primer golpe de Estado exitoso del siglo XX en Argentina."
    ],
    consecuencias:
      "El golpe interrumpió el orden constitucional y abrió un período marcado por gobiernos conservadores, fraude electoral e intervención militar.",
    imagen: "/images/1930.jfif"
  },

  {
    id: 2,
    anio: "1930 - 1943",
    titulo: "La Década Infame",
    resumen:
      "El período conocido como Década Infame estuvo caracterizado por gobiernos conservadores, fraude electoral, restricciones a la participación política y una fuerte influencia de los sectores económicos tradicionales.",
    contexto:
      "La crisis económica mundial modificó profundamente el modelo agroexportador argentino. La caída del comercio internacional obligó al país a adoptar nuevas estrategias económicas y aumentó la intervención estatal.",
    acontecimientos: [
      "Fraude electoral y control político de los gobiernos conservadores.",
      "Firma del Pacto Roca-Runciman con Gran Bretaña.",
      "Creación de organismos de regulación económica.",
      "Crecimiento de la industrialización por sustitución de importaciones.",
      "Migraciones internas hacia los principales centros urbanos."
    ],
    consecuencias:
      "El crecimiento industrial produjo importantes transformaciones sociales y favoreció la aparición de una nueva clase trabajadora urbana.",
    imagen: "/images/1930.jfif"
  },

  {
    id: 3,
    anio: "1943",
    titulo: "Golpe de Estado de 1943",
    resumen:
      "El 4 de junio de 1943 un nuevo golpe militar puso fin al gobierno conservador y abrió una etapa de reorganización política que posteriormente favoreció el crecimiento del movimiento liderado por Juan Domingo Perón.",
    contexto:
      "La Segunda Guerra Mundial, los conflictos internos y el cuestionamiento del sistema político contribuyeron al debilitamiento del gobierno. Un sector de las Fuerzas Armadas tomó el poder y desplazó al presidente Ramón Castillo. Entre los grupos militares que participaron de este escenario se encontraba el G.O.U. (Grupo de Oficiales Unidos), una organización secreta de oficiales nacionalistas de la que formaba parte Juan Domingo Perón.",
    acontecimientos: [
      "Derrocamiento de Ramón Castillo.",
      "Participación de sectores militares vinculados al G.O.U. (Grupo de Oficiales Unidos).",
      "Inicio de un nuevo gobierno militar.",
      "Creación de la Secretaría de Trabajo y Previsión.",
      "Ascenso político de Juan Domingo Perón.",
      "Acercamiento entre Perón y sectores del movimiento obrero."
    ],
    consecuencias:
      "El nuevo escenario político permitió el crecimiento de Perón como figura central de la política argentina y preparó el camino para las elecciones de 1946.",
    imagen: "/images/1930.jfif"
  },

  {
    id: 4,
    anio: "1946 - 1955",
    titulo: "Primer peronismo",
    resumen:
      "El peronismo transformó profundamente la vida política y social argentina mediante una fuerte intervención estatal, la ampliación de derechos laborales y el protagonismo creciente de los trabajadores.",
    contexto:
      "Juan Domingo Perón llegó a la presidencia en 1946 luego de una campaña electoral en la que tuvo un importante apoyo de sectores obreros y sindicales.",
    acontecimientos: [
      "Elección de Juan Domingo Perón en 1946.",
      "Ampliación de derechos laborales.",
      "Fortalecimiento de los sindicatos.",
      "Sanción de la Constitución de 1949.",
      "Ampliación de los derechos políticos de las mujeres.",
      "Reelección de Perón en 1951.",
      "Crecimiento de la intervención del Estado en la economía."
    ],
    consecuencias:
      "El período produjo una profunda transformación de las relaciones entre el Estado, los trabajadores y los sectores empresariales, además de generar una fuerte polarización política.",
    imagen: "/images/peron.jfif"
  },

  {
    id: 5,
    anio: "1955",
    titulo: "Revolución Libertadora",
    resumen:
      "En septiembre de 1955 un golpe militar derrocó al gobierno de Juan Domingo Perón y dio inicio a una etapa de proscripción del peronismo y de fuerte inestabilidad política.",
    contexto:
      "Durante los últimos años del gobierno peronista aumentaron los conflictos políticos y sociales. Sectores civiles, militares y religiosos se enfrentaron al gobierno.",
    acontecimientos: [
      "Bombardeo de Plaza de Mayo en junio de 1955.",
      "Golpe militar de septiembre de 1955.",
      "Derrocamiento de Juan Domingo Perón.",
      "Prohibición de símbolos y actividades vinculadas al peronismo.",
      "Exilio de Perón."
    ],
    consecuencias:
      "La proscripción del peronismo dificultó la construcción de un sistema político estable y contribuyó a la sucesión de gobiernos civiles y militares.",
    imagen: "/images/1955.jfif"
  },

  {
    id: 6,
    anio: "1958 - 1966",
    titulo: "Inestabilidad política y desarrollismo",
    resumen:
      "Durante este período se sucedieron gobiernos civiles condicionados por la proscripción del peronismo y por la creciente intervención de las Fuerzas Armadas.",
    contexto:
      "Arturo Frondizi asumió la presidencia en 1958 con un programa desarrollista orientado a impulsar la industrialización y atraer inversiones. Sin embargo, su gobierno estuvo condicionado por las presiones militares y los conflictos políticos. En 1962, las diferencias dentro de las Fuerzas Armadas dieron lugar al enfrentamiento entre los sectores Azules y Colorados. Luego de la caída de Frondizi, Arturo Illia asumió la presidencia en 1963, en elecciones en las que el peronismo continuaba proscripto. Su gobierno impulsó políticas de desarrollo económico, educativas y sociales, pero enfrentó fuertes presiones militares y opositoras que terminaron con su derrocamiento en 1966.",
    acontecimientos: [
      "Presidencia de Arturo Frondizi (1958-1962).",
      "Políticas desarrollistas.",
      "Impulso de la industria y la producción energética.",
      "Derrocamiento de Frondizi en marzo de 1962.",
      "Enfrentamientos entre los sectores militares Azules y Colorados.",
      "Presidencia de Arturo Illia (1963-1966).",
      "Derrocamiento de Illia mediante el golpe de Estado de junio de 1966."
    ],
    consecuencias:
      "La inestabilidad política, la proscripción del peronismo y la intervención de las Fuerzas Armadas impidieron la consolidación de un sistema democrático estable y favorecieron un nuevo golpe de Estado en 1966.",
    imagen: "/images/1955.jfif"
  },

  {
    id: 7,
    anio: "1966 - 1973",
    titulo: "Revolución Argentina",
    resumen:
      "El golpe de Estado de 1966 inició una dictadura militar que buscó permanecer en el poder sin establecer un plazo definido para el retorno de las instituciones democráticas.",
    contexto:
      "El presidente Arturo Illia fue derrocado por las Fuerzas Armadas, que instalaron a Juan Carlos Onganía como presidente de facto. El régimen intentó reorganizar la sociedad y la economía mediante un gobierno autoritario, mientras crecían la oposición política, la protesta social y la actividad de organizaciones armadas.",
    acontecimientos: [
      "Golpe de Estado de 1966.",
      "Gobierno de Juan Carlos Onganía.",
      "Noche de los Bastones Largos.",
      "Protestas sociales y estudiantiles.",
      "Cordobazo de 1969.",
      "Crecimiento de la conflictividad política.",
      "Surgimiento y crecimiento de organizaciones guerrilleras como Montoneros y el Ejército Revolucionario del Pueblo (ERP), que desarrollaron acciones armadas contra el régimen y otros sectores políticos."
    ],
    consecuencias:
      "La creciente movilización social, la actividad de las organizaciones armadas y la pérdida de legitimidad del régimen terminaron debilitando a la dictadura y llevaron a la apertura de un proceso electoral.",
    imagen: "/images/1955.jfif"
  },

  {
    id: 8,
    anio: "1973 - 1976",
    titulo: "Retorno del peronismo",
    resumen:
      "En 1973 Argentina recuperó un gobierno constitucional y el peronismo volvió al poder después de años de proscripción. Sin embargo, las divisiones internas del movimiento y la creciente violencia política marcaron esta etapa.",
    contexto:
      "La dictadura militar inició una transición hacia elecciones democráticas. El peronismo pudo participar nuevamente de la vida política. El regreso de Perón estuvo acompañado por fuertes tensiones entre distintos sectores de su movimiento, que se hicieron visibles durante su retorno al país.",
    acontecimientos: [
      "Elecciones de marzo de 1973.",
      "Presidencia de Héctor Cámpora.",
      "Regreso de Juan Domingo Perón a la Argentina el 20 de junio de 1973.",
      "Masacre de Ezeiza: enfrentamientos armados entre sectores enfrentados del peronismo durante el acto de bienvenida a Perón, con numerosos muertos y heridos.",
      "Renuncia de Héctor Cámpora y asunción de Raúl Lastiri como presidente provisional.",
      "Tercera presidencia de Juan Domingo Perón (1973-1974).",
      "Presidencia de María Estela Martínez de Perón (1974-1976).",
      "Aumento de la violencia política y profundización de la crisis económica."
    ],
    consecuencias:
      "La creciente crisis política, económica y social, junto con los enfrentamientos dentro del peronismo y la violencia política, terminó desembocando en un nuevo golpe de Estado en marzo de 1976.",
    imagen: "/images/peron.jfif"
  },

  {
    id: 9,
    anio: "1976 - 1983",
    titulo: "Proceso de Reorganización Nacional",
    resumen:
      "El 24 de marzo de 1976 las Fuerzas Armadas derrocaron al gobierno constitucional e instalaron el denominado Proceso de Reorganización Nacional, nombre utilizado por la propia dictadura para identificar su régimen. Se trató de la última dictadura cívico-militar argentina, caracterizada por el terrorismo de Estado y las graves violaciones a los derechos humanos.",
    contexto:
      "La Argentina atravesaba una profunda crisis política, económica y social. Las Fuerzas Armadas tomaron el poder, derrocaron a María Estela Martínez de Perón y establecieron una Junta Militar. La dictadura disolvió el Congreso, intervino las instituciones democráticas y organizó un sistema de represión ilegal contra quienes consideraba opositores.",
    acontecimientos: [
      "Golpe de Estado del 24 de marzo de 1976.",
      "Disolución del Congreso e intervención de las instituciones democráticas.",
      "Censura, persecución política y represión.",
      "Secuestros, torturas y desapariciones forzadas.",
      "Implementación de políticas económicas neoliberales durante la gestión de José Alfredo Martínez de Hoz, con apertura económica, liberalización financiera y crecimiento de la deuda externa.",
      "Organización de movimientos de familiares de desaparecidos y organismos de derechos humanos.",
      "Guerra de Malvinas en 1982."
    ],
    consecuencias:
      "El terrorismo de Estado provocó graves violaciones de los derechos humanos y dejó profundas consecuencias sociales, políticas y económicas. La derrota en la Guerra de Malvinas aceleró la pérdida de legitimidad de la dictadura y favoreció la transición hacia la recuperación democrática en 1983.",
    imagen: "/images/1976.jfif"
  },

  {
    id: 10,
    anio: "1982",
    titulo: "Guerra de Malvinas",
    resumen:
      "En abril de 1982 la Argentina ocupó militarmente las Islas Malvinas, iniciándose una guerra con el Reino Unido que finalizó con la derrota argentina en junio del mismo año.",
    contexto:
      "La dictadura militar atravesaba una profunda crisis de legitimidad. La recuperación de las islas fue presentada como una causa nacional y recibió inicialmente un importante apoyo social.",
    acontecimientos: [
      "Desembarco argentino en las islas el 2 de abril de 1982.",
      "Inicio del conflicto armado con el Reino Unido.",
      "Hundimiento del crucero ARA General Belgrano.",
      "Combates terrestres y aéreos.",
      "Rendición argentina el 14 de junio de 1982."
    ],
    consecuencias:
      "La derrota aceleró la pérdida de legitimidad de la dictadura y favoreció el proceso de transición hacia la recuperación democrática.",
    imagen: "/images/malvinas.jfif"
  }
];
