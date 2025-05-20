import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  standalone: true, 
  imports: [],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
})
export class ExerciseComponent {
  @Input() detail: { id: number; title: string; statement: string } = {
    id: 0,
    title: '',
    statement: '',
  };
}
