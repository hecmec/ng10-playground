import { min } from 'rxjs/operators';

/**
 * Immutable Time object for Chronos
 */
export class ChrTime {
  /**
   * Creates a ChrTime object, if hours, minutes or seconds exceed the valid range we set them to zero
   * @param hours
   * @param minutes
   * @param seconds
   */
  constructor(hours: number, minutes: number, seconds?: number) {
    hours = Math.abs(hours);
    hours = hours > 23 ? 0 : hours;
    this.hours = hours;

    minutes = Math.abs(minutes);
    minutes = minutes > 59 ? 0 : minutes;
    this.minutes = minutes;

    seconds = Math.abs(seconds || 0);
    seconds = seconds > 59 ? 0 : seconds;
    this.seconds = seconds;

    Object.freeze(this);
  }

  private hours: number;
  private minutes: number;
  private seconds: number;

  public get Hours() {
    return this.hours;
  }
  public get Minutes() {
    return this.hours;
  }
  public get Seconds() {
    return this.hours;
  }

  /**
   * returns 'hh:mm' of this time object
   */
  public toHoursMinutesString() {
    return `${padTwo(this.hours)}:${padTwo(this.minutes)}`;
  }

  /**
   * returns 'hh:mm:ss' of this time object
   */
  public toFullString() {
    return `${padTwo(this.hours)}:${padTwo(this.minutes)}:${padTwo(this.seconds)}`;
  }

  public getAsMinutes() {
    return this.hours * 60 + this.minutes;
  }

  /**
   * Parses any string in the format 'hh:mm'
   * '10:65'=> 10:00:00
   * '99:99'=> 00:00:00
   * '12' => 12:00:00
   * @param timeString
   */
  public static createFromHHmmString(timeString: string): ChrTime {
    let chrTime: ChrTime = null;
    if (timeString) {
      const args: string[] = timeString.split(':');
      if (args.length >= 1) {
        try {
          const hours = parseInt(args[0], 10);
          const minutes = parseInt(args[1] || '0', 10);
          chrTime = new ChrTime(hours, minutes);
        } catch (err) {
          // log when logger is dispo
        }
      }
    }
    return chrTime;
  }

  /**
   * Creates a ChrTime from minutes
   * @param minutes
   */
  public static createFromMinutes(minutes: number): ChrTime {
    let chrTime: ChrTime = null;
    if (minutes !== undefined && minutes !== null) {
      const hours = Math.floor(minutes / 60);
      const minutesRest = minutes % 60;
      chrTime = new ChrTime(hours, minutesRest);
    }
    return chrTime;
  }

  public static addMinutes(time: ChrTime, minutes:number): ChrTime {
    const newMin = time.getAsMinutes() + minutes;
    return ChrTime.createFromMinutes(newMin);
  }
}



function padTwo(aNumber: number): string {
  aNumber = aNumber || 0;
  if (aNumber < 10) {
    return '0' + aNumber;
  }
  return '' + aNumber;
}



