import { Component, OnInit } from '@angular/core';
import { TimeRangeSimpleComponent } from '../time-range-simple/time-range-simple.component';

@Component({
  selector: 'app-time-range-playground',
  templateUrl: './time-range-playground.component.html',
  styleUrls: ['./time-range-playground.component.scss'],
})
export class TimeRangePlaygroundComponent implements OnInit {
  public timeTest1: string;

  constructor() {}

  // c:TimeRangeSimpleComponent

  ngOnInit(): void {}
}
