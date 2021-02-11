import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutFooterComponent } from './about-footer.component';

describe('AboutFooterComponent', () => {
  let component: AboutFooterComponent;
  let fixture: ComponentFixture<AboutFooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutFooterComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
