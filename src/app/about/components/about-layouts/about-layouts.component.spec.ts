import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutLayoutsComponent } from './about-layouts.component';

describe('AboutLayoutsComponent', () => {
  let component: AboutLayoutsComponent;
  let fixture: ComponentFixture<AboutLayoutsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutLayoutsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
