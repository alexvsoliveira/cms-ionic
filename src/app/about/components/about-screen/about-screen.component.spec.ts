import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutScreenComponent } from './about-screen.component';

describe('AboutScreenComponent', () => {
  let component: AboutScreenComponent;
  let fixture: ComponentFixture<AboutScreenComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutScreenComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
