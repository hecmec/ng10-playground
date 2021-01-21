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
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { ChrTimeExtended } from './classes/chr-time-extended.class';

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
export class TimeRangeSimpleComponent
  implements OnChanges, ControlValueAccessor {
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
  //_startTime: ChrTimeExtended = null;
  public get startTime(): ChrTimeExtended {
    console.debug(
      'TimeRangeCmp.startTime get',
      this.timeRange?.startTime?.toHoursMinutesString()
    );
    return this.timeRange?.startTime;
  }
  public set startTime(v: ChrTimeExtended) {
    if (this.timeRange) {
      this.timeRange = this.timeRange.setStartTime(v);
    }
  }

  /**
   * EndTime of this time range with getter and setter
   */
  //_endTime: ChrTimeExtended = null;
  public get endTime(): ChrTimeExtended {
    console.debug(
      'TimeRangeCmp.endTime get',
      this.timeRange?.endTime?.toHoursMinutesString()
    );
    return this.timeRange?.endTime;
  }
  public set endTime(v: ChrTimeExtended) {
    if (this.timeRange) {
      this.timeRange = this.timeRange.setEndTime(v);
    }
  }

  /**
   *
   */
  public get isNextDay(): boolean {
    return this.timeRange.isNextDay;
  }
  public set isNextDay(v: boolean) {
    this.timeRange = this.timeRange.setIsNextDay(v);
  }

  constructor() {}

  // ngOnInit(): void {}
  startTimeField = new FormControl('', [Validators.required]);
  endTimeField = new FormControl('', [Validators.required]);

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('TimeRangeCmp.ngOnChanges', changes);
    if (changes) {
      if (changes.interval) {
        console.debug('TimeRangeCmp.ngOnChanges: interval', changes);
        this.interval = changes.interval.currentValue;
        // You can also use nextDay.previousValue and
        // nextDay.firstChange for comparing old and new values
      }
      if (changes.timeRange) {
        console.debug('TimeRangeCmp.ngOnChanges: timerange', changes);
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

  startTimeChanged() {
    // console.debug('TimeRangeCmp.startTimeChanged');
  }

  endTimeChanged() {
    // console.debug('TimeRangeCmp.endTimeChanged');
  }

  /**
   *
   */
  isStartGreaterThanEnd() {
    return this.timeRange.isStartGreaterThanEnd();
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
      this.timeRange = obj;
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
