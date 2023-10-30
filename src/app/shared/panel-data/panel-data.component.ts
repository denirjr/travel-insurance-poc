import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-panel-data',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './panel-data.component.html',
  styleUrls: ['./panel-data.component.scss']
})
export class PanelDataComponent {

}
