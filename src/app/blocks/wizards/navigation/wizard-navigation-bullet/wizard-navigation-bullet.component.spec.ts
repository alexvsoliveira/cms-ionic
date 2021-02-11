import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardNavigationBulletComponent } from './wizard-navigation-bullet.component';

describe('WizardNavigationBulletComponent', () => {
  let component: WizardNavigationBulletComponent;
  let fixture: ComponentFixture<WizardNavigationBulletComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WizardNavigationBulletComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavigationBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
