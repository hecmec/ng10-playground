import { ChrDate } from './chr-date.class';
import { ChrTime } from './chr-time.class';
import { ChrTimeExtended } from './chr-time-extended.class';
import { min } from 'rxjs/operators';

/**
 * This is a value object that implements the sliding time range on 36 hours and all its rules
 *
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
  public set startTime(v: ChrTimeExtended) {
    this._startTime = v;
  }

  private _endTime: ChrTimeExtended;
  public get endTime(): ChrTimeExtended {
    return this._endTime;
  }
  public set endTime(v: ChrTimeExtended) {
    this._endTime = v;
  }

  public get isNextDay(): boolean {
    return this.startTime.isNextDay;
  }
  /**
   * This must be able to fail.
   * If it fails we reset startTime to original
   */
  public set isNextDay(val: boolean) {
    this.startTime = this.startTime.setIsNextDay(val);
  }

  constructor(
    referenceDate: ChrDate,
    startTime: ChrTimeExtended,
    endTime: ChrTimeExtended
  ) {
    this.referenceDate = referenceDate;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  /**
   * Add minutes to startTime and endTime if possible
   * @param minutes
   */
  public addIntervalInMinutes(minutes: number) {
    const endTimeIncremented = this.endTime.addMinutes(minutes);
    // if not null, the incrementation is possible
    if (endTimeIncremented) {
      this.endTime = endTimeIncremented as ChrTimeExtended;
      this.startTime = this.startTime.addMinutes(minutes) as ChrTimeExtended;
    }
  }

  /**
   * Creates a ChrTimeRange36Hours from coresponding strings
   * @param isoDateString : a dateString in the format 'yyyy-mm-dd'
   * @param startTimeString : the start time of the time range. Format is a timeString in the format 'hh.mm' ou 'hh:mm' ou 'hh,mm' this can be a time between 00:00 and 36:00
   * @param endTimeString : the end time of the time range. Format like startTimeString.
   */
  public static createFromDateTimeStrings(
    isoDateString: string,
    startTimeString: string,
    endTimeString: string
  ): ChrTimeRange36Hours {
    const referenceDate = ChrDate.createFromIsoString(isoDateString);
    const startTime = ChrTimeExtended.createFromString(startTimeString);
    const endTime = ChrTimeExtended.createFromString(endTimeString);

    const timeRange = new ChrTimeRange36Hours(
      referenceDate,
      startTime,
      endTime
    );
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
