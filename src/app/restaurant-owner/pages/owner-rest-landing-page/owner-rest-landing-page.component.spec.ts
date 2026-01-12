import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestLandingPageComponent } from './owner-rest-landing-page.component';

describe('OwnerRestLandingPageComponent', () => {
  let component: OwnerRestLandingPageComponent;
  let fixture: ComponentFixture<OwnerRestLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerRestLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerRestLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
