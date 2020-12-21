import { ChrTimeExtended } from './chr-time-extended.class';

describe('ChrTimeExtended', () => {
  let chrTime: ChrTimeExtended;
  // beforeEach(() => { chrTime = new chrTime(); });

  describe('creation by constructor', () => {
    it('should be createable by constructor with hour and minute', () => {
      chrTime = new ChrTimeExtended(6, 20);
      expect(chrTime.hours).toEqual(6);
      expect(chrTime.minutes).toEqual(20);
    });

    it('should be createable by constructor with hour and minute, even for hours between 24 and 35', () => {
      chrTime = new ChrTimeExtended(11, 20, true);
      expect(chrTime.hours).toEqual(11);
      expect(chrTime.isNextDay).toBeTruthy();
      expect(chrTime.minutes).toEqual(20);
    });

    it('should be creatable with zero hours', () => {
      chrTime = new ChrTimeExtended(0, 20);
      expect(chrTime.hours).toEqual(0);
      expect(chrTime.minutes).toEqual(20);
    });

    it('should be creatable with negative hours and turn them to positive', () => {
      chrTime = new ChrTimeExtended(-10, 20);
      expect(chrTime.hours).toEqual(10);
    });

    it('should set hours to zero if they exceed 35 hours', () => {
      chrTime = new ChrTimeExtended(32, 20);
      expect(chrTime.hours).toEqual(0);
      expect(chrTime.minutes).toEqual(20);
    });

    it('should set minutes to zero if they exceed 59 minutes', () => {
      chrTime = new ChrTimeExtended(20, 60);
      expect(chrTime.hours).toEqual(20);
      expect(chrTime.minutes).toEqual(0);
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
      expect(ChrTimeExtended.createFromHHmmString('10:30').hours).toEqual(10);
      expect(ChrTimeExtended.createFromHHmmString('10:30').minutes).toEqual(30);
    });

    it('should parse an extended hh:mm string, between 24 and 36, and set the extended flag.', () => {
      expect(ChrTimeExtended.createFromHHmmString('32:30').hours).toEqual(8);
      expect(ChrTimeExtended.createFromHHmmString('32:30').isNextDay).toBeTruthy();
    });

    it('should parse a stardard 00:00 string', () => {
      expect(ChrTimeExtended.createFromHHmmString('00:00').hours).toEqual(0);
      expect(ChrTimeExtended.createFromHHmmString('00:00').minutes).toEqual(0);
    });
    
    it('should parse hours and minutes lower than 10', () => {
      expect(ChrTimeExtended.createFromHHmmString('09:04').hours).toEqual(9);
      expect(ChrTimeExtended.createFromHHmmString('09:04').minutes).toEqual(4);
    });

    it('should parse one digits hours as simple hours', () => {
      expect(ChrTimeExtended.createFromHHmmString('5:5').hours).toEqual(5);
    });
    it('should parse one digits minutes as 10 times the minutes', () => {
      expect(ChrTimeExtended.createFromHHmmString('5:5').minutes).toEqual(50);
      expect(ChrTimeExtended.createFromHHmmString('5:3').minutes).toEqual(30);
    });

    // illigal stuff
    it('should parse hours that exceed the legal limat as zero', () => {
      expect(ChrTimeExtended.createFromHHmmString('36:44')).toBeNull();
      expect(ChrTimeExtended.createFromHHmmString('99:55')).toBeNull();
    });
    it('should parse hours that exceed the legal limat as zero', () => {
      expect(ChrTimeExtended.createFromHHmmString('11:60')).toBeNull();
      expect(ChrTimeExtended.createFromHHmmString('11:99')).toBeNull();
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
    it('should parse hours that exceed the legal limat as zero', () => {
      expect(ChrTimeExtended.createFromString('36:44')).toBeNull();
      expect(ChrTimeExtended.createFromString('99:55')).toBeNull();
    });
    it('should parse hours that exceed the legal limat as zero', () => {
      expect(ChrTimeExtended.createFromString('11:60')).toBeNull();
      expect(ChrTimeExtended.createFromString('11:99')).toBeNull();
    });
  })

  describe('createFromMinutes', () => {
    it('should create a 0.0  if we send 0 minutes.', () => {
      expect(ChrTimeExtended.createFromMinutes(0).hours).toEqual(0);
      expect(ChrTimeExtended.createFromMinutes(0).minutes).toEqual(0);
    });

    it('should create the biggest time object.', () => {
      expect(ChrTimeExtended.createFromMinutes(1439).hours).toEqual(23);
      expect(ChrTimeExtended.createFromMinutes(1439).minutes).toEqual(59);
    });

    it('should create a zero time object if the minutes exceed the legal range.', () => {
      expect(ChrTimeExtended.createFromMinutes(1440).hours).toEqual(0);
      expect(ChrTimeExtended.createFromMinutes(1440).minutes).toEqual(0);
    });

  })


});
