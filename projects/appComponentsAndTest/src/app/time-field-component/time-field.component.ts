import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChrTime } from '../time-range-simple/classes/chr-time.class';
import { TimeRangeSimpleComponent } from '../time-range-simple/time-range-simple.component';
import { timeValidator } from  '../time-range-simple/validators/timeValidator';


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
export class TimeFieldComponent implements OnInit, OnChanges, ControlValueAccessor {

  // Both onChange and onTouched are functions used for the ControlValueAccessor Interface
  onChange: any = () => { };
  onTouched: any = () => { };

  @Input() public isDisabled: boolean = false;

  /**
   * This is the time you can set from outside
   * 
   */
  private _time: ChrTime;
  @Input('time')
  public get time() : ChrTime {
    console.debug('TimeFieldComponent.time get', this._time?.toHoursMinutesString());
    return this._time;
  }
  public set time(val: ChrTime) {
    console.debug('TimeFieldComponent.timeText set', val?.toHoursMinutesString());

    this._time = val;
    this.timeChange.emit(this._time);
    this.onChange(val);
    this.onTouched();
    // set field directly
    if (this._time) {
      this._timeText = this._time.toHoursMinutesString();
    }
    
  }
  @Output() timeChange = new EventEmitter<ChrTime>();


  /**
   * This is time text for communication with the text field
   */
  private _timeText: string;
  get timeText(): string {
    console.debug('TimeFieldComponent.timeText get', this._timeText);
    return this._timeText;
  }
  set timeText(val: string) {
    console.debug('TimeFieldComponent.timeText set', this._timeText);
    if (val != this._timeText) {
      this._timeText = val;
      
      let newTime = null;
      
      if(this._timeText){
        let parsedTime = ChrTime.createFromString(this._timeText);
        if (parsedTime && parsedTime.isValid) {
          newTime = parsedTime;
        }
      }

      this.time = newTime;
      
    }
  } 

  constructor() { }

  timeField = new FormControl('', timeValidator);


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.time) {
        console.debug('TimeFieldComponent.ngOnChanges: time', changes.time);
      }
    }
  }


  timeChanged() {
    console.debug('TimeFieldComponent.timeChanged');
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
      this.time = obj;
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
