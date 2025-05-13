import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-exercises-list',
  imports: [],
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.scss'
})

export class ExercisesListComponent {
   leccionTitulo = 'Lección 1';
  leccionContenido = 'Este es el contenido de la lección que se verá en el archivo.';

   descargarComoTxt(): void {
    const texto = document.getElementById('lorem-ipsum-text')?.innerText;
    
    if (texto) {
      const blob = new Blob([texto], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'lorem-ipsum.txt'; 
      a.click();
      URL.revokeObjectURL(url);
    }
  }
 descargarComoPDF(): void {
  const texto = document.getElementById('lorem-ipsum-text')?.innerText;

  if (texto) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const usableWidth = pageWidth - margin * 2;

    doc.setFontSize(16);
    doc.text('Texto de ejemplo:', margin, 20);

    doc.setFontSize(12);

    const lineas = doc.splitTextToSize(texto, usableWidth);

    doc.text(lineas, margin, 30);

    doc.save('lorem-ipsum.pdf');
  }
}
 
}