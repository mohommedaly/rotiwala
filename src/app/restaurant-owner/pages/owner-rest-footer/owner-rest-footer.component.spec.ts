import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestFooterComponent } from './owner-rest-footer.component';

describe('OwnerRestFooterComponent', () => {
  let component: OwnerRestFooterComponent;
  let fixture: ComponentFixture<OwnerRestFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerRestFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerRestFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
