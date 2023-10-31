import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimulationModel } from '../../models/simulation.model';

@Injectable({
  providedIn: 'root',
})
export class SimulationMessageService {
  private messageSub$ = new BehaviorSubject<SimulationModel>(
    {} as SimulationModel
  );
  public get$ = this.messageSub$.asObservable();

  public set(message: SimulationModel): void {
    this.messageSub$.next(message);
  }

  public update(changes: Partial<SimulationModel>): void {
    const updatedMessage = { ...this.messageSub$.value, ...changes };
    this.messageSub$.next(updatedMessage);
  }
}
