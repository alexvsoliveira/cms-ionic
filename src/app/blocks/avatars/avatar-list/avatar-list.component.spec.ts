import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvatarListComponent } from './avatar-list.component';

describe('AvatarListComponent', () => {
  let component: AvatarListComponent;
  let fixture: ComponentFixture<AvatarListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AvatarListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
