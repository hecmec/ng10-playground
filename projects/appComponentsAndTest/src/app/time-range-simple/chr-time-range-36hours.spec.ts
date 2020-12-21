import { ChrDate } from './chr-date.class';
import { ChrTimeExtended } from './chr-time-extended.class';
import { ChrTimeRange36Hours } from './chr-time-range-36hours.class';

describe('ChrTimeRange36Hours', () => {
  let standardDate = new ChrDate(2020, 10, 20);
  let standardStart = new ChrTimeExtended(10, 0);
  let standardEnd = new ChrTimeExtended(12, 0);
  const standardTimeRange: ChrTimeRange36Hours = new ChrTimeRange36Hours(
    standardDate,
    standardStart,
    standardEnd
  );
  // beforeEach(() => { chrTime = new chrTime(); });

  describe('creation by constructor', () => {
    it('should be createable by constructor with standard hour and minute', () => {
      const chrTimeRange = new ChrTimeRange36Hours(
        standardTimeRange.referenceDate,
        standardTimeRange.startTime,
        standardTimeRange.endTime
      );
      expect(chrTimeRange.referenceDate).toEqual(standardDate);
      expect(chrTimeRange.startTime).toEqual(standardStart);
      expect(chrTimeRange.endTime).toEqual(standardEnd);
      expect(chrTimeRange.isNextDay).toBeFalse();
    });

    it('should be createable by constructor with extended hour for end', () => {
      const startTime = new ChrTimeExtended(20, 30);
      const endTime = new ChrTimeExtended(10, 30, true);

      const chrTimeRange = new ChrTimeRange36Hours(
        standardDate,
        startTime,
        endTime
      );
      expect(chrTimeRange.referenceDate).toEqual(standardDate);
      expect(chrTimeRange.startTime).toEqual(startTime);
      expect(chrTimeRange.endTime).toEqual(endTime);
      expect(chrTimeRange.isNextDay).toBeFalse();
    });

    it('should be createable by constructor with extended hour for start and end', () => {
      const startTime = new ChrTimeExtended(4, 11, true);
      const endTime = new ChrTimeExtended(10, 15, true);

      const chrTimeRange = new ChrTimeRange36Hours(
        standardDate,
        startTime,
        endTime
      );
      expect(chrTimeRange.referenceDate).toEqual(standardDate);
      expect(chrTimeRange.startTime).toEqual(startTime);
      expect(chrTimeRange.endTime).toEqual(endTime);
      expect(chrTimeRange.isNextDay).toBeTrue();
    });
  });

  describe('startTime/endTime .toHoursMinutesString', () => {
    it('should give correct hh:mm strings for standard start and end time', () => {
      const chrTimeRange = new ChrTimeRange36Hours(
        standardTimeRange.referenceDate,
        standardTimeRange.startTime,
        standardTimeRange.endTime
      );
      expect(chrTimeRange.startTime.toHoursMinutesString()).toEqual('10:00');
      expect(chrTimeRange.endTime.toHoursMinutesString()).toEqual('12:00');
    });

    it('should give correct hh:mm strings for extended start and end time', () => {
      const startTime = new ChrTimeExtended(3, 30, true);
      const endTime = new ChrTimeExtended(10, 30, true);
      const chrTimeRange = new ChrTimeRange36Hours(
        standardDate,
        startTime,
        endTime
      );
      expect(chrTimeRange.startTime.toHoursMinutesString()).toEqual('27:30');
      expect(chrTimeRange.endTime.toHoursMinutesString()).toEqual('34:30');
    });
  });

  /******************************************
   * Statics
   ******************************************/
  describe('createFromDateTimeStrings', () => {
    it('should be createable from strings for reference date start and end time', () => {
      const refDateStr = '2008-01-29';
      const startTimeStr = '9:27';
      const endTimeStr = '22.59';
      const chrTimeRange = ChrTimeRange36Hours.createFromDateTimeStrings(
        refDateStr,
        startTimeStr,
        endTimeStr
      );
      expect(chrTimeRange.referenceDate.toIsoDateString()).toEqual(refDateStr);
      expect(chrTimeRange.startTime.toHoursMinutesString()).toEqual('09:27');
      expect(chrTimeRange.endTime.toHoursMinutesString()).toEqual('22:59');
    });
  });
});
