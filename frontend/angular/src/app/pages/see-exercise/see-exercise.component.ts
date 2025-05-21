import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from '../../shared/editor/editor.component';

interface ExerciseSubmission {
  id: number;
  submittedAt: Date;
  status: 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Runtime Error';
  executionTime: string;
  memory: string;
}

@Component({
  selector: 'app-see-exercise',
  templateUrl: './see-exercise.component.html',
  styleUrls: ['./see-exercise.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, EditorComponent],
})
export class SeeExerciseComponent implements OnInit {
  // Pestañas
  activeTab: 'problem' | 'submit' | 'submissions' = 'problem';

  // Datos del ejercicio (simulados)
  exercise = {
    id: 'A123',
    title: 'Suma de dos números',
    difficulty: 'Easy',
    timeLimit: '1 segundo',
    memoryLimit: '256 MB',
    description: 'Dados dos números enteros A y B, calcula su suma.',
    inputDescription:
      'La primera línea contiene dos enteros A y B (1 ≤ A, B ≤ 10^9).',
    outputDescription: 'Imprime un solo entero: la suma de A y B.',
    topics: ['Matemáticas', 'Implementación'],
    materials: ['Aritmética Básica'],
    examples: [
      {
        input: '2 3',
        output: '5',
        explanation: '2 + 3 = 5',
      },
      {
        input: '100 200',
        output: '300',
        explanation: '100 + 200 = 300',
      },
    ],
  };

  // Datos de envíos (simulados)
  submissions: ExerciseSubmission[] = [];

  // Para el formulario de envío
  solutionCode = '';

  constructor(private location: Location) {}

  ngOnInit(): void {
    // Simular historial de envíos
    this.submissions = [
      {
        id: 1001,
        submittedAt: new Date(2025, 4, 15, 10, 30),
        status: 'Accepted',
        executionTime: '15ms',
        memory: '4KB',
      },
      {
        id: 1000,
        submittedAt: new Date(2025, 4, 15, 10, 15),
        status: 'Wrong Answer',
        executionTime: '12ms',
        memory: '4KB',
      },
    ];
  }

  goBack(): void {
    this.location.back();
  }

  setActiveTab(tab: 'problem' | 'submit' | 'submissions'): void {
    this.activeTab = tab;
  }

  submitSolution(): void {
    // Esta función se implementará más adelante para procesar el envío
    console.log('Solución enviada:', this.solutionCode);
  }

  copyText(text: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar texto: ', err);
      });
  }
}
