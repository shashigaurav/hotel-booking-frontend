import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../core/services/booking';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent {

  checkInDate!: string;
  checkOutDate!: string;
  guests: number = 1;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) {}

  // ✅ THIS METHOD WAS MISSING
  bookRoom() {
    if (!this.checkInDate || !this.checkOutDate) {
      alert('Please select check-in and check-out dates');
      return;
    }

    const payload = {
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      guests: this.guests
    };

    this.bookingService.createBooking(payload).subscribe({
      next: () => {
        // booking success page
        this.router.navigate(['/booking-success']);
      },
      error: () => {
        alert('Booking failed');
      }
    });
  }
}
