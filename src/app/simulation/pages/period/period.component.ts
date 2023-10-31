import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimulationMessageService } from '../../services/simulation-message/simulation-message.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
})
export class PeriodComponent {
  constructor(private message$: SimulationMessageService) {}

  public rangeForm = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
  });

  public onSubmit(): void {
    this.message$.update({
      period: {
        startDate: this.rangeForm.value.start ?? new Date(),
        endDate: this.rangeForm.value.end ?? new Date(),
      },
    });
  }
}
