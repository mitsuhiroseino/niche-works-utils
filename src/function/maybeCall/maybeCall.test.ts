import maybeCall from './maybeCall';

describe('maybeCall', () => {
  it('関数がある場合は実行する', () => {
    const fn = (a: number, b: number) => a + b;
    expect(maybeCall(fn, 1, 2)).toBe(3);
  });

  it('nullの場合はundefinedを返す', () => {
    expect(maybeCall(null, 1, 2)).toBeUndefined();
  });

  it('undefinedの場合はundefinedを返す', () => {
    expect(maybeCall(undefined, 1, 2)).toBeUndefined();
  });

  it('引数なしで実行する', () => {
    const fn = () => 42;
    expect(maybeCall(fn)).toBe(42);
  });

  it('関数の戻り値を返す', () => {
    const fn = (v: string) => v.toUpperCase();
    expect(maybeCall(fn, 'hello')).toBe('HELLO');
  });
});
