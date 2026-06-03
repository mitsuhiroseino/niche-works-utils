import isValidDate from './isValidDate';

describe('isValidDate', () => {
  it('有効なDateはtrue', () => {
    expect(isValidDate(new Date())).toBe(true);
  });

  it('特定の日付のDateはtrue', () => {
    expect(isValidDate(new Date('2024-01-01'))).toBe(true);
  });

  it('Invalid Dateはfalse', () => {
    expect(isValidDate(new Date('invalid'))).toBe(false);
  });

  it('文字列はfalse', () => {
    expect(isValidDate('2024-01-01')).toBe(false);
  });

  it('数値はfalse', () => {
    expect(isValidDate(0)).toBe(false);
  });

  it('nullはfalse', () => {
    expect(isValidDate(null)).toBe(false);
  });

  it('undefinedはfalse', () => {
    expect(isValidDate(undefined)).toBe(false);
  });
});
