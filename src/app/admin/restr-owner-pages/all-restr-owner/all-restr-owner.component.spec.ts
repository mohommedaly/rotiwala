import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRestrOwnerComponent } from './all-restr-owner.component';

describe('AllRestrOwnerComponent', () => {
  let component: AllRestrOwnerComponent;
  let fixture: ComponentFixture<AllRestrOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllRestrOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllRestrOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
