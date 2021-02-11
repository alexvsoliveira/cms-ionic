import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutSliderIconsComponent } from './about-slider-icons.component';

describe('AboutSliderIconsComponent', () => {
  let component: AboutSliderIconsComponent;
  let fixture: ComponentFixture<AboutSliderIconsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutSliderIconsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSliderIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
