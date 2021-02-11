import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutHeaderComponent } from './about-header.component';

describe('AboutHeaderComponent', () => {
  let component: AboutHeaderComponent;
  let fixture: ComponentFixture<AboutHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AboutHeaderComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
