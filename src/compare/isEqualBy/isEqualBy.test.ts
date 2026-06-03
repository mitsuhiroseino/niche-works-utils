import isEqualBy from './isEqualBy';

describe('isEqualBy', () => {
  describe('strict (デフォルト)', () => {
    it('厳密に等しい', () => {
      expect(isEqualBy(1, 1)).toBe(true);
    });

    it('型が異なる場合はfalse', () => {
      expect(isEqualBy(1, '1')).toBe(false);
    });

    it('nullとundefinedはfalse', () => {
      expect(isEqualBy(null, undefined)).toBe(false);
    });
  });

  describe('loose', () => {
    it('緩い比較', () => {
      expect(isEqualBy(1, '1', { compareMode: 'loose' })).toBe(true);
    });

    it('nullとundefinedはtrue', () => {
      expect(isEqualBy(null, undefined, { compareMode: 'loose' })).toBe(true);
    });
  });

  describe('deep', () => {
    it('オブジェクトの深い比較', () => {
      expect(isEqualBy({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }, { compareMode: 'deep' })).toBe(true);
    });

    it('配列の深い比較', () => {
      expect(isEqualBy([1, 2, 3], [1, 2, 3], { compareMode: 'deep' })).toBe(true);
    });

    it('参照が異なるが内容が同じオブジェクト', () => {
      const a = { x: 1 };
      const b = { x: 1 };
      expect(isEqualBy(a, b, { compareMode: 'deep' })).toBe(true);
    });

    it('内容が異なる場合はfalse', () => {
      expect(isEqualBy({ a: 1 }, { a: 2 }, { compareMode: 'deep' })).toBe(false);
    });
  });

  describe('customizer', () => {
    it('カスタム比較関数', () => {
      const customizer = (a: unknown, b: unknown) => {
        if (typeof a === 'string' && typeof b === 'string') {
          return a.toLowerCase() === b.toLowerCase();
        }
        return null;
      };
      expect(isEqualBy('Hello', 'hello', { customizer })).toBe(true);
    });

    it('customizerがundefinedを返した場合はデフォルトの厳密比較', () => {
      const customizer = () => undefined;
      expect(isEqualBy(1, 1, { customizer })).toBe(true);
      expect(isEqualBy(1, 2, { customizer })).toBe(false);
    });
  });

  describe('loose + customizer', () => {
    it('customizerがundefinedを返した場合は緩い比較にフォールバック', () => {
      expect(isEqualBy(1, '1', { compareMode: 'loose', customizer: () => undefined })).toBe(true);
    });

    it('customizerが値を返した場合はそれを使う', () => {
      expect(isEqualBy(1, '1', { compareMode: 'loose', customizer: () => false })).toBe(false);
    });
  });

  describe('deep + customizer', () => {
    it('customizerでネストされた値の比較をカスタマイズ', () => {
      const customizer = (a: unknown, b: unknown) => {
        if (typeof a === 'string' && typeof b === 'string') {
          return a.toLowerCase() === b.toLowerCase();
        }
        return undefined;
      };
      expect(isEqualBy({ a: 'Hello' }, { a: 'hello' }, { compareMode: 'deep', customizer })).toBe(true);
    });
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(isEqualBy.dataLast(1)(1)).toBe(true);
    });
  });
});
