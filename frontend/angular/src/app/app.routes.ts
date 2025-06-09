import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExercisesListComponent } from './pages/exercises-list/exercises-list.component';
import { VideosListComponent } from './pages/videos-list/videos-list.component';
import { PaginaBuscadorComponent } from './pages/pagina-buscador/pagina-buscador.component';
import { LearningProgressComponent } from './pages/learning-progress/learning-progress.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { TerminalComponent } from './pages/terminal/terminal.component';
import { SeeExerciseComponent } from './pages/see-exercise/see-exercise.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },




  // rutas protegidas
  { path: 'buscador', component: PaginaBuscadorComponent, canMatch: [authGuard] },
  { path: 'lista-videos', component: VideosListComponent, canMatch: [authGuard] },
  { path: 'lista-ejercicios', component: ExercisesListComponent, canMatch: [authGuard] },
  { path: 'exercise/:id', component: SeeExerciseComponent, canMatch: [authGuard] },
  { path: 'progreso-aprendizaje', component: LearningProgressComponent, canMatch: [authGuard] },
  { path: 'lista-cursos', component: CoursesListComponent, canMatch: [authGuard] },
  { path: 'terminal', component: TerminalComponent, canMatch: [authGuard] },

];
