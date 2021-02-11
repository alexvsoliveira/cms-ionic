import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutSelectionComponent } from './about-selection.component';

describe('AboutSelectionComponent', () => {
  let component: AboutSelectionComponent;
  let fixture: ComponentFixture<AboutSelectionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutSelectionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
