import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SimulationMessageService } from '../../services/simulation-message/simulation-message.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent {
  constructor(private message$: SimulationMessageService) {}

  public personaForm = new FormGroup({
    option: new FormControl<string>('', Validators.required),
    reason: new FormControl('', Validators.required),
  });

  public options: string[] = ['Você', 'Você e sua familia', 'Outra pessoa'];

  public reasons = [
    {
      value: 'Trabalho',
      label: 'Trabalho',
    },
    {
      value: 'Lazer',
      label: 'Lazer',
    },
  ];

  public onSubmit(): void {
    this.message$.update({
      persona: {
        reason: this.personaForm.value.reason ?? '',
        who: this.personaForm.value.option ?? '',
      },
    });
  }
}
