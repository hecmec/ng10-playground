import { ChrTime } from "./chr-time.class";

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
      expect(ChrTime.removeNonTimeChars('abcdefg1233456789')).toEqual('1233456789');
      expect(ChrTime.removeNonTimeChars('123abc.,;:(°456%&+')).toEqual('123.,;:456');
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
  
  // getNormalizedTimeString

  // createFromString

  // createFromHHmmString

  // it('#getValue should return real value', () => {
  //   // Arrange
  //   chrTime = new ChrTime(6, 20);
  //   // Act
  //   const ret = chrTime.hours
  //   // Assert
  //   expect(ret.length).toBeLessThanOrEqual(20);
  // });
  // it('#getObservableValue should return value from observable',
  //   (done: DoneFn) => {
  //     service.getObservableValue().subscribe(value => {
  //       expect(value).toBe('observable value');
  //       done();
  //     });
  //   });

  // it('#getPromiseValue should return value from a promise',
  //   (done: DoneFn) => {
  //     service.getPromiseValue().then(value => {
  //       expect(value).toBe('promise value');
  //       done();
  //     });
  //   });
});