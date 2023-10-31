import { Component, OnInit } from '@angular/core';
import { SimulationMessageService } from './services/simulation-message/simulation-message.service';
import { Observable, of } from 'rxjs';
import { SimulationModel } from './models/simulation.model';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  public simulationData$: Observable<SimulationModel> = of(
    {} as SimulationModel
  );

  constructor(private message$: SimulationMessageService) {}

  ngOnInit(): void {
    this.simulationData$ = this.message$.get$;
  }
}
