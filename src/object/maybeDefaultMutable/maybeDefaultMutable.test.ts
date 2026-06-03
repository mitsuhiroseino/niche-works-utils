import maybeDefaultMutable from './maybeDefaultMutable';

describe('maybeDefaultMutable', () => {
  it('undefinedのプロパティにデフォルト値を設定する(破壊的)', () => {
    const target = { a: 1, b: undefined };
    const result = maybeDefaultMutable(target, { a: 99, b: 2 });
    expect(target.b).toBe(2);
    expect(target.a).toBe(1);
    expect(result).toBe(target);
  });

  it('overwriteNull: trueでnullにもデフォルト値を適用する', () => {
    const target = { a: null as any };
    maybeDefaultMutable(target, { a: 10 }, { overwriteNull: true });
    expect(target.a).toBe(10);
  });

  it('skipNull: trueでデフォルト値がnullのときはスキップする', () => {
    const target = { a: undefined };
    maybeDefaultMutable(target, { a: null as any }, { skipNull: true });
    expect(target.a).toBeUndefined();
  });

  it('targetがnullの場合はそのまま返す', () => {
    const result = maybeDefaultMutable(null as any, { a: 1 });
    expect(result).toBeNull();
  });

  it('overwriteNull: trueで既存のnullを上書きしない場合(非nullの既存値は維持)', () => {
    const target = { a: 'existing' as any };
    maybeDefaultMutable(target, { a: 10 }, { overwriteNull: true });
    expect(target.a).toBe('existing');
  });
});
