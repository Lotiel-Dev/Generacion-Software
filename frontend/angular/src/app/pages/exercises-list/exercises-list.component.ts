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
    const texto = `Título: ${this.leccionTitulo}\nContenido: ${this.leccionContenido}`;
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leccion.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
 descargarComoPDF(): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(this.leccionTitulo, 10, 20);
    doc.setFontSize(12);
    doc.text(this.leccionContenido, 10, 30);
    doc.save('leccion.pdf');
  }
 
}