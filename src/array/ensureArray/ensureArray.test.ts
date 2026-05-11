import ensureArray from './ensureArray';

describe('ensureArray', () => {
  it('null', () => {
    const result = ensureArray(null);
    expect(result).toEqual([]);
  });

  it('undefined', () => {
    const result = ensureArray(undefined);
    expect(result).toEqual([]);
  });

  it('空文字', () => {
    const result = ensureArray('');
    expect(result).toEqual(['']);
  });

  it('0', () => {
    const result = ensureArray(0);
    expect(result).toEqual([0]);
  });

  it('false', () => {
    const result = ensureArray(false);
    expect(result).toEqual([false]);
  });

  it('空配列', () => {
    const array: unknown[] = [];
    const result = ensureArray(array);
    expect(result).not.toBe(array);
    expect(result).toEqual(array);
  });

  it('配列', () => {
    const array = [0, 1, 2];
    const result = ensureArray(array);
    expect(result).not.toBe(array);
    expect(result).toEqual(array);
  });
});
