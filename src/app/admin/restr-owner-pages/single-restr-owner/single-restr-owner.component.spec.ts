import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRestrOwnerComponent } from './single-restr-owner.component';

describe('SingleRestrOwnerComponent', () => {
  let component: SingleRestrOwnerComponent;
  let fixture: ComponentFixture<SingleRestrOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleRestrOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleRestrOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
