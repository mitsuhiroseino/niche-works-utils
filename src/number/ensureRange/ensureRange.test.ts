import ensureRange from './ensureRange';

describe('ensureRange', () => {
  it('範囲内の値はそのまま返す', () => {
    expect(ensureRange(5, 0, 10)).toBe(5);
  });

  describe('mode: clamp (デフォルト)', () => {
    it('最小値より小さい場合は最小値を返す', () => {
      expect(ensureRange(-1, 0, 10)).toBe(0);
    });

    it('最大値より大きい場合は最大値を返す', () => {
      expect(ensureRange(11, 0, 10)).toBe(10);
    });
  });

  describe('mode: loop', () => {
    it('最大値を超えるとループする', () => {
      expect(ensureRange(11, 0, 10, { mode: 'loop' })).toBe(1);
    });

    it('最小値より小さい場合は後ろからループする', () => {
      expect(ensureRange(-1, 0, 10, { mode: 'loop' })).toBe(9);
    });
  });

  describe('mode: pingpong', () => {
    it('最大値+1は折り返す', () => {
      expect(ensureRange(11, 0, 10, { mode: 'pingpong' })).toBe(9);
    });
  });

  describe('mode: min', () => {
    it('範囲外は最小値を返す', () => {
      expect(ensureRange(15, 0, 10, { mode: 'min' })).toBe(0);
      expect(ensureRange(-1, 0, 10, { mode: 'min' })).toBe(0);
    });
  });

  describe('mode: max', () => {
    it('範囲外は最大値を返す', () => {
      expect(ensureRange(15, 0, 10, { mode: 'max' })).toBe(10);
      expect(ensureRange(-1, 0, 10, { mode: 'max' })).toBe(10);
    });
  });

  describe('mode: default', () => {
    it('範囲外はデフォルト値を返す', () => {
      expect(ensureRange(15, 0, 10, { mode: 'default', defaultValue: -1 })).toBe(-1);
    });
  });

  describe('minMode/maxMode', () => {
    it('最小値未満はloop、最大値超過はclamp', () => {
      expect(ensureRange(-1, 0, 10, { minMode: 'loop', maxMode: 'clamp' })).toBe(9);
      expect(ensureRange(11, 0, 10, { minMode: 'loop', maxMode: 'clamp' })).toBe(10);
    });
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(ensureRange.dataLast(0, 10)(5)).toBe(5);
    });
  });
});
