import { timestamp } from 'rxjs/operators';
import { Times } from '../../times';
import { Tools } from '../../tools';

/**
 * Immutable Date only oject for Chronos
 */
export class ChrDate {
  private _year: number;
  public get year(): number {
    return this._year;
  }

  private _month: number;
  public get month(): number {
    return this._month;
  }

  private _day: number;
  public get day(): number {
    return this._day;
  }

  /**
   * gets a standard js date object with time to zero.
   * Attention: this will have your local timezone and might not give the intended iso date. (iso is GMT)
   */
  public get standardJsDate() {
    return new Date(this.year, this.month - 1, this.day);
  }
  /**
   * Creates a ChrTime object
   * @param year
   * @param month
   * @param day
   */
  protected constructor(day: number, month: number, year: number) {
    year = Math.abs(year);
    year = year > Times.maxYear ? Times.maxYear : year;
    this._year = year;

    month = Math.abs(month);
    month = month > Times.monthsInYear ? Times.monthsInYear : month;
    this._month = month;

    day = Math.abs(day);
    const maxDays = ChrDate._getMaxDaysOfMonthInYear(month, year);
    if (maxDays) {
      day = day > maxDays ? maxDays : day;
      this._day = day;
    } else {
      this._day = 0;
    }

    //Object.freeze(this);
  }

  /**
   * Returns a Local date string of this dateTime with 2 digits for days, two digits for month and 4 digits for year:
   * dd/mm/yyyy or mm/dd/yyyy or dd.mm.yyyy depending on the local
   * @param locale: local stirng like 'fr', 'fr-FR', 'en-GB' etc
   */
  public toLocalDateString(locale?: string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return this.standardJsDate.toLocaleDateString(locale);
  }

  /**
   * Returns a french date string in the format dd/mm/yyyy.
   * @param format
   */
  public toFrenchDateString(format: string = 'fr-FR') {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return this.standardJsDate.toLocaleDateString();
  }

  /**
   * Gets an iso string as yyyy-mm-dd
   * This will ignore any time zone offset.
   */
  public toIsoDateString(): string {
    return `${Tools.padTwo(this.year)}-${Tools.padTwo(
      this.month
    )}-${Tools.padTwo(this.day)}`;
  }

  /**
   * Tests whether this object equals another one
   * Two ChrDates are equal if they have equal days, months and years
   * @param otherDate: ChrDate
   */
  public equals(otherDate: ChrDate): boolean {
    let result: boolean = false;
    if (otherDate) {
      result =
        this.year === otherDate.year &&
        this.month === otherDate.month &&
        this.day === otherDate.day;
    }

    return result;
  }

  /**
   * Clones this object and returns it
   */
  public clone(): ChrDate {
    return ChrDate.createFromDayMonthYear(this.day, this.month, this.year);
  }

  /**
   * TODO: define what is a valid date
   */
  public get isValid(): boolean {
    let isValid: boolean =
      ChrDate._yearIsValid(this.year) &&
      ChrDate._monthIsValid(this.month) &&
      ChrDate._dayIsValid(this.day, this.month, this.year);

    return isValid;
  }

  /*******************************************
   * Static methods
   *******************************************/

  /**
   * Parse string from iso date String 'yyyy-mm-dd'
   * @param isoDateString
   * @returns ChrDate object. Is null creation is impossbile
   */
  public static createFromIsoString(
    isoDateString: string,
    isPermissive?: boolean
  ): ChrDate {
    let date: ChrDate = null;
    if (isoDateString) {
      try {
        let jsDate = new Date(isoDateString);
        date = ChrDate.createFromDayMonthYear(
          jsDate.getDate(),
          jsDate.getMonth() + 1,
          jsDate.getFullYear()
        );
      } catch (err) {
        // FIXME log to logger when dispo
        console.error(err);
        date = null;
      }
    }
    return date;
  }

  /**
   * Parse string from french date String 'dd/mm/yyyy'
   * @param isoDateString
   */
  public static createFromFrenchDateString(dateString: string): ChrDate {
    throw new Error('Not yet implemented ...');
  }

  /**
   * This creates only valid dates
   * @param year number of the year
   * @param month number of month (1 based not 0 like in js)
   * @param day number of day
   */
  public static createFromDayMonthYear(
    day: number,
    month: number,
    year: number
  ): ChrDate {
    let date: ChrDate = null;
    if (
      ChrDate._yearIsValid(year) &&
      ChrDate._monthIsValid(month) &&
      ChrDate._dayIsValid(day, month, year)
    ) {
      date = new ChrDate(day, month, year);
    }
    return date;
  }

  /**
   * Gets the number of days in a month, with leap years, from the date object.
   * @param year: 0 < year <= 9999
   * @param month: number,  1 is january, 12 is december
   */
  private static _getMaxDaysOfMonthInYear(month: number, year: number): number {
    let result = null;
    if (year && year <= 9999 && month && month <= 12)
      try {
        // this is interpreted as the last day of the previous month
        // since months are 0 based
        let date = new Date(year, month, 0);
        result = date.getDate();
      } catch (err) {
        // FIXME log to logger when dispo
        console.error(err);
        result = null;
      }

    return result;
  }

  /**
   * Years must be in the interval [minYear, maxYear]
   * Validation function as pure function
   * @param year
   */
  private static _yearIsValid(year: number): boolean {
    return Times.minYear <= year && year <= Times.maxYear;
  }

  /**
   * Month is valid, if it is in the interval [0, monthsInYear]
   * @param month
   */
  private static _monthIsValid(month: number): boolean {
    return 1 <= month && month <= Times.monthsInYear;
  }

  /**
   * TODO: comment
   * @param day
   * @param month
   * @param year
   */
  private static _dayIsValid(
    day: number,
    month: number,
    year: number
  ): boolean {
    const maxDays = ChrDate._getMaxDaysOfMonthInYear(month, year);
    return 0 < day && day <= maxDays;
  }
}
