import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeliveryBoyComponent } from './create-delivery-boy.component';

describe('CreateDeliveryBoyComponent', () => {
  let component: CreateDeliveryBoyComponent;
  let fixture: ComponentFixture<CreateDeliveryBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDeliveryBoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDeliveryBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
