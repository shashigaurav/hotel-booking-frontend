import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-success.html',
  styleUrls: ['./booking-success.css']
})
export class BookingSuccessComponent implements OnInit {

  roomId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.queryParamMap.get('roomId'));
  }
}
