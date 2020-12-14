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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * This is a custom form control
 * Two way databinding on value
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
  @Input() public interval: number = 15;

  @Input() public rangeStartTime: string;

  @Input() public rangeEndTime: string;

  @Input() public rangeDate: string;

  // if true the startTime will be interpreted as a time on d+1
  @Input() public nextDay: boolean = false;

  // Disables the whole control
  @Input() public disabled: boolean = false;
  // Disables the interval decrement button
  @Input() public disableDecrement: boolean = false;
  // Disables the interval increment button
  @Input() public disableIncrement: boolean = false;

  // Value two way binding
  rangeValue: ExtendedTimeRange;

  // Both onChange and onTouched are functions
  onChange: any = () => {};
  onTouched: any = () => {};

  @Output() valueChange = new EventEmitter<ExtendedTimeRange>();

  @Input('value')
  get value() {
    return this.rangeValue;
  }
  set value(val) {
    this.rangeValue = val;
    this.valueChange.emit(this.rangeValue);
    this.onChange(val);
    this.onTouched();
  }

  /**
   * StartTime of this time range with getter and setter
   */
  _startTime: ChrTime = ChrTime.createFromMinutes(0);
  public get startTime(): ChrTime {
    return this._startTime;
  }
  public set startTime(v: ChrTime) {
    this._startTime = v;
  }

  /**
   * EndTime of this time range with getter and setter
   */
  _endTime: ChrTime = ChrTime.createFromMinutes(0);
  public get endTime(): ChrTime {
    return this._endTime;
  }
  public set endTime(v: ChrTime) {
    this._endTime = v;
  }

  get startTimeText(): string {
    return this._startTime.toHoursMinutesString();
  }
  set startTimeText(val: string) {
    this._startTime = ChrTime.createFromHHmmString(val);
  }

  get endTimeText(): string {
    // console.debug('get endTimeText', this._endTime.toHoursMinutesString());
    return this._endTime.toHoursMinutesString();
  }
  set endTimeText(val: string) {
    this._endTime = ChrTime.createFromHHmmString(val);
  }

  /**
   *
   */
  private _isNextDay: string;
  public get isNextDay(): string {
    return this._isNextDay;
  }
  public set isNextDay(v: string) {
    this._isNextDay = v;
  }

  // used to unsubscribe from event on destroy
  private ngDestroyed$ = new Subject();

  constructor() {}

  // ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ChrPlageHoraire.ngOnChanges', changes);
    if (changes && changes.nextDay) {
      console.debug('ngOnChanges nextDay');
      this.isNextDay = changes.nextDay.currentValue;
      // You can also use nextDay.previousValue and
      // nextDay.firstChange for comparing old and new values
    }
  }

  increment() {
    this._startTime = ChrTime.addMinutes(this._startTime, this.interval);
    this._endTime = ChrTime.addMinutes(this._endTime, this.interval);
  }

  decrement() {
    this._startTime = ChrTime.addMinutes(this._startTime, -this.interval);
    this._endTime = ChrTime.addMinutes(this._endTime, -this.interval);
  }

  startTimeChanged() {}
  endTimeChanged() {}

  /**
   * Clean up
   */
  ngOnDestroy() {
    console.debug('ChrPlageHoraire.ngOnDestroy');
    this.ngDestroyed$.next();
  }

  /***************************************
   * controlValueAccessor implementation
   **************************/

  /**
   * Writes a new value to the element.
   */
  writeValue(obj: any): void {
    if (obj) {
      this.rangeValue = obj;
    }
  }
  /**
   * Registers a callback function that should be called when
   * the control's value changes in the UI.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Registers a callback function that should be called when
   * the control receives a blur event.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  /**
   * This function is called by the forms API when
   * the control status changes to or from "DISABLED".
   */
  setDisabledState?(isDisabled: boolean): void {}
}
/**
 *
 */
export type ExtendedTimeRange = {
  referenceDate: ChrDate;
  startTime: ChrTime;
  endTime: ChrTime;
  isNextDay: Boolean;
};
