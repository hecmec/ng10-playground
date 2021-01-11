import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
// import { ChrTimeFormatHhmmPipe } from './chr-time-format-hhmm.pipe';
import { ChrTime, IChrTime } from '../classes/chr-time.class';

/**
 * https://medium.com/ng-consultant/custom-input-formatting-with-simple-directives-for-angular-2-ec792082976
 */
@Directive({
  selector: 'input[chrTimeFormatter]',
})
export class ChrTimeFormatterDirective implements OnInit {
  private el: HTMLInputElement;
  readonly defaultTimeStringNoFocus:string = '--:--';
  readonly defaultTimeStringFocus: string = '';

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.transform(this.el.value, false);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: string) {
    console.debug('ChrTimeFormatterDirective.onFocus', value);
    this.el.value = this.transform(value, true);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    console.debug('ChrTimeFormatterDirective.onBlur', value);
    this.el.value = this.transform(value, false);
  }

  /**
   * Takes any time string similar to 'hh:mm' and transforms it to 'hh:mm' or if null to --:-- 
   *  @param timeString
   */
  transform(timeString: string, hasFocus: boolean): string {
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
