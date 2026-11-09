
import { useEffect, useMemo, useState } from "react";

function obtenerPorcentaje(intento) {
  if (intento.porcentaje !== undefined && intento.porcentaje !== null) {
    return Number(intento.porcentaje) || 0;
  }

  const puntaje = Number(intento.puntaje) || 0;
  const total = Number(intento.total) || 0;

  return total > 0 ? (puntaje / total) * 100 : 0;
}

function obtenerActividad(intento) {
  return intento.tipo || "Quiz";
}

function obtenerEstado(promedio) {
  if (promedio < 60) {
    return {
      texto: "Necesita reforzar",
      estilo: "bg-red-100 text-red-700"
    };
  }

  if (promedio < 80) {
    return {
      texto: "En proceso",
      estilo: "bg-yellow-100 text-yellow-700"
    };
  }

  return {
    texto: "Buen desempeño",
    estilo: "bg-green-100 text-green-700"
  };
}

function Docente() {
  const [intentos, setIntentos] = useState([]);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState("todos");
  const [actividadSeleccionada, setActividadSeleccionada] = useState("todas");

  const [evaluaciones, setEvaluaciones] = useState([]);
  const [calificacionDocente, setCalificacionDocente] = useState("Bueno");
  const [observacionDocente, setObservacionDocente] = useState("");

  // Cargar historial de actividades
  useEffect(() => {
    try {
      const datos = JSON.parse(
        localStorage.getItem("historialQuiz") || "[]"
      );

      setIntentos(Array.isArray(datos) ? datos : []);
    } catch (error) {
      console.error("Error al cargar el historial:", error);
      setIntentos([]);
    }
  }, []);

  // Cargar evaluaciones docentes
  useEffect(() => {
    try {
      const datos = JSON.parse(
        localStorage.getItem("evaluacionesDocente") || "[]"
      );

      setEvaluaciones(Array.isArray(datos) ? datos : []);
    } catch (error) {
      console.error("Error al cargar las evaluaciones:", error);
      setEvaluaciones([]);
    }
  }, []);

  // Lista de alumnos
  const alumnos = useMemo(() => {
    return [
      ...new Set(
        intentos
          .map((intento) => intento.nombre)
          .filter(Boolean)
      )
    ].sort((a, b) => a.localeCompare(b));
  }, [intentos]);

  // Lista de actividades
  const actividades = useMemo(() => {
    return [
      ...new Set(intentos.map(obtenerActividad))
    ].sort((a, b) => a.localeCompare(b));
  }, [intentos]);

  // Aplicar filtros
  const intentosFiltrados = useMemo(() => {
    return intentos.filter((intento) => {
      const coincideAlumno =
        alumnoSeleccionado === "todos" ||
        intento.nombre === alumnoSeleccionado;

      const coincideActividad =
        actividadSeleccionada === "todas" ||
        obtenerActividad(intento) === actividadSeleccionada;

      return coincideAlumno && coincideActividad;
    });
  }, [intentos, alumnoSeleccionado, actividadSeleccionada]);

  // Guardar una evaluación individual
  const guardarEvaluacion = (e) => {
    e.preventDefault();

    if (alumnoSeleccionado === "todos") {
      alert("Seleccione un alumno.");
      return;
    }

    if (!observacionDocente.trim()) {
      alert("Escriba una observación antes de guardar.");
      return;
    }

    const nuevaEvaluacion = {
      id: `${Date.now()}-${Math.random()}`,
      alumno: alumnoSeleccionado,
      calificacion: calificacionDocente,
      observacion: observacionDocente.trim(),
      fecha: new Date().toLocaleString("es-AR")
    };

    const actualizadas = [
      ...evaluaciones,
      nuevaEvaluacion
    ];

    setEvaluaciones(actualizadas);

    localStorage.setItem(
      "evaluacionesDocente",
      JSON.stringify(actualizadas)
    );

    setObservacionDocente("");

    alert("Evaluación guardada correctamente.");
  };

  // Eliminar una evaluación
  const eliminarEvaluacion = (id) => {
    const confirmar = window.confirm(
      "¿Está seguro de que desea eliminar esta evaluación?"
    );

    if (!confirmar) return;

    const actualizadas = evaluaciones.filter(
      (evaluacion) => evaluacion.id !== id
    );

    setEvaluaciones(actualizadas);

    localStorage.setItem(
      "evaluacionesDocente",
      JSON.stringify(actualizadas)
    );
  };

  // Estadísticas generales
  const estadisticas = useMemo(() => {
    const cantidad = intentosFiltrados.length;
    const porcentajes = intentosFiltrados.map(obtenerPorcentaje);

    const promedio = cantidad
      ? porcentajes.reduce((total, valor) => total + valor, 0) / cantidad
      : 0;

    return {
      cantidad,
      promedio: promedio.toFixed(0),
      mejor: cantidad ? Math.max(...porcentajes).toFixed(0) : 0,
      alumnos: new Set(
        intentosFiltrados.map((i) => i.nombre).filter(Boolean)
      ).size
    };
  }, [intentosFiltrados]);

  // Resumen por actividad
  const resumenActividades = useMemo(() => {
    const grupos = {};

    intentosFiltrados.forEach((intento) => {
      const actividad = obtenerActividad(intento);

      if (!grupos[actividad]) {
        grupos[actividad] = {
          cantidad: 0,
          total: 0
        };
      }

      grupos[actividad].cantidad++;
      grupos[actividad].total += obtenerPorcentaje(intento);
    });

    return Object.entries(grupos).map(([nombre, datos]) => ({
      nombre,
      cantidad: datos.cantidad,
      promedio: (datos.total / datos.cantidad).toFixed(0)
    }));
  }, [intentosFiltrados]);

  // Seguimiento por alumno
  const resumenAlumnos = useMemo(() => {
    const grupos = {};

    intentosFiltrados.forEach((intento) => {
      const nombre = intento.nombre || "Alumno sin nombre";

      if (!grupos[nombre]) {
        grupos[nombre] = {
          cantidad: 0,
          total: 0,
          mejor: 0
        };
      }

      const porcentaje = obtenerPorcentaje(intento);

      grupos[nombre].cantidad++;
      grupos[nombre].total += porcentaje;
      grupos[nombre].mejor = Math.max(
        grupos[nombre].mejor,
        porcentaje
      );
    });

    return Object.entries(grupos)
      .map(([nombre, datos]) => {
        const promedio = datos.total / datos.cantidad;

        return {
          nombre,
          cantidad: datos.cantidad,
          promedio: promedio.toFixed(0),
          mejor: datos.mejor.toFixed(0),
          estado: obtenerEstado(promedio)
        };
      })
      .sort((a, b) => Number(b.promedio) - Number(a.promedio));
  }, [intentosFiltrados]);

  // Ordenar historial: más recientes primero
  const historialOrdenado = [...intentosFiltrados].reverse();

  // Intentos completos del alumno seleccionado
  const intentosAlumno = useMemo(() => {
    if (alumnoSeleccionado === "todos") return [];

    return intentos.filter(
      (intento) => intento.nombre === alumnoSeleccionado
    );
  }, [intentos, alumnoSeleccionado]);

  // Estadísticas individuales
  const estadisticasAlumno = useMemo(() => {
    const cantidad = intentosAlumno.length;

    if (!cantidad) return null;

    const porcentajes = intentosAlumno.map(obtenerPorcentaje);

    const promedio =
      porcentajes.reduce((total, valor) => total + valor, 0) /
      cantidad;

    return {
      cantidad,
      promedio: promedio.toFixed(0),
      mejor: Math.max(...porcentajes).toFixed(0),
      ultimo: porcentajes[porcentajes.length - 1].toFixed(0),
      primero: porcentajes[0].toFixed(0),
      diferencia: (
        porcentajes[porcentajes.length - 1] - porcentajes[0]
      ).toFixed(0)
    };
  }, [intentosAlumno]);

  // Rendimiento individual por actividad
  const actividadesAlumno = useMemo(() => {
    const grupos = {};

    intentosAlumno.forEach((intento) => {
      const actividad = obtenerActividad(intento);

      if (!grupos[actividad]) {
        grupos[actividad] = {
          cantidad: 0,
          total: 0
        };
      }

      grupos[actividad].cantidad++;
      grupos[actividad].total += obtenerPorcentaje(intento);
    });

    return Object.entries(grupos).map(([nombre, datos]) => ({
      nombre,
      cantidad: datos.cantidad,
      promedio: (datos.total / datos.cantidad).toFixed(0)
    }));
  }, [intentosAlumno]);

  // Evaluaciones docentes del alumno seleccionado
  const evaluacionesAlumno = useMemo(() => {
    if (alumnoSeleccionado === "todos") return [];

    return evaluaciones
      .filter(
        (evaluacion) => evaluacion.alumno === alumnoSeleccionado
      )
      .reverse();
  }, [evaluaciones, alumnoSeleccionado]);

  return (
    <div className="p-6">

      {/* ENCABEZADO */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Panel Docente
        </h1>

        <p className="text-gray-500 mt-2">
          Seguimiento y evaluación del rendimiento de los alumnos.
        </p>
      </div>

      {/* FILTROS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

        <div>
          <label className="block font-semibold mb-2">
            Filtrar por alumno
          </label>

          <select
            value={alumnoSeleccionado}
            onChange={(e) => {
              setAlumnoSeleccionado(e.target.value);
              setObservacionDocente("");
              setCalificacionDocente("Bueno");
            }}
            className="border rounded-lg p-3 w-full bg-white"
          >
            <option value="todos">Todos los alumnos</option>

            {alumnos.map((alumno) => (
              <option key={alumno} value={alumno}>
                {alumno}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Filtrar por actividad
          </label>

          <select
            value={actividadSeleccionada}
            onChange={(e) => setActividadSeleccionada(e.target.value)}
            className="border rounded-lg p-3 w-full bg-white"
          >
            <option value="todas">Todas las actividades</option>

            {actividades.map((actividad) => (
              <option key={actividad} value={actividad}>
                {actividad}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* ESTADÍSTICAS GENERALES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

        <div className="border rounded-xl p-5 shadow-sm bg-white">
          <p className="text-gray-500">Alumnos</p>
          <p className="text-3xl font-bold mt-2">
            {estadisticas.alumnos}
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow-sm bg-white">
          <p className="text-gray-500">Actividades realizadas</p>
          <p className="text-3xl font-bold mt-2">
            {estadisticas.cantidad}
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow-sm bg-white">
          <p className="text-gray-500">Promedio general</p>
          <p className="text-3xl font-bold mt-2">
            {estadisticas.promedio}%
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow-sm bg-white">
          <p className="text-gray-500">Mejor resultado</p>
          <p className="text-3xl font-bold mt-2">
            {estadisticas.mejor}%
          </p>
        </div>

      </div>

      {/* RESUMEN POR ACTIVIDAD */}
      <div className="border rounded-xl overflow-hidden mb-8 bg-white">

        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Rendimiento por actividad
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Promedio obtenido en cada cuestionario o juego.
          </p>
        </div>

        {resumenActividades.length === 0 ? (
          <p className="p-6 text-gray-500">
            Todavía no hay actividades registradas.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4">Actividad</th>
                  <th className="p-4">Intentos</th>
                  <th className="p-4">Promedio</th>
                </tr>
              </thead>

              <tbody>
                {resumenActividades.map((actividad) => (
                  <tr key={actividad.nombre} className="border-t">
                    <td className="p-4 font-medium">
                      {actividad.nombre}
                    </td>

                    <td className="p-4">
                      {actividad.cantidad}
                    </td>

                    <td className="p-4 font-semibold">
                      {actividad.promedio}%
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>

      {/* SEGUIMIENTO POR ALUMNO */}
      <div className="border rounded-xl overflow-hidden mb-8 bg-white">

        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Seguimiento de alumnos
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Promedio de cada alumno y estado orientativo de su rendimiento.
          </p>
        </div>

        {resumenAlumnos.length === 0 ? (
          <p className="p-6 text-gray-500">
            No hay alumnos registrados.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4">Alumno</th>
                  <th className="p-4">Actividades</th>
                  <th className="p-4">Promedio</th>
                  <th className="p-4">Mejor resultado</th>
                  <th className="p-4">Evaluación</th>
                  <th className="p-4">Ficha</th>
                </tr>
              </thead>

              <tbody>
                {resumenAlumnos.map((alumno) => (
                  <tr key={alumno.nombre} className="border-t">

                    <td className="p-4 font-medium">
                      {alumno.nombre}
                    </td>

                    <td className="p-4">
                      {alumno.cantidad}
                    </td>

                    <td className="p-4">
                      {alumno.promedio}%
                    </td>

                    <td className="p-4">
                      {alumno.mejor}%
                    </td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${alumno.estado.estilo}`}>
                        {alumno.estado.texto}
                      </span>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => {
                          setAlumnoSeleccionado(alumno.nombre);
                          setActividadSeleccionada("todas");
                          setObservacionDocente("");
                          setCalificacionDocente("Bueno");
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Ver ficha
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>

      {/* FICHA INDIVIDUAL DEL ALUMNO */}
      {alumnoSeleccionado !== "todos" && estadisticasAlumno && (
        <div className="border rounded-xl overflow-hidden mb-8 bg-white">

          <div className="p-5 border-b flex flex-wrap justify-between items-center gap-3">
            <div>
              <h2 className="text-2xl font-bold">
                Ficha individual
              </h2>

              <p className="text-gray-500 mt-1">
                Alumno: {alumnoSeleccionado}
              </p>
            </div>

            <button
              onClick={() => {
                setAlumnoSeleccionado("todos");
                setObservacionDocente("");
                setCalificacionDocente("Bueno");
              }}
              className="border rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Volver a todos los alumnos
            </button>
          </div>

          {/* ESTADÍSTICAS INDIVIDUALES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-5">

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">
                Actividades realizadas
              </p>
              <p className="text-3xl font-bold mt-2">
                {estadisticasAlumno.cantidad}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">
                Promedio general
              </p>
              <p className="text-3xl font-bold mt-2">
                {estadisticasAlumno.promedio}%
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">
                Mejor resultado
              </p>
              <p className="text-3xl font-bold mt-2">
                {estadisticasAlumno.mejor}%
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">
                Último resultado
              </p>
              <p className="text-3xl font-bold mt-2">
                {estadisticasAlumno.ultimo}%
              </p>
            </div>

          </div>

          {/* EVOLUCIÓN */}
          <div className="px-5 pb-6">

            <h3 className="text-xl font-bold mb-2">
              Evolución del alumno
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Comparación entre el primer y el último resultado registrado.
            </p>

            <div className="flex flex-wrap gap-6 mb-5">

              <p>
                Primer resultado:
                <strong className="ml-2">
                  {estadisticasAlumno.primero}%
                </strong>
              </p>

              <p>
                Último resultado:
                <strong className="ml-2">
                  {estadisticasAlumno.ultimo}%
                </strong>
              </p>

              <p>
                Variación:
                <strong className={`ml-2 ${
                  Number(estadisticasAlumno.diferencia) > 0
                    ? "text-green-600"
                    : Number(estadisticasAlumno.diferencia) < 0
                      ? "text-red-600"
                      : "text-gray-600"
                }`}>
                  {Number(estadisticasAlumno.diferencia) > 0 ? "+" : ""}
                  {estadisticasAlumno.diferencia}%
                </strong>
              </p>

            </div>

            <div className="space-y-3">

              {intentosAlumno.map((intento, index) => {
                const porcentaje = obtenerPorcentaje(intento);

                return (
                  <div key={`${intento.fecha}-${index}`}>

                    <div className="flex justify-between gap-3 text-sm mb-1">
                      <span>
                        {obtenerActividad(intento)}
                      </span>

                      <strong>{porcentaje.toFixed(0)}%</strong>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{
                          width: `${Math.min(100, Math.max(0, porcentaje))}%`
                        }}
                      />
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      {intento.fecha || "Fecha no disponible"}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>

          {/* RENDIMIENTO POR ACTIVIDAD */}
          <div className="p-5 border-t">

            <h3 className="text-xl font-bold mb-4">
              Rendimiento por actividad
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left">

                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3">Actividad</th>
                    <th className="p-3">Intentos</th>
                    <th className="p-3">Promedio</th>
                  </tr>
                </thead>

                <tbody>
                  {actividadesAlumno.map((actividad) => (
                    <tr key={actividad.nombre} className="border-t">

                      <td className="p-3">
                        {actividad.nombre}
                      </td>

                      <td className="p-3">
                        {actividad.cantidad}
                      </td>

                      <td className="p-3 font-semibold">
                        {actividad.promedio}%
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          {/* EVALUACIONES Y OBSERVACIONES DOCENTES */}
          <div className="p-5 border-t">

            <h3 className="text-xl font-bold mb-2">
              Evaluaciones y observaciones docentes
            </h3>

            <p className="text-sm text-gray-500 mb-5">
              Registro del seguimiento pedagógico individual de {alumnoSeleccionado}.
            </p>

            {/* FORMULARIO */}
            <form
              onSubmit={guardarEvaluacion}
              className="bg-gray-50 border rounded-xl p-5 mb-6"
            >

              <div className="mb-4">

                <label className="block font-semibold mb-2">
                  Evaluación del alumno
                </label>

                <select
                  value={calificacionDocente}
                  onChange={(e) => setCalificacionDocente(e.target.value)}
                  className="border rounded-lg p-3 w-full bg-white"
                >
                  <option value="Excelente">Excelente</option>
                  <option value="Muy bueno">Muy bueno</option>
                  <option value="Bueno">Bueno</option>
                  <option value="En proceso">En proceso</option>
                  <option value="Necesita mejorar">Necesita mejorar</option>
                </select>

              </div>

              <div className="mb-4">

                <label className="block font-semibold mb-2">
                  Observaciones
                </label>

                <textarea
                  value={observacionDocente}
                  onChange={(e) => setObservacionDocente(e.target.value)}
                  placeholder="Escriba observaciones sobre el desempeño, participación, avances o dificultades del alumno..."
                  rows={4}
                  maxLength={2000}
                  className="border rounded-lg p-3 w-full bg-white resize-y"
                />

                <p className="text-xs text-gray-500 mt-1">
                  {observacionDocente.length}/2000 caracteres
                </p>

              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
              >
                Guardar evaluación
              </button>

            </form>

            {/* HISTORIAL DE EVALUACIONES */}
            <h4 className="font-bold text-lg mb-4">
              Historial de evaluaciones
            </h4>

            {evaluacionesAlumno.length === 0 ? (

              <div className="border rounded-xl p-5 text-gray-500">
                Todavía no hay observaciones ni evaluaciones para este alumno.
              </div>

            ) : (

              <div className="space-y-4">

                {evaluacionesAlumno.map((evaluacion) => (

                  <div
                    key={evaluacion.id}
                    className="border rounded-xl p-5 shadow-sm"
                  >

                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">

                      <div>

                        <span className="font-bold text-lg">
                          {evaluacion.calificacion}
                        </span>

                        <p className="text-sm text-gray-500 mt-1">
                          {evaluacion.fecha}
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() => eliminarEvaluacion(evaluacion.id)}
                        className="text-red-600 border border-red-200 px-3 py-2 rounded-lg hover:bg-red-50"
                      >
                        Eliminar
                      </button>

                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="whitespace-pre-wrap text-gray-700">
                        {evaluacion.observacion}
                      </p>
                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>
      )}

      {/* HISTORIAL COMPLETO */}
      <div className="border rounded-xl overflow-hidden bg-white">

        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Historial de resultados
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {intentosFiltrados.length} registros encontrados.
          </p>
        </div>

        {historialOrdenado.length === 0 ? (
          <p className="p-6 text-gray-500">
            No hay intentos registrados para los filtros seleccionados.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4">Alumno</th>
                  <th className="p-4">Actividad</th>
                  <th className="p-4">Dificultad</th>
                  <th className="p-4">Puntaje</th>
                  <th className="p-4">Porcentaje</th>
                  <th className="p-4">Fecha</th>
                </tr>
              </thead>

              <tbody>
                {historialOrdenado.map((intento, index) => (
                  <tr
                    key={`${intento.nombre}-${intento.fecha}-${index}`}
                    className="border-t"
                  >

                    <td className="p-4">
                      {intento.nombre || "Alumno"}
                    </td>

                    <td className="p-4">
                      {obtenerActividad(intento)}
                    </td>

                    <td className="p-4">
                      {intento.dificultad || "—"}
                    </td>

                    <td className="p-4">
                      {intento.puntaje ?? "—"}/
                      {intento.total ?? "—"}
                    </td>

                    <td className="p-4 font-semibold">
                      {obtenerPorcentaje(intento).toFixed(0)}%
                    </td>

                    <td className="p-4">
                      {intento.fecha || "Sin fecha"}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>

      {/* REFERENCIA DE EVALUACIÓN */}
      <div className="mt-6 text-sm text-gray-500">
        <p className="font-semibold mb-2">
          Referencia de rendimiento orientativa:
        </p>

        <p>
          Menos de 60%: necesita reforzar · 60% a 79%: en proceso ·
          80% o más: buen desempeño.
        </p>
      </div>

    </div>
  );
}

export default Docente;
