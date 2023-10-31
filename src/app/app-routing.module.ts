import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'simulacao',
    loadChildren: () =>
      import('./simulation/simulation.module').then((m) => m.SimulationModule),
  },
  { path: '', redirectTo: 'simulacao', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
