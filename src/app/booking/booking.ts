import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../core/services/booking';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent implements OnInit {

  roomId!: number;

  bookingData = {
    checkIn: '',
    checkOut: '',
    guests: 1
  };

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService, // ✅ SERVICE
    private router: Router
  ) {}

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.paramMap.get('id'));
  }

  confirmBooking() {

    const payload = {
      roomId: this.roomId,
      checkIn: this.bookingData.checkIn,
      checkOut: this.bookingData.checkOut,
      guests: this.bookingData.guests
    };

    this.bookingService.createBooking(payload).subscribe({
      next: () => {
        alert('Booking confirmed 🎉');
        this.router.navigate(
  ['/booking-success'],
  { queryParams: { roomId: this.roomId } }
);
      },
      error: (err) => {
        console.error(err);
        alert('Booking failed');
      }
    });
  }
}
