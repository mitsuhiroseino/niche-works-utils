import rangeMax from './rangeMax';

describe('rangeMax', () => {
  it('範囲内の値はそのまま返す', () => {
    expect(rangeMax(5, 0, 10)).toBe(5);
  });

  it('最小値より小さい場合は最大値を返す', () => {
    expect(rangeMax(-1, 0, 10)).toBe(10);
  });

  it('最大値より大きい場合は最大値を返す', () => {
    expect(rangeMax(15, 0, 10)).toBe(10);
  });

  it('最小値ちょうど', () => {
    expect(rangeMax(0, 0, 10)).toBe(0);
  });

  it('最大値ちょうど', () => {
    expect(rangeMax(10, 0, 10)).toBe(10);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(rangeMax.dataLast(0, 10)(5)).toBe(5);
    });
  });
});
