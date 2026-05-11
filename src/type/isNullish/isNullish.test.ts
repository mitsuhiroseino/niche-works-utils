import isNullish from './isNullish';

describe('isNullish', () => {
  it('undefined', () => {
    const result = isNullish(undefined);
    expect(result).toBe(true);
  });

  it('null', () => {
    const result = isNullish(null);
    expect(result).toBe(true);
  });

  it('空文字列', () => {
    const result = isNullish('');
    expect(result).toBe(false);
  });
});
