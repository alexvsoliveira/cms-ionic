import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardNavigationComponent } from './wizard-navigation.component';

describe('WizardNavigationComponent', () => {
  let component: WizardNavigationComponent;
  let fixture: ComponentFixture<WizardNavigationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WizardNavigationComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
