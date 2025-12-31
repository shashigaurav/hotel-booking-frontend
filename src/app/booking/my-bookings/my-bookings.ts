import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BookingService } from '../../core/services/booking';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [
    CommonModule   // ✅ ngIf / ngFor / class binding
  ],
  templateUrl: './my-bookings.html',
  styleUrls: ['./my-bookings.css']
})
export class MyBookingsComponent implements OnInit {

  bookings: any[] = [];
  loading = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.loading = true;
    this.bookingService.getMyBookings().subscribe(res => {
      this.bookings = res;
      this.loading = false;
    });
  }

  cancelBooking(id: number) {
    this.bookingService.cancelBooking(id).subscribe(() => {
      const b = this.bookings.find(x => x.id === id);
      if (b) b.status = 'CANCELLED';
    });
  }

  downloadInvoice(b: any) {
    const doc = new jsPDF();
    doc.text('Booking Invoice', 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [['Field', 'Value']],
      body: [
        ['Booking ID', b.id],
        ['Room', b.roomType],
        ['Check-In', b.checkInDate],
        ['Check-Out', b.checkOutDate],
        ['Total', `₹ ${b.totalPrice}`],
        ['Status', b.status],
      ]
    });

    doc.save(`invoice_${b.id}.pdf`);
  }
}
