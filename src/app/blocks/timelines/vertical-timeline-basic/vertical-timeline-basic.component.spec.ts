import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerticalTimelineBasicComponent } from './vertical-timeline-basic.component';

describe('VerticalTimelineBasicComponent', () => {
  let component: VerticalTimelineBasicComponent;
  let fixture: ComponentFixture<VerticalTimelineBasicComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VerticalTimelineBasicComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTimelineBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
