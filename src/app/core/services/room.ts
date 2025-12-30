import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = `${environment.apiUrl}/rooms`;

  // 🔍 NAVBAR SEARCH → ROOM LIST COMMUNICATION
  searchTerm = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  // ✅ GET ALL ROOMS
  getAllRooms() {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  // ✅ GET ROOM BY ID
  getRoomById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // ✅ ADD ROOM
  addRoom(room: any) {
    return this.http.post(`${this.baseUrl}/add`, room);
  }

  // ✅ UPDATE ROOM
  updateRoom(id: number, room: any) {
    return this.http.put(`${this.baseUrl}/update/${id}`, room);
  }

  // ❌ FIXED TYPO: delet → delete
  deleteRoom(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
