export class Times {
  public static readonly dateFormat: string = 'DD/MM/YYYY';
  public static readonly ISOdateFormat: string = 'YYYY-MM-DD';
  public static readonly isoFormatRegExp: RegExp = new RegExp(
    /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])?$/
  );
  /**
   * Nombre de minutes dans une heure
   */
  public static readonly minutesInHour: number = 60;
  /**
   * Nombre de minutes dans une journée
   */
  public static readonly minutesInDay: number = 1440;

  /**
   * Horaire de début de journée en string (format HH:MM)
   */
  public static readonly beginDayString: string = '00:00';

  /**
   * Horaire de fin de journée en string (format HH:MM)
   */
  public static readonly endDayString: string = '24:00';

  /**
   * Number of hours in day
   */
  public static readonly hoursInDay: number = 24;
}
