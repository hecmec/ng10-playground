import { Times } from '../../times';
import { ChrTime } from './chr-time.class';

describe('ChrTime', () => {
  let chrTime: ChrTime;
  // beforeEach(() => { chrTime = new chrTime(); });

  describe('toHoursMinutesString', () => {
    it('should ceate a "06:20" string for a time 6:20', () => {
      chrTime = ChrTime.createFromHoursMinutes(6, 20);
      expect(chrTime.toHoursMinutesString()).toEqual('06:20');
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isValid).toBeTrue();
    });
  });

  describe('addMinutes', () => {
    it('should add an hour if we add 60 minutes to  6:20 ', () => {
      chrTime = ChrTime.createFromHHmmString('6:20');
      expect(chrTime.addMinutes(60).toHoursMinutesString()).toEqual('07:20');
    });
    it('should be an invalid time object of 30:20 if you add a day to 6:20', () => {
      chrTime = ChrTime.createFromHHmmString('6:20');
      chrTime = chrTime.addMinutes(Times.minutesInDay, true);
      expect(chrTime.toHoursMinutesString()).toEqual('30:20');
      expect(chrTime.isValid).toBeFalse();
    });
  });

  describe('isSmallerThan', () => {
    it('should tell us that "6:00" is smaller than "7:00"', () => {
      const chrTime1 = ChrTime.createFromHHmmString('6:00');
      const chrTime2 = ChrTime.createFromHHmmString('7:00');
      expect(chrTime1.isSmallerThan(chrTime2)).toBeTruthy();
    });
    it('should tell us that "12:00" is not smaller than "12:00"', () => {
      const chrTime1 = ChrTime.createFromHHmmString('12:00');
      const chrTime2 = ChrTime.createFromHHmmString('12:00');
      expect(chrTime1.isSmallerThan(chrTime2)).toBeFalsy();
    });
    it('should tell us that "00:10" is not smaller than "00:08"', () => {
      const chrTime1 = ChrTime.createFromHHmmString('00:10');
      const chrTime2 = ChrTime.createFromHHmmString('00:08');
      expect(chrTime1.isSmallerThan(chrTime2)).toBeFalsy();
    });
  });

  describe('equals', () => {
    it('should tell us that "6:00" is not equal to "7:00"', () => {
      const chrTime1 = ChrTime.createFromHHmmString('6:00');
      const chrTime2 = ChrTime.createFromHHmmString('7:00');
      expect(chrTime1.equals(chrTime2)).toBeFalsy();
    });
    it('should tell us that "23:55" is equal to "23:55"', () => {
      const chrTime1 = ChrTime.createFromHHmmString('23:55');
      const chrTime2 = ChrTime.createFromHHmmString('23:55');
      expect(chrTime1.equals(chrTime2)).toBeTruthy();
    });
    it('should tell us that "00:10" is not equal to than "00:08"', () => {
      const chrTime1 = ChrTime.createFromHHmmString('00:10');
      const chrTime2 = ChrTime.createFromHHmmString('00:08');
      expect(chrTime1.equals(chrTime2)).toBeFalsy();
    });
  });

  describe('isValid', () => {
    // valid
    it('should tell us that "00:00" is a valid time', () => {
      const chrTime = ChrTime.createFromHHmmString('00:00');
      expect(chrTime.isValid).toBeTruthy();
    });
    it('should tell us that "12:34" is a valid time', () => {
      const chrTime = ChrTime.createFromHHmmString('12:34');
      expect(chrTime.isValid).toBeTruthy();
    });
    it('should tell us that "23:59" is a valid time', () => {
      const chrTime = ChrTime.createFromHHmmString('23:59');
      expect(chrTime.isValid).toBeTruthy();
    });

    // invalid
    it('should tell us that "24:00" is not a valid time', () => {
      const chrTime = ChrTime.createFromHHmmString('24:00', true);
      expect(chrTime.isValid).toBeFalse();
    });
    it('should tell us that "10:60" is 11:00', () => {
      const chrTime = ChrTime.createFromHHmmString('10:60', true);
      expect(chrTime.hours).toEqual(11);
    });
    it('should tell us that "27:35", a valid extended time, is not a valid time', () => {
      const chrTime = ChrTime.createFromHHmmString('27:35', true);
      expect(chrTime.isValid).toBeFalse();
    });

    it('should tell us that "27:35", a valid extended time, is not a valid time', () => {
      const chrTime = ChrTime.createFromHHmmString('27:35', false);
      expect(chrTime).toBeNull();
    });
  });

  // isSmallerThanOrEquals

  /**********************************
   * statics
   **********************************/
  describe('createFromHoursMinutes', () => {
    it('should be createable by constructor with hour and minute', () => {
      chrTime = ChrTime.createFromHoursMinutes(6, 20);
      expect(chrTime.hours).toEqual(6);
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should be creatable with zero hours', () => {
      chrTime = ChrTime.createFromHoursMinutes(0, 20);
      expect(chrTime.hours).toEqual(0);
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should be creatable with negative hours and turn them to positive ', () => {
      chrTime = ChrTime.createFromHoursMinutes(-10, 20);
      expect(chrTime.hours).toEqual(10);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should make time invalid if hours exceed 23 hours (if permissive)', () => {
      chrTime = ChrTime.createFromHoursMinutes(25, 20, true);
      expect(chrTime.hours).toEqual(25);
      expect(chrTime.isValid).toBeFalse();
    });

    it('should make time object with changed hours if minutes exceed 59 minutes (if overflow)', () => {
      chrTime = ChrTime.createFromHoursMinutes(20, 60, true);
      expect(chrTime.hours).toEqual(21);
      expect(chrTime.minutes).toEqual(0);
      expect(chrTime.isValid).toBeTruthy();
    });

    it('should make time object with changed hours if minutes exceed 59 minutes', () => {
      chrTime = ChrTime.createFromHoursMinutes(0, 99, true);
      expect(chrTime.hours).toEqual(1);
      expect(chrTime.minutes).toEqual(39);
      expect(chrTime.isValid).toBeTruthy();
    });
  });

  describe('removeNonTimeChars', () => {
    it('should remove everything but numbers and separators', () => {
      expect(ChrTime._removeNonTimeChars('abcdefg1233456789')).toEqual(
        '1233456789'
      );
      expect(ChrTime._removeNonTimeChars('123abc.,;:(°456%&+')).toEqual(
        '123.,;:456'
      );
      expect(ChrTime._removeNonTimeChars('a,b,e,r,')).toEqual(',,,,');
    });
    it('should return empty for null or similar', () => {
      expect(ChrTime._removeNonTimeChars(null)).toEqual('');
      expect(ChrTime._removeNonTimeChars(undefined)).toEqual('');
      expect(ChrTime._removeNonTimeChars('')).toEqual('');
    });
  });

  describe('injectMissingSeparator', () => {
    it('should inject no separator if there is one', () => {
      expect(ChrTime._injectMissingSeparator('10:20')).toEqual('10:20');
      expect(ChrTime._injectMissingSeparator(':1020')).toEqual(':1020');
      expect(ChrTime._injectMissingSeparator('10:20:')).toEqual('10:20:');
    });
    it('should inject a separator if there is no one', () => {
      expect(ChrTime._injectMissingSeparator('abc')).toEqual('ab:c');
      expect(ChrTime._injectMissingSeparator('1234')).toEqual('12:34');
      expect(ChrTime._injectMissingSeparator('12')).toEqual('12:');
      expect(ChrTime._injectMissingSeparator('1')).toEqual('1:');
    });
  });

  describe('getNormalizedTimeString', () => {
    it('should replace separators to colon and inject one if separtor is missing', () => {
      expect(ChrTime._getNormalizedTimeString('12.30')).toEqual('12:30');
      expect(ChrTime._getNormalizedTimeString(';23')).toEqual(':23');
      expect(ChrTime._getNormalizedTimeString('23,')).toEqual('23:');
    });
    it('should replace separators to colon and inject one if separtor is missing', () => {
      expect(ChrTime._getNormalizedTimeString('23')).toEqual('23:');
      expect(ChrTime._getNormalizedTimeString('2345')).toEqual('23:45');
      expect(ChrTime._getNormalizedTimeString('1')).toEqual('1:');
    });
    it('should remove everything but numbers and separators', () => {
      expect(ChrTime._getNormalizedTimeString('ab1b2.c8d8')).toEqual('12:88');
      expect(ChrTime._getNormalizedTimeString('123abc.,;:(°456%&+')).toEqual(
        '123::::456'
      );
    });
  });

  describe('createFromHHmmString', () => {
    /**
     * Parses any string in the format 'hh:mm'
     * '10:65'=> '10:00'
     * '99:99'=> '00:00' // hours and minutes out of bound
     * '1:30' => '01:30'
     * '1:3' => '01:30'
     * '1:7' => '01:00' // minutes out of bound
     * '12' => '12:00'
     * '1.' => '01:00'
     * '1234 => '12:34'
     * '123456 => '12:34'
     * '.3' => '00:30'
     * ':' => '00:00'
     */
    it('should parse a stardard hh:mm string', () => {
      expect(ChrTime.createFromHHmmString('10:30').hours).toEqual(10);
      expect(ChrTime.createFromHHmmString('10:30').minutes).toEqual(30);
    });

    it('should parse a stardard 00:00 string', () => {
      expect(ChrTime.createFromHHmmString('00:00').hours).toEqual(0);
      expect(ChrTime.createFromHHmmString('00:00').minutes).toEqual(0);
    });

    it('should parse hours and minutes lower than 10', () => {
      expect(ChrTime.createFromHHmmString('09:04').hours).toEqual(9);
      expect(ChrTime.createFromHHmmString('09:04').minutes).toEqual(4);
    });

    it('should parse one digits hours as simple hours', () => {
      expect(ChrTime.createFromHHmmString('5:5').hours).toEqual(5);
    });

    it('should parse one digits minutes as 10 times the minutes', () => {
      expect(ChrTime.createFromHHmmString('5:5').minutes).toEqual(50);
      expect(ChrTime.createFromHHmmString('5:3').minutes).toEqual(30);
    });
    // illigal stuff
    // it('should parse hours that exceed the legal limat as zero', () => {
    //   expect(ChrTime.createFromHHmmString('24:44').hours).toEqual(0);
    //   expect(ChrTime.createFromHHmmString('99:55').hours).toEqual(0);
    // });
    // it('should parse hours that exceed the legal limat as zero', () => {
    //   expect(ChrTime.createFromHHmmString('11:60').minutes).toEqual(0);
    //   expect(ChrTime.createFromHHmmString('11:99').minutes).toEqual(0);
    // });
    it('should parse hours that are too big as null', () => {
      expect(ChrTime.createFromHHmmString('24:44')).toBeNull();
      expect(ChrTime.createFromHHmmString('99:55')).toBeNull();
    });
    it('should parse minutes that are too big as modula 60', () => {
      expect(ChrTime.createFromHHmmString('11:60').minutes).toEqual(0);
      expect(ChrTime.createFromHHmmString('11:60').hours).toEqual(12);
    });
    // permissive mode
    it('should parse hours that are too big as invalid time objects, in permissive mode.', () => {
      expect(ChrTime.createFromHHmmString('24:44', true).isValid).toBeFalse();
      expect(ChrTime.createFromHHmmString('99:55', true).isValid).toBeFalse();
    });
    it('should parse minutes that are too big as mod 60, in permissive mode.', () => {
      expect(ChrTime.createFromHHmmString('11:60', true).minutes).toEqual(0);
      expect(ChrTime.createFromHHmmString('11:99', true).minutes).toEqual(39);
      expect(ChrTime.createFromHHmmString('11:99', true).isValid).toBeTruthy();
    });
  });

  describe('createFromString', () => {
    it('should parse a stardard hh:mm string', () => {
      expect(ChrTime.createFromString('10:30').hours).toEqual(10);
      expect(ChrTime.createFromString('10.30').minutes).toEqual(30);
    });

    it('should parse a stardard 00:00 string', () => {
      expect(ChrTime.createFromString('00:00').hours).toEqual(0);
      expect(ChrTime.createFromString('00;00').minutes).toEqual(0);
    });

    it('should parse hours and minutes lower than 10', () => {
      expect(ChrTime.createFromString('09,04').hours).toEqual(9);
      expect(ChrTime.createFromString('09,04').minutes).toEqual(4);
    });

    it('should parse one digits hours as simple hours', () => {
      expect(ChrTime.createFromString('5:5').hours).toEqual(5);
    });

    it('should parse one digits minutes as 10 times the minutes', () => {
      expect(ChrTime.createFromString('5:5').minutes).toEqual(50);
      expect(ChrTime.createFromString('5:3').minutes).toEqual(30);
    });

    it('should parse missing hours as zero', () => {
      expect(ChrTime.createFromString(':10').hours).toEqual(0);
    });

    it('should parse missing minutes as zero', () => {
      expect(ChrTime.createFromString('5:').minutes).toEqual(0);
    });

    it('should parse lone separtor as zero:zero ', () => {
      expect(ChrTime.createFromString(':').hours).toEqual(0);
      expect(ChrTime.createFromString(':').minutes).toEqual(0);
    });

    it('should parse a number as hours ', () => {
      expect(ChrTime.createFromString('12').hours).toEqual(12);
    });

    it('should parse a long number without separator, as if there was one ', () => {
      expect(ChrTime.createFromString('1234').hours).toEqual(12);
      expect(ChrTime.createFromString('1234').minutes).toEqual(34);
    });

    it('should parse a long number without separator, as if there was one and cut away the rest', () => {
      expect(ChrTime.createFromString('123456').hours).toEqual(12);
      expect(ChrTime.createFromString('1234').minutes).toEqual(34);
    });

    // illigal stuff
    it('should parse hours that are too big as null', () => {
      expect(ChrTime.createFromString('24:44')).toBeNull();
      expect(ChrTime.createFromString('99:55')).toBeNull();
    });
    it('should parse minutes that are too big as modula 60', () => {
      expect(ChrTime.createFromString('11:70').minutes).toEqual(10);
      expect(ChrTime.createFromString('11:70').hours).toEqual(12);
    });
  });

  describe('createFromMinutes', () => {
    it('should create a 0.0  if we send 0 minutes.', () => {
      const time = ChrTime.createFromMinutes(0);
      expect(time.hours).toEqual(0);
      expect(time.minutes).toEqual(0);
      expect(time.isValid).toBeTrue();
    });

    it('should create the biggest time object.', () => {
      const time = ChrTime.createFromMinutes(1439);
      expect(time.hours).toEqual(23);
      expect(time.minutes).toEqual(59);
      expect(time.isValid).toBeTrue();
    });

    it('should create an invalid time object if the minutes exceed the legal range.', () => {
      const time = ChrTime.createFromMinutes(1440, true);
      expect(time.hours).toEqual(24);
      expect(time.minutes).toEqual(0);
      expect(time.isValid).toBeFalse();
    });
  });

  describe('compare', () => {
    it('should compare times with 0 minutes as 0 difference.', () => {
      const time1 = ChrTime.createFromMinutes(0);
      const time2 = ChrTime.createFromMinutes(0);
      expect(ChrTime.compare(time1, time2)).toEqual(0);
    });
    it('should return less than 0 if first time is smaller than second time.', () => {
      const time1 = ChrTime.createFromMinutes(20);
      const time2 = ChrTime.createFromMinutes(30);
      expect(ChrTime.compare(time1, time2)).toBeLessThan(0);
    });
    it('should return greater than 0 if first time is greater than second time.', () => {
      const time1 = ChrTime.createFromMinutes(20);
      const time2 = ChrTime.createFromMinutes(10);
      expect(ChrTime.compare(time1, time2)).toBeGreaterThan(0);
    });
  });
  //
});
