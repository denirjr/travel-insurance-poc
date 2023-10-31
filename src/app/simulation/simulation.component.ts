import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SimulationMessageService } from './services/simulation-message/simulation-message.service';
import { Observable, of } from 'rxjs';
import { SimulationModel } from './models/simulation.model';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  public simulationData$: Observable<SimulationModel> = of({} as SimulationModel);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private message$: SimulationMessageService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.simulationData$ = this.message$.get$;
  }
}
