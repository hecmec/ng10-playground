import { Tools } from '../../tools';
import { Times } from '../../times';
import { ChrTime, IChrTime } from './chr-time.class';
import { timestamp } from 'rxjs/operators';

const defaultMaxHoursNextDay = 11;

/**
 * Its like time but allows to work with up to 36 hours
 * In case of exceeding hours, the hours are reset minus 24h and the isNextDay flag is set.
 */
export class ChrTimeExtended extends ChrTime {
  private _maxHoursNextDay = defaultMaxHoursNextDay;
  private _isNextDay: boolean;
  // upper limit of 36 jours expressed in minutes
  private _upperLimitMinutes = Times.minutesInDay;

  public get isNextDay(): boolean {
    return this._isNextDay;
  }

  public get isValid(): boolean {
    let isValid: boolean = super.isValid;

    isValid = isValid && this.getAsMinutes() < this._upperLimitMinutes;

    return isValid;
  }

  /**
   * Use static creation function to create new objects
   * This construct is protected
   * @param hours
   * @param minutes
   * @param isNextDay
   */
  protected constructor(hours: number, minutes: number, isNextDay?: boolean) {
    super(hours, minutes);

    this._upperLimitMinutes = Times.minutesInDay + (this._maxHoursNextDay + 1) * Times.minutesInHour;

    // force to boolean
    this._isNextDay = !!isNextDay;
  }

  public getAsMinutes(): number {
    const nextDayMinutes = this._isNextDay ? Times.minutesInDay : 0;
    let minutes =
      nextDayMinutes + this._hours * Times.minutesInHour + this._minutes;
    return minutes;
  }

  /**
   * Returns a new Time with more minutes or null on error
   * Use negative minutes to decrement
   * You cannot have negative minutes
   * @param minutes
   * @returns a new copy
   */
  public addMinutes(minutes: number, blockOnLimit?: boolean): ChrTimeExtended {
    let newMin = this.getAsMinutes() + minutes;
    // take 0 as min value
    newMin = Math.max(0, newMin);
    let newTime = ChrTimeExtended.createFromMinutes(newMin);

    if (blockOnLimit && newTime.getAsMinutes() >= this._upperLimitMinutes) {
      newTime = ChrTimeExtended.createFromMinutes(this._upperLimitMinutes - 1);
      return this.clone() as ChrTimeExtended;
    }
    return newTime;
  }

  /**
   * Sets the nextDay property.
   * If this results in an invalid time object we return a clone of the original object
   * @param nextDay
   */
  public setIsNextDay(nextDay: boolean, isPermissive?: boolean) {
    let newTime: ChrTimeExtended = new ChrTimeExtended(
      this.hours,
      this.minutes,
      nextDay
    );

    if (!isPermissive && !newTime.isValid) {
      // if new time is not valid
      newTime = this.clone() as ChrTimeExtended;
    }
    return newTime;
  }

  /**
   * clones this extended time
   */
  public clone(): IChrTime {
    return new ChrTimeExtended(this.hours, this.minutes, this.isNextDay);
  }

  /**
   * Returns 'hh:mm' of this time object
   * this will show 33:00 for 07:00 nextDay
   */
  public toHoursMinutesString(): string {
    const hours = this.isNextDay ? Times.hoursInDay + this._hours : this._hours;
    return `${Tools.padTwo(hours)}:${Tools.padTwo(this._minutes)}`;
  }

  /**
   * Returns 'hh:mm' of this time object
   * this will show 07:00:00 for 07:00 nextDay
   */
  public toHoursMinutesIn24Range(): string {
    return `${Tools.padTwo(this._hours)}:${Tools.padTwo(this._minutes)}`;
  }

  /***********************************
   * STATICS
   ***********************************/

  static isHoursValid(hours: number): boolean {
    return 0 <= hours && hours < Times.hoursInDay;
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
  public static createFromString(
    timeString: string,
    isPermissive?: boolean
  ): ChrTimeExtended {
    let chrTime: ChrTimeExtended = null;
    const normalizedTimeString = ChrTimeExtended._getNormalizedTimeString(
      timeString
    );
    if (normalizedTimeString) {
      chrTime = ChrTimeExtended.createFromHHmmString(
        normalizedTimeString,
        isPermissive
      );
    }
    // Object.freeze(chrTime);
    return chrTime;
  }

  /**
   * like createFromString, but returns an extendedTime initialized to 0 on failure.
   * @param timeString
   * @param isPermissive
   */
  public static createFromStringOrDefault(
    timeString: string,
    isPermissive?: boolean
  ): ChrTimeExtended {
    let chrTimeExt = ChrTimeExtended.createFromString(timeString, isPermissive);
    if (!chrTimeExt) {
      chrTimeExt = ChrTimeExtended.createFromMinutes(0);
    }
    return chrTimeExt;
  }

  /**
   * Parses any time string like createFromString, but you can force next day for times in 24 hour range
   */
  public static createFromString24Range(
    timeString: string,
    isNextDay: boolean
  ): ChrTimeExtended {
    let chrTimeExt = ChrTimeExtended.createFromString(timeString, true);
    if (isNextDay && !chrTimeExt.isNextDay) {
      chrTimeExt = chrTimeExt.setIsNextDay(true);
    }

    return chrTimeExt;
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
   * // TODO: add overflow flag
   */
  public static createFromHHmmString(
    timeString: string,
    isPermissive?: boolean
  ): ChrTimeExtended {
    let chrTime: ChrTimeExtended = null;
    if (timeString) {
      const hoursAndMinutes = ChrTimeExtended._getHoursMinutesFromHHmmString(
        timeString
      );
      chrTime = ChrTimeExtended.createFromHoursMinutes(...hoursAndMinutes);

      if (!isPermissive) {
        chrTime = chrTime.isValid ? chrTime : null;
      }
    }
    Object.freeze(chrTime);
    return chrTime;
  }

  /**
   * Creates a time object from hours and minutes
   * If the hours exteed 24 hours but stay in the under 36, then isNextDAy flag is set
   * @param hours
   * @param minutes
   * // TODO: add permissive and overflow
   */
  public static createFromHoursMinutes(
    hours: number,
    minutes: number
  ): ChrTimeExtended {
    let isNextDay = false;
    if (hours >= Times.hoursInDay) {
      hours = hours - Times.hoursInDay;
      isNextDay = true;
    }
    let chrTime: ChrTimeExtended = new ChrTimeExtended(
      hours,
      minutes,
      isNextDay
    );

    Object.freeze(chrTime);
    return chrTime;
  }

  /**
   * Creates a ChrTime from minutes
   * @param minutes
   */
  public static createFromMinutes(minutes: number): ChrTimeExtended {
    let chrTime: ChrTimeExtended = null;
    if (Tools.hasValue(minutes)) {
      const hours = Math.floor(minutes / 60);
      const minutesRest = minutes % 60;
      chrTime = ChrTimeExtended.createFromHoursMinutes(hours, minutesRest);
    }
    return chrTime;
  }
}
