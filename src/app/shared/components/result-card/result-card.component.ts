import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SimulationModel } from 'src/app/simulation/models/simulation.model';
import { DateTransformPipe } from '../date/date-transform.pipe';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, DateTransformPipe],
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent {
  @Input({ required: true }) data: SimulationModel = {} as SimulationModel;
}
