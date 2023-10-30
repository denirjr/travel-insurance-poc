import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulationComponent } from './simulation.component';
import { PersonaComponent } from './pages/persona/persona.component';

const routes: Routes = [
  {
    path: '',
    component: SimulationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationRoutingModule {}
