import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RadioCardComponent } from './radio-card.component';

describe('RadioCardComponent', () => {
  let component: RadioCardComponent;
  let fixture: ComponentFixture<RadioCardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RadioCardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
