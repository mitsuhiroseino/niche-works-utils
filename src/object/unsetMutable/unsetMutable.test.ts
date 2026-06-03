import unsetMutable from './unsetMutable';

describe('unsetMutable', () => {
  it('オブジェクトのキーを破壊的に削除する', () => {
    const obj: Record<string, unknown> = { a: 1, b: 2 };
    const result = unsetMutable(obj, 'a');
    expect(obj['a']).toBeUndefined();
    expect(result).toBe(obj);
  });

  it('ネストしたパスのキーも削除できる', () => {
    const obj = { a: { b: 1, c: 2 } };
    unsetMutable(obj, 'a.b');
    expect(obj.a).toEqual({ c: 2 });
  });

  it('配列の要素をspliceで削除する', () => {
    const obj = { arr: [1, 2, 3] };
    unsetMutable(obj, 'arr.1');
    expect(obj.arr).toEqual([1, 3]);
  });

  it('存在しないパスは何も変えない', () => {
    const obj = { a: 1 };
    unsetMutable(obj, 'b');
    expect(obj).toEqual({ a: 1 });
  });

  it('配列のカスタムプロパティをdeleteで削除する', () => {
    const arr: any[] = [1, 2, 3];
    (arr as any)['foo'] = 'bar';
    unsetMutable({ arr } as any, ['arr', 'foo']);
    expect((arr as any)['foo']).toBeUndefined();
    expect(arr.length).toBe(3);
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const obj: Record<string, unknown> = { a: 1, b: 2 };
      unsetMutable.dataLast('a')(obj);
      expect(obj['a']).toBeUndefined();
    });
  });
});
