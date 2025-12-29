import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

}
