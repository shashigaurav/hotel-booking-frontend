import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingComponent } from './booking';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingComponent],
      imports: [
        CommonModule,   // ✅ ngClass / ngIf / ngFor
        FormsModule     // ✅ ngModel (agar use ho raha hai)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
