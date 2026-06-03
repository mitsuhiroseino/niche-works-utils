import omit from './omit';

describe('omit', () => {
  it('指定したキーを除外したオブジェクトを返す', () => {
    const result = omit({ a: 1, b: 2, c: 3 }, 'b');
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('複数のキーを配列で指定できる', () => {
    const result = omit({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(result).toEqual({ b: 2 });
  });

  it('ドットパス記法で複数のキーを指定できる', () => {
    const result = omit({ a: 1, b: 2, c: 3 }, 'a.b');
    expect(result).toEqual({ c: 3 });
  });

  it('nullを渡した場合はundefinedを返す', () => {
    expect(omit(null, 'a')).toBeUndefined();
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const result = omit.dataLast('b')({ a: 1, b: 2 });
      expect(result).toEqual({ a: 1 });
    });
  });
});
