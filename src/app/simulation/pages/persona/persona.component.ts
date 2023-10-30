import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent {
  public personaForm = new FormGroup({
    option: new FormControl('', Validators.required),
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

  public onSubmit() {
    // @TODO: Send to service
    console.log(this.personaForm.value);
  }
}
