import isNumberLike from './isNumberLike';

describe('isNumberLike', () => {
  it('数値はtrue', () => {
    expect(isNumberLike(42)).toBe(true);
    expect(isNumberLike(0)).toBe(true);
    expect(isNumberLike(-1)).toBe(true);
  });

  it('数値の文字列はtrue', () => {
    expect(isNumberLike('42')).toBe(true);
    expect(isNumberLike('3.14')).toBe(true);
    expect(isNumberLike('-5')).toBe(true);
  });

  it('空文字はfalse', () => {
    expect(isNumberLike('')).toBe(false);
  });

  it('nullはfalse', () => {
    expect(isNumberLike(null)).toBe(false);
  });

  it('undefinedはfalse', () => {
    expect(isNumberLike(undefined)).toBe(false);
  });

  it('trueはfalse', () => {
    expect(isNumberLike(true)).toBe(false);
  });

  it('falseはfalse', () => {
    expect(isNumberLike(false)).toBe(false);
  });

  it('数値でない文字列はfalse', () => {
    expect(isNumberLike('hello')).toBe(false);
    expect(isNumberLike('123abc')).toBe(false);
  });

  it('NaN文字列はfalse', () => {
    expect(isNumberLike('NaN')).toBe(false);
  });

  it('NaN数値はfalse', () => {
    expect(isNumberLike(NaN)).toBe(false);
  });
});
