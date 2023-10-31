import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FolderComponent } from '../shared/components/folder/folder.component';
import { StepperButtonComponent } from '../shared/components/stepper-button/stepper-button.component';
import { DestinyComponent } from './pages/destiny/destiny.component';
import { PeriodComponent } from './pages/period/period.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';

import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SimulationDataComponent } from './pages/simulation-data/simulation-data.component';
import {MatTableModule} from '@angular/material/table';
import { IncludeLabelPipe } from '../shared/pipes/include-label/include-label.pipe';


@NgModule({
  declarations: [
    SimulationComponent,
    PersonaComponent,
    DestinyComponent,
    PeriodComponent,
    SimulationDataComponent,
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
    StepperButtonComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
    IncludeLabelPipe,
  ],
})
export class SimulationModule {}
