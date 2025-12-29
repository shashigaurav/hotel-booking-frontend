import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(
      `${environment.apiUrl}/users/signup`,
      data
    );
  }

  login(data: any) {
    return this.http.post(
      `${environment.apiUrl}/users/login`,
      data
    );
  }
  // ✅ ADD THIS METHOD
  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // ✅ LOGIN STATUS CHECK
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // ✅ LOGOUT
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
