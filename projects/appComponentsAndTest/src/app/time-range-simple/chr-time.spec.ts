import { ChrTime } from './chr-time.class';

describe('ChrTime', () => {
  let chrTime: ChrTime;
  // beforeEach(() => { chrTime = new chrTime(); });

  describe('creation by constructor', () => {
    it('should be createable by constructor with hour and minute', () => {
      chrTime = new ChrTime(6, 20);
      expect(chrTime.hours).toEqual(6);
      expect(chrTime.minutes).toEqual(20);
    });

    it('should be creatable with zero hours', () => {
      chrTime = new ChrTime(0, 20);
      expect(chrTime.hours).toEqual(0);
      expect(chrTime.minutes).toEqual(20);
    });

    it('should be creatable with negative hours and turn them to positive', () => {
      chrTime = new ChrTime(-10, 20);
      expect(chrTime.hours).toEqual(10);
    });

    it('should set hours to zero if they exceed 23 hours', () => {
      chrTime = new ChrTime(25, 20);
      expect(chrTime.hours).toEqual(0);
    });

    it('should set minutes to zero if they exceed 59 minutes', () => {
      chrTime = new ChrTime(20, 60);
      expect(chrTime.hours).toEqual(20);
      expect(chrTime.minutes).toEqual(0);
    });
  });

  describe('removeNonTimeChars', () => {
    it('should remove everything but numbers and separators', () => {
      expect(ChrTime.removeNonTimeChars('abcdefg1233456789')).toEqual(
        '1233456789'
      );
      expect(ChrTime.removeNonTimeChars('123abc.,;:(°456%&+')).toEqual(
        '123.,;:456'
      );
      expect(ChrTime.removeNonTimeChars('a,b,e,r,')).toEqual(',,,,');
    });
    it('should return empty for null or similar', () => {
      expect(ChrTime.removeNonTimeChars(null)).toEqual('');
      expect(ChrTime.removeNonTimeChars(undefined)).toEqual('');
      expect(ChrTime.removeNonTimeChars('')).toEqual('');
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
  })

  describe('createFromMinutes', () => {
    it('should create a 0.0  if we send 0 minutes.', () => {
      expect(ChrTime.createFromMinutes(0).hours).toEqual(0);
      expect(ChrTime.createFromMinutes(0).minutes).toEqual(0);
    });

    it('should create the biggest time object.', () => {
      expect(ChrTime.createFromMinutes(1439).hours).toEqual(23);
      expect(ChrTime.createFromMinutes(1439).minutes).toEqual(59);
    });

    it('should create a zero time object if the minutes exceed the legal range.', () => {
      expect(ChrTime.createFromMinutes(1440).hours).toEqual(0);
      expect(ChrTime.createFromMinutes(1440).minutes).toEqual(0);
    });

  })


});
