import { Component, OnInit } from '@angular/core';
import { DOMESTIC } from '../../../domestic-aiports';

@Component({
  selector: 'abe-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  domestics = DOMESTIC;

  constructor() { }

  ngOnInit() {
  }

}
