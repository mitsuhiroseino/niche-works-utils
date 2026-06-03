import sleep from './sleep';

describe('sleep', () => {
  it('指定時間後にresolveする', async () => {
    const start = Date.now();
    await sleep(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(40);
  });

  it('Promiseを返す', () => {
    const result = sleep(0);
    expect(result).toBeInstanceOf(Promise);
  });

  it('0ms でも動作する', async () => {
    await expect(sleep(0)).resolves.toBeUndefined();
  });
});
