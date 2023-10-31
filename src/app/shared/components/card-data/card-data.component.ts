import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SimulationModel } from 'src/app/simulation/models/simulation.model';
import { DateTransformPipe } from '../../pipes/date/date-transform.pipe';
import { PlanSectionPipe } from '../../pipes/plan-section.pipe';

@Component({
  selector: 'app-card-data',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    DateTransformPipe,
    PlanSectionPipe,
  ],
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss'],
})
export class CardDataComponent {
  @Input({ required: true }) data: SimulationModel = {} as SimulationModel;
}
