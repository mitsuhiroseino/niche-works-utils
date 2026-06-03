import setMutable from './setMutable';

describe('setMutable', () => {
  it('トップレベルのプロパティを設定する', () => {
    const obj = { a: 1 };
    setMutable(obj, 'a', 2);
    expect(obj.a).toBe(2);
  });

  it('ネストしたプロパティをパスで設定する', () => {
    const obj = { a: { b: 1 } };
    setMutable(obj, 'a.b', 42);
    expect(obj.a.b).toBe(42);
  });

  it('パスを配列で指定する', () => {
    const obj: any = { a: {} };
    setMutable(obj, ['a', 'b'], 99);
    expect(obj.a.b).toBe(99);
  });

  it('存在しないネストパスに中間オブジェクトを作成する', () => {
    const obj: any = {};
    setMutable(obj, 'a.b.c', 1);
    expect(obj.a.b.c).toBe(1);
  });

  it('同じオブジェクト参照を返す', () => {
    const obj = { a: 1 };
    const result = setMutable(obj, 'a', 2);
    expect(result).toBe(obj);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const obj = { a: 1 };
      setMutable.dataLast('a', 2)(obj);
      expect(obj.a).toBe(2);
    });
  });
});
