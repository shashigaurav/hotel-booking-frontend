import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth';
import { RoomService } from '../core/services/room';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  rooms: any[] = [];

  heroImages = [
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    'https://images.unsplash.com/photo-1501117716987-c8e1ecb2101b',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
  ];

  currentImageIndex = 0;
  intervalId: any;

  constructor(
    public authService: AuthService,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit() {
    // 🔄 HERO SLIDESHOW
    this.intervalId = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.heroImages.length;
    }, 4000);

    // 🏨 LOAD ROOMS AFTER LOGIN
    if (this.authService.isLoggedIn()) {
      this.roomService.getAllRooms().subscribe(data => {
        this.rooms = data;
      });
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  bookRoom(id: number) {
    this.router.navigate(['/booking', id]);
  }
}
