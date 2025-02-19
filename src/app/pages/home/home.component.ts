import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Eliminar token
    this.router.navigate(['/login']); // Redirigir al login
  }
}
