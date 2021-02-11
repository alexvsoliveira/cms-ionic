import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownIconComponent } from './dropdown-icon.component';

describe('DropdownIconComponent', () => {
  let component: DropdownIconComponent;
  let fixture: ComponentFixture<DropdownIconComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DropdownIconComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
