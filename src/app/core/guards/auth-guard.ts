import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {

    // ✅ user logged in
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // ❌ user not logged in
    this.router.navigate(['/login']);
    return false;
  }
}
