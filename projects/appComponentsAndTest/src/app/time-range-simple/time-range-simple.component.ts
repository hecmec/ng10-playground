import { Component, OnInit } from '@angular/core';
import { ChrTime } from './chr-time.class';

@Component({
  selector: 'app-time-range-simple',
  templateUrl: './time-range-simple.component.html',
  styleUrls: ['./time-range-simple.component.scss']
})
export class TimeRangeSimpleComponent implements OnInit {

  // startTimeText = '00:00';
  // endTimeText = '00:00';
  _startTime: ChrTime = ChrTime.createFromMinutes(0);
  _endTime: ChrTime = ChrTime.createFromMinutes(0);


  get endTimeText(): string{
    return this._startTime.toHoursMinutesString();
  }
  set endTimeText(val:string) {
    this._startTime = ChrTime.createFromHHmmString(val);
  }

  get startTimeText(): string {
    return this._endTime.toHoursMinutesString();
  }
  set startTimeText(val: string) {
    this._endTime = ChrTime.createFromHHmmString(val);
  }


  constructor() { }


  ngOnInit(): void {
  }

  // startTimeChanged() {
  //   this._startTime = ChrTime.createFromHHmmString(this.startTimeText)
  // }
  // endTimeChanged() {
  //   this._endTime = ChrTime.createFromHHmmString(this.endTimeText)
  // }

  increment() {
    this._startTime = ChrTime.addMinutes(this._startTime, 15);
    this._endTime = ChrTime.addMinutes(this._endTime, 15);
  }

  decrement() {
    this._startTime = ChrTime.addMinutes(this._startTime, -15);
    this._endTime = ChrTime.addMinutes(this._endTime, -15);
  }
}
