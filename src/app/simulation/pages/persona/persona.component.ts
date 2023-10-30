import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent {
  public options: string[] = [
    'Você',
    'Você e sua familia',
    'Outra pessoa',
  ];

}
