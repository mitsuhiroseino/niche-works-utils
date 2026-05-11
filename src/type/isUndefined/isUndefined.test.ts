import isUndefined from './isUndefined';

describe('isUndefined', () => {
  it('undefined', () => {
    const result = isUndefined(undefined);
    expect(result).toBe(true);
  });

  it('null', () => {
    const result = isUndefined(null);
    expect(result).toBe(false);
  });
});
