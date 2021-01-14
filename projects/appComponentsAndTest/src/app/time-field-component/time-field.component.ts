import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NgForm,
  NG_VALUE_ACCESSOR,
  ValidatorFn,
} from '@angular/forms';
import { ChrTimeExtended } from '../time-range-simple/classes/chr-time-extended.class';
import { TimeRangeSimpleComponent } from '../time-range-simple/time-range-simple.component';
import { timeValidator } from '../time-range-simple/validators/timeValidator';
import { ErrorStateMatcher } from '@angular/material/core';

/** 
 * Normally errors are only shown when the user has blured out of the field.
 *   // https://material.angular.io/components/input/overview#changing-when-error-messages-are-shown
 * We wanna change this.
 * Error when invalid control is dirty, touched, or submitted. 
 * */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    // return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    return !!(control && control.invalid );
  }
}
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
  selector: 'time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // We have to tell Angular about this new form control that we just created.
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeRangeSimpleComponent),
      multi: true,
    },
  ],
})
export class TimeFieldComponent implements OnInit, OnChanges, ControlValueAccessor {

  @ViewChild('myInputRef') myInputRef: ElementRef;
  
  // Both onChange and onTouched are functions used for the ControlValueAccessor Interface
  onChange: any = () => {};
  onTouched: any = () => { };
  
  // needed to see errors even without user interaction
  matcher = new MyErrorStateMatcher();

  @Input() public isDisabled: boolean = false;
  @Input() public fieldLabel: string;

  /**
   * This is the time you can set from outside
   *
   */
  private _timeValue: ChrTimeExtended;
  @Input('timeValue')
  public get timeValue(): ChrTimeExtended {
    // console.debug('TimeFieldComponent.time get', this._timeValue?.toHoursMinutesString());
    return this._timeValue;
  }
  public set timeValue(val: ChrTimeExtended) {
    // console.debug('TimeFieldComponent.timeText set',val?.toHoursMinutesString());

    this._timeValue = val as ChrTimeExtended;
    this.timeValueChange.emit(this._timeValue);
    this.onChange(val);
    this.onTouched();
    // set field directly
    if (this._timeValue) {
      this._timeText = this._timeValue.toHoursMinutesIn24Range();
    }
  }
  @Output() timeValueChange = new EventEmitter<ChrTimeExtended>();

  /**
   * This is time text for communication with the text field
   */
  private _timeText: string;
  get timeText(): string {
    // console.debug('TimeFieldComponent.timeText get', this._timeText);
    return this._timeText;
  }
  set timeText(val: string) {
    // console.debug('TimeFieldComponent.timeText set', this._timeText);
    this._timeText = val;
  }

  constructor() {}

  // timeField = new FormControl('', timeValidator());
  timeField = new FormControl('', []);

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.timeValue) {
        // console.debug('TimeFieldComponent.ngOnChanges: timeValue', changes.timeValue);
      }

      this.validateTime();

    }

  }

  /**
   * Eval text value to time only on blur
   */
  onBlur() {
    let newTime = null;
    const isNextDay = !!this.timeValue?.isNextDay;

    if (this._timeText) {
      let parsedTime = ChrTimeExtended.createFromString24Range(
        this._timeText,
        isNextDay
      );
      if (parsedTime && parsedTime.isValid) {
        newTime = parsedTime;
      }
    }

    this.timeValue = newTime;
  }

  onFocus() {}

  /**
   * event handler of text field input event
   */
  timeInput(evt:any) {
    console.debug('TimeFieldComponent.timeInput', evt.target.value);
    this.validateTime();
  }

  /**
   * Validates current Time and sets error Message on field if invalid
   * @param currentTime 
   */
  validateTime() {

    if (this.timeValue.isTimeExceeding) {
      console.debug('TimeFieldComponent.setting error greaterThan36');

      if (this.myInputRef) {
        this.myInputRef.nativeElement.focus();
        this.myInputRef.nativeElement.blur();
        
      }
      
      // this.matcher = new MyErrorStateMatcher();
      this.timeField.markAsTouched();
      this.timeField.setErrors({ greaterThan36: true });
      setTimeout(() => this.timeField.setErrors({ greaterThan36: true }));
      
      console.debug('TimeFieldComponent.timeField.invalid', this.timeField.invalid);

    }    
  }

  getErrorMessageTime() {
    return 'time error';
    // return this.email.hasError('required') ? 'You must enter a value' :
    //     this.email.hasError('email') ? 'Not a valid email' :
    //         '';
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
      this.timeValue = obj;
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
