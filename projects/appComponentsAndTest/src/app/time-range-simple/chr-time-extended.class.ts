import { Tools } from '../tools';
import { Times } from '../times';
import { ChrTime, IChrTime } from './chr-time.class';

const maxHoursNextDay = 11;
/**
 * Its like time but allows to work with up to 36 hours
 * In of exceeding hours, the hours are reset minus 24h and the isNextDay flag is set.
 */
export class ChrTimeExtended extends ChrTime {
  private _isNextDay: boolean;

  public get isNextDay(): boolean {
    return this._isNextDay;
  }

  constructor(hours: number, minutes: number, isNextDay?: boolean) {
    super(hours, minutes);

    this._isNextDay = isNextDay;

    //Object.freeze(this);
  }

  /**
   * Returns a new Time with more minutes or null on error
   * @param minutes
   */
  public addMinutes(minutes: number): ChrTimeExtended {
    const newMin = this.getAsMinutes() + minutes;
    return ChrTimeExtended.createFromMinutes(newMin);
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
      newTime = this.clone();
    }
    return newTime;
  }

  public clone(): ChrTimeExtended {
    return new ChrTimeExtended(this.hours, this.minutes, this.isNextDay);
  }

  public isValid(): boolean {
    let isValid: boolean = true;
    // &&= adds a validation
    isValid = isValid && this.hours >= 0;
    isValid = isValid && this.hours < Times.hoursInDay;
    isValid = isValid && this.minutes >= 0;
    isValid = isValid && this.minutes < Times.minutesInHour;

    if (this._isNextDay) {
      isValid = isValid && this.hours < maxHoursNextDay;
    }
    return isValid;
  }
  /**
   * Returns 'hh:mm' of this time object
   * this will show 33:00 for 07:00 nextDay
   */
  public toHoursMinutesString() {
    const hours = this.isNextDay ? Times.hoursInDay + this._hours : this._hours;
    return `${Tools.padTwo(hours)}:${Tools.padTwo(this._minutes)}`;
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
  public static createFromString(timeString: string): ChrTimeExtended {
    let chrTime: ChrTimeExtended = null;
    const normalizedTimeString = ChrTimeExtended.getNormalizedTimeString(timeString);
    if (normalizedTimeString) {
      chrTime = ChrTimeExtended.createFromHHmmString(normalizedTimeString);
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
  public static createFromHHmmString(timeString: string): ChrTimeExtended {
    let chrTime: ChrTimeExtended = null;
    if (timeString) {
      const hoursAndMinutes = ChrTimeExtended.getHoursMinutesFromHHmmString(timeString);
      chrTime = this.createFromHoursMinutes(...hoursAndMinutes);
    }
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
    let chrTime: ChrTimeExtended = null;
    if (0 <= hours && hours < Times.hoursInDay + maxHoursNextDay && 0 <= minutes && minutes < Times.minutesInHour) {
      let isNextDay = false;
      if (hours >= Times.hoursInDay) {
        hours = hours - Times.hoursInDay;
        isNextDay = true;
      }
      chrTime = new ChrTimeExtended(hours, minutes, isNextDay);
    }
    return chrTime;
  }

  /**
   * Creates a ChrTime from minutes
   * @param minutes
   */
  public static createFromMinutes(minutes: number): ChrTimeExtended {
    let chrTime: ChrTimeExtended = null;
    if (minutes !== undefined && minutes !== null) {
      const hours = Math.floor(minutes / 60);
      const minutesRest = minutes % 60;
      chrTime = ChrTimeExtended.createFromHoursMinutes(hours, minutesRest);
    }
    return chrTime;
  }
}
