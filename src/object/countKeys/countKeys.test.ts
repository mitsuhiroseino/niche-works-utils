import countKeys from './countKeys';

describe('countKeys', () => {
  it('空オブジェクト', () => {
    expect(countKeys({})).toBe(0);
  });

  it('キーが1つ', () => {
    expect(countKeys({ a: 1 })).toBe(1);
  });

  it('複数のキー', () => {
    expect(countKeys({ a: 1, b: 2, c: 3 })).toBe(3);
  });

  it('nullは0', () => {
    expect(countKeys(null)).toBe(0);
  });

  it('undefinedは0', () => {
    expect(countKeys(undefined)).toBe(0);
  });

  it('数値は0', () => {
    expect(countKeys(42)).toBe(0);
  });

  it('文字列は0', () => {
    expect(countKeys('hello')).toBe(0);
  });

  it('配列', () => {
    expect(countKeys([1, 2, 3])).toBe(3);
  });
});
