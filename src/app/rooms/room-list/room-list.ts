import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../core/services/room';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.css']
})
export class RoomList implements OnInit {

  rooms: any[] = [];
  filteredRooms: any[] = [];
  searchText: string = '';
  loading = true;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms = data;
        this.filteredRooms = data; // 👈 important
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  filterRooms() {
    const text = this.searchText.toLowerCase();

    this.filteredRooms = this.rooms.filter(room =>
      room.roomType?.toLowerCase().includes(text) ||
      room.roomNumber?.toString().includes(text) ||
      room.location?.toLowerCase().includes(text)   // agar backend me ho
    );
  }
}
