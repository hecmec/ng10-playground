import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
// import { ChrTimeFormatHhmmPipe } from './chr-time-format-hhmm.pipe';
import { ChrTime, IChrTime } from './chr-time.class';

/**
 * https://medium.com/ng-consultant/custom-input-formatting-with-simple-directives-for-angular-2-ec792082976
 */
@Directive({
  selector: 'input[chrTimeFormatter]',
})
export class ChrTimeFormatterDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: string) {
    console.debug('ChrTimeFormatterDirective.onFocus', value);
    this.el.value = this.transform(value);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    console.debug('ChrTimeFormatterDirective.onBlur', value);
    this.el.value = this.transform(value);
  }

  /**
   * Takes any time string similar to 'hh:mm' and transforms it to 'hh:mm'
   *  @param timeString
   */
  transform(timeString: string): string {
    let time: ChrTime;
    if (timeString) {
      time = ChrTime.createFromString(timeString) as ChrTime;
    } else {
      time = ChrTime.createFromMinutes(0);
    }
    return time.toHoursMinutesString();
  }
}
