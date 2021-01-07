import { Tools } from '../tools';
import { Times } from '../times';
import { ChrTime, IChrTime } from './chr-time.class';

const maxHoursNextDay = 11;
/**
 * Its like time but allows to work with up to 36 hours
 * In case of exceeding hours, the hours are reset minus 24h and the isNextDay flag is set.
 */
export class ChrTimeExtended extends ChrTime {
  private _isNextDay: boolean;

  public get isNextDay(): boolean {
    return this._isNextDay;
  }

  public get isValid(): boolean {
    let isValid: boolean = super.isValid;

    if (this._isNextDay) {
      isValid = isValid && this.hours <= maxHoursNextDay;
    }
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
   * @param minutes
   * @returns a new copy
   */
  public addMinutes(minutes: number, blockOnLimit?: boolean): ChrTimeExtended {
    const newMin = this.getAsMinutes() + minutes;
    const newTime = ChrTimeExtended.createFromMinutes(newMin);
    if (blockOnLimit) {
      return this.clone() as ChrTimeExtended;
    }
    return newTime;
  }

  /**
   * Sets the nextDay property.
   * If this results in an invalid time object we return a clone of the original object
   * @param nextDay
   */
  public setIsNextDay(nextDay: boolean) {
    let newTime: ChrTimeExtended = new ChrTimeExtended(
      this.hours,
      this.minutes,
      nextDay
    );

    if (!newTime.isValid) {
      newTime = this.clone() as ChrTimeExtended;
    }
    return newTime;
  }

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
    Object.freeze(chrTime);
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
