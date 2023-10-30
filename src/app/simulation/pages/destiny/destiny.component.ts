import { Component } from '@angular/core';

@Component({
  selector: 'app-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.scss'],
})
export class DestinyComponent {
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
}
