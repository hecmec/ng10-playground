import { ChrDate } from './chr-date.class';
import { ChrTimeExtended } from './chr-time-extended.class';
import { ChrTimeRange36Hours } from './chr-time-range-36hours.class';

describe('ChrTimeRange36Hours', () => {
  const standardTimeRange: ChrTimeRange36Hours = ChrTimeRange36Hours.createFromDateTimeStrings(
    '2020-10-20',
    '10:00',
    '12:00'
  );

  // beforeEach(() => { chrTime = new chrTime(); });

  describe('startTime/endTime .toHoursMinutesString', () => {
    it('should give correct hh:mm strings for standard start and end time', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '10:00',
        '12:00'
      );
      expect(chrTimeRange.startTime.toHoursMinutesString()).toEqual('10:00');
      expect(chrTimeRange.endTime.toHoursMinutesString()).toEqual('12:00');
    });

    it('should give correct hh:mm strings for extended start and end time', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '27:30',
        '34:30'
      );
      expect(chrTimeRange.startTime.toHoursMinutesString()).toEqual('27:30');
      expect(chrTimeRange.endTime.toHoursMinutesString()).toEqual('34:30');
      expect(chrTimeRange.isNextDay).toBeTruthy();
    });
  });

  describe('equals', () => {
    it('should eval two ranges with same date and times as equal', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '27:30',
        '34:30'
      );
      const chrTimeRange2 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '27:30',
        '34:30'
      );
      expect(chrTimeRange1.equals(chrTimeRange2)).toBeTruthy();
    });
    it('should eval two ranges that differ in reference date as not equal', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '27:30',
        '34:30'
      );
      const chrTimeRange2 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-22',
        '27:30',
        '34:30'
      );
      expect(chrTimeRange1.equals(chrTimeRange2)).toBeFalsy();
    });
  });

  describe('isValid', () => {
    it('should eval a range with correct times and date as valid', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '00:00',
        '22:55'
      );
      expect(chrTimeRange1.isValid).toBeTruthy();
    });
    it('should eval a range with correct extended times and date as valid', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '1492-05-20',
        '27:30',
        '34:30'
      );
      expect(chrTimeRange1.isValid).toBeTruthy();
    });
    it('should make a null range with incorrect date', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '1492-14-20',
        '27:30',
        '34:30'
      );
      expect(chrTimeRange1).toBeNull();
    });
    it('should make an invalid range with incorrect date in permissive mode', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '1492-14-20',
        '27:30',
        '34:30',
        true
      );
      expect(chrTimeRange1).toBeNull();
    });
    it('should eval a range with incorrect time as invalid', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '1492-08-20',
        '20:30',
        '36:30',
        true
      );
      expect(chrTimeRange1.isValid).toBeFalse();
    });
  });

  describe('addIntervalInMinutes', () => {
    it('should add 10 minutes to start and end in standard range', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '10:00',
        '11:00'
      );
      const chrTimeRangeAdded = chrTimeRange.addIntervalInMinutes(10);
      expect(chrTimeRangeAdded.startTime.minutes).toEqual(10);
      expect(chrTimeRangeAdded.endTime.minutes).toEqual(10);
      expect(chrTimeRangeAdded.isValid).toBeTruthy();
    });

    it('should substract 10 minutes from start and end in standard range', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '10:00',
        '11:30'
      );
      const chrTimeRangeAdded = chrTimeRange.addIntervalInMinutes(-10);
      expect(chrTimeRangeAdded.startTime.hours).toEqual(9);
      expect(chrTimeRangeAdded.startTime.minutes).toEqual(50);
      expect(chrTimeRangeAdded.endTime.hours).toEqual(11);
      expect(chrTimeRangeAdded.endTime.minutes).toEqual(20);
      expect(chrTimeRangeAdded.isValid).toBeTruthy();
    });

    it('should add 30 minutes to start and end in extended range', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '10:00',
        '30:55'
      );
      const chrTimeRangeAdded = chrTimeRange.addIntervalInMinutes(30);
      expect(chrTimeRangeAdded.startTime.minutes).toEqual(30);
      expect(chrTimeRangeAdded.endTime.hours).toEqual(7);
      expect(chrTimeRangeAdded.endTime.minutes).toEqual(25);
      expect(chrTimeRangeAdded.endTime.isNextDay).toBeTruthy();
      expect(chrTimeRangeAdded.isValid).toBeTruthy();
    });

    it('should stop at upper limit if add minutes to go beyond (in bocking mode)', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '10:00',
        '35:55'
      );
      const blockOnLimit = true;
      const chrTimeRangeAdded = chrTimeRange.addIntervalInMinutes(
        15,
        blockOnLimit
      );
      expect(chrTimeRangeAdded.startTime.hours).toEqual(10);
      expect(chrTimeRangeAdded.startTime.minutes).toEqual(4);

      expect(chrTimeRangeAdded.endTime.hours).toEqual(11);
      expect(chrTimeRangeAdded.endTime.minutes).toEqual(59);
      expect(chrTimeRangeAdded.endTime.isNextDay).toBeTruthy();
      expect(chrTimeRangeAdded.isValid).toBeTruthy();
    });

    it('should stop at upper limit if add minutes to go beyond (in bocking mode)', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '00:10',
        '24:05'
      );
      const blockOnLimit = true;
      const chrTimeRangeAdded = chrTimeRange.addIntervalInMinutes(
        -15,
        blockOnLimit
      );
      expect(chrTimeRangeAdded.startTime.hours).toEqual(0);
      expect(chrTimeRangeAdded.startTime.minutes).toEqual(0);
      // we can only decrement by 10
      expect(chrTimeRangeAdded.endTime.hours).toEqual(23);
      expect(chrTimeRangeAdded.endTime.minutes).toEqual(55);
      expect(chrTimeRangeAdded.endTime.isNextDay).toBeFalse();
      expect(chrTimeRangeAdded.isValid).toBeTruthy();
    });
  });

  describe('equals', () => {
    it('should clone a simple range', () => {
      const chrTimeRange1 = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '27:30',
        '34:30'
      );

      expect(chrTimeRange1.equals(chrTimeRange1.clone())).toBeTruthy();
    });
  });

  /******************************************
   * Statics
   ******************************************/
  describe('createFromDateTimeStrings', () => {
    it('should be createable from strings for reference date start and end time', () => {
      const refDateStr = '2008-01-29';
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        refDateStr,
        '9:27',
        '22.59'
      );
      expect(chrTimeRange.referenceDate.toIsoDateString()).toEqual(refDateStr);
      expect(chrTimeRange.startTime.toHoursMinutesString()).toEqual('09:27');
      expect(chrTimeRange.endTime.toHoursMinutesString()).toEqual('22:59');
    });

    it('should be createable by createFromDateTimeStrings with standard hour and minute', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '10:00',
        '12:00'
      );

      expect(chrTimeRange.referenceDate).toEqual(
        ChrDate.createFromIsoString('2020-10-20')
      );
      expect(chrTimeRange.startTime.hours).toEqual(10);
      expect(chrTimeRange.endTime.hours).toEqual(12);
      expect(chrTimeRange.isNextDay).toBeFalse();
    });

    it('should be createable by createFromDateTimeStrings with extended hour for end', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '20:30',
        '30:30'
      );
      expect(chrTimeRange.referenceDate.day).toEqual(20);
      expect(chrTimeRange.startTime.hours).toEqual(20);
      expect(chrTimeRange.endTime.hours).toEqual(6);
      expect(chrTimeRange.isNextDay).toBeFalsy();
    });

    it('should be createable by createFromDateTimeStrings with extended hour for start and end', () => {
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        '2020-10-20',
        '24:15',
        '35:59'
      );
      expect(chrTimeRange.referenceDate.day).toEqual(20);
      expect(chrTimeRange.startTime.hours).toEqual(0);
      expect(chrTimeRange.endTime.hours).toEqual(11);
      expect(chrTimeRange.isNextDay).toBeTruthy();
    });
  });
});
