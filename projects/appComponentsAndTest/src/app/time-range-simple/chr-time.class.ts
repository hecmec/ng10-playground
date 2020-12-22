import { Times } from '../times';
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
   * This is private, use the factory methods (ceate...) to create time objects
   * @param hours : number of hours between 0 and 23, any overflow is set to zero
   * @param minutes : number of minutes between 0 and 59, any overflow is set to zero
   * @param seconds : number of  seconds between 0 and 59, any overflow is set to zero
   */
  protected constructor(hours: number, minutes: number) {
    this._hours = Math.abs(hours);
    this._minutes = Math.abs(minutes);
    // Object.freeze(this);
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
  public toHoursMinutesString(): string {
    return `${Tools.padTwo(this._hours)}:${Tools.padTwo(this._minutes)}`;
  }

  /**
   * Returns the day time a a number of minutes (transforms hours into minutes)
   */
  public getAsMinutes(): number {
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
   * returns a clone of this time object
   */
  public clone(): IChrTime {
    return new ChrTime(this.hours, this.minutes);
  }

  /**
   * checks validity of this object
   */
  public get isValid(): boolean {
    let isValid: boolean = true;
    isValid = isValid && ChrTime.isHoursValid(this.hours);
    isValid = isValid && ChrTime.isMinutesValid(this.minutes);
    return isValid;
  }

  /***********************************
   * STATICS
   ***********************************/

  static isHoursValid(hours: number): boolean {
    return 0 <= hours && hours < Times.hoursInDay;
  }

  static isMinutesValid(minutes: number): boolean {
    return 0 <= minutes && minutes < Times.minutesInHour;
  }

  /**
   * Removes every char that is not either a digit or a possible sepator '.,;:'
   * @param timeString
   */
  static _removeNonTimeChars(timeString: string): string {
    let resultString = '';
    if (timeString) {
      resultString = timeString.replace(/[^.,;:0-9]/gi, '');
    }
    return resultString;
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
      resultTimeString = ChrTime.replaceSeparators(timeString);

      resultTimeString = ChrTime._removeNonTimeChars(resultTimeString);

      resultTimeString = ChrTime.injectMissingSeparator(resultTimeString);
    }

    return resultTimeString;
  }

  /**
   * If there is no separator ':' in the string this injects one at 2 or if the string is shorter at the end.
   * @param timeString
   */
  static injectMissingSeparator(timeString: string): string {
    let resultString = timeString;
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
   * Creates a new chrtime object
   * @param hours
   * @param minutes
   */
  static createFromHoursMinutes(hours: number, minutes: number): ChrTime {
    const chrTime: ChrTime = new ChrTime(hours, minutes);
    return chrTime;
  }

  /**
   * Takes any time string similar to 'hh:mm' and transforms it to 'hh:mm'
   * Separators like '.', ',', ';' are replaced by ':'
   * If the string contains non-numericals we return null
   * Examples
   * '10:65'=> '10:00'
   * '99:99'=> '00:00' // hours and minutes out of bound
   * '1;30' => '01:30'
   * '1:3' => '01:30'
   * '1:7' => '01:00' // minutes out of bound
   * '12' => '12:00'
   * '1:' => '01:00'
   * '1234 => '12:34'
   * '123456 => '12:34'
   * ':3' => '00:30'
   * ':' => '00:00'
   * @param timeString
   */
  static createFromString(timeString: string): ChrTime {
    let chrTime: ChrTime = null;
    const normalizedTimeString = ChrTime.getNormalizedTimeString(timeString);
    if (normalizedTimeString) {
      chrTime = ChrTime.createFromHHmmString(normalizedTimeString);
    }
    return chrTime;
  }

  /**
   * Gets a tuple of numbers from hh:mm string
   * @param timeString
   */
  static getHoursMinutesFromHHmmString(timeString: string): [number, number] {
    let result: [number, number] = [0, 0];
    if (timeString) {
      const args: string[] = timeString.split(':');
      if (args.length >= 1) {
        try {
          let hoursArg = args[0];
          hoursArg = hoursArg.slice(0, 2);
          let minutesArg = args[1];
          minutesArg = minutesArg.slice(0, 2);
          // one digit minutes are interpreted as tens of minutes.
          if (minutesArg && minutesArg.length === 1) {
            minutesArg = minutesArg + '0';
          }
          let hours = parseInt(hoursArg, 10);
          let minutes = parseInt(minutesArg || '0', 10);
          hours = Number.isInteger(hours) ? hours : 0;
          minutes = Number.isInteger(minutes) ? minutes : 0;
          result = [hours, minutes];
        } catch (err) {
          // log when logger is dispo
          console.error(err);
        }
      }
    }

    return result;
  }

  /**
   * Parses any string in the format 'hh:mm'.
   * It will look for the colon as separator.
   * '10:65'=> '10:00'
   * '99:99'=> '00:00' // hours and minutes out of bound
   * '1:30' => '01:30'
   * '1:3' => '01:30'
   * '1:7' => '01:00' // minutes out of bound
   * '12' => '12:00'
   * '1:' => '01:00'
   * ':3' => '00:30'
   * ':' => '00:00'
   * @param timeString
   */
  static createFromHHmmString(timeString: string): ChrTime {
    let chrTime: ChrTime = null;
    if (timeString) {
      const hoursAndMinutes = ChrTime.getHoursMinutesFromHHmmString(timeString);
      const hours = hoursAndMinutes[0];
      const minutes = hoursAndMinutes[1];
      if (
        0 <= hours &&
        hours < Times.hoursInDay &&
        0 <= minutes &&
        minutes < Times.minutesInHour
      ) {
        chrTime = ChrTime.createFromHoursMinutes(hours, minutes);
      }
    }
    return chrTime;
  }

  /**
   * Creates a ChrTime from minutes
   * @param minutes
   */
  static createFromMinutes(minutes: number): ChrTime {
    let chrTime: ChrTime = null;
    if (minutes !== undefined && minutes !== null) {
      const hours = Math.floor(minutes / 60);
      const minutesRest = minutes % 60;
      chrTime = ChrTime.createFromHoursMinutes(hours, minutesRest);
    }
    return chrTime;
  }
}
