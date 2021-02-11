import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidenavLinkComponent } from './sidenav-link.component';

describe('SidenavLinkComponent', () => {
  let component: SidenavLinkComponent;
  let fixture: ComponentFixture<SidenavLinkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SidenavLinkComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
