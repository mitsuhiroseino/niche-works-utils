import get from './get';

describe('get', () => {
  it('トップレベルのプロパティを取得する', () => {
    expect(get({ a: 1 }, 'a')).toBe(1);
  });

  it('ネストしたプロパティをパスで取得する', () => {
    expect(get({ a: { b: { c: 42 } } }, 'a.b.c')).toBe(42);
  });

  it('パスを配列で指定する', () => {
    expect(get({ a: { b: 1 } }, ['a', 'b'])).toBe(1);
  });

  it('存在しないパスはundefinedを返す', () => {
    expect(get({ a: 1 }, 'b')).toBeUndefined();
  });

  it('nullを渡した場合はundefinedを返す', () => {
    expect(get(null, 'a')).toBeUndefined();
  });

  it('undefinedを渡した場合はundefinedを返す', () => {
    expect(get(undefined, 'a')).toBeUndefined();
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      expect(get.dataLast('a')({ a: 1 })).toBe(1);
    });

    it('ネストしたパス', () => {
      expect(get.dataLast('a.b')({ a: { b: 42 } })).toBe(42);
    });
  });
});
