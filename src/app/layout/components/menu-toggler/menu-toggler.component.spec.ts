import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuTogglerComponent } from './menu-toggler.component';

describe('MenuTogglerComponent', () => {
  let component: MenuTogglerComponent;
  let fixture: ComponentFixture<MenuTogglerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MenuTogglerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
