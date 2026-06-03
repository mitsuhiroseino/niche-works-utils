import rangePingpong from './rangePingpong';

describe('rangePingpong', () => {
  it('範囲内の値はそのまま返す', () => {
    expect(rangePingpong(5, 0, 10)).toBe(5);
  });

  it('最小値ちょうど', () => {
    expect(rangePingpong(0, 0, 10)).toBe(0);
  });

  it('最大値ちょうど', () => {
    expect(rangePingpong(10, 0, 10)).toBe(10);
  });

  it('最大値+1は最大値-1に折り返す', () => {
    expect(rangePingpong(11, 0, 10)).toBe(9);
  });

  it('最大値+10は最小値に折り返す', () => {
    expect(rangePingpong(20, 0, 10)).toBe(0);
  });

  it('最小値-1は最小値+1に折り返す', () => {
    expect(rangePingpong(-1, 0, 10)).toBe(1);
  });

  it('rangeが0の場合は最小値を返す', () => {
    expect(rangePingpong(5, 3, 3)).toBe(3);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(rangePingpong.dataLast(0, 10)(5)).toBe(5);
    });
  });
});
