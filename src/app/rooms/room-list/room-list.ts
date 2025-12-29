import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomService } from '../../core/services/room';


@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.css']
})
export class RoomList implements OnInit {

  rooms: any[] = [];
  loading = true;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
