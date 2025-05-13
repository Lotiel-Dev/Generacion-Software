import { Routes } from '@angular/router';
import { ItemListComponent } from './shared/item-list/item-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ExercisesListComponent } from './pages/exercises-list/exercises-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },


  // listas
  {path: "lista-videos", component: ItemListComponent},
  {path: "lista-ejercicios", component: ExercisesListComponent}
];