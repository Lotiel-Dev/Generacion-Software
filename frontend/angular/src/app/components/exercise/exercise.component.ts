import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
})
export class ExerciseComponent {
  @Input() detail: { id: number; title: string; statement: string } = {
    id: 0,
    title: '',
    statement: '',
  };

  constructor(private router: Router) {}

  navigateToExercise() {
    this.router.navigate(['/exercise', this.detail.id]);
  }
}
