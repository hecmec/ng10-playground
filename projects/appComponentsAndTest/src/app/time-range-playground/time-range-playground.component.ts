import { Component, OnInit } from '@angular/core';
import { TimeRangeSimpleComponent } from '../time-range-simple/time-range-simple.component';
import { FormControl } from '@angular/forms';
import { ChrTimeRange36Hours } from '../time-range-simple/classes/chr-time-range-36hours.class';
import { ChrTime } from '../time-range-simple/classes/chr-time.class';
import { ChrTimeExtended } from '../time-range-simple/classes/chr-time-extended.class';

@Component({
  selector: 'app-time-range-playground',
  templateUrl: './time-range-playground.component.html',
  styleUrls: ['./time-range-playground.component.scss'],
})
export class TimeRangePlaygroundComponent implements OnInit {
  public currentTimeRange: ChrTimeRange36Hours = ChrTimeRange36Hours.createFromDateTimeStrings(
    '2020-10-20',
    '09:00',
    '10:00'
  );

  constructor() {}

  name = new FormControl('');

  ngOnInit(): void {}

  setRange(dateString: string, startTimeString: string, endTimeString: string) {
    this.currentTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(dateString, startTimeString, endTimeString);
  }
}
