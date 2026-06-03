import isValidNumber from './isValidNumber';

describe('isValidNumber', () => {
  it('整数はtrue', () => {
    expect(isValidNumber(42)).toBe(true);
  });

  it('0はtrue', () => {
    expect(isValidNumber(0)).toBe(true);
  });

  it('小数はtrue', () => {
    expect(isValidNumber(3.14)).toBe(true);
  });

  it('負の数はtrue', () => {
    expect(isValidNumber(-5)).toBe(true);
  });

  it('NaNはfalse', () => {
    expect(isValidNumber(NaN)).toBe(false);
  });

  it('Infinityはデフォルトではfalse', () => {
    expect(isValidNumber(Infinity)).toBe(false);
  });

  it('-Infinityはデフォルトではfalse', () => {
    expect(isValidNumber(-Infinity)).toBe(false);
  });

  it('allowInfinity: true でInfinityを許容', () => {
    expect(isValidNumber(Infinity, { allowInfinity: true })).toBe(true);
    expect(isValidNumber(-Infinity, { allowInfinity: true })).toBe(true);
  });

  it('文字列はfalse', () => {
    expect(isValidNumber('42')).toBe(false);
  });

  it('nullはfalse', () => {
    expect(isValidNumber(null)).toBe(false);
  });

  it('undefinedはfalse', () => {
    expect(isValidNumber(undefined)).toBe(false);
  });
});
