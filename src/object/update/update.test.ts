import update from './update';

describe('update', () => {
  it('変更されたキーの以前の値を返す', () => {
    const obj = { a: 1, b: 2 };
    const oldValues = update(obj, { a: 10 });
    expect(oldValues).toEqual({ a: 1 });
  });

  it('変更がなかったキーはoldValuesに含まれない', () => {
    const obj = { a: 1, b: 2 };
    const oldValues = update(obj, { a: 1, b: 99 });
    expect(oldValues).toEqual({ b: 2 });
  });

  it('非破壊的でobjectは変更されない', () => {
    const obj = { a: 1 };
    update(obj, { a: 99 });
    expect(obj.a).toBe(1);
  });

  it('objectがnullの場合は空オブジェクトを返す', () => {
    expect(update(null as any, { a: 1 })).toEqual({});
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const result = update.dataLast({ a: 10 })({ a: 1, b: 2 });
      expect(result).toEqual({ a: 1 });
    });
  });
});
