import { Times } from '../../times';
import { Tools } from '../../tools';

export interface IChrTime {
  hours: number;
  minutes: number;
  isNextDay?: boolean;
}
/**
 * Immutable Time object for Chronos
 * The ChrTime object has hours and minutes.
 * Use static creation functions to create new time objects.
 * You are allowed to create invalid time objects (for)
 */

export class ChrTime implements IChrTime {
  /**
   * Creates a ChrTime object, if hours, minutes or seconds exceed the valid range we set them to zero
   * This is private, use the factory methods (ceate...) to create time objects
   * @param hours : number of hours between 0 and 23, any overflow results into invalid object
   * @param minutes : number of minutes between 0 and 59, any overflow is added to hours
   */
  protected constructor(hours: number, minutes: number) {
    let hoursAbs = Math.abs(hours);
    let minutesAbs = Math.abs(minutes);
    let hoursPlus = 0;
    let minutesRest = minutesAbs;
    if (Tools.hasValue(minutesAbs)) {
      hoursPlus = Math.floor(minutesAbs / Times.minutesInHour);
      minutesRest = minutesAbs % Times.minutesInHour;
    }
    this._hours = hoursAbs + hoursPlus;
    this._minutes = minutesRest;
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
   * Returns a new Time with more minutes or the unchanged copy of the original if out of bound
   * @param minutes : number of minutes to add, can be negatif
   * @param isPermissive : if Permissive it will get even an invalid object,
   * otherwise returns a clone of the original object if the add action creates an invalid object.
   */
  public addMinutes(minutes: number, isPermissive?: boolean): ChrTime {
    let newMin = this.getAsMinutes() + minutes;
    newMin = Math.max(0, newMin);
    let newTime = ChrTime.createFromMinutes(newMin, isPermissive);
    if (!isPermissive && (!newTime || !newTime.isValid)) {
      newTime = this.clone() as ChrTime;
    }
    return newTime;
  }

  /**
   * returns a clone of this time object
   */
  public clone(): IChrTime {
    return new ChrTime(this.hours, this.minutes);
  }

  /**
   * Tests whether this time is smaller than another time (by simply comparing hours and minutes)
   * @param otherTime
   */
  public isSmallerThan(otherTime: IChrTime): boolean {
    let result = false;
    if (otherTime) {
      result = ChrTime.compare(this, otherTime) < 0;
    }
    return result;
  }

  /**
   * Tests whether this time is smaller than or equal to another time (by simply comparing hours and minutes)
   * @param otherTime
   */
  public isSmallerThanOrEquals(otherTime: IChrTime): boolean {
    let result = false;
    if (otherTime) {
      result = ChrTime.compare(this, otherTime) <= 0;
    }
    return result;
  }

  /**
   * Tests whether this time is greater than another time (by simply comparing hours and minutes)
   * @param otherTime
   */
  public isGreaterThan(otherTime: IChrTime): boolean {
    let result = false;
    if (otherTime) {
      result = ChrTime.compare(this, otherTime) > 0;
    }
    return result;
  }

  /**
   * Tests whether this time is greater than another time (by simply comparing hours and minutes)
   * @param otherTime
   */
  public isGreaterThanOrEquals(otherTime: IChrTime): boolean {
    let result = false;
    if (otherTime) {
      // result = ChrTime.compare(this, otherTime) >= 0;
    }
    return result;
  }

  /**
   * Tests whether this time equals other time (by simply comparing hours and minutes)
   * @param otherTime
   */
  public equals(otherTime: IChrTime): boolean {
    let result = false;
    if (otherTime) {
      result = ChrTime.compare(this, otherTime) === 0;
    }
    return result;
  }

  /**
   * checks validity of this object
   */
  public get isValid(): boolean {
    let isValid: boolean = true;
    isValid = isValid && ChrTime._isHoursValid(this.hours);
    isValid = isValid && ChrTime._isMinutesValid(this.minutes);
    return isValid;
  }

  /***********************************
   * STATICS
   ***********************************/

  /**
   * Creates a new chrtime object
   *
   * @param hours
   * @param minutes
   * @param isPermissive: will create a time object even if it is out of bounds like 25h (in that case it will be invalid)
   * @param failOnMinuteOverflow: normally 10:70 will be mapped to 11:10, if you set this flag overflow will fail
   */
  static createFromHoursMinutes(
    hours: number,
    minutes: number,
    isPermissive?: boolean,
    failOnMinuteOverflow?: boolean
  ): ChrTime {
    let chrTime: ChrTime = null;

    if (failOnMinuteOverflow && minutes >= Times.minutesInHour) {
      chrTime = null;
    } else {
      chrTime = new ChrTime(hours, minutes);

      if (!isPermissive) {
        if (chrTime && !chrTime.isValid) {
          chrTime = null;
        }
      }
    }
    // Object.freeze(chrTime);
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
   * @param timeString: a time stirng
   * @param isPermissive: will create a time object even if it is out of bounds like 25h (in that case it will be invalid)
   * @param failOnMinuteOverflow: normally 10:70 will be mapped to 11:10, if you set this flag overflow will fail
   */
  static createFromString(
    timeString: string,
    isPermissive?: boolean,
    failOnMinuteOverflow?: boolean
  ): ChrTime {
    let chrTime: ChrTime = null;
    const normalizedTimeString = ChrTime._getNormalizedTimeString(timeString);
    if (normalizedTimeString) {
      chrTime = ChrTime.createFromHHmmString(
        normalizedTimeString,
        isPermissive,
        failOnMinuteOverflow
      );
    }
    // Object.freeze(chrTime);
    return chrTime;
  }

  /**
   * Parses any string in the format 'hh:mm'.
   * This will create only valid time objects. (there is a flex variant)
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
   * @param isPermissive: will create a time object even if it is out of bounds like 25h (in that case it will be invalid)
   * @param failOnMinuteOverflow: normally 10:70 will be mapped to 11:10, if you set this flag overflow will fail
   */
  static createFromHHmmString(
    timeString: string,
    isPermissive?: boolean,
    failOnMinuteOverflow?: boolean
  ): ChrTime {
    let chrTime: ChrTime = null;
    if (timeString) {
      const hoursAndMinutes = ChrTime._getHoursMinutesFromHHmmString(
        timeString
      );

      chrTime = ChrTime.createFromHoursMinutes(
        hoursAndMinutes[0],
        hoursAndMinutes[1],
        isPermissive,
        failOnMinuteOverflow
      );
    }
    // Object.freeze(chrTime);
    return chrTime;
  }

  /**
   * Creates a ChrTime from minutes
   * @param minutes
   * @param isPermissive: will create a time object even if it is out of bounds like 25h (in that case it will be invalid)
   */
  static createFromMinutes(minutes: number, isPermissive?: boolean): ChrTime {
    let chrTime: ChrTime = null;
    if (Tools.hasValue(minutes)) {
      const hours = Math.floor(minutes / Times.minutesInHour);
      const minutesRest = minutes % Times.minutesInHour;
      chrTime = ChrTime.createFromHoursMinutes(
        hours,
        minutesRest,
        isPermissive
      );
    }

    return chrTime;
  }

  /**
   * Tests whether this time is smaller, equal or greater than another time
   * If compareTo returns less than 0,
   * @param otherTime
   */
  static compare(aTime: IChrTime, bTime: IChrTime): number {
    let result: number = 0;
    if (aTime.isNextDay && !bTime.isNextDay) {
      result = 1;
    } else if (!aTime.isNextDay && bTime.isNextDay) {
      result = -1;
    }
    // now they should be both the same day
    else if (aTime.hours != bTime.hours) {
      result = aTime.hours - bTime.hours;
    } else {
      result = aTime.minutes - bTime.minutes;
    }
    return result;
  }

  static _isHoursValid(hours: number): boolean {
    return 0 <= hours && hours < Times.hoursInDay;
  }

  static _isMinutesValid(minutes: number): boolean {
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
  static _getNormalizedTimeString(timeString: string): string {
    let resultTimeString = null;
    if (timeString) {
      resultTimeString = ChrTime._replaceSeparators(timeString);

      resultTimeString = ChrTime._removeNonTimeChars(resultTimeString);

      resultTimeString = ChrTime._injectMissingSeparator(resultTimeString);
    }

    return resultTimeString;
  }

  /**
   * If there is no separator ':' in the string this injects one at 2 or if the string is shorter at the end.
   * @param timeString
   */
  static _injectMissingSeparator(timeString: string): string {
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
  static _replaceSeparators(timeString: string): string {
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
  static _isParsableAsTimeString(timeString: string): boolean {
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
   * Gets a tuple of numbers from hh:mm string
   * @param timeString
   */
  static _getHoursMinutesFromHHmmString(timeString: string): [number, number] {
    let result: [number, number] = [0, 0];
    if (timeString) {
      const args: string[] = timeString.split(':');
      if (args.length >= 1) {
        try {
          let hoursArg = args[0];
          hoursArg = hoursArg ? hoursArg.slice(0, 2) : '';
          let minutesArg = args[1];
          minutesArg = minutesArg ? minutesArg.slice(0, 2) : '';
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
}

/**
 *
 * class in test
 */
export class ChrOptionalTime extends ChrTime implements IChrTime {
  private _value: ChrTime;
  public get value(): ChrTime {
    return this._value;
  }
  public set value(v: ChrTime) {
    this._value = v;
  }
  /**
   * Gets a time string or empty if there is no value
   */
  public toHoursMinutesString() {
    if (this.value) {
      return this.value.toHoursMinutesString();
    } else {
      return '';
    }
  }
}
