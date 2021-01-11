import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ChrTime } from '../classes/chr-time.class';

/**
 * This directive only allows input of digits and separators (:,.) until 5 to represent a time.
 * 
 * Based on https://github.com/changhuixu/ngx-digit-only
 */
@Directive({
  selector: 'input[chrTimeOnly]'
})
export class ChrTimeOnlyDirective implements OnInit, OnChanges {
  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste',
  ];

  @Input() minTime: string = '00:00';
  @Input() maxTime: string = '23:59';
  /**
   * max number of chars digits and separator included
   */
  @Input() maxTimeLength: number = 5;

  /**
   * This is used to notify the outside of a model change
   */
  @Output() ngModelChange = new EventEmitter();
  
  el: HTMLInputElement;

  readonly defaultTimeSeparator = ':';
  readonly timeSeparators: string[] = [':', '.', ';',','];
  readonly timeSeparatorAltRegex = new RegExp('[.;,]', 'ig');
  readonly defaultTimeStringNoFocus: string = '--:--';
  readonly defaultTimeStringFocus: string = '';


  lowerLimit: ChrTime;
  upperLimit: ChrTime;

  constructor(public elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.transform(this.el.value, false);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.minTime) {
      const time = ChrTime.createFromString(this.minTime);
      this.lowerLimit = time.isValid ? time : ChrTime.createFromMinutes(0);
    }

    if (changes.maxTime) {
      const time = ChrTime.createFromString(this.maxTime);
      this.upperLimit = time.isValid ? time : ChrTime.createFromHoursMinutes(23, 59);
    }

  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): any {
    if (
      this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
      ((e.key === 'a' || e.code === 'KeyA') && e.ctrlKey === true) || // Allow: Ctrl+A
      ((e.key === 'c' || e.code === 'KeyC') && e.ctrlKey === true) || // Allow: Ctrl+C
      ((e.key === 'v' || e.code === 'KeyV') && e.ctrlKey === true) || // Allow: Ctrl+V
      ((e.key === 'x' || e.code === 'KeyX') && e.ctrlKey === true) || // Allow: Ctrl+X
      ((e.key === 'a' || e.code === 'KeyA') && e.metaKey === true) || // Allow: Cmd+A (Mac)
      ((e.key === 'c' || e.code === 'KeyC') && e.metaKey === true) || // Allow: Cmd+C (Mac)
      ((e.key === 'v' || e.code === 'KeyV') && e.metaKey === true) || // Allow: Cmd+V (Mac)
      ((e.key === 'x' || e.code === 'KeyX') && e.metaKey === true) // Allow: Cmd+X (Mac)
    ) {
      // let it happen, don't do anything
      return;
    }

    let newValue = '';

    // if key is a separator, check if there is only one
    if (this.timeSeparators.includes(e.key)) {
      newValue = this.forecastValue(e.key);
      
      if (this.hasMoreThanOneSeparator(newValue)) {
        // has two or more decimal points
        e.preventDefault();
      }
      // on separator we return in any case
      return;
    }

    // Ensure that it is a number and stop the keypress
    if (e.key === ' ' || isNaN(Number(e.key))) {
      e.preventDefault();
      return;
    }

    // there is a new number
    newValue = newValue || this.forecastValue(e.key);

    // check for length
    if (newValue && newValue.length > this.maxTimeLength) {
      e.preventDefault();
      return;
    }

    // check on ChrTime if the new time would be correct
    const parsedTime = ChrTime.createFromString(newValue, false, true);
    if (!parsedTime || !parsedTime.isValid) {
      e.preventDefault();
      return;
    }

    // check for min or max
    // const newNumber = Number(newValue);
    // if (newNumber > this.max || newNumber < this.min) {
    //   e.preventDefault();
    // }
  }

  // @HostListener('focus', ['$event.target.value'])
  // onFocus(value: string) {
  //   console.debug('ChrTimeOnlyDirective.onFocus', value);
  //   this.el.value = this.transform(value, true);
  //   this.ngModelChange.emit(this.el.value);
  // }

  // @HostListener('blur', ['$event.target.value'])
  // onBlur(value: string) {
  //   console.debug('ChrTimeOnlyDirective.onBlur', value);
  //   this.el.value = this.transform(value, false);
  //   this.ngModelChange.emit(this.el.value);
  // }



  /**
   * Tests if there is more than one time separator
   * @param txt 
   */
  private hasMoreThanOneSeparator(txt: string): boolean {
    let result = false;
    if (txt) {
      txt = txt.replace(this.timeSeparatorAltRegex, this.defaultTimeSeparator);
      result = (txt.split(this.defaultTimeSeparator).length > 2);
    }
    return result;
  }

  // @HostListener('paste', ['$event'])
  // onPaste(event: any): void {
  //   let pastedInput: string;
  //   if (window['clipboardData']) {
  //     // Browser is IE
  //     pastedInput = window['clipboardData'].getData('text');
  //   } else if (event.clipboardData && event.clipboardData.getData) {
  //     // Other browsers
  //     pastedInput = event.clipboardData.getData('text/plain');
  //   }

  //   this.pasteData(pastedInput);
  //   event.preventDefault();
  // }

  // @HostListener('drop', ['$event'])
  // onDrop(event: DragEvent): void {
  //   const textData = event.dataTransfer.getData('text');
  //   this.inputElement.focus();
  //   this.pasteData(textData);
  //   event.preventDefault();
  // }

  // for paste and sanitizeInput, forecastValue see
  // https://github.com/changhuixu/ngx-digit-only/blob/master/projects/uiowa/digit-only/src/lib/digit-only.directive.ts


  private forecastValue(key: string): string {
    const selectionStart = this.el.selectionStart;
    const selectionEnd = this.el.selectionEnd;
    const oldValue = this.el.value;
    const selection = oldValue.substring(selectionStart, selectionEnd);
    return selection
      ? oldValue.replace(selection, key)
      : oldValue.substring(0, selectionStart) +
      key +
      oldValue.substring(selectionStart);
  }

  /**
   * Takes any time string similar to 'hh:mm' and transforms it to 'hh:mm' or if null to --:-- 
   *  @param timeString
   */
  private transform(timeString: string, hasFocus: boolean): string {
    let result = hasFocus ? this.defaultTimeStringFocus : this.defaultTimeStringNoFocus;
    let time: ChrTime = null;
    if (timeString && timeString !== this.defaultTimeStringNoFocus && timeString !== this.defaultTimeStringFocus) {
      time = ChrTime.createFromString(timeString) as ChrTime;
    }

    if (time && time.isValid) {
      result = time.toHoursMinutesString();
    }

    return result;
  }
}
