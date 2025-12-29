import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
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

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.registerData).subscribe({
      next: () => {
        alert('Register successful');
      },
      error: (err) => {
        console.error(err);
        alert('Register failed');
      }
    });
  }
}
