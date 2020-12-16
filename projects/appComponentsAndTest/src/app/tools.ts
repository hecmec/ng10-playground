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
}
