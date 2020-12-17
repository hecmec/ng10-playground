import { Tools } from '../tools';

/**
 * Immutable Time object for Chronos
 */
export interface IChrTime {
  hours: number;
  minutes: number;
  isNextDay?: boolean;
}
export class ChrTime implements IChrTime {
  /**
   * Creates a ChrTime object, if hours, minutes or seconds exceed the valid range we set them to zero
   * @param hours : number of hours between 0 and 23, any overflow is set to zero
   * @param minutes : number of minutes between 0 and 59, any overflow is set to zero
   * @param seconds : number of  seconds between 0 and 59, any overflow is set to zero
   */
  constructor(hours: number, minutes: number) {
    hours = Math.abs(hours);
    hours = hours > 23 ? 0 : hours;
    this._hours = hours;

    minutes = Math.abs(minutes);
    minutes = minutes > 59 ? 0 : minutes;
    this._minutes = minutes;

    // seconds = Math.abs(seconds || 0);
    // seconds = seconds > 59 ? 0 : seconds;
    // this.#seconds = seconds;

    Object.freeze(this);
  }

  protected _hours: number;
  protected _minutes: number;

  public get hours() {
    return this._hours;
  }
  public get minutes() {
    return this._minutes;
  }

  /**
   * returns 'hh:mm' of this time object
   */
  public toHoursMinutesString() {
    return `${Tools.padTwo(this._hours)}:${Tools.padTwo(this._minutes)}`;
  }

  /**
   * Returns the day time a a number of minutes (transforms hours into minutes)
   */
  public getAsMinutes() {
    return this._hours * 60 + this._minutes;
  }

  /**
   * Returns a new Time with more minutes or null on error
   * @param minutes
   */
  public addMinutes(minutes: number): ChrTime {
    const newMin = this.getAsMinutes() + minutes;
    return ChrTime.createFromMinutes(newMin);
  }

  /**
   * This will remove any non digit or separator chars.
   * Separators like ';,.' are replaced by ':'
   * If there is no separtor we introduce one at index 2 or if less at the end.
   * @param timeString
   */
  static getNormalizedTimeString(timeString: string): string {
    let resultTimeString = null;
    if (timeString) {
      timeString = ChrTime.replaceSeparators(timeString);

      timeString = ChrTime.removeNonTimeChars(timeString);

      timeString = ChrTime.injectMissingSeparator(timeString);
    }
    return resultTimeString;
  }

  /**
   * Removes every char that is not either a digit or a possible sepator '.,;:'
   * @param timeString
   */
  static removeNonTimeChars(timeString: string): string {
    let resultString = '';
    if (timeString) {
      resultString = timeString.replace(/[^.,;:0-9]/, '');
    }
    return resultString;
  }

  /**
   * If there is no separator in the string this injects one at 2 or if the string is shorter at the end.
   * @param timeString
   */
  static injectMissingSeparator(timeString: string): string {
    let resultString = '';
    if (timeString && !timeString.includes(':')) {
      let insertIndex = timeString.length > 2 ? 2 : timeString.length;
      let timeDigitsArray = timeString.split('');
      timeDigitsArray.splice(insertIndex, 0, ':');
      resultString = timeDigitsArray.join('');
    }
    return resultString;
  }
  /**
   *  if we have any separator (comma, dot or colon) we replace by colon
   * @param timeString
   */
  static replaceSeparators(timeString: string): string {
    let resultString = '';
    if (timeString) {
      resultString = timeString
        .replace(',', ':')
        .replace('.', ':')
        .replace(';', ':');
    }
    return resultString;
  }

  /**
   * Tests if this string is a time string parsable by this ChrTime
   * @param timeString
   */
  static isParsableAsTimeString(timeString: string): boolean {
    let isParsable = false;
    if (timeString) {
      // hours between 0 and 23, single or double digits, can even be empty
      const hoursPart = '([0-1]?d|2[0-3]|d)?';
      // allowed separators in caturing group
      const separatorPart = '([.,;:])';
      // allowed minutes
      const minutesPart = '([0-5]?[0-9])?';
      const regEx: RegExp = new RegExp(
        `^${hoursPart}${separatorPart}${minutesPart}$`
      );
      isParsable = regEx.test(timeString);
    }
    return isParsable;
  }

  /**
   * Takes any time string similar to 'hh:mm' and transforms it to 'hh:mm'
   * Separators like '.', ',', ';' are replaced by ':'
   * If the string contains non-numericals we return null
   * Examples
   * '1,3' -> '01:30'
   * '01,30' -> '01:30'
   * '1.3' -> '01:30'
   * '01.30' -> '01:30'
   * '1:3' -> '01:30'
   * '01:30' -> '01:30'
   * @param timeString
   */
  static createFromString(timeString: string): ChrTime {
    let chrTime: ChrTime = null;
    const normalizedTimeString = ChrTime.getNormalizedTimeString(timeString);
    if (normalizedTimeString) {
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
   * '12' => '12:00'
   * '1.' => '01:00'
   * '1234 => '12:34'
   * '123456 => '12:34'
   * '.3' => '00:30'
   * ':' => '00:00'
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

          if (0 >= hours && hours <= 23) {
            // standard time object
            chrTime = new ChrTime(hours, minutes);
          }
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
}
