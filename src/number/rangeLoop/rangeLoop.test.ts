import rangeLoop from './rangeLoop';

describe('rangeLoop', () => {
  it('範囲内の値はそのまま返す', () => {
    expect(rangeLoop(5, 0, 10)).toBe(5);
  });

  it('最小値ちょうど', () => {
    expect(rangeLoop(0, 0, 10)).toBe(0);
  });

  it('最大値ちょうど', () => {
    expect(rangeLoop(10, 0, 10)).toBe(10);
  });

  it('最大値を超えるとループする', () => {
    expect(rangeLoop(11, 0, 10)).toBe(1);
  });

  it('最大値の2倍-1はmax-1に戻る', () => {
    expect(rangeLoop(19, 0, 10)).toBe(9);
  });

  it('最小値より小さい場合は後ろからループする', () => {
    expect(rangeLoop(-1, 0, 10)).toBe(9);
  });

  it('rangeが0の場合は最小値を返す', () => {
    expect(rangeLoop(5, 3, 3)).toBe(3);
  });

  it('範囲が1から始まる場合（range=2, rem=3%2=1, result=1+1=2）', () => {
    expect(rangeLoop(4, 1, 3)).toBe(2);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(rangeLoop.dataLast(0, 10)(5)).toBe(5);
    });
  });
});
