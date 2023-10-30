import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.scss'],
})
export class DestinyComponent {
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

  public onSubmit() {
    // @TODO: Send to service
    console.log(this.destinyForm.value);
  }
}
