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
import { pairwise, startWith } from 'rxjs/operators';

/**
 * This is a custom form control to capture time input.
 * Allowed input values
 *
 * Binding: you bind on timeValue with an ChrTimeExtended type
 *
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
  onTouched: any = () => {};

  // needed to see errors even without user interaction
  matcher = new ChrTimeFieldErrorStateMatcher();

  /**
   * Is this field enabled or not
   */
  @Input() public isDisabled: boolean = false;
  /**
   * A material form field label to set
   */
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
      this.timeFieldFormControl.setValue(this._timeValue.toHoursMinutesIn24Range());
    }
  }
  @Output() timeValueChange = new EventEmitter<ChrTimeExtended>();

  public isGreaterThan36 = false;

  constructor() {}

  // timeField = new FormControl('', timeValidator());
  timeFieldFormControl = new FormControl('', []);

  ngOnInit(): void {
    // form field changes
    this.timeFieldFormControl.valueChanges
      .pipe(startWith(null), pairwise())
      .subscribe(([prev, next]: [string, string]) => {
        if (prev !== next) {
          //this._timeText = next;
        }
      });
  }

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
    const currentText = this.timeFieldFormControl.value;

    if (currentText) {
      let parsedTime = ChrTimeExtended.createFromString24Range(currentText, isNextDay);
      if (parsedTime?.isValid) {
        newTime = parsedTime;
      }
    }

    this.timeValue = newTime;
    this.validateTime();
  }

  onFocus() {}

  /**
   * event handler of text field input event
   */
  timeInput(evt: any) {
    console.debug('TimeFieldComponent.timeInput', evt.target.value);
    this.validateTime();
  }

  /**
   * Validates current Time and sets error Message on field if invalid
   * @param currentTime
   */
  validateTime() {
    // console.debug('TimeFieldComponent validateTime');

    if (this.timeValue?.isTimeExceeding) {
      console.debug('TimeFieldComponent.setting error greaterThan36');
      // this.matcher = new MyErrorStateMatcher();
      //this.timeFieldFormControl.setErrors({ greaterThan36: true });
      setTimeout(() => this.timeFieldFormControl.setErrors({ greaterThan36: true }));

      //this.touchInputField();
    }
  }

  touchInputField() {
    console.debug('TimeFieldComponent touchInputField');

    // markAsTouched does not work but should
    this.timeFieldFormControl.markAsTouched();

    if (this.myInputRef) {
      setTimeout(() => {
        this.myInputRef.nativeElement.focus();
        this.myInputRef.nativeElement.blur();
      });
    }
  }

  // getErrorMessageTime() {
  //   return 'time error';
  //   // return this.email.hasError('required') ? 'You must enter a value' :
  //   //     this.email.hasError('email') ? 'Not a valid email' :
  //   //         '';
  // }

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

/**
 * The Error State Matcher allows to customize the detection of an error state by a control
 * By default errors are only shown on component when the user has blured out of the field, (dirty, touched, or submitted.)
 *   // https://material.angular.io/components/input/overview#changing-when-error-messages-are-shown
 * We wanna change this.
 * Our error state manager
 * */
export class ChrTimeFieldErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    // return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    return !!(control && control.invalid);
  }
}
