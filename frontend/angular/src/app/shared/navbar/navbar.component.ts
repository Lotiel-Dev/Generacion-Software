import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  navItems = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/cursos', label: 'Cursos' },
    { path: '/ejercicios', label: 'Ejercicios' },
    { path: '/recursos', label: 'Recursos' },
    { path: '/comunidad', label: 'Comunidad' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

