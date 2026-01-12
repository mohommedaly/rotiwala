import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestrOwnerComponent } from './create-restr-owner.component';

describe('CreateRestrOwnerComponent', () => {
  let component: CreateRestrOwnerComponent;
  let fixture: ComponentFixture<CreateRestrOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRestrOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRestrOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
