import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrOwnerComponent } from './restr-owner.component';

describe('RestrOwnerComponent', () => {
  let component: RestrOwnerComponent;
  let fixture: ComponentFixture<RestrOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestrOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestrOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
