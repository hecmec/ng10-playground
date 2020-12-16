import { Component, OnInit } from '@angular/core';
import { TimeRangeSimpleComponent } from '../time-range-simple/time-range-simple.component';
import { FormControl } from '@angular/forms';
import { ChrTimeRange36Hours } from '../time-range-simple/chr-time-range-36hours.class';

@Component({
  selector: 'app-time-range-playground',
  templateUrl: './time-range-playground.component.html',
  styleUrls: ['./time-range-playground.component.scss'],
})
export class TimeRangePlaygroundComponent implements OnInit {
  public timeTest1: string;
  public defaultTimeRange: ChrTimeRange36Hours = null;

  constructor() {}

  name = new FormControl('');

  ngOnInit(): void {}
}
