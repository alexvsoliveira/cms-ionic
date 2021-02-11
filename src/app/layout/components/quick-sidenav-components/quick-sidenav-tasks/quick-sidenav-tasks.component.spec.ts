import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuickSidenavTasksComponent } from './quick-sidenav-tasks.component';

describe('QuickSidenavTasksComponent', () => {
  let component: QuickSidenavTasksComponent;
  let fixture: ComponentFixture<QuickSidenavTasksComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [QuickSidenavTasksComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSidenavTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
