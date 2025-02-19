import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
          localStorage.setItem('token', response.body.token);
          this.message = 'Login exitoso!';
          this.router.navigate(['/home']);
        } else if (response.status === 300) {
          this.message = 'Redirección, revisa tu cuenta.';
        }
      },
      error: (error) => {
        if (error.status === 400) {
          this.message = 'Credenciales incorrectas';
        } else {
          this.message = 'Error inesperado';
        }
      },
    });
  }
}
