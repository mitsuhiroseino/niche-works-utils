import set from './set';

describe('set', () => {
  it('トップレベルのプロパティを設定して新しいオブジェクトを返す', () => {
    const obj = { a: 1 };
    const result = set(obj, 'a', 2);
    expect(result.a).toBe(2);
    expect(result).not.toBe(obj);
  });

  it('ネストしたパスにも設定できる', () => {
    const obj = { a: { b: 1 } };
    const result = set(obj, 'a.b', 99);
    expect(result.a.b).toBe(99);
    expect(result.a).not.toBe(obj.a);
  });

  it('パスを配列で指定できる', () => {
    const obj = { a: { b: 1 } };
    const result = set(obj, ['a', 'b'], 42);
    expect(result.a.b).toBe(42);
  });

  it('存在しないネストパスに中間オブジェクトを作成する', () => {
    const obj = {};
    const result = set(obj, 'a.b.c', 1) as any;
    expect(result.a.b.c).toBe(1);
  });

  it('配列のインデックスパスにも設定できる', () => {
    const obj = { arr: [1, 2, 3] };
    const result = set(obj, 'arr.1', 99);
    expect((result as any).arr[1]).toBe(99);
    expect((result as any).arr[0]).toBe(1);
  });

  it('数値キーで非配列のcurrentから配列を生成する', () => {
    const obj = {};
    const result = set(obj, [0], 'x') as any;
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toBe('x');
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const result = set.dataLast('a', 10)({ a: 1 });
      expect(result.a).toBe(10);
    });
  });
});
