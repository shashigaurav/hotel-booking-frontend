import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth';
import { RoomService } from '../../core/services/room';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ FormsModule added
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  searchText = ''; // ✅ required

  constructor(
    public authService: AuthService,
    private roomService: RoomService
  ) {}

  // ✅ this is called from navbar HTML
  onSearch() {
    this.roomService.searchTerm.next(this.searchText);
  }

  get userName(): string {
    const user = this.authService.getCurrentUser();
    return user?.fullName || 'User';
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
