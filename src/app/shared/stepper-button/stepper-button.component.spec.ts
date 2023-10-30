import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperButtonComponent } from './stepper-button.component';

describe('StepperButtonComponent', () => {
  let component: StepperButtonComponent;
  let fixture: ComponentFixture<StepperButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperButtonComponent]
    });
    fixture = TestBed.createComponent(StepperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
