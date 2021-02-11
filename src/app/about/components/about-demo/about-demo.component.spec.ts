import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutDemoComponent } from './about-demo.component';

describe('AboutDemoComponent', () => {
  let component: AboutDemoComponent;
  let fixture: ComponentFixture<AboutDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutDemoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
