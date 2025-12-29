import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = `${environment.apiUrl}/rooms`;

  constructor(private http: HttpClient) {}

  getAllRooms() {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getRoomById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  addRoom(room: any) {
    return this.http.post(`${this.baseUrl}/add`, room);
  }

  updateRoom(id: number, room: any) {
    return this.http.put(`${this.baseUrl}/update/${id}`, room);
  }

  deleteRoom(id: number) {
    return this.http.delete(`${this.baseUrl}/delet/${id}`);
  }
}
