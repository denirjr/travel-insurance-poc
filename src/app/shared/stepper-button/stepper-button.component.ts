import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatStepperModule],
  templateUrl: './stepper-button.component.html',
  styleUrls: ['./stepper-button.component.scss'],
})
export class StepperButtonComponent {
  @Input({ required: false }) public hasBackButton = false;
  @Input({ required: false }) public isDisabled = false;
  @Input({ required: false }) public nextButtonType = 'submit';

}
