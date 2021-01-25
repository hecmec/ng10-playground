import { ChrDate } from './chr-date.class';
import { ChrTime } from './chr-time.class';
import { ChrTimeExtended } from './chr-time-extended.class';
import { ChrValidationResult } from './chr-validation-result.class';
import { min, timestamp } from 'rxjs/operators';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';

// lower range limit, is included
const lowerRangeLimit = ChrTimeExtended.createFromHHmmString('00:00', true);
// upper limit, which is excluded
const upperRangeLimit = ChrTimeExtended.createFromHHmmString('36:00', true);
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

  /**
   * If you set the end time and it is equal or smaller than start, then set it on next day
   * @param newEndTime
   */
  public setEndTime(newEndTime: ChrTimeExtended) {
    if (this.startTime && newEndTime) {
      if (newEndTime.isSmallerThanOrEquals(this.startTime)) {
        newEndTime = newEndTime.setIsNextDay(true, true);
      }
    }
    this._endTime = newEndTime;

    return this.clone();
  }

  public get isNextDay(): boolean {
    // console.debug('ChrTimeRange36Hours.isNextDay get', this.startTime.isNextDay);
    return this.startTime.isNextDay;
  }

  /**
   * Set IsNext Day.
   * if val is true, then we set both time.isNextDay to true;
   * if val is false, then
   *  1) if both time are on next day -> set them both to false
   *  2) if startTime is today, don't change endTime
   */
  public setIsNextDay(val: boolean) {
    let newRange = this.clone();
    if (val) {
      const newStartTime = this.startTime.setIsNextDay(true, true);
      const newEndTime = this.endTime.setIsNextDay(true, true);
      newRange = newRange.setStartTime(newStartTime).setEndTime(newEndTime);
    } else if (this.startTime.isNextDay && this.endTime.isNextDay) {
      const newStartTime = this.startTime.setIsNextDay(false, true);
      const newEndTime = this.endTime.setIsNextDay(false, true);
      newRange = newRange.setStartTime(newStartTime).setEndTime(newEndTime);
    }

    return newRange;
  }

  /**
   * This range is valid if
   * 1) date and time are valid
   * 2) starttime < endtime
   * 3) starttime >= 00:00
   * 4) endtime <= 36:00
   * TODO: improve
   */
  public get isValid(): boolean {
    let result: boolean = true;

    result =
      this.referenceDate?.isValid &&
      this.startTime?.isValid &&
      this.endTime?.isValid &&
      this.startTime?.isSmallerThan(this.endTime) &&
      lowerRangeLimit.isSmallerThanOrEquals(this.startTime);
    upperRangeLimit.isGreaterThanOrEquals(this.endTime);

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
  private constructor(referenceDate: ChrDate, startTime: ChrTimeExtended, endTime: ChrTimeExtended) {
    this.referenceDate = referenceDate;
    this._startTime = startTime;
    this._endTime = endTime;
  }

  /**
   * Checks for Error: Start is greater than end
   * This will return false if
   * there is a startTime and an endTime and the first is not smaller than the last.
   */
  public isStartSmallerThanEnd() {
    let result = true;
    if (this.startTime && this.endTime) {
      result = this.startTime.isSmallerThan(this.endTime);
    }
    return result;
  }

  /**
   * Todo: doc and test
   */
  public checkValidation(): ChrValidationResult<ChrTimeRange36Hours> {
    let result: ChrValidationResult<ChrTimeRange36Hours> = null;
    const validationResults: ChrValidationResult<ChrTimeRange36Hours>[] = [];

    const refDateValidationResult = this.referenceDate?.isValid
      ? ChrValidationResult.ok<ChrTimeRange36Hours>()
      : ChrValidationResult.fail<ChrTimeRange36Hours>([ChrTimeRange36Hours.ValidationErrors.ReferenceDateIsNotValid]);

    validationResults.push(refDateValidationResult);

    const startTimeValidationResult = this.startTime?.isValid
      ? ChrValidationResult.ok<ChrTimeRange36Hours>()
      : ChrValidationResult.fail<ChrTimeRange36Hours>([ChrTimeRange36Hours.ValidationErrors.StartTimeIsNotValid]);

    validationResults.push(startTimeValidationResult);

    const endTimeValidationResult = this.endTime?.isValid
      ? ChrValidationResult.ok<ChrTimeRange36Hours>()
      : ChrValidationResult.fail<ChrTimeRange36Hours>([ChrTimeRange36Hours.ValidationErrors.EndTimeIsNotValid]);
    validationResults.push(endTimeValidationResult);

    const startTimeBeforeEndTimeValidationResult = this.startTime?.isSmallerThan(this.endTime)
      ? ChrValidationResult.ok<ChrTimeRange36Hours>()
      : ChrValidationResult.fail<ChrTimeRange36Hours>([
          ChrTimeRange36Hours.ValidationErrors.StartTimeIsNotBeforeEndTime,
        ]);
    validationResults.push(startTimeBeforeEndTimeValidationResult);

    const lowerTimeLimitValidationResult = lowerRangeLimit.isSmallerThanOrEquals(this.startTime)
      ? ChrValidationResult.ok<ChrTimeRange36Hours>()
      : ChrValidationResult.fail<ChrTimeRange36Hours>([
          ChrTimeRange36Hours.ValidationErrors.StartTimeIsNotAfterLowerLimit,
        ]);
    validationResults.push(lowerTimeLimitValidationResult);

    const upperTimeLimitValidationResult = upperRangeLimit.isGreaterThanOrEquals(this.endTime)
      ? ChrValidationResult.ok<ChrTimeRange36Hours>()
      : ChrValidationResult.fail<ChrTimeRange36Hours>([
          ChrTimeRange36Hours.ValidationErrors.StartTimeIsNotBeforeEndTime,
        ]);
    validationResults.push(upperTimeLimitValidationResult);

    result = ChrValidationResult.combine(validationResults);

    // add specific validation here
    return result;
  }

  /**
   * Add minutes to startTime and endTime if possible.
   * By default this will not change the range if start or endtime would become invalid.
   * If block on Limit is set, it will go to the limit and stop there
   * @param minutesToChange
   * @param overflowBehavior: (optional) determines how to handle upper limit transgression.
   *  By default the overflow will cancel the change and the range will stay unchanged.
   */
  public addIntervalInMinutes(minutesToChange: number, overflowBehavior?: ChrTimeRange36Hours.OverflowBehavior) {
    // by default invalid time augmenation will result in no change
    overflowBehavior = overflowBehavior || ChrTimeRange36Hours.OverflowBehavior.Unchanged;

    const originalStartTime = this.startTime.clone() as ChrTimeExtended;
    const originalEndTime = this.endTime.clone() as ChrTimeExtended;
    let startTimeIncremented: ChrTimeExtended; //this.startTime.addMinutes(minutesToChange);
    let endTimeIncremented: ChrTimeExtended; // = this.endTime.addMinutes(minutesToChange);

    let newRange = this.clone();
    let diffMinutes: number = 0;
    if (minutesToChange >= 0) {
      startTimeIncremented = this.startTime.addMinutes(minutesToChange, true);
      endTimeIncremented = this.endTime.addMinutes(minutesToChange, true);

      if (endTimeIncremented.isGreaterThan(upperRangeLimit) || startTimeIncremented.isGreaterThan(upperRangeLimit)) {
        // new time range exeeds limit
        if (overflowBehavior === ChrTimeRange36Hours.OverflowBehavior.StopAtLimit) {
          let originalEndTimeMinutes = originalEndTime.getAsMinutes();
          let upperLimitAsMinutes = upperRangeLimit.getAsMinutes();
          //minus one because upperLimit is not included
          diffMinutes = Math.abs(upperLimitAsMinutes - originalEndTimeMinutes);

          newRange = newRange.setStartTime(originalStartTime.addMinutes(diffMinutes, true));
          newRange = newRange.setEndTime(ChrTimeExtended.createFromMinutes(upperLimitAsMinutes, true));
        } else if (overflowBehavior === ChrTimeRange36Hours.OverflowBehavior.Overflow) {
          newRange = newRange.setStartTime(startTimeIncremented);
          newRange = newRange.setEndTime(endTimeIncremented);
        }
      } else {
        // new time range is in limit
        newRange = newRange.setStartTime(startTimeIncremented);
        newRange = newRange.setEndTime(endTimeIncremented);
      }
    } else {
      // decrement is hard limited to lower Limit (zero)
      diffMinutes = originalStartTime.getAsMinutes();
      const absMinToChange = Math.abs(minutesToChange);
      // we will not go under lower limit and change both limits by the new minutesToChange
      const adaptedMinutesToChange = Math.min(absMinToChange, diffMinutes);
      newRange = newRange.setStartTime(originalStartTime.addMinutes(-adaptedMinutesToChange, true));
      newRange = newRange.setEndTime(originalEndTime.addMinutes(-adaptedMinutesToChange, true));
    }

    return newRange;
  }

  /**
   * Creates a deep clone of this object
   */
  public clone(): ChrTimeRange36Hours {
    return new ChrTimeRange36Hours(this.referenceDate, this.startTime, this.endTime);
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

    const referenceDate = ChrDate.createFromIsoString(isoDateString, isPermissive);
    const startTime = ChrTimeExtended.createFromString(startTimeString, isPermissive);
    const endTime = ChrTimeExtended.createFromString(endTimeString, isPermissive);

    if (referenceDate && startTime && endTime) {
      timeRange = new ChrTimeRange36Hours(referenceDate, startTime, endTime);
    }

    return timeRange;
  }
}

export namespace ChrTimeRange36Hours {
  /**
   * Different possile behaviors of the time range when addMinutes exceeds the valid limits
   */
  export enum OverflowBehavior {
    /**
     * Don't change the range on overflow
     */
    Unchanged,
    /**
     * Go until the limit and stop
     */
    StopAtLimit,
    /**
     * just add the time even if the range becomes invalid
     */
    Overflow,
  }

  export enum ValidationErrors {
    ReferenceDateIsNotValid = 'ReferenceDateIsNotValid',
    StartTimeIsNotValid = 'StartTimeIsNotValid',
    EndTimeIsNotValid = 'EndTimeIsNotValid',
    StartTimeIsNotBeforeEndTime = 'StartTimeIsNotBeforeEndTime',
    StartTimeIsNotAfterLowerLimit = 'StartTimeIsNotAfterLowerLimit',
    EndTimeIsNotBeforeUpperLimit = 'EndTimeIsNotBeforeUpperLimit',
  }
}
