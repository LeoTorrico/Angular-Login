import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.message = 'Login exitoso!';
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
