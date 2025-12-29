import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../core/services/booking';


@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bookings.html',
  styleUrls: ['./my-bookings.css']
})
export class MyBookingsComponent implements OnInit {

  bookings: any[] = [];
  loading = true;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getMyBookings().subscribe({
      next: data => {
        this.bookings = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
