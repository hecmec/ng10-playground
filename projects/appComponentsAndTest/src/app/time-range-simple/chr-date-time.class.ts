import { Tools } from '../tools';
import { ChrDate } from './chr-date.class';
import { ChrTime } from './chr-time.class';

/**
 * This is a value object for dateTime specific to Chronos
 * It will hold a date and a time and exposes different formats
 * Abstracts away moment.js or JS-Joda, Luxon, Date-Fns or Day.js
 * We set timezone offset to 0, in order to
 *
 *
 * https://medium.com/swinginc/save-time-by-doing-time-the-right-way-with-domain-driven-apis-72321fe09a90
 * https://vaadin.com/learn/tutorials/ddd/tactical_domain_driven_design#_value_objects
 * value objects should always be made immutable (side-effect free)
 * stop using strings -> use value objects, you'll sleep better :)
 */
export class ChrDateTime {
  public constructor() {
    this._dateTime = new Date();
  }

  private _dateTime: Date;

  /**
   * Gets the dateTime value
   */
  public get DateTime(): Date {
    return this._dateTime;
  }

  /**
   * Sets the dateTime value
   */
  public set DateTime(dateTime: Date) {
    if (dateTime) {
      this._dateTime = dateTime;
    }
  }

  /**
   * Returns a Local date string of this dateTime with 2 digits for days, two digits for month and 4 digits for year:
   * dd/mm/yyyy or mm/dd/yyyy or dd.mm.yyyy depending on the local
   * @param locale: local stirng like 'fr', 'fr-FR', 'en-GB' etc
   */
  public toLocalDateString(locale?: string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    this._dateTime.toLocaleDateString(locale);
  }

  /**
   * Returns a french date string in the format dd/mm/yyyy.
   * @param format
   */
  public toFrenchDateString(format: string = 'fr-FR') {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    this._dateTime.toLocaleDateString();
  }

  /**
   * This returns always a valid iso UTC string
   * This will transform your date into utc and then create a iso date format.
   *      "Sat Oct 30 2010 00:00:00 GMT+0200 (heure d’été d’Europe centrale)".toIsoString will return "2010-10-29T22:00:00.000Z"
   *      That might not be what you want.
   * If you dont wanna UTC convertion, use toLocalIsoString
   */
  public toIsoString(): string {
    return this._dateTime.toISOString();
  }

  /**
   * Gets a local iso string
   */
  public toLocalIsoString(): string {
    const currentDateTime = this._dateTime;
    return (
      currentDateTime.getFullYear() +
      '-' +
      Tools.padTwo(currentDateTime.getMonth() + 1) +
      '-' +
      Tools.padTwo(currentDateTime.getDate()) +
      'T' +
      Tools.padTwo(currentDateTime.getHours()) +
      ':' +
      Tools.padTwo(currentDateTime.getMinutes()) +
      ':' +
      Tools.padTwo(currentDateTime.getSeconds()) +
      '.' +
      (currentDateTime.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
      'Z'
    );
  }

  /**
   * Gets the an ISO string of the current date part of the dateTime
   */
  public toIsoDate(): string {
    //return `${this._dateTime.getFullYear()}-${('0'+ (this._dateTime.getMonth()+1)).slice(-2)}-${('0'+ this._dateTime.getDate()).slice(-2)}`;
    return this.toIsoString().slice(0, 10);
  }

  /**
   * Gets the an ISO string of the current date part of the dateTime
   */
  public toLocalIsoDate(): string {
    return this.toLocalIsoString().slice(0, 10);
  }

  /*************************************
   * Static factory functions
   ***********************************/

  /**
   * Creates a ChrDateTime from a js date instance
   * @param dateTime
   */
  public static createFromDate(dateTime: Date): ChrDateTime {
    let chrDateTime: ChrDateTime = null;
    if (dateTime) {
      chrDateTime = new ChrDateTime();
      chrDateTime.DateTime = dateTime;
      // Object.freeze(chrDateTime);
    }
    return chrDateTime;
  }

  /**
   * Creates a ChrDateTime from an iso string
   *
   * @param isoDateTimeString '2020-12-10T16:12:40.265Z' => Thu Dec 10 2020 17:17:56 GMT+0100 (heure normale d’Europe centrale)
   */
  public static createFromIsoDateSring(isoDateTimeString: string): ChrDateTime {
    let chrDateTime: ChrDateTime = null;
    if (isoDateTimeString) {
      chrDateTime = new ChrDateTime();
      const jsDate = new Date(isoDateTimeString);

      chrDateTime.DateTime = jsDate;
      // Object.freeze(chrDateTime);
    }
    return chrDateTime;
  }

  /**
   *
   * @param day 1 based day of month
   * @param month 1 based month of year
   * @param year number of year
   * @param hours
   * @param minutes
   * @param seconds
   * @returns an ChrDateTime instance or null if the creations didn't work out.
   */
  public static createFromDMY(
    day: number,
    month: number,
    year: number,
    hours?: number,
    minutes?: number,
    seconds?: number
  ): ChrDateTime {
    let chrDateTime: ChrDateTime = null;
    try {
      const jsDateTime = new Date(
        year,
        month - 1,
        day,
        hours,
        minutes,
        seconds
      );
      chrDateTime.DateTime = jsDateTime;
      // Object.freeze(chrDateTime);
    } catch (err) {
      // log when logger is dispo
    }
    return chrDateTime;
  }

  public static createFromChrDateAndTime(
    chrDate: ChrDate,
    chrTime: ChrTime
  ): ChrDateTime {
    let chrDateTime: ChrDateTime = null;
    try {
      const jsDateTime = new Date(
        chrDate.year,
        chrDate.month - 1,
        chrDate.day,
        chrTime.hours,
        chrTime.minutes
      );
      chrDateTime.DateTime = jsDateTime;
      // Object.freeze(chrDateTime);
    } catch (err) {
      // log when logger is dispo
    }
    return chrDateTime;
  }
}

export type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};
