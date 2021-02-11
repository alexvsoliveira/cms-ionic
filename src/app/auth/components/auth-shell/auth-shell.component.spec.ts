import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthShellComponent } from './auth-shell.component';

describe('AuthShellComponent', () => {
  let component: AuthShellComponent;
  let fixture: ComponentFixture<AuthShellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AuthShellComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
