import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimulationType } from '../../enums/simulation-type';
import { Observable } from 'rxjs';
import { SimulationResult } from '../../models/simulation-result.model';

@Injectable({
  providedIn: 'root',
})
export class SimulationResultService {
  constructor(private http: HttpClient) {}

  public getResult(type: SimulationType): Observable<SimulationResult> {
    return this.http.get<SimulationResult>(
      `http://localhost:3000/seguro/${type}`
    );
  }
}
