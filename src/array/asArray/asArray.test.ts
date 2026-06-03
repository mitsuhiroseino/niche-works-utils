import asArray from './asArray';

describe('asArray', () => {
  it('null', () => {
    expect(asArray(null)).toEqual([]);
  });

  it('undefined', () => {
    expect(asArray(undefined)).toEqual([]);
  });

  it('配列', () => {
    const array = [1, 2, 3];
    const result = asArray(array);
    expect(result).toEqual([1, 2, 3]);
  });

  it('配列はコピーを返す', () => {
    const array = [1, 2, 3];
    const result = asArray(array);
    expect(result).not.toBe(array);
  });

  it('raw: true で配列をそのまま返す', () => {
    const array = [1, 2, 3];
    const result = asArray(array, { raw: true });
    expect(result).toBe(array);
  });

  it('文字列は配列で包む', () => {
    expect(asArray('hello')).toEqual(['hello']);
  });

  it('空文字列は配列で包む', () => {
    expect(asArray('')).toEqual(['']);
  });

  it('数値は配列で包む', () => {
    expect(asArray(42)).toEqual([42]);
  });

  it('オブジェクトは配列で包む', () => {
    const obj = { a: 1 };
    expect(asArray(obj)).toEqual([{ a: 1 }]);
  });

  it('Setは展開する', () => {
    const set = new Set([1, 2, 3]);
    expect(asArray(set)).toEqual([1, 2, 3]);
  });

  it('Mapは展開する', () => {
    const map = new Map([['a', 1]]);
    expect(asArray(map)).toEqual([['a', 1]]);
  });

  it('ジェネレーターは展開する', () => {
    function* gen() {
      yield 1;
      yield 2;
    }
    expect(asArray(gen())).toEqual([1, 2]);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const result = asArray.dataLast()([1, 2, 3]);
      expect(result).toEqual([1, 2, 3]);
    });

    it('null', () => {
      expect(asArray.dataLast()(null)).toEqual([]);
    });
  });
});
