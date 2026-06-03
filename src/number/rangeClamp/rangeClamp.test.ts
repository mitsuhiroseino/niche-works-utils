import rangeClamp from './rangeClamp';

describe('rangeClamp', () => {
  it('範囲内の値はそのまま返す', () => {
    expect(rangeClamp(5, 0, 10)).toBe(5);
  });

  it('最小値ちょうど', () => {
    expect(rangeClamp(0, 0, 10)).toBe(0);
  });

  it('最大値ちょうど', () => {
    expect(rangeClamp(10, 0, 10)).toBe(10);
  });

  it('最小値より小さい場合は最小値を返す', () => {
    expect(rangeClamp(-5, 0, 10)).toBe(0);
  });

  it('最大値より大きい場合は最大値を返す', () => {
    expect(rangeClamp(15, 0, 10)).toBe(10);
  });

  it('小数点', () => {
    expect(rangeClamp(1.5, 0, 1)).toBe(1);
  });

  it('負の範囲', () => {
    expect(rangeClamp(-5, -10, 0)).toBe(-5);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(rangeClamp.dataLast(0, 10)(5)).toBe(5);
    });
  });
});
