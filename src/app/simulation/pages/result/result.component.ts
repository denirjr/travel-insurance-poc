import { Component, OnInit } from '@angular/core';
import { SimulationMessageService } from '../../services/simulation-message/simulation-message.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{

  constructor(private message$: SimulationMessageService) {}

  ngOnInit(): void {
    this.message$.get$.subscribe((res) => console.log('message here => ', res));
  }


}
