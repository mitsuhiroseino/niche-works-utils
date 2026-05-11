import isPresent from './isPresent';

describe('isPresent', () => {
  it('undefined', () => {
    const result = isPresent(undefined);
    expect(result).toBe(false);
  });

  it('null', () => {
    const result = isPresent(null);
    expect(result).toBe(false);
  });

  it('空文字列', () => {
    const result = isPresent('');
    expect(result).toBe(true);
  });
});
