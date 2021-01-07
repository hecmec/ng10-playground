export class Tools {
  /**
   * Pads a number to a (at least) 2-digit string
   * 2 -> '02'
   * 23 -> '23'
   * 123 -> '123'
   * @param aNumber
   */
  public static padTwo(aNumber: number): string {
    let result = ('' + (aNumber || 0)).padStart(2, '0');
    return result;
  }

  /**
   * this is important for numbers and boolean where you cannot just ask like if(value), because that would exclude 0 and false
   * @param val
   */
  public static hasValue(val: any): boolean {
    return val !== null && typeof val !== 'undefined';
  }
}
