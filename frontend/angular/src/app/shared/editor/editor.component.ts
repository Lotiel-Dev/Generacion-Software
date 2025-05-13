import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent {
  codigo: string = '';
  inputs: string = '';
  output: string = '';

  
  ejecutarCodigo() {
    
    console.log('Código:', this.codigo);
    console.log('Inputs:', this.inputs);

    this.output = 'Simulando ejecución de Python...\nOutput generado.';
  }
}
