import { Component, OnInit } from '@angular/core';
import { ChrTimeExtended } from '../time-range-simple/classes/chr-time-extended.class';

@Component({
  selector: 'app-time-field-playground',
  templateUrl: './time-field-playground.component.html',
  styleUrls: ['./time-field-playground.component.scss'],
})
export class TimeFieldPlaygroundComponent implements OnInit {
  public timeTestStr: string;
  public timeTestStr1: string;
  public timeTestStr2: string;
  public timeTestObj: ChrTimeExtended = ChrTimeExtended.createFromHoursMinutes(11, 20);
  // this.timeTestObj.toHoursMinutesString()
  constructor() {}

  ngOnInit(): void {}

  setTestTimeObj(h: number, m: number) {
    this.timeTestObj = ChrTimeExtended.createFromHoursMinutes(h, m, true);
  }
}
