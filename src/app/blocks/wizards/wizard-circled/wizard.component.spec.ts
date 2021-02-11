import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardCircledComponent } from './wizard-circled.component';

describe('WizardCircledComponent', () => {
  let component: WizardCircledComponent;
  let fixture: ComponentFixture<WizardCircledComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WizardCircledComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCircledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
