import { TestBed } from '@angular/core/testing';
import { BookingComponent } from '../../booking/booking';



describe('Booking', () => {
  let service: BookingComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
