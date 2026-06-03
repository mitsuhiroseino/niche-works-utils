import isAsyncIterable from './isAsyncIterable';

describe('isAsyncIterable', () => {
  it('非同期ジェネレーターはtrue', async () => {
    async function* gen() {
      yield 1;
    }
    expect(isAsyncIterable(gen())).toBe(true);
  });

  it('カスタム非同期イテレーターを持つオブジェクトはtrue', () => {
    const obj = {
      [Symbol.asyncIterator]: () => ({
        next: () => Promise.resolve({ done: true, value: undefined }),
      }),
    };
    expect(isAsyncIterable(obj)).toBe(true);
  });

  it('通常の配列はfalse', () => {
    expect(isAsyncIterable([1, 2, 3])).toBe(false);
  });

  it('nullはfalse', () => {
    expect(isAsyncIterable(null)).toBe(false);
  });

  it('undefinedはfalse', () => {
    expect(isAsyncIterable(undefined)).toBe(false);
  });

  it('数値はfalse', () => {
    expect(isAsyncIterable(42)).toBe(false);
  });
});
