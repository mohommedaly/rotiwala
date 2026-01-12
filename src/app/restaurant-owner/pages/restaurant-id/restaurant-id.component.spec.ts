import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantIdComponent } from './restaurant-id.component';

describe('RestaurantIdComponent', () => {
  let component: RestaurantIdComponent;
  let fixture: ComponentFixture<RestaurantIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
