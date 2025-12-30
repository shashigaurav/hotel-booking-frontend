import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  registerData = {
    fullName: '',
    email: '',
    password: '',
    phone: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.register(this.registerData).subscribe({
      next: () => {
        alert('Register successful');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Register error:', err);
        alert(err?.error || 'Register failed');
      }
    });
  }
}
