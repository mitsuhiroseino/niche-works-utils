import interpolateString from './interpolateString';

describe('interpolateString', () => {
  describe('initialValueなし（タイピングエフェクト）', () => {
    it('ratio=0 のとき空文字を返す', () => {
      expect(interpolateString('hello', 0)).toBe(undefined);
    });

    it('ratio=1 のとき全文字を返す', () => {
      expect(interpolateString('hello', 1)).toBe('hello');
    });

    it('ratio=0.5 のとき半分の文字を返す', () => {
      expect(interpolateString('hello', 0.5)).toBe('he');
    });

    it('ratio=0.4 のとき40%の文字を返す', () => {
      expect(interpolateString('hello', 0.4)).toBe('he');
    });
  });

  describe('initialValueあり（切り替えエフェクト）', () => {
    it('ratio=0 のとき initialValue を返す', () => {
      expect(interpolateString('world', 0, { initialValue: 'hello' })).toBe('hello');
    });

    it('ratio=1 のとき value を返す', () => {
      expect(interpolateString('world', 1, { initialValue: 'hello' })).toBe('world');
    });

    it('ratio=0.25 のとき initialValue の後半部分を返す（localRatio=0.5, floor(5*(1-0.5))=2）', () => {
      const result = interpolateString('world', 0.25, { initialValue: 'hello' });
      expect(result).toBe('he');
    });

    it('ratio=0.75 のとき value の前半部分を返す', () => {
      const result = interpolateString('world', 0.75, { initialValue: 'hello' });
      expect(result).toBe('wo');
    });
  });
});
