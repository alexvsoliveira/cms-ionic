import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardTabbedComponent } from './wizard-tabbed.component';

describe('WizardTabbedComponent', () => {
  let component: WizardTabbedComponent;
  let fixture: ComponentFixture<WizardTabbedComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WizardTabbedComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
