import jsPDF from "jspdf";

export function generarPDF(datos) {

  const doc = new jsPDF();

  doc.setFontSize(20);

  doc.text(
    "Proyecto Historia Argentina",
    20,
    25
  );

  doc.setFontSize(14);

  doc.text(
    "Evaluación de Historia Argentina",
    20,
    40
  );

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
    `Desempeño: ${datos.desempeño}`,
    20,
    110
  );

  doc.text(
    "Proyecto pedagógico - Profesorado",
    20,
    140
  );

  doc.save(
    `resultado-${datos.nombre}.pdf`
  );

}