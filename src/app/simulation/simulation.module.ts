import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FolderComponent } from '../shared/folder/folder.component';
import { PanelDataComponent } from '../shared/panel-data/panel-data.component';
import { StepperButtonComponent } from '../shared/stepper-button/stepper-button.component';
import { DestinyComponent } from './pages/destiny/destiny.component';
import { PeriodComponent } from './pages/period/period.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { ResultComponent } from './pages/result/result.component';
import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';

import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ResultCardComponent } from '../shared/result-card/result-card.component';

@NgModule({
  declarations: [
    SimulationComponent,
    PersonaComponent,
    DestinyComponent,
    PeriodComponent,
    ResultComponent,
  ],
  imports: [
    SimulationRoutingModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    FolderComponent,
    ResultCardComponent,
    PanelDataComponent,
    StepperButtonComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class SimulationModule {}
