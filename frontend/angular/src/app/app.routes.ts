import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExercisesListComponent } from './pages/exercises-list/exercises-list.component';
import { VideosListComponent } from './pages/videos-list/videos-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },


  // listas
  {path: "lista-videos", component: VideosListComponent},
  {path: "lista-ejercicios", component: ExercisesListComponent}
];