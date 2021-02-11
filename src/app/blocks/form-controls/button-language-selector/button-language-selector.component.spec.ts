import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonLanguageSelectorComponent } from './button-language-selector.component';

describe('ButtonLanguageSelectorComponent', () => {
  let component: ButtonLanguageSelectorComponent;
  let fixture: ComponentFixture<ButtonLanguageSelectorComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ButtonLanguageSelectorComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
