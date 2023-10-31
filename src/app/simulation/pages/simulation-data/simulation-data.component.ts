import { Component } from '@angular/core';
import { filter, switchMap, tap } from 'rxjs';
import { SimulationType } from '../../enums/simulation-type';
import { SimulationResult } from '../../models/simulation-result.model';
import { SimulationMessageService } from '../../services/simulation-message/simulation-message.service';
import { SimulationResultService } from '../../services/simulation-result/simulation-result.service';

@Component({
  selector: 'app-simulation-data',
  templateUrl: './simulation-data.component.html',
  styleUrls: ['./simulation-data.component.scss'],
})
export class SimulationDataComponent {
  public data: SimulationResult = {} as SimulationResult;
  public travelPlaceText = '';

  constructor(
    private message$: SimulationMessageService,
    private simulationResultService$: SimulationResultService
  ) {}

  ngOnInit(): void {
    this.getSimulationResult();
  }

  private getSimulationResult(): void {
    this.message$.get$
      .pipe(
        // filter((res) => 'period' in res),
        tap((notifiedMessage) =>
          this.isNationalOrInternationalText(notifiedMessage?.destiny?.where)
        ),
        switchMap((res) =>
          this.simulationResultService$.getResult(
            res?.destiny?.where === 'Exterior'
              ? SimulationType.INTERNATIONAL
              : SimulationType.NATIONAL
          )
        )
      )
      .subscribe((res) => (this.data = res));
  }

  private isNationalOrInternationalText = (where: string): void => {
    this.travelPlaceText =
      where === 'Exterior' ? 'internacional' : 'nacional';
  };
}
