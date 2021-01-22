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
import { Subject } from 'rxjs';
import { ChrTimeRange36Hours } from './classes/chr-time-range-36hours.class';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ChrTimeExtended } from './classes/chr-time-extended.class';
import { pairwise, startWith } from 'rxjs/operators';

/**
 * This is a custom form control
 * Two way databinding on value property (value/valueChange)
 *    https://blog.angulartraining.com/tutorial-create-your-own-two-way-data-binding-in-angular-46487650ea82
 * Implements interface ControlValueAccessor
 *    https://blog.angulartraining.com/tutorial-custom-form-controls-with-angular-22fc31c8c4cc
 * Precht on form controls: top
 *    https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
 *
 */
@Component({
  selector: 'time-range-simple',
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
export class TimeRangeSimpleComponent implements OnInit, OnChanges, ControlValueAccessor {
  // Both onChange and onTouched are functions used for the ControlValueAccessor Interface
  onChange: any = () => {};
  onTouched: any = () => {};

  /**
   * Interval
   */
  readonly _defaultInterval: number = 15;
  _interval: number = this._defaultInterval;
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
   * Two way databinding for timeRange (property and propertyChange EventEmitter)
   */
  _timeRange: ChrTimeRange36Hours;
  // _isNextDay: boolean;
  // _startTime: ChrTimeExtended;
  // _endTime: ChrTimeExtended;

  @Input('timeRange')
  public get timeRange(): ChrTimeRange36Hours {
    let result = this._timeRange;
    // result = result.setStartTime(this.startTime);
    // result = result.setEndTime(this.endTime);
    // result = result.setIsNextDay(this.isNextDay);
    return result;
  }
  public set timeRange(val: ChrTimeRange36Hours) {
    if (val) {
      this._timeRange = val;
      // this._startTime = this._timeRange.startTime;
      // this._endTime = this._timeRange.endTime;
      // this._isNextDay = this._timeRange.isNextDay;
    }
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
  public get startTime(): ChrTimeExtended {
    // console.debug('TimeRangeCmp.startTime get', this._startTime?.toHoursMinutesString());
    //return this._startTime;
    return this.timeRange.startTime;
  }
  public set startTime(val: ChrTimeExtended) {
    // this._startTime = val;
    this.timeRange = this.timeRange.setStartTime(val);
  }

  /**
   * EndTime of this time range with getter and setter
   */
  public get endTime(): ChrTimeExtended {
    // console.debug('TimeRangeCmp.endTime get', this._endTime?.toHoursMinutesString());
    //return this._endTime;
    return this.timeRange.endTime;
  }

  public set endTime(val: ChrTimeExtended) {
    // this._endTime = val;
    this.timeRange = this.timeRange.setEndTime(val);
  }

  /**
   *
   */
  public get isNextDay(): boolean {
    return this.timeRange.isNextDay;
    // return this._isNextDay;
  }
  public set isNextDay(val: boolean) {
    // this._isNextDay = v;
    this.timeRange = this.timeRange.setIsNextDay(val);
  }

  constructor() {}

  ngOnInit(): void {
    // this.startTimeField.valueChanges
    //   .pipe(startWith(null), pairwise())
    //   .subscribe(([prev, next]: [ChrTimeExtended, ChrTimeExtended]) => {
    //     this.startTime = next;
    //     if (prev !== next) {
    //       console.debug('TimeFieldComponent.valueChanges:', next);
    //       //this.validateTime();
    //     }
    //   });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.interval) {
        // console.debug('TimeRangeCmp.ngOnChanges: interval', changes);
        this.interval = changes.interval.currentValue;
      }
      if (changes.timeRange) {
        const prev = changes.timeRange.previousValue as ChrTimeExtended;
        const curr = changes.timeRange.currentValue as ChrTimeExtended;
        // console.debug(`TimeRangeCmp.ngOnChanges: prev: ${prev}; curr: ${curr} `);
        if (!prev?.equals(curr)) {
          console.debug(`TimeRangeCmp.ngOnChanges: RANGE CHANGED - prev: ${prev}; curr: ${curr} `);
        }
      }
    }
  }

  getErrorStartTimeMessage() {
    return 'time error';
    // return this.email.hasError('required') ? 'You must enter a value' :
    //     this.email.hasError('email') ? 'Not a valid email' :
    //         '';
  }

  increment() {
    // console.debug('TimeRangeCmp.increment');
    this.timeRange = this.timeRange.addIntervalInMinutes(
      this.interval,
      ChrTimeRange36Hours.OverflowBehavior.StopAtLimit
    );
  }

  decrement() {
    // console.debug('TimeRangeCmp.decrement');
    this.timeRange = this.timeRange.addIntervalInMinutes(
      -this.interval,
      ChrTimeRange36Hours.OverflowBehavior.StopAtLimit
    );
  }

  startTimeChanged(evt: EventEmitter<ChrTimeExtended>) {
    console.debug('TimeRangeCmp.startTimeChanged', evt);
  }

  endTimeChanged() {
    // console.debug('TimeRangeCmp.endTimeChanged');
  }

  /**
   * valideates that start time is before end time
   */
  isStartNotSmallerThanEnd() {
    return !this.timeRange.isStartSmallerThanEnd();
  }
  /**
   * Clean up
   */
  ngOnDestroy() {
    console.debug('TimeRangeCmp.ngOnDestroy');
    this.ngDestroyed$.next();
  }

  /***************************************
   * controlValueAccessor implementation
   **************************/

  /**
   * takes a new value from the form model and writes it into the view
   *
   */
  writeValue(obj: any): void {
    console.debug('TimeRangeCmp.writeValue', obj);
    if (obj) {
      //this.timeRange = obj;
      // this.startTime = this.timeRange.startTime;
      // this.endTime = this.timeRange.endTime;
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
    console.debug('TimeRangeCmp.setDisabledState');
    this.isDisabled = isDisabled;
  }
}
