import { Routes } from '@angular/router';
import { ItemListComponent } from './shared/item-list/item-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },


  // listas
  {path: "lista-videos", component: ItemListComponent}
];