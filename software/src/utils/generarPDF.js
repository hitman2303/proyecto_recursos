import jsPDF from "jspdf";

export const generarPDF = (puntaje, total) => {

  const doc = new jsPDF();

  doc.setFontSize(20);

  doc.text(
    "Historia Argentina 1930-1982",
    20,
    20
  );

  doc.setFontSize(14);

  doc.text(
    `Resultado del Quiz`,
    20,
    40
  );

  doc.text(
    `Puntaje: ${puntaje}/${total}`,
    20,
    55
  );

  doc.text(
    `Fecha: ${new Date().toLocaleDateString()}`,
    20,
    70
  );

  doc.save("resultado-quiz.pdf");
};