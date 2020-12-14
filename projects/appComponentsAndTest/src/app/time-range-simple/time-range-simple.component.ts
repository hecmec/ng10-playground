import { Component, OnInit } from '@angular/core';
import { ChrTime } from './chr-time.class';

@Component({
  selector: 'app-time-range-simple',
  templateUrl: './time-range-simple.component.html',
  styleUrls: ['./time-range-simple.component.scss']
})
export class TimeRangeSimpleComponent implements OnInit {

  startTime: ChrTime = ChrTime.createFromMinutes(0);
  endTime: ChrTime = ChrTime.createFromMinutes(0);

  get endTimeText(): string{
    return this.startTime.toHoursMinutesString();
  }
  set endTimeText(val:string) {
    this.startTime = ChrTime.createFromHHmmString(val);
  }

  get startTimeText(): string {
    return this.endTime.toHoursMinutesString();
  }
  set startTimeText(val: string) {
    this.endTime = ChrTime.createFromHHmmString(val);
  }


  constructor() { }


  ngOnInit(): void {
  }

  increment() {
    this.startTime = ChrTime.addMinutes(this.startTime, 15);
    this.endTime = ChrTime.addMinutes(this.endTime, 15);
  }

  decrement() {
    this.startTime = ChrTime.addMinutes(this.startTime, -15);
    this.endTime = ChrTime.addMinutes(this.endTime, -15);
  }
}
