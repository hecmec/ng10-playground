import { Component, OnInit } from '@angular/core';
import { ChrTimeExtended } from '../time-range-simple/classes/chr-time-extended.class';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.scss'],
})
export class MaterialTestComponent implements OnInit {
  public title: string = 'my Title';
  public timeLabel: string = 'My Start Time';
  public timeTestObj: ChrTimeExtended = ChrTimeExtended.createFromHoursMinutes(
    11,
    20
  );

  constructor() {}

  ngOnInit(): void {}
}
