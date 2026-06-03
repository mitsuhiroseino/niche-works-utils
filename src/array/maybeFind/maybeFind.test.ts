import maybeFind from './maybeFind';

describe('maybeFind', () => {
  it('条件にマッチする最初の値を返す', () => {
    const result = maybeFind([1, 2, 3, 4], (v) => v > 2);
    expect(result).toBe(3);
  });

  it('マッチする値がない場合はundefinedを返す', () => {
    const result = maybeFind([1, 2, 3], (v) => v > 10);
    expect(result).toBeUndefined();
  });

  it('空配列', () => {
    expect(maybeFind([], () => true)).toBeUndefined();
  });

  it('null', () => {
    expect(maybeFind(null, () => true)).toBeUndefined();
  });

  it('undefined', () => {
    expect(maybeFind(undefined, () => true)).toBeUndefined();
  });

  it('最初にマッチした値のみ返す', () => {
    const result = maybeFind([1, 2, 3], (v) => v % 2 === 0);
    expect(result).toBe(2);
  });

  describe('dataLast', () => {
    it('条件にマッチする最初の値を返す', () => {
      const result = maybeFind.dataLast((v: number) => v > 2)([1, 2, 3, 4]);
      expect(result).toBe(3);
    });
  });
});
