import updateMutable from './updateMutable';

describe('updateMutable', () => {
  it('変更されたキーのみ破壊的に更新して以前の値を返す', () => {
    const obj = { a: 1, b: 2 };
    const oldValues = updateMutable(obj, { a: 10 });
    expect(obj.a).toBe(10);
    expect(oldValues).toEqual({ a: 1 });
  });

  it('値が同じキーは更新しない', () => {
    const obj = { a: 1, b: 2 };
    const oldValues = updateMutable(obj, { a: 1 });
    expect(oldValues).toEqual({});
  });

  it('objectがnullの場合は空オブジェクトを返す', () => {
    expect(updateMutable(null, { a: 1 })).toEqual({});
  });

  it('valuesがnullの場合は空オブジェクトを返す', () => {
    expect(updateMutable({ a: 1 }, null)).toEqual({});
  });

  it('継承プロパティは更新対象にならない', () => {
    const obj = { a: 1, b: 2 };
    const parentValues = { a: 99 };
    const childValues = Object.create(parentValues) as Partial<typeof obj>;
    childValues['b'] = 20;
    const oldValues = updateMutable(obj, childValues);
    expect(obj.a).toBe(1);
    expect(obj.b).toBe(20);
    expect(oldValues).toEqual({ b: 2 });
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const obj = { a: 1, b: 2 };
      const result = updateMutable.dataLast({ a: 10 })(obj);
      expect(obj.a).toBe(10);
      expect(result).toEqual({ a: 1 });
    });
  });
});
