import { Pipe, PipeTransform } from '@angular/core';
import { ChrTime } from './chr-time.class';

@Pipe({ name: 'ChrTimeFormatHhmmPipe' })
export class ChrTimeFormatHhmmPipe implements PipeTransform {
  /**
   * Transforms a time object into a hours minutes string
   * @param valueInMinutes
   * @param args
   */
  transform(timeString: string): any {
    let time: ChrTime;
    if (timeString) {
      time = ChrTime.createFromHHmmString(timeString);
    } else {
      time = ChrTime.createFromMinutes(0);
    }
    return time.toHoursMinutesString();
  }
}
