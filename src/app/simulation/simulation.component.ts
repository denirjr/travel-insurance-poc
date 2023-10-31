import { Component } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent {
  onStepSelectionChange(event: any): void {
    console.log(event);
  }


  isStepCompleted(stepIndex: any): boolean {
    console.log(stepIndex)
    // Implement your logic for step completion status
    // For example, check if the user has filled in all required fields for that step.
    return true; // Return true or false based on your criteria.
  }
}
