import { ChrDate } from './chr-date.class';

describe('ChrDate', () => {
  let chrDate: ChrDate;
  // beforeEach(() => { chrTime = new chrTime(); });

  describe('createFromIsoString', () => {
    it('should create a date from a standard iso date', () => {
      chrDate = ChrDate.createFromIsoString('2000-10-25');
      expect(chrDate.toFrenchDateString()).toEqual('25/10/2000');
      expect(chrDate.year).toEqual(2000);
      expect(chrDate.month).toEqual(10);
      expect(chrDate.day).toEqual(25);
    });

    it('should return null for invalid iso date strng', () => {
      chrDate = ChrDate.createFromIsoString('2000-10-33');
      expect(chrDate).toBeNull();
    });
  });

  describe('createFromFrenchDateString', () => {
    it('should create a date from a standard french date', () => {
      chrDate = ChrDate.createFromFrenchDateString('25/10/2000');
      expect(chrDate.toIsoDateString()).toEqual('2000-10-25');
    });
    it('should create a date from a french date with single digit day', () => {
      chrDate = ChrDate.createFromFrenchDateString('2/10/2000');
      expect(chrDate.toIsoDateString()).toEqual('2000-10-02');
    });
    it('should create a date from a french date with single digit month', () => {
      chrDate = ChrDate.createFromFrenchDateString('20/3/2000');
      expect(chrDate.toIsoDateString()).toEqual('2000-03-20');
    });
    it('should create a date from a french date with single digit day and month', () => {
      chrDate = ChrDate.createFromFrenchDateString('1/1/2000');
      expect(chrDate.toIsoDateString()).toEqual('2000-01-01');
    });
    it('should create a date from a french date with single digit day and month', () => {
      chrDate = ChrDate.createFromFrenchDateString('1/1/10');
      expect(chrDate.toIsoDateString()).toEqual('2010-01-01');
    });

    it('should return null for invalid iso date string', () => {
      chrDate = ChrDate.createFromFrenchDateString('33/10/2000');
      expect(chrDate).toBeNull();
    });
  });

  describe('createFromDayMonthYear', () => {});

  describe('compare', () => {});

  describe('getStandardJsDate', () => {});

  describe('year', () => {});

  describe('month', () => {});

  describe('day', () => {});

  describe('isBefore', () => {});

  describe('isSameOrBefore', () => {});

  describe('isSame', () => {});

  describe('isAfter', () => {});

  describe('isSameOrAfter', () => {});

  describe('toLocalDateString', () => {});

  describe('toFrenchDateString', () => {});

  describe('toIsoDateString', () => {});

  describe('equals', () => {});

  describe('clone', () => {});

  describe('isValid', () => {});
});
