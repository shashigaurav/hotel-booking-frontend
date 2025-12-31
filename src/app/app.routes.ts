import { Routes } from '@angular/router';

import { Profile } from './profile/profile';
import { AuthGuard } from './core/guards/auth-guard';
import { RoomList } from './rooms/room-list/room-list';
import {  HomeComponent } from './home/home';





export const routes: Routes = [
  { path: '', component: HomeComponent},

     {
    path: '',
    component: RoomList
  },
  {
    path: 'profile',
    component: Profile,
    canActivate: [AuthGuard]   // 🔐 PROTECTED
  },
  
  { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./auth/register/register').then(m => m.RegisterComponent) },
    {
    path: 'booking/:id',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./booking/booking')
        .then(m => m.BookingComponent)
  },
  {
  path: 'booking-success',
  loadComponent: () =>
    import('./booking/booking-success/booking-success')
      .then(m => m.BookingSuccessComponent)
},
{
  path: 'booking',
  loadComponent: () =>
    import('./booking/booking').then(m => m.BookingComponent)
},
{
  path: 'my-bookings',
  loadComponent: () =>
    import('./booking/my-bookings/my-bookings').then(m => m.MyBookingsComponent)
},
{
  path: 'my-bookings',
  canActivate: [AuthGuard],
  loadComponent: () =>
    import('./booking/my-bookings/my-bookings')
      .then(m => m.MyBookingsComponent)
},
  { path: '**', redirectTo: '' }
];
