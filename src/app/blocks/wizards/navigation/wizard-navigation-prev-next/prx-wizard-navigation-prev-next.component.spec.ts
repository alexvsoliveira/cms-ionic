import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardNavigationPrevNextComponent } from './wizard-navigation-prev-next.component';

describe('WizardNavigationPrevNextComponent', () => {
  let component: WizardNavigationPrevNextComponent;
  let fixture: ComponentFixture<WizardNavigationPrevNextComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WizardNavigationPrevNextComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavigationPrevNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
