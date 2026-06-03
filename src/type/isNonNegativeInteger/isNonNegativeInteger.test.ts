import isNonNegativeInteger from './isNonNegativeInteger';

describe('isNonNegativeInteger', () => {
  it('0はtrue', () => {
    expect(isNonNegativeInteger(0)).toBe(true);
  });

  it('正の整数はtrue', () => {
    expect(isNonNegativeInteger(1)).toBe(true);
    expect(isNonNegativeInteger(100)).toBe(true);
  });

  it('負の整数はfalse', () => {
    expect(isNonNegativeInteger(-1)).toBe(false);
  });

  it('小数はfalse', () => {
    expect(isNonNegativeInteger(1.5)).toBe(false);
  });

  it('NaNはfalse', () => {
    expect(isNonNegativeInteger(NaN)).toBe(false);
  });

  it('Infinityはfalse', () => {
    expect(isNonNegativeInteger(Infinity)).toBe(false);
  });

  it('文字列はfalse', () => {
    expect(isNonNegativeInteger('1')).toBe(false);
  });

  it('nullはfalse', () => {
    expect(isNonNegativeInteger(null)).toBe(false);
  });
});
