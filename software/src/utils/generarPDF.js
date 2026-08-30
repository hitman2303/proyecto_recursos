import jsPDF from "jspdf";

export function generarPDF(datos) {

  const doc = new jsPDF();

  // =========================
  // TÍTULO
  // =========================

  doc.setFontSize(20);

  doc.text(
    "Proyecto Historia Argentina",
    20,
    25
  );


  // =========================
  // SUBTÍTULO
  // =========================

  doc.setFontSize(14);

  doc.text(
    "Evaluación - Historia Argentina (1930 - 1982)",
    20,
    40
  );


  // =========================
  // DATOS
  // =========================

  doc.setFontSize(12);

  doc.text(
    `Alumno: ${datos.nombre}`,
    20,
    60
  );

  doc.text(
    `Fecha: ${datos.fecha}`,
    20,
    70
  );

  doc.text(
    `Puntaje: ${datos.puntaje}/${datos.total}`,
    20,
    85
  );

  doc.text(
    `Porcentaje: ${datos.porcentaje}%`,
    20,
    95
  );

  doc.text(
    `Desempeño: ${datos.desempeno}`,
    20,
    105
  );


  // =========================
  // FEEDBACK
  // =========================

  doc.setFontSize(14);

  doc.text(
    "Devolución pedagógica",
    20,
    125
  );


  doc.setFontSize(11);

  const feedbackDividido =
    doc.splitTextToSize(
      datos.feedback,
      170
    );

  doc.text(
    feedbackDividido,
    20,
    140
  );


  // =========================
  // PIE
  // =========================

  doc.setFontSize(10);

  doc.text(
    "Proyecto pedagógico - Profesorado",
    20,
    270
  );


  // =========================
  // DESCARGA
  // =========================

const nombreArchivo =
  datos.nombre
    .replace(/\s+/g, "-")
    .toLowerCase();

doc.save(
  `resultado-${nombreArchivo}.pdf`
);
}