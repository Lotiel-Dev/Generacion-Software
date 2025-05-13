import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <<--- Agrega esto
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [EditorComponent,],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditorComponent,
    // exporta también NavbarComponent, FooterComponent si los usas fuera
  ]
})
export class SharedModule { }


