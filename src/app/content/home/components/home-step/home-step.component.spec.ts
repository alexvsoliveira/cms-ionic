import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeStepComponent } from './home-step.component';

describe('HomeStepComponent', () => {
  let component: HomeStepComponent;
  let fixture: ComponentFixture<HomeStepComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeStepComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
