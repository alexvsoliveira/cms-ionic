import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValueProgressComponent } from './value-progress.component';

describe('ValueProgressComponent', () => {
  let component: ValueProgressComponent;
  let fixture: ComponentFixture<ValueProgressComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ValueProgressComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
