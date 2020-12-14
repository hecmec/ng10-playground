import { min, timestamp } from 'rxjs/operators';

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
    return `${padTwo(this.hours)}:${padTwo(this.minutes)}:${padTwo(
      this.seconds
    )}`;
  }

  /**
   * Returns the day time a a number of minutes (transforms hours into minutes)
   */
  public getAsMinutes() {
    return this.hours * 60 + this.minutes;
  }

  /**
   * Takes any time string similar to 'hh:mm' and transforms it to 'hh:mm'
   * '1,3' -> '01:30'
   * '01,30' -> '01:30'
   * '1.3' -> '01:30'
   * '01.30' -> '01:30'
   * '1:3' -> '01:30'
   * '01:30' -> '01:30'
   * @param timeString
   */
  public static createFromString(timeString: string): ChrTime {
    let chrTime: ChrTime = null;
    if (timeString) {
      // if we have any separator (comma, dot or colon) we replace by colon
      timeString = timeString.replace(',', ':').replace('.', ':');

      // if there is no separator in the string we inject one at 2 or if the string is shorter at the end.
      if (!timeString.includes(':')) {
        let insertIndex = timeString.length > 2 ? 2 : timeString.length;
        let timeDigitsArray = timeString.split('');
        timeDigitsArray.splice(insertIndex, 0, ':');
        timeString = timeDigitsArray.join('');
      }

      chrTime = ChrTime.createFromHHmmString(timeString);
    }
    return chrTime;
  }

  /**
   * Parses any string in the format 'hh:mm'
   * '10:65'=> '10:00'
   * '99:99'=> '00:00' // hours and minutes out of bound
   * '1:30' => '01:30'
   * '1:3' => '01:30'
   * '1:7' => '01:00' // minutes out of bound
   * '12' => 12:00
   * @param timeString
   */
  public static createFromHHmmString(timeString: string): ChrTime {
    let chrTime: ChrTime = null;
    if (timeString) {
      const args: string[] = timeString.split(':');
      if (args.length >= 1) {
        try {
          let hours = parseInt(args[0], 10);
          let minutes = parseInt(args[1] || '0', 10);
          hours = Number.isInteger(hours) ? hours : 0;
          minutes = Number.isInteger(minutes) ? minutes : 0;

          // one digit minutes are interpreted as tens of minutes.
          minutes = minutes < 10 ? minutes * 10 : minutes;

          chrTime = new ChrTime(hours, minutes);
        } catch (err) {
          // log when logger is dispo
          console.error(err);
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

  public static addMinutes(time: ChrTime, minutes: number): ChrTime {
    const newMin = time.getAsMinutes() + minutes;
    return ChrTime.createFromMinutes(newMin);
  }
}

function padTwo(aNumber: number): string {
  let result = ('' + (aNumber || 0)).padStart(2, '0');
  return result;
}
