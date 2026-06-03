import isLooseEqual from './isLooseEqual';

describe('isLooseEqual', () => {
  it('同じ文字列はtrueを返す', () => {
    expect(isLooseEqual('hello', 'hello')).toBe(true);
  });

  it('異なる文字列はfalseを返す', () => {
    expect(isLooseEqual('hello', 'world')).toBe(false);
  });

  it('normalizeStringで正規化した結果が一致すればtrue', () => {
    expect(isLooseEqual('ＡＢＣＤ', 'ABCD', { ignoreCompatibility: true })).toBe(true);
  });

  it('大文字・小文字を無視する', () => {
    expect(isLooseEqual('Hello', 'hello', { ignoreCase: true })).toBe(true);
  });

  it('noNormalizationForValue1: trueでvalue1は正規化しない', () => {
    expect(isLooseEqual('Hello', 'hello', { ignoreCase: true, noNormalizationForValue1: true })).toBe(false);
  });

  it('noNormalizationForValue2: trueでvalue2は正規化しない', () => {
    expect(isLooseEqual('hello', 'Hello', { ignoreCase: true, noNormalizationForValue2: true })).toBe(false);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(isLooseEqual.dataLast('hello')('hello')).toBe(true);
    });
  });
});
