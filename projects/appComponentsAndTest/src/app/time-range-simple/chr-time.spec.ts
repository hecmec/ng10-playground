import { Times } from '../times';
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
      chrTime = chrTime.addMinutes(Times.minutesInDay);
      expect(chrTime.toHoursMinutesString()).toEqual('30:20');
      expect(chrTime.isValid).toBeFalse();
    });
  });

  //addMinutes

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

    it('should be creatable with negative hours and turn them to positive', () => {
      chrTime = ChrTime.createFromHoursMinutes(-10, 20);
      expect(chrTime.hours).toEqual(10);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should make time invalid if hours exceed 23 hours', () => {
      chrTime = ChrTime.createFromHoursMinutes(25, 20);
      expect(chrTime.hours).toEqual(25);
      expect(chrTime.isValid).toBeFalse();
    });

    it('should make time object invalid if minutes exceed 59 minutes', () => {
      chrTime = ChrTime.createFromHoursMinutes(20, 60);
      expect(chrTime.hours).toEqual(20);
      expect(chrTime.minutes).toEqual(60);
      expect(chrTime.isValid).toBeFalse();
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
      expect(ChrTime.injectMissingSeparator('10:20')).toEqual('10:20');
      expect(ChrTime.injectMissingSeparator(':1020')).toEqual(':1020');
      expect(ChrTime.injectMissingSeparator('10:20:')).toEqual('10:20:');
    });
    it('should inject a separator if there is no one', () => {
      expect(ChrTime.injectMissingSeparator('abc')).toEqual('ab:c');
      expect(ChrTime.injectMissingSeparator('1234')).toEqual('12:34');
      expect(ChrTime.injectMissingSeparator('12')).toEqual('12:');
      expect(ChrTime.injectMissingSeparator('1')).toEqual('1:');
    });
  });

  describe('getNormalizedTimeString', () => {
    it('should replace separators to colon and inject one if separtor is missing', () => {
      expect(ChrTime.getNormalizedTimeString('12.30')).toEqual('12:30');
      expect(ChrTime.getNormalizedTimeString(';23')).toEqual(':23');
      expect(ChrTime.getNormalizedTimeString('23,')).toEqual('23:');
    });
    it('should replace separators to colon and inject one if separtor is missing', () => {
      expect(ChrTime.getNormalizedTimeString('23')).toEqual('23:');
      expect(ChrTime.getNormalizedTimeString('2345')).toEqual('23:45');
      expect(ChrTime.getNormalizedTimeString('1')).toEqual('1:');
    });
    it('should remove everything but numbers and separators', () => {
      expect(ChrTime.getNormalizedTimeString('ab1b2.c8d8')).toEqual('12:88');
      expect(ChrTime.getNormalizedTimeString('123abc.,;:(°456%&+')).toEqual(
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
    it('should parse minutes that are too big as null', () => {
      expect(ChrTime.createFromHHmmString('11:60')).toBeNull();
      expect(ChrTime.createFromHHmmString('11:99')).toBeNull();
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
    it('should parse minutes that are too big as null', () => {
      expect(ChrTime.createFromString('11:60')).toBeNull();
      expect(ChrTime.createFromString('11:99')).toBeNull();
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

    it('should create a zero time object if the minutes exceed the legal range.', () => {
      const time = ChrTime.createFromMinutes(1440);
      expect(time.hours).toEqual(24);
      expect(time.minutes).toEqual(0);
      expect(time.isValid).toBeFalse();
    });
  });
});
