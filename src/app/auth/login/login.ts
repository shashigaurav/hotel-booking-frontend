import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/profile']);
      },
      error: () => alert('Login failed')
    });
  }
}
