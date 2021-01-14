import { ChrDate } from './chr-date.class';
import { ChrTime } from './chr-time.class';
import { ChrTimeExtended } from './chr-time-extended.class';
import { min, timestamp } from 'rxjs/operators';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';

// lower range limit, is included
const lowerRangeLimit = ChrTimeExtended.createFromHHmmString('00:00', true);
// upper limit, which is excluded
const upperRangeLimitEx = ChrTimeExtended.createFromHHmmString('36:00', true);
/**
 * This is a value object that implements the sliding time range on 36 hours and all its rules
 * Start and end time are extended time objects
 */
export class ChrTimeRange36Hours {
  /**
   * A time range has a reference date
   * if an extended time has isNextDay==false its date is the reference date otherwise its date is the day after reference date
   */
  private _referenceDate: ChrDate;
  public get referenceDate(): ChrDate {
    return this._referenceDate;
  }
  public set referenceDate(v: ChrDate) {
    this._referenceDate = v;
  }

  /**
   *
   */
  private _startTime: ChrTimeExtended;
  public get startTime(): ChrTimeExtended {
    return this._startTime;
  }
  // public set startTime(v: ChrTimeExtended) {
  //   this._startTime = v;
  // }
  public setStartTime(val: ChrTimeExtended) {
    this._startTime = val;
    return this.clone();
  }

  private _endTime: ChrTimeExtended;
  public get endTime(): ChrTimeExtended {
    return this._endTime;
  }
  // public set endTime(v: ChrTimeExtended) {
  //   this._endTime = v;
  // }
  public setEndTime(val: ChrTimeExtended) {
    this._endTime = val;
    return this.clone();
  }

  public get isNextDay(): boolean {
    console.debug(
      'ChrTimeRange36Hours.isNextDay get',
      this.startTime.isNextDay
    );
    return this.startTime.isNextDay;
  }

  /**
   * This must be able to fail.
   * If it fails we reset startTime to original
   */
  // public set isNextDay(val: boolean) {
  //   console.debug('ChrTimeRange36Hours.isNextDay set', val);
  //   // TODO:
  //   this.endTime = this.endTime.setIsNextDay(val, true);
  //   this.startTime = this.startTime.setIsNextDay(val, true);
  // }
  public setIsNextDay(val: boolean) {
    let newRange = this.clone();

    newRange.setStartTime(this.startTime.setIsNextDay(val, true));
    newRange.setEndTime(this.endTime.setIsNextDay(val, true));
    return newRange;
  }

  /**
   * This range is valid if
   * 1) date and time are valid
   * 2) starttime <= endtime
   * 3) starttime >= 00:00
   * 4) endtime < 36:00
   * TODO: improve
   */
  public get isValid(): boolean {
    let result: boolean = true;

    result =
      this.referenceDate.isValid &&
      this.startTime.isValid &&
      this.endTime.isValid &&
      this.startTime.isSmallerThanOrEquals(this.endTime) &&
      lowerRangeLimit.isSmallerThanOrEquals(this.startTime);

    // add specific validation here
    return result;
  }

  /**
   * for internal use only
   * use static creation functions to create a new one
   * @param referenceDate
   * @param startTime
   * @param endTime
   */
  private constructor(
    referenceDate: ChrDate,
    startTime: ChrTimeExtended,
    endTime: ChrTimeExtended
  ) {
    this.referenceDate = referenceDate.clone();
    this._startTime = startTime.clone() as ChrTimeExtended;
    this._endTime = endTime.clone() as ChrTimeExtended;
  }

  /**
   * Checks for Error: Start is greater than end
   * This will return a true error only if there is a startTime and and endTime and the first is greater than the last.
   */
  public isStartGreaterThanEnd() {
    let result = false;
    if (this.startTime && this.endTime) {
      result = !this.startTime.isSmallerThanOrEquals(this.endTime);
    }
    return result;
  }

  /**
   * Add minutes to startTime and endTime if possible.
   * //This will not change the range if start or endtime would become invalid.
   * If block on Limit is set, it will go to the limit and stop there
   * @param minutesToChange
   * @param stopAtLimit: will go until the limmit but not further
   */
  public addIntervalInMinutes(minutesToChange: number, stopAtLimit?: boolean) {
    const originalStartTime = this.startTime.clone() as ChrTimeExtended;
    const originalEndTime = this.endTime.clone() as ChrTimeExtended;
    let startTimeIncremented: ChrTimeExtended; //this.startTime.addMinutes(minutesToChange);
    let endTimeIncremented: ChrTimeExtended; // = this.endTime.addMinutes(minutesToChange);

    let newRange = this.clone();
    let diffMinutes: number = 0;
    if (minutesToChange >= 0) {
      startTimeIncremented = this.startTime.addMinutes(minutesToChange, true);
      endTimeIncremented = this.endTime.addMinutes(minutesToChange, true);

      if (
        stopAtLimit &&
        upperRangeLimitEx.isSmallerThanOrEquals(endTimeIncremented)
      ) {
        let originalEndTimeMinutes = originalEndTime.getAsMinutes();
        let upperLimitAsMinutes = upperRangeLimitEx.getAsMinutes();
        //minus one because upperLimit is not included
        diffMinutes = Math.abs(
          upperLimitAsMinutes - originalEndTimeMinutes - 1
        );

        newRange = newRange.setStartTime(
          originalStartTime.addMinutes(diffMinutes, true)
        );
        newRange = newRange.setEndTime(
          ChrTimeExtended.createFromMinutes(upperLimitAsMinutes - 1, true)
        );
      } else {
        newRange = newRange.setStartTime(startTimeIncremented);
        newRange = newRange.setEndTime(endTimeIncremented);
      }
    } else {
      // decrement is hard limited to lower Limit (zero)
      diffMinutes = originalStartTime.getAsMinutes();
      const absMinToChange = Math.abs(minutesToChange);
      // we will not go under lower limit and change both limits by the new minutesToChange
      const adaptedMinutesToChange = Math.min(absMinToChange, diffMinutes);
      newRange = newRange.setStartTime(
        originalStartTime.addMinutes(-adaptedMinutesToChange, true)
      );
      newRange = newRange.setEndTime(
        originalEndTime.addMinutes(-adaptedMinutesToChange, true)
      );
    }

    // if (!newRange.isValid) {
    //   newRange = this.clone();
    // }

    return newRange;
  }

  /**
   * Creates a deep clone of this object
   */
  public clone(): ChrTimeRange36Hours {
    return new ChrTimeRange36Hours(
      this.referenceDate,
      this.startTime,
      this.endTime
    );
  }

  /**
   * Ranges are equal if their referenceDate, startTime, endTime are equal respectively
   * @param other
   */
  public equals(other: ChrTimeRange36Hours): boolean {
    let result: boolean =
      this.referenceDate.equals(other.referenceDate) &&
      this.startTime.equals(other.startTime) &&
      this.endTime.equals(other.endTime);

    return result;
  }

  /***************************************
   * STATICS
   ***************************************/

  /**
   * Creates a ChrTimeRange36Hours from coresponding strings
   * @param isoDateString : a dateString in the format 'yyyy-mm-dd'
   * @param startTimeString : the start time of the time range. Format is a timeString in the format 'hh.mm' ou 'hh:mm' ou 'hh,mm' this can be a time between 00:00 and 36:00
   * @param endTimeString : the end time of the time range. Format like startTimeString.
   * @param isPermissive:
   */
  public static createFromDateTimeStrings(
    isoDateString: string,
    startTimeString: string,
    endTimeString: string,
    isPermissive?: boolean
  ): ChrTimeRange36Hours {
    let timeRange: ChrTimeRange36Hours = null;

    const referenceDate = ChrDate.createFromIsoString(
      isoDateString,
      isPermissive
    );
    const startTime = ChrTimeExtended.createFromString(
      startTimeString,
      isPermissive
    );
    const endTime = ChrTimeExtended.createFromString(
      endTimeString,
      isPermissive
    );

    if (referenceDate && startTime && endTime) {
      timeRange = new ChrTimeRange36Hours(referenceDate, startTime, endTime);
    }

    return timeRange;
  }
}

/*

export type ExtendedTimeRangeType = {
    referenceDate: ChrDate;
    startTime: ChrDateTime;
    endTime: ChrDateTime;
    isNextDay: Boolean;

    getStartTimeAs36HourString('.'): string;
    getEndTimeAs36HourString('.'): string;

    static createFromStrings('2020-10-15', '26.00', '28.00')

  };
*/
