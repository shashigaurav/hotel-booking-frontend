import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth';


@Component({
  selector: 'app-navbar',
  standalone: true,                     // ✅ REQUIRED
  imports: [CommonModule, RouterModule],// ✅ NgIf, routerLink
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] // ✅ plural
})
export class Navbar {

  constructor(public authService: AuthService) {}

  get userName(): string {
    const user = this.authService.getCurrentUser();
    return user?.fullName || 'User';
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
