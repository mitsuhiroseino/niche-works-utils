import rangeMin from './rangeMin';

describe('rangeMin', () => {
  it('範囲内の値はそのまま返す', () => {
    expect(rangeMin(5, 0, 10)).toBe(5);
  });

  it('最小値より小さい場合は最小値を返す', () => {
    expect(rangeMin(-1, 0, 10)).toBe(0);
  });

  it('最大値より大きい場合は最小値を返す', () => {
    expect(rangeMin(15, 0, 10)).toBe(0);
  });

  it('最小値ちょうど', () => {
    expect(rangeMin(0, 0, 10)).toBe(0);
  });

  it('最大値ちょうど', () => {
    expect(rangeMin(10, 0, 10)).toBe(10);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(rangeMin.dataLast(0, 10)(5)).toBe(5);
    });
  });
});
