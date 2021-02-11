import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutPurchaseComponent } from './about-purchase.component';

describe('AboutPurchaseComponent', () => {
  let component: AboutPurchaseComponent;
  let fixture: ComponentFixture<AboutPurchaseComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutPurchaseComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
