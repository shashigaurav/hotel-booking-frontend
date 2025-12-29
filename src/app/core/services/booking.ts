import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = `${environment.apiUrl}/bookings`;

  constructor(private http: HttpClient) {}

  // ✅ THIS METHOD WAS MISSING
  createBooking(data: any) {
    return this.http.post(`${this.baseUrl}/add`, data);
  }
   getMyBookings() {
    return this.http.get<any[]>(`${this.baseUrl}/my`);
  }
}
