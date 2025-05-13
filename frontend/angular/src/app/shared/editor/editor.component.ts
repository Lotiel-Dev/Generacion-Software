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
    // @ts-ignore
    this.pyodide = await loadPyodide();
    console.log('Pyodide cargado desde CDN');
  }

  async ejecutarCodigo() {
    try {
      
      this.pyodide.setStdout({
        batched: (text: string) => {
          this.output += text;
        }
      });

      
      this.output = '';

      await this.pyodide.runPythonAsync(this.codigo);

    } catch (error) {
      this.output = `Error: ${error}`;
    }
  }

}
