import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestNavComponent } from './owner-rest-nav.component';

describe('OwnerRestNavComponent', () => {
  let component: OwnerRestNavComponent;
  let fixture: ComponentFixture<OwnerRestNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerRestNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerRestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
