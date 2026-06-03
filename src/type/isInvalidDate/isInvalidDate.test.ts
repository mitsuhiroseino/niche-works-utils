import isInvalidDate from './isInvalidDate';

describe('isInvalidDate', () => {
  it('Invalid Dateはtrue', () => {
    expect(isInvalidDate(new Date('invalid'))).toBe(true);
  });

  it('有効なDateはfalse', () => {
    expect(isInvalidDate(new Date())).toBe(false);
    expect(isInvalidDate(new Date('2024-01-01'))).toBe(false);
  });

  it('文字列はfalse', () => {
    expect(isInvalidDate('invalid')).toBe(false);
  });

  it('nullはfalse', () => {
    expect(isInvalidDate(null)).toBe(false);
  });

  it('undefinedはfalse', () => {
    expect(isInvalidDate(undefined)).toBe(false);
  });
});
