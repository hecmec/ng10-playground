import {
  AfterViewInit,
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ChrTime } from './chr-time.class';
import { ChrDate } from './chr-date.class';
import { ChrDateTime } from './chr-date-time.class';
import { ChrTimeRange36Hours } from './chr-time-range-36hours.class';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChrTimeExtended } from './chr-time-extended.class';

/**
 * This is a custom form control
 * Two way databinding on value property (value/valueChange)
 *    https://blog.angulartraining.com/tutorial-create-your-own-two-way-data-binding-in-angular-46487650ea82
 * Implements interface ControlValueAccessor
 *    https://blog.angulartraining.com/tutorial-custom-form-controls-with-angular-22fc31c8c4cc
 *
 */
@Component({
  selector: 'app-time-range-simple',
  templateUrl: './time-range-simple.component.html',
  styleUrls: ['./time-range-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // We have to tell Angular about this new form control that we just created.
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeRangeSimpleComponent),
      multi: true,
    },
  ],
})
export class TimeRangeSimpleComponent
  implements OnChanges, AfterViewInit, ControlValueAccessor {
  // Both onChange and onTouched are functions usind for the ControlValueAccessor Interface
  onChange: any = () => {};
  onTouched: any = () => {};

  // interval
  readonly _defaultInterval: number = 15;
  _interval: number;
  @Input() public get interval(): number {
    return this._interval;
  }
  public set interval(val: number) {
    this._interval = Math.abs(val);
  }

  @Input() public isDisabled: boolean = false;
  // Disables the interval decrement button
  @Input() public isDecrementDisabled: boolean = false;
  // Disables the interval increment button
  @Input() public isIncrementDisabled: boolean = false;

  /**
   * Two way databinding for timeRange
   */
  _timeRange: ChrTimeRange36Hours;

  @Input('timeRange')
  public get timeRange(): ChrTimeRange36Hours {
    return this._timeRange;
  }
  public set timeRange(val: ChrTimeRange36Hours) {
    this._timeRange = val;
    this.timeRangeChange.emit(this._timeRange);
    this.onChange(val);
    this.onTouched();
  }

  @Output() timeRangeChange = new EventEmitter<ChrTimeRange36Hours>();

  // used to unsubscribe from event on destroy
  private ngDestroyed$ = new Subject();


/**
 * StartTime of this time range with getter and setter
 */
  _startTime: ChrTimeExtended = ChrTimeExtended.createFromMinutes(0);
  public get startTime(): ChrTimeExtended {
  return this.timeRange.startTime;
}
  public set startTime(v: ChrTimeExtended) {
  this.timeRange.startTime = v;
}

/**
 * EndTime of this time range with getter and setter
 */
// _endTime: ChrTime = ChrTime.createFromMinutes(0);
// public get endTime(): ChrTime {
//   return this._endTime;
// }
// public set endTime(v: ChrTime) {
//   this._endTime = v;
// }

// get startTimeText(): string {
//   return this._startTime.toHoursMinutesString();
// }
// set startTimeText(val: string) {
//   this._startTime = ChrTime.createFromHHmmString(val) as ChrTime;
// }

// get endTimeText(): string {
//   // console.debug('get endTimeText', this._endTime.toHoursMinutesString());
//   return this._endTime.toHoursMinutesString();
// }
// set endTimeText(val: string) {
//   this._endTime = ChrTime.createFromHHmmString(val) as ChrTime;
// }

/**
 *
 */
// private _isNextDay: string;
// public get isNextDay(): string {
//   return this._isNextDay;
// }
// public set isNextDay(v: string) {
//   this._isNextDay = v;
// }
  

  constructor() {}

  // ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('TimeRangeSimpleComponent.ngOnChanges', changes);
    if (changes && changes.interval) {
      console.debug('ngOnChanges nextDay');
      this.interval = changes.interval.currentValue;
      // You can also use nextDay.previousValue and
      // nextDay.firstChange for comparing old and new values
    }
  }

  increment() {
    console.debug('TimeRangeSimpleComponent.increment');
    this.timeRange.addIntervalInMinutes(this.interval);
  }

  decrement() {
    console.debug('TimeRangeSimpleComponent.decrement');
    this.timeRange.addIntervalInMinutes(-this.interval);
  }

  startTimeChanged() {
    console.debug('TimeRangeSimpleComponent.startTimeChanged');
  }

  endTimeChanged() {
    console.debug('TimeRangeSimpleComponent.endTimeChanged');
  }

  /**
   * Clean up
   */
  ngOnDestroy() {
    console.debug('TimeRangeSimpleComponent.ngOnDestroy');
    this.ngDestroyed$.next();
  }

  /***************************************
   * controlValueAccessor implementation
   **************************/

  /**
   * Writes a new value to the element.
   */
  writeValue(obj: any): void {
    console.debug('TimeRangeSimpleComponent.writeValue');
    if (obj) {
      this.timeRange = obj;
    }
  }
  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Registers a callback function that should be called when the control receives a blur event.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  /**
   * This function is called by the forms API when the control status changes to or from "DISABLED".
   */
  setDisabledState?(isDisabled: boolean): void {
    console.debug('TimeRangeSimpleComponent.setDisabledState');
    this.isDisabled = isDisabled;
  }
}


