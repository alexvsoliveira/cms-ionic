import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuickSidenavSettingsComponent } from './quick-sidenav-settings.component';

describe('QuickSidenavSettingsComponent', () => {
  let component: QuickSidenavSettingsComponent;
  let fixture: ComponentFixture<QuickSidenavSettingsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [QuickSidenavSettingsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSidenavSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
