import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimulationMessageService } from '../../services/simulation-message/simulation-message.service';

@Component({
  selector: 'app-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.scss'],
})
export class DestinyComponent {
  constructor(private message$: SimulationMessageService) {}

  public destinyForm = new FormGroup({
    option: new FormControl('', Validators.required),
    destiny: new FormControl('', Validators.required),
  });

  public options: string[] = ['Brasil', 'Exterior'];

  public destinies = [
    {
      value: 'AfricaDoSul',
      label: 'Africa do sul',
    },
    {
      value: 'Salvador',
      label: 'Salvador',
    },
  ];

  public onSubmit(): void {
    this.message$.update({
      destiny: {
        state: this.destinyForm.value.destiny ?? '',
        where: this.destinyForm.value.option ?? '',
      },
    });
  }
}
