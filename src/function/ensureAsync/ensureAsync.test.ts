import ensureAsync from './ensureAsync';

describe('ensureAsync', () => {
  it('同期関数をPromiseで返す', async () => {
    const fn = (a: number, b: number) => a + b;
    const result = await ensureAsync(fn, [1, 2]);
    expect(result).toBe(3);
  });

  it('非同期関数をそのまま返す', async () => {
    const fn = async (v: number) => v * 2;
    const result = await ensureAsync(fn, [5]);
    expect(result).toBe(10);
  });

  it('引数なしで実行する', async () => {
    const fn = () => 42;
    const result = await ensureAsync(fn);
    expect(result).toBe(42);
  });

  it('Promiseを返す', async () => {
    const fn = () => 'hello';
    const result = ensureAsync(fn);
    expect(result).toBeInstanceOf(Promise);
  });
});
