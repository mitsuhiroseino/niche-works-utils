import maybeAssign from './maybeAssign';

describe('maybeAssign', () => {
  it('undefinedでない値のみ適用して新しいオブジェクトを返す', () => {
    const target = { a: 1, b: 2 };
    const result = maybeAssign(target, { a: 10, b: undefined });
    expect(result.a).toBe(10);
    expect(result.b).toBe(2);
    expect(result).not.toBe(target);
  });

  it('非破壊的でtargetは変更されない', () => {
    const target = { a: 1 };
    maybeAssign(target, { a: 99 });
    expect(target.a).toBe(1);
  });

  it('skipNull: trueでnullも除外する', () => {
    const result = maybeAssign({ a: 1 }, { a: null as any });
    expect(result.a).toBeNull();

    const result2 = maybeAssign({ a: 1 }, { a: null as any }, { skipNull: true });
    expect(result2.a).toBe(1);
  });

  it('targetがfalsyなら入力をそのまま返す', () => {
    const result = maybeAssign(null as any, { a: 1 });
    expect(result).toBeNull();
  });

  describe('dataLast', () => {
    it('基本動作', () => {
      const result = maybeAssign.dataLast({ a: 10, b: undefined })({ a: 1, b: 2 });
      expect(result.a).toBe(10);
      expect(result.b).toBe(2);
    });
  });
});
