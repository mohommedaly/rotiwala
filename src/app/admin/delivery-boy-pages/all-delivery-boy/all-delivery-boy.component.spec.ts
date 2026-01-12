import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliveryBoyComponent } from './all-delivery-boy.component';

describe('AllDeliveryBoyComponent', () => {
  let component: AllDeliveryBoyComponent;
  let fixture: ComponentFixture<AllDeliveryBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDeliveryBoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDeliveryBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
