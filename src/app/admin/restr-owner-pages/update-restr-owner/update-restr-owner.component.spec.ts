import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestrOwnerComponent } from './update-restr-owner.component';

describe('UpdateRestrOwnerComponent', () => {
  let component: UpdateRestrOwnerComponent;
  let fixture: ComponentFixture<UpdateRestrOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRestrOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateRestrOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
