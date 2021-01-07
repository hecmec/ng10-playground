import { Times } from '../times';
import { ChrTimeExtended } from './chr-time-extended.class';

describe('ChrTimeExtended', () => {
  let chrTime: ChrTimeExtended;
  // beforeEach(() => { chrTime = new chrTime(); });

  //toHoursMinutesString

  //getAsMinutes

  //addMinutes

  /***********************************
   * STATICS
   *********************************/
  describe('createFromHoursMinutes', () => {
    it('should be createable by constructor with hour and minute', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(6, 20);
      expect(chrTime.hours).toEqual(6);
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should be createable by constructor with hour and minute, even for hours between 24 and 35', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(35, 20);
      expect(chrTime.hours).toEqual(11);
      expect(chrTime.isNextDay).toBeTrue();
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should be creatable with zero hours', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(0, 20);
      expect(chrTime.hours).toEqual(0);
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should be creatable with negative hours and turn them to positive', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(-10, 20);
      expect(chrTime.hours).toEqual(10);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should make extended time valid for 35:59 as biggest extended time', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(35, 59);
      expect(chrTime.hours).toEqual(11);
      expect(chrTime.minutes).toEqual(59);
      expect(chrTime.isNextDay).toBeTrue();
      expect(chrTime.isValid).toBeTrue();
    });

    it('should make extended time invalid for 36:00', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(36, 0);
      expect(chrTime.hours).toEqual(12);
      expect(chrTime.minutes).toEqual(0);
      expect(chrTime.isNextDay).toBeTrue();
      expect(chrTime.isValid).toBeFalse();
    });

    it('should make extended time invalid if hours exceed 35 hours', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(36, 20);
      expect(chrTime.hours).toEqual(12);
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isNextDay).toBeTrue();
      expect(chrTime.isValid).toBeFalse();
    });

    it('should parse extended time  as mod 60', () => {
      chrTime = ChrTimeExtended.createFromHoursMinutes(20, 60);
      expect(chrTime.hours).toEqual(21);
      expect(chrTime.minutes).toEqual(0);
      expect(chrTime.isValid).toBeTruthy();

      chrTime = ChrTimeExtended.createFromHoursMinutes(10, 200);
      expect(chrTime.hours).toEqual(13);
      expect(chrTime.minutes).toEqual(20);
      expect(chrTime.isValid).toBeTruthy();
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
      chrTime = ChrTimeExtended.createFromHHmmString('10:30');
      expect(chrTime.hours).toEqual(10);
      expect(chrTime.minutes).toEqual(30);
    });

    it('should parse an extended hh:mm string, between 24 and 36, and set the extended flag.', () => {
      chrTime = ChrTimeExtended.createFromHHmmString('32:30');
      expect(chrTime.hours).toEqual(8);
      expect(chrTime.isNextDay).toBeTruthy();
    });

    it('should parse a stardard 00:00 string', () => {
      chrTime = ChrTimeExtended.createFromHHmmString('00:00');
      expect(chrTime.hours).toEqual(0);
      expect(chrTime.minutes).toEqual(0);
    });

    it('should parse hours and minutes lower than 10', () => {
      chrTime = ChrTimeExtended.createFromHHmmString('09:04');
      expect(chrTime.hours).toEqual(9);
      expect(chrTime.minutes).toEqual(4);
    });

    it('should parse one digits hours as simple hours', () => {
      expect(ChrTimeExtended.createFromHHmmString('5:5').hours).toEqual(5);
    });
    it('should parse one digits minutes as 10 times the minutes', () => {
      expect(ChrTimeExtended.createFromHHmmString('5:5').minutes).toEqual(50);
      expect(ChrTimeExtended.createFromHHmmString('5:3').minutes).toEqual(30);
    });

    // illigal stuff
    it('should parse hours that exceed the legal limit and make object invalid', () => {
      expect(
        ChrTimeExtended.createFromHHmmString('36:44', true).isValid
      ).toBeFalse();
      expect(
        ChrTimeExtended.createFromHHmmString('99:55', true).isValid
      ).toBeFalse();
    });
    it('should parse minutes  that exceed the legal limat as modula 60 ', () => {
      expect(
        ChrTimeExtended.createFromHHmmString('11:70', true).isValid
      ).toBeTruthy();
      expect(
        ChrTimeExtended.createFromHHmmString('35:99', true).isValid
      ).toBeFalse();
    });
  });

  describe('createFromString', () => {
    it('should parse a stardard hh:mm string', () => {
      expect(ChrTimeExtended.createFromString('10:30').hours).toEqual(10);
      expect(ChrTimeExtended.createFromString('10.30').minutes).toEqual(30);
    });

    it('should parse a stardard 00:00 string', () => {
      expect(ChrTimeExtended.createFromString('00:00').hours).toEqual(0);
      expect(ChrTimeExtended.createFromString('00;00').minutes).toEqual(0);
    });

    it('should parse hours and minutes lower than 10', () => {
      expect(ChrTimeExtended.createFromString('09,04').hours).toEqual(9);
      expect(ChrTimeExtended.createFromString('09,04').minutes).toEqual(4);
    });

    it('should parse one digits hours as simple hours', () => {
      expect(ChrTimeExtended.createFromString('5:5').hours).toEqual(5);
    });

    it('should parse one digits minutes as 10 times the minutes', () => {
      expect(ChrTimeExtended.createFromString('5:5').minutes).toEqual(50);
      expect(ChrTimeExtended.createFromString('5:3').minutes).toEqual(30);
    });

    it('should parse missing hours as zero', () => {
      expect(ChrTimeExtended.createFromString(':10').hours).toEqual(0);
    });

    it('should parse missing minutes as zero', () => {
      expect(ChrTimeExtended.createFromString('5:').minutes).toEqual(0);
    });

    it('should parse lone separtor as zero:zero ', () => {
      expect(ChrTimeExtended.createFromString(':').hours).toEqual(0);
      expect(ChrTimeExtended.createFromString(':').minutes).toEqual(0);
    });

    it('should parse a number as hours ', () => {
      expect(ChrTimeExtended.createFromString('12').hours).toEqual(12);
      expect(ChrTimeExtended.createFromString('25').minutes).toEqual(0);
      expect(ChrTimeExtended.createFromString('25').isNextDay).toBeTruthy();
    });

    it('should parse a long number without separator, as if there was one ', () => {
      expect(ChrTimeExtended.createFromString('1234').hours).toEqual(12);
      expect(ChrTimeExtended.createFromString('1234').minutes).toEqual(34);
    });

    it('should parse a long number without separator, as if there was one and cut away the rest', () => {
      expect(ChrTimeExtended.createFromString('123456').hours).toEqual(12);
      expect(ChrTimeExtended.createFromString('1234').minutes).toEqual(34);
    });

    // illigal stuff
    it('should parse hours that exceed the legal limit, but mark object as invalid', () => {
      chrTime = ChrTimeExtended.createFromString('36:44', true);
      expect(chrTime.hours).toEqual(12);
      expect(chrTime.isValid).toBeFalse();

      chrTime = ChrTimeExtended.createFromString('75:55', true);
      // it will try to go to next day, so hours are minus 24h
      expect(chrTime.hours).toEqual(51);
      expect(chrTime.isValid).toBeFalse();
    });
    it('should parse minutes that exceed the legal limit', () => {
      chrTime = ChrTimeExtended.createFromString('11:60', true);
      expect(chrTime.minutes).toEqual(0);
      expect(chrTime.isValid).toBeTruthy();
    });
  });

  describe('getAsMinutes', () => {
    it('should get minutes for standard time.', () => {
      expect(
        ChrTimeExtended.createFromMinutes(
          Times.minutesInDay - 100
        ).getAsMinutes()
      ).toEqual(Times.minutesInDay - 100);
    });
    it('should get minutes for extended time.', () => {
      expect(
        ChrTimeExtended.createFromMinutes(
          Times.minutesInDay + 300
        ).getAsMinutes()
      ).toEqual(Times.minutesInDay + 300);
    });
    it('should get minutes for extended time.', () => {
      expect(ChrTimeExtended.createFromString('30:30').getAsMinutes()).toEqual(
        Times.minutesInDay + 6 * 60 + 30
      );
    });
  });

  describe('createFromMinutes', () => {
    it('should create a 0.0  if we send 0 minutes.', () => {
      expect(ChrTimeExtended.createFromMinutes(0).hours).toEqual(0);
      expect(ChrTimeExtended.createFromMinutes(0).minutes).toEqual(0);
    });

    it('should create the biggest time object.', () => {
      chrTime = ChrTimeExtended.createFromMinutes(1439);
      expect(chrTime.hours).toEqual(23);
      expect(chrTime.minutes).toEqual(59);
      expect(chrTime.isValid).toBeTrue();
    });

    it('should create a time object that is on next day if the minutes exceed the limit of one day.', () => {
      ChrTimeExtended;
      chrTime = ChrTimeExtended.createFromMinutes(1440);
      expect(chrTime.hours).toEqual(0);
      expect(chrTime.minutes).toEqual(0);
      expect(chrTime.isNextDay).toBeTrue();
      expect(chrTime.isValid).toBeTrue();
    });
  });
});
