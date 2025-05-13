import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
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
