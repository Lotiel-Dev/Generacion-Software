// EditorComponent.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, CodemirrorModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  codigo = '';
  inputs = '';
  output = '';

  cmOptions = {
    mode: 'python',
    theme: 'material',
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    styleActiveLine: true,
    matchBrackets: true,
    viewportMargin: Infinity,
    placeholder: 'Escribe tu código…',
  };

  inputOptions = {
    ...this.cmOptions,
    mode: 'text/plain',
    lineNumbers: false,
    placeholder: 'Escribe tus inputs…',
  };

  pyodide: PyodideInterface | null = null;

  async ngOnInit(): Promise<void> {
    // @ts-expect-error: `loadPyodide` es una función global no tipada aquí
    this.pyodide = await loadPyodide();
    console.log('Pyodide cargado desde CDN');
  }

  async ejecutarCodigo(): Promise<void> {
    if (!this.pyodide) {
      this.output = 'Pyodide no está cargado correctamente.';
      return;
    }

    try {
      const inputLines = this.inputs.split('\n');
      let inputIndex = 0;

      const inputFunction = () => {
        if (inputIndex >= inputLines.length) {
          throw new Error('No hay más inputs disponibles');
        }
        return inputLines[inputIndex++];
      };

      this.pyodide.globals.set('input', inputFunction);

      this.output = '';

      this.pyodide.setStdout({
        batched: (text: string) => {
          this.output += text;
        },
      });

      await this.pyodide.runPythonAsync(this.codigo);
    } catch (error) {
      this.output = `Error: ${String(error)}`;
    }
  }
}

interface PyodideInterface {
  globals: {
    set: (key: string, value: unknown) => void;
  };
  setStdout: (options: { batched: (text: string) => void }) => void;
  runPythonAsync: (code: string) => Promise<void>;
}
