import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  codigo: string = '';
  inputs: string = '';
  output: string = '';

  pyodide: any;

  async ngOnInit() {
    const { loadPyodide } = await import('pyodide');
    this.pyodide = await loadPyodide();
    console.log('Pyodide cargado');
  }

  async ejecutarCodigo() {
    try {
      const result = await this.pyodide.runPythonAsync(this.codigo);
      this.output = result;
    } catch (error) {
      this.output = `Error: ${error}`;
    }
  }
}
